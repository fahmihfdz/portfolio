## M. Fahmi Hafidz Bahrul'ilmi - Portofolio
Situs web portofolio pribadi yang dibangun dengan teknologi web modern, menampilkan mode gelap/terang, dukungan dwibahasa (ID/EN), integrasi grafik aktivitas GitHub, serta formulir kontak yang sepenuhnya berfungsi. Dirancang dengan fokus pada performa, responsivitas, dan pengalaman pengguna yang optimal di berbagai perangkat.

## Live Demo

## Features
- **Estetika Terminal** — tema gelap dengan aksen emas, font JetBrains Mono
- **Mode Gelap / Terang** — beralih dengan penyimpanan lokal yang persisten
- **Dua Bahasa (ID / EN)** — beralih bahasa secara instan
- **Animasi Kartu Identitas** — muncul dari atas pada bagian hero
- **Animasi Mengetik** — peran animasi pada hero
- **Grafik Aktivitas GitHub** — data kontribusi langsung
- **Formulir Kontak yang Berfungsi** — didukung oleh EmailJS
- **Unduh CV** — unduh PDF langsung
- **Filter Portofolio** — filter proyek berdasarkan kategori
- **Sepenuhnya Responsif** — seluler, tablet, desktop
- **Animasi Halus** — Framer Motion di seluruh halaman

## Tech Stack
| Technology | Usage |
|---|---|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| EmailJS | Contact Form |

## Project Structure
assets/
├──faviconPort.png      
├──port1.png               
├──port2.png
├──port3.png
├──profil.png
public/
├──cv.pdf
src/
├── components/
│   ├── Cursor.tsx          # Custom gold cursor
│   ├── Navbar.tsx          # Fixed navbar + mobile menu
│   ├── Hero.tsx            # Hero section + ID Card
│   ├── About.tsx           # About + stats + CV download
│   ├── Skills.tsx          # Tech stack + skill bars
│   ├── GithubActivity.tsx  # GitHub contribution graph
│   ├── Portfolio.tsx       # Project cards + filter
│   ├── Contact.tsx         # Contact form (EmailJS)
│   └── Footer.tsx          # Footer
├── contexts/
│   ├── ThemeContext.tsx     # Dark/Light mode context
│   └── LangContext.tsx     # Bilingual context
├── hooks/
│   ├── useTheme.ts         # Theme hook
│   └── useDownloadTracker.ts # CV download tracker
└── i18n/
    └── translations.ts     # ID/EN translations
App.css
App.tsx
index.css
main.tsx

## Getting Started
### Prerequisites
- Node.js v18+
- npm or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/fahmihfdz/portfolio.git

# 2. Masuk ke folder project
cd portfolio

# 3. Install dependencies
npm install

# 4. Buat file .env
cp .env.example .env
```

### Setup Environment Variables
Buat file `.env` di root project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Daftar di [emailjs.com](https://emailjs.com) untuk mendapatkan credentials gratis.

### Run Development Server
```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Build for Production
```bash
npm run build
```

---

## Customization
### Ganti data personal

Edit file berikut sesuai data kamu:

| File | Yang diubah |
|---|---|
| `src/components/Hero.tsx` | Nama, foto, roles |
| `src/components/About.tsx` | Bio, stats, CV link |
| `src/components/Portfolio.tsx` | Data project |
| `src/components/Contact.tsx` | Email, social links |
| `src/components/GithubActivity.tsx` | GitHub username |
| `src/i18n/translations.ts` | Semua teks ID/EN |

### Ganti foto profil
Letakkan foto di `assets/profil.png`.

### Ganti CV
Letakkan file CV di `public/cv.pdf`.

---

## Deploy ke Vercel
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Set environment variables di Vercel dashboard
# Settings → Environment Variables → tambah VITE_EMAILJS_*
```

---

## License
MIT License — free to use and modify.

---

## Contact
**M. Fahmi Hafidz B**
- Email: fahmihfdzb@gmail.com
- GitHub: [@fahmihfdz](https://github.com/fahmihfdz)
- LinkedIn: [Fahmi Hafidz](https://www.linkedin.com/in/fahmi-hafidz-10610b386)
- Instagram: [@fahmihfdz_](https://www.instagram.com/fahmihfdz_/)

---
<div align="center">
  Made by M. Fahmi Hafidz B
</div>