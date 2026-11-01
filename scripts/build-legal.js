#!/usr/bin/env node
/**
 * Yasal sayfaların statik sürümlerini üretir.
 *
 * Mobil uygulama vetozone.com.tr/gizlilik adresini doğrudan açıyor, ama o
 * alan adında şu an React sitesi değil "çok yakında" sayfası duruyor. Bu
 * script aynı metinden (frontend/src/data/legal.json) duran sayfalar üretip
 * holding paketinin içine koyar; böylece adres site yayına girmeden önce de
 * çalışır ve metin iki yerde ayrı ayrı tutulmaz.
 *
 * Çıktı klasör biçiminde (gizlilik/index.html): Apache var olan dizini
 * index.html'e yönlendirmiyor, doğrudan servis ediyor — tek sayfa
 * uygulamanın yakalama kuralına takılmadan 200 dönüyor.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "frontend", "src", "data", "legal.json");
const OUT = path.join(ROOT, "landing-dist");
const LANG = "tr";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// **vurgu** → <strong>. Önce kaçış, sonra işaret: metindeki < > zararsızlaşır.
const rich = (s) =>
  esc(s)
    .split("**")
    .map((part, i) => (i % 2 ? `<strong>${part}</strong>` : part))
    .join("");

function renderBlock(b) {
  switch (b.type) {
    case "h2":
      return `<h2>${esc(b.text)}</h2>`;
    case "h3":
      return `<h3>${esc(b.text)}</h3>`;
    case "p":
      return `<p>${rich(b.text)}</p>`;
    case "lines":
      return `<p>${b.items.map(rich).join("<br />")}</p>`;
    case "ul":
      return `<ul>${b.items.map((i) => `<li>${rich(i)}</li>`).join("")}</ul>`;
    case "note":
      return `<p class="note">${rich(b.text)}</p>`;
    case "table":
      return (
        `<div class="table-wrap"><table><thead><tr>` +
        b.head.map((h) => `<th>${esc(h)}</th>`).join("") +
        `</tr></thead><tbody>` +
        b.rows
          .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
          .join("") +
        `</tbody></table></div>`
      );
    case "button":
      return `<p><a class="btn" href="${esc(b.href)}">${esc(b.label)}</a></p>`;
    default:
      return "";
  }
}

const page = (doc) => `<!doctype html>
<html lang="${LANG}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(doc.title)}</title>
    <meta name="description" content="${esc(doc.heading)}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <style>
      :root {
        --brand: #2a6aa6;
        --ink: #11253a;
        --muted: #55697c;
        --paper: #ffffff;
        --paper-2: #f3f6f9;
      }
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        background: var(--paper);
        color: var(--ink);
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif;
        font-synthesis: none;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
      }
      header {
        background: var(--ink);
        padding: 28px 16px 44px;
      }
      .wrap { max-width: 720px; margin: 0 auto; }
      header .wrap > a { display: inline-block; }
      .logo { width: 150px; height: auto; display: block; }
      h1 {
        margin: 26px 0 0;
        color: #fff;
        font-size: clamp(1.6rem, 5vw, 2.3rem);
        line-height: 1.2;
        letter-spacing: -0.02em;
      }
      main { padding: 8px 16px 64px; }
      h2 {
        margin: 42px 0 0;
        font-size: 1.22rem;
        letter-spacing: -0.01em;
      }
      h3 { margin: 26px 0 0; font-size: 1rem; }
      p { margin: 14px 0 0; color: var(--muted); }
      ul { margin: 14px 0 0; padding-left: 1.1rem; color: var(--muted); }
      li { margin-top: 7px; }
      li::marker { color: var(--brand); }
      strong { color: var(--ink); }
      .note {
        margin-top: 22px;
        border-left: 3px solid var(--brand);
        padding-left: 18px;
        color: var(--ink);
      }
      .table-wrap { margin-top: 18px; overflow-x: auto; }
      table { border-collapse: collapse; width: 100%; min-width: 420px; font-size: 0.94rem; }
      th, td { border-bottom: 1px solid rgba(17, 37, 58, 0.12); padding: 11px 14px; text-align: left; vertical-align: top; }
      th { background: var(--paper-2); }
      td { color: var(--muted); }
      .btn {
        display: inline-block;
        margin-top: 8px;
        background: var(--brand);
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        padding: 13px 26px;
        border-radius: 999px;
      }
      footer {
        border-top: 1px solid rgba(17, 37, 58, 0.12);
        padding: 22px 16px 40px;
        font-size: 0.86rem;
      }
      footer .wrap { display: flex; flex-wrap: wrap; gap: 8px 18px; color: var(--muted); }
      footer a { color: var(--brand); }
    </style>
  </head>
  <body>
    <header>
      <div class="wrap">
        <a href="/"><img class="logo" src="/vetozone-logo-white.png" alt="Vetozone" width="875" height="212" /></a>
        <h1>${esc(doc.heading)}</h1>
      </div>
    </header>

    <main>
      <div class="wrap">
${doc.blocks.map((b) => "        " + renderBlock(b)).join("\n")}
      </div>
    </main>

    <footer>
      <div class="wrap">
        <span>© ${new Date().getFullYear()} Vetozone · Has Medical</span>
        <a href="/gizlilik/">Gizlilik Politikası</a>
        <a href="/hesap-silme/">Hesap Silme</a>
        <a href="mailto:info@vetozone.com.tr">info@vetozone.com.tr</a>
      </div>
    </footer>
  </body>
</html>
`;

const legal = JSON.parse(fs.readFileSync(DATA, "utf8"));
for (const key of Object.keys(legal)) {
  if (key.startsWith("_")) continue;
  const dir = path.join(OUT, key);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(legal[key][LANG]));
  console.log(`${key}/index.html`);
}
