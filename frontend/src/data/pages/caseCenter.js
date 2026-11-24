// "İyileşen Hastalar" sayfası.
//
// Vakalar ve fotoğraflar Vetozone 2024 tanıtım broşürünün 4., 5. ve 6.
// sayfalarından alınmıştır; metinler kliniklerin broşürdeki anlatımıdır,
// özetlenmemiş ve klinik iddia eklenmemiştir. Fotoğraflar broşür sayfaları
// 400 DPI basılıp oradaki kırpmalarla kesildi (scripts/build-case-photos.py),
// çünkü broşürdeki bazı kareler Instagram ekran görüntüsünden kırpılmıştı.

const BASE = process.env.PUBLIC_URL || "";
const img = (name) => `${BASE}/vakalar/${name}.jpg`;

export const CASE_CENTER_CONTENT = {
  tr: {
    hero: {
      overline: "İyileşen Hastalar",
      title: "Klinik vakalar ve tedavi sonuçları.",
      sub: "Vetozone kullanan kliniklerin paylaştığı vakalar, hekimlerin kendi anlatımıyla.",
    },
    note:
      "Vakalar ve görseller ilgili kliniklerin izniyle paylaşılmıştır. Her hastanın yanıtı farklıdır; buradaki sonuçlar tedavi vaadi değildir.",
    cases: [
      {
        slug: "eklem-omur-hasarlari",
        category: "Eklem ve Omur Hasarları",
        clinic: "Ege Petpark Hayvan Hastanesi",
        patient: "Herkül",
        text:
          "Arka ayakları felçli ve idrar dışkı fonksiyonları çalışmaz halde bize başvuran Herkül'ün nörolojik muayenesi yapıldıktan sonra MRI sonuçlarında 3 farklı bel omurunda ciddi fıtıklaşma tespit edildi. Sağ diz eklemindeki tüm bağları da hasar görmüştü. Hemen derialtı ozon terapi ve fizyoterapi kürü başlandı. Fizyoterapi ve ozon terapi süreçlerinin ardından sağ dizini sağlıklı basması sağlandı. Bu tedavide ozon gazı, artritik koşulları iyileştirmek için homeopatik ve diğer iyileştirici maddelerin bir kombinasyonunda birleştirildi; ayrıca ozon gazı ağrıyı giderme özelliğiyle beraber tendonların, bağların ve diğer yumuşak doku ve kemik patolojilerinin iyileşmesi için hat boyunca hareket ederek çalıştı. Herkül ayağa kalkıp koşmaya bile başladı.",
        photos: [
          { src: img("herkul-1"), alt: "Herkül tedavi öncesinde evde" },
          { src: img("herkul-2"), alt: "Herkül tedavi sonrası kendi başına yürürken" },
          { src: img("herkul-3"), alt: "Herkül koridorda yürürken" },
        ],
      },
      {
        slug: "acik-yara-tedavisi",
        category: "Açık Yara Tedavisi",
        clinic: "Urlavet Hayvan Hastanesi",
        text:
          "Postoperatif süreçte hastanın dikişleri yalaması ile açılan enfekte yara, bubble yöntemiyle ozonlanmış serum fizyolojik su ile günde 2 kez temizlenip ozonlu kremle desteklendi. Görseller sürecin başı ve 1 haftalık sonucudur.",
        photos: [
          { src: img("yara-1"), alt: "Enfekte açık yaranın tedavi öncesi hâli" },
          { src: img("yara-2"), alt: "Ozon uygulamaları sırasında kapanmaya başlayan yara" },
          { src: img("yara-3"), alt: "Bir haftalık tedavi sonunda kapanan yara" },
        ],
      },
      {
        slug: "parvoviral-enterit",
        category: "Bakteriyel ve Viral Enfeksiyonlar",
        clinic: "VetPlus Veteriner Kliniği",
        patient: "Luna",
        text:
          "Luna iştahsızlık ve halsizlik şikayeti ile kliniğimize geldiğinde yaptığımız muayeneler ve testler sonucunda Parvoviral Enterit (kanlı ishal) teşhisi konuldu. Bir haftalık yoğun medikal tedavi ve ozon terapi (majör otohemoterapi ve rektal uygulama) ile iyileşti aşısız minik savaşçımız Luna! Tedavimizde herhangi bir immunomodülatör kullanılmamıştır.",
        photos: [
          { src: img("luna-1"), alt: "Pozitif çıkan parvovirüs (CPV Ag) hızlı testi" },
          { src: img("luna-2"), alt: "Luna tedavi sırasında serum takılıyken" },
          { src: img("luna-3"), alt: "Luna iyileştikten sonra ayakta" },
        ],
      },
      {
        slug: "tumor-sagaltimi",
        category: "Tümör Sağaltımı",
        clinic: "Hayat Veteriner Kliniği — Manisa",
        text:
          "Birçok kanser hücresinin hipoksik hücre olduğu bilimsel olarak kanıtlanmıştır. Ozon, süper şarj edilmiş oksijen molekülü olması kaynaklı dokuların oksijenlenmesini en ideal şekilde sağlamaktadır. Onkoloji hastalarında ozon, kemoterapiye destek olarak ve dokunun oksijenlenmesini sağlayarak tümör hücrelerinin küçülmesini ve/veya kapsüllenmesini sağlayarak operasyon kolaylığı sağlamaktadır.",
        photos: [
          { src: img("tumor-1"), alt: "Kitleye ozon uygulaması" },
          { src: img("tumor-2"), alt: "Uygulama öncesi kitlenin görünümü" },
          { src: img("tumor-3"), alt: "Hekim ozon uygulamasını yaparken" },
          { src: img("tumor-4"), alt: "Kitlenin ölçülmesi" },
          { src: img("tumor-5"), alt: "Seanslar sonunda küçülen kitle" },
          { src: img("tumor-6"), alt: "Kitleye enjeksiyon uygulaması" },
        ],
      },
      {
        slug: "corona-ve-giardia",
        category: "Bakteriyel ve Viral Enfeksiyonlar",
        clinic: "VetPlus Veteriner Kliniği",
        patient: "Arex",
        text:
          "Arex'e ishal, iştahsızlık ve halsizlik şikayetleri sonucu yapılan muayene ve testler sonrasında Corona ve Giardia teşhisi konuldu. Aşısız olan Arex'e 5 günlük medikal tedavi ve ozonlanmış serum uygulaması yapılarak eski sağlığına kavuşturuldu. Tedavimizde herhangi bir immunomodülatör kullanılmamıştır.",
        photos: [
          { src: img("arex-1"), alt: "Corona ve Giardia hızlı test sonucu" },
          { src: img("arex-2"), alt: "Arex tedavi sırasında" },
          { src: img("arex-3"), alt: "Ozon jeneratöründe 20 µg/ml doz ayarı" },
          { src: img("arex-4"), alt: "Test panelinin yakın görüntüsü" },
        ],
      },
      {
        slug: "eklem-rahatsizliklari",
        category: "Eklem Rahatsızlıkları",
        clinic: "Urlavet Hayvan Hastanesi",
        patient: "Efe",
        text:
          "2022 Aralık ayında arka ayakları tutmamaya başlayan Efe 1 ay boyunca sürekli steroid kullanmış ve bize geldiğinde havluyla desteklenerek yürüyordu. Şiddetli spondilitler ve osteoartritler MR ve radyolojik muayeneyle tespit edildi. Arka ayaklarında sürtmelerden dolayı yaralar oluşmaya başlamıştı. Önce 2 ay boyunca haftada 3 kez omurga boyunca ozon uygulamaları, osteoartritli eklemlerde periosta ozon enjeksiyonları, bazı seanslarda rektal olarak ozon uygulamaları ve seanslarda da akupunktur noktalarına ozon uygulamaları yapıldı. Mart ayında propriosepsiyonlar her iki bacakta da normal ve yaralar geçmişti. Kendi kendine ayağa kalkabilmeye başladı. Efe şu an desteksiz yürüyor ve ozon uygulamalarına da ayda 2 kez olmak üzere devam ediyoruz.",
        photos: [
          { src: img("efe-1"), alt: "Efe'nin omurga radyografisi" },
          { src: img("efe-2"), alt: "Efe'ye omurga boyunca ozon uygulanırken" },
        ],
      },
      {
        slug: "dermatolojik-hastaliklar",
        category: "Dermatolojik Hastalıklar",
        clinic: "Hayat Veteriner Kliniği — Manisa",
        patient: "Neko",
        text:
          "Neko'nun sebebi bilinmeyen dermatolojik hastalığı için hasta yakınının başvurduğu Manisa Hayat Veteriner Kliniği'nde ozon torbalama yöntemiyle tedavisine başlandı. Kültür ekimi sonucunda mantar hastalığı tespit edilen Neko'da sadece birkaç gün içinde kaşınmaları bitti ve deri yenilenmeye başladı. Tedavisine ek olarak yaklaşık iki aylık süre sonunda, tamamen doğal bir tedavi yöntemi olan ozon gazı ile optimum deri sağlığına kavuştu Neko.",
        photos: [
          { src: img("neko-1"), alt: "Neko'nun tedavi öncesi deri lezyonları" },
          { src: img("neko-2"), alt: "Neko'ya ozon torbalama uygulanırken" },
          { src: img("neko-3"), alt: "Neko tedavi sonrası, tüyleri çıkmış hâlde" },
        ],
      },
    ],
  },

  en: {
    hero: {
      overline: "Recovered Patients",
      title: "Clinical cases and treatment outcomes.",
      sub: "Cases shared by the clinics that use Vetozone, in the veterinarians' own words.",
    },
    note:
      "Cases and images are shared with the permission of the clinics concerned. Every patient responds differently; these outcomes are not a promise of treatment.",
    cases: [
      {
        slug: "eklem-omur-hasarlari",
        category: "Joint and Spinal Injury",
        clinic: "Ege Petpark Animal Hospital",
        patient: "Herkül",
        text:
          "Herkül came to us with his hind legs paralysed and no urinary or faecal function. After a neurological examination, MRI showed severe herniation at three separate lumbar vertebrae, and all the ligaments of his right stifle were damaged as well. A course of subcutaneous ozone therapy and physiotherapy was started immediately. After the physiotherapy and ozone therapy, he was able to bear weight normally on the right stifle. In this treatment the ozone gas was combined with homeopathic and other healing substances to improve the arthritic conditions; alongside its analgesic effect, the ozone gas also worked along the line to heal the tendons, ligaments and other soft tissue and bone pathologies. Herkül got back on his feet and even began to run.",
        photos: [
          { src: img("herkul-1"), alt: "Herkül at home before treatment" },
          { src: img("herkul-2"), alt: "Herkül walking unaided after treatment" },
          { src: img("herkul-3"), alt: "Herkül walking down the corridor" },
        ],
      },
      {
        slug: "acik-yara-tedavisi",
        category: "Open Wound Treatment",
        clinic: "Urlavet Animal Hospital",
        text:
          "An infected wound that opened post-operatively when the patient licked the sutures was cleaned twice a day with ozonated saline using the bubble method and supported with ozonated cream. The images show the start of the process and the result after one week.",
        photos: [
          { src: img("yara-1"), alt: "The infected open wound before treatment" },
          { src: img("yara-2"), alt: "The wound beginning to close during ozone treatment" },
          { src: img("yara-3"), alt: "The wound closed after a week of treatment" },
        ],
      },
      {
        slug: "parvoviral-enterit",
        category: "Bacterial and Viral Infections",
        clinic: "VetPlus Veterinary Clinic",
        patient: "Luna",
        text:
          "When Luna came to our clinic with loss of appetite and lethargy, our examinations and tests led to a diagnosis of parvoviral enteritis (haemorrhagic diarrhoea). Our unvaccinated little fighter Luna recovered with a week of intensive medical treatment and ozone therapy (major autohaemotherapy and rectal application). No immunomodulator of any kind was used in her treatment.",
        photos: [
          { src: img("luna-1"), alt: "Positive parvovirus (CPV Ag) rapid test" },
          { src: img("luna-2"), alt: "Luna on a drip during treatment" },
          { src: img("luna-3"), alt: "Luna on her feet after recovering" },
        ],
      },
      {
        slug: "tumor-sagaltimi",
        category: "Tumour Treatment",
        clinic: "Hayat Veterinary Clinic — Manisa",
        text:
          "It has been scientifically established that many cancer cells are hypoxic. Because ozone is a supercharged oxygen molecule, it oxygenates tissue in the most effective way. In oncology patients, ozone supports chemotherapy and, by oxygenating the tissue, helps tumour cells to shrink and/or become encapsulated, which makes surgery easier.",
        photos: [
          { src: img("tumor-1"), alt: "Ozone being applied to the mass" },
          { src: img("tumor-2"), alt: "The mass before application" },
          { src: img("tumor-3"), alt: "The veterinarian carrying out the ozone application" },
          { src: img("tumor-4"), alt: "Measuring the mass" },
          { src: img("tumor-5"), alt: "The mass reduced after the sessions" },
          { src: img("tumor-6"), alt: "Injection into the mass" },
        ],
      },
      {
        slug: "corona-ve-giardia",
        category: "Bacterial and Viral Infections",
        clinic: "VetPlus Veterinary Clinic",
        patient: "Arex",
        text:
          "Arex was examined and tested after presenting with diarrhoea, loss of appetite and lethargy, and was diagnosed with coronavirus and Giardia. Unvaccinated, Arex was restored to full health with five days of medical treatment and ozonated saline. No immunomodulator of any kind was used in his treatment.",
        photos: [
          { src: img("arex-1"), alt: "Coronavirus and Giardia rapid test result" },
          { src: img("arex-2"), alt: "Arex during treatment" },
          { src: img("arex-3"), alt: "A 20 µg/ml dose set on the ozone generator" },
          { src: img("arex-4"), alt: "Close view of the test panel" },
        ],
      },
      {
        slug: "eklem-rahatsizliklari",
        category: "Joint Disorders",
        clinic: "Urlavet Animal Hospital",
        patient: "Efe",
        text:
          "Efe's hind legs began to fail in December 2022. He had been on steroids continuously for a month and was walking supported by a towel when he came to us. Severe spondylitis and osteoarthritis were identified on MRI and radiography, and sores had started to form on his hind legs from dragging. We began with two months of ozone applications along the spine three times a week, ozone injections into the periosteum at the osteoarthritic joints, rectal ozone in some sessions, and ozone at acupuncture points in others. By March, proprioception was normal in both legs and the sores had healed. He began to get to his feet by himself. Efe now walks unaided and we continue the ozone applications twice a month.",
        photos: [
          { src: img("efe-1"), alt: "Radiograph of Efe's spine" },
          { src: img("efe-2"), alt: "Ozone being applied along Efe's spine" },
        ],
      },
      {
        slug: "dermatolojik-hastaliklar",
        category: "Dermatological Conditions",
        clinic: "Hayat Veterinary Clinic — Manisa",
        patient: "Neko",
        text:
          "Neko's owner brought him to Hayat Veterinary Clinic in Manisa for a dermatological condition of unknown cause, and treatment began with the ozone bagging method. Culture identified a fungal infection, and within only a few days Neko's itching stopped and the skin began to regenerate. Alongside his treatment, after roughly two months Neko reached optimum skin health with ozone gas, an entirely natural treatment method.",
        photos: [
          { src: img("neko-1"), alt: "Neko's skin lesions before treatment" },
          { src: img("neko-2"), alt: "Ozone bagging being applied to Neko" },
          { src: img("neko-3"), alt: "Neko after treatment with his coat regrown" },
        ],
      },
    ],
  },
};
