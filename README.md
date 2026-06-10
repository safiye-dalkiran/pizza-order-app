# Position Absolute Acı Pizza (Pizza Order App)

Bu proje, React + Vite ile geliştirilmiş; kullanıcıların pizza siparişi oluşturabildiği (boyut, hamur, ek malzemeler, isim ve not), form doğrulaması yapan ve başarılı sipariş sonrası “Success” sayfasını gösteren bir web uygulamasıdır.

## İçerik
- **Anasayfa**: Menü/landing alanları
- **Sipariş Sayfası** (`/order`): Form + doğrulama + toplam hesaplama + sipariş gönderimi
- **Başarılı Sayfa** (`/success`): Sipariş özeti

## Kullanılan Teknolojiler
- React 18
- React Router (sayfa yönlendirme)
- Vite (build/dev altyapısı)
- TailwindCSS (UI sınıfları)
- Reactstrap / Bootstrap (bileşenler)
- axios (sipariş gönderimi)
- react-toastify (toast bildirimleri)
- Cypress (E2E test)

## Canlı Akış
1. Kullanıcı **`/order`** sayfasında boyut + hamur seçer.
2. **Ek malzemeler** bölümünde en az 4 ve en fazla 10 malzeme seçer.
3. **İsim** alanını doldurur (en az 3 karakter).
4. Siparişi gönderince form validasyonlarından geçer.
5. Sipariş axios ile API’ye gönderilir ve başarı toast’ı gösterilir.
6. 2 saniye sonra **`Success`** bileşeni görüntülenir.

## API Kullanımı
Sipariş gönderimi:
- Endpoint: `https://reqres.in/api/pizza`
- Gönderilen veri: `formData` (isim, boyut, hamur, malzemeler, not, adet)
- Header: `x-api-key: reqres-free-v1`

> Not: Bu proje, örnek/deneme amaçlı bir API endpoint’i kullanır.

## Kurulum
Ön koşul: Node.js + npm

1) Bağımlılıkları yükleyin:
```bash
npm install
```

## Geliştirme Modu
```bash
npm run dev
```
Varsayılan olarak Vite uygulamayı başlatır (çoğunlukla `http://localhost:5174`).

## Prod Build
```bash
npm run build
npm run preview
```

## Cypress E2E Testleri
### Testleri Aç
```bash
npx cypress open
```

### Testleri Run (Headless)
```bash
npx cypress run
```

E2E testleri:
- `cypress/e2e/pizza.cy.js`
- Örnek senaryolar: boyut doğrulaması, hamur doğrulaması, isim/not input testleri, ek malzeme kuralı ve başarılı sipariş akışı.

## Proje Yapısı (Kısa)
- `src/App.jsx` : Route tanımları + ToastContainer
- `src/pages/Home.jsx` : Anasayfa
- `src/pages/PizzaOrder.jsx` : Sipariş formu ve iş mantığı
- `src/pages/Success.jsx` : Sipariş özeti
- `src/components/*` : Header, Footer, menü/çerçeve bileşenleri

## Görseller / Static Dosyalar
- Resimler `public/images/...` altında tutulur.

## Scripts
`package.json` içeriği:
- `npm run dev` : Vite dev server
- `npm run build` : Prod build
- `npm run lint` : ESLint
- `npm run preview` : Prod preview

