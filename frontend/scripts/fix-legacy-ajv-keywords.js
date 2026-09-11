// Several webpack loaders/plugins (fork-ts-checker-webpack-plugin, babel-loader,
// file-loader, ...) bundle an old schema-utils@2 + ajv-keywords@3 pair with no
// nested `ajv` of their own. This project's top-level ajv is pinned to v8 (see
// package.json "overrides", needed by schema-utils@4/ajv-keywords@5 elsewhere
// in the tree), so Node's require() walk-up hands these old copies an ajv v8
// instance. ajv-keywords@3 then reads `ajv._formats`, a v6-only internal
// property, and crashes at import/compile time ("Cannot read properties of
// undefined (reading 'date')"). Give every such package its own private ajv@6
// (+ its own deps) so it never reaches the top-level v8 one.
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..", "node_modules");

function findOffendingDirs(dir, depth, results) {
  if (depth > 4 || !fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name === "ajv-keywords") {
      const pkgPath = path.join(full, "package.json");
      if (fs.existsSync(pkgPath)) {
        const version = JSON.parse(fs.readFileSync(pkgPath, "utf8")).version;
        if (version.startsWith("3.")) {
          const parentNodeModules = dir; // .../<package>/node_modules
          const ownAjv = path.join(parentNodeModules, "ajv", "package.json");
          const needsFix =
            !fs.existsSync(ownAjv) ||
            !JSON.parse(fs.readFileSync(ownAjv, "utf8")).version.startsWith("6.");
          if (needsFix) results.push(parentNodeModules);
        }
      }
      continue; // don't recurse into ajv-keywords itself
    }
    if (entry.name === "node_modules") {
      findOffendingDirs(full, depth + 1, results);
    } else {
      findOffendingDirs(path.join(full, "node_modules"), depth + 1, results);
    }
  }
  return results;
}

const offending = findOffendingDirs(root, 0, []);

if (offending.length === 0) {
  process.exit(0);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ajv6-"));
execSync("npm install ajv@6.12.6 --no-save --no-audit --no-fund", { cwd: tmp, stdio: "ignore" });
const tmpNodeModules = path.join(tmp, "node_modules");
const ajv6Packages = fs.readdirSync(tmpNodeModules);

for (const destDir of offending) {
  for (const name of ajv6Packages) {
    fs.rmSync(path.join(destDir, name), { recursive: true, force: true });
    fs.cpSync(path.join(tmpNodeModules, name), path.join(destDir, name), { recursive: true });
  }
  console.log(`[fix-fork-ts-checker-ajv] Nested ajv@6 installed for ${path.relative(root, destDir)}`);
}

fs.rmSync(tmp, { recursive: true, force: true });
