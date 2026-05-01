export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      github: 'GitHub',
      portfolio: 'Portfolio',
      contact: 'Contact',
      hire: 'HIRE_ME',
    },
    hero: {
      greeting: '// Hi, My Name Is',
      location: 'Indramayu, Jawa Barat',
      desc: 'Building scalable web applications with clean code and modern technologies. Passionate about creating seamless digital experiences from frontend to backend. Available for new opportunities.',
      viewWork: 'VIEW_WORK',
      getInTouch: 'GET_IN_TOUCH',
    },
    about: {
      title: 'ABOUT_ME',
      role: 'Full Stack Developer',
      bio1: 'A passionate Full Stack Developer with hands-on experience building production-grade web applications. I specialize in both frontend experiences and robust backend systems.',
      bio2: 'My stack revolves around React, TypeScript, and Node.js — delivering performant, scalable solutions that users love.',
      bio3: 'I believe in writing clean, maintainable code and staying up to date with the latest technologies. Always eager to take on new challenges and contribute to meaningful projects.',
      download: 'DOWNLOAD_CV.pdf',
      available: 'Available ✓',
      stats: {
        projects: 'Projects',
        experience: 'Experience',
        coffees: 'Coffees',
      },
      doing: [
        '> Frontend development with React & TypeScript',
        '> REST API design with Express.js & Node.js',
        '> Database design with MySQL & MongoDB',
        '> Responsive UI with Tailwind CSS',
      ],
    },
    skills: {
      title: 'TECH_STACK',
    },
    github: {
      title: 'GITHUB_ACTIVITY',
    },
    portfolio: {
      title: 'PORTFOLIO',
    },
    contact: {
      title: 'CONTACT_ME',
      subtitle: "Let's build something together",
      heading: 'Open to',
      highlight: 'opportunities',
      desc: "I'm currently available for freelance projects, full-time positions, and interesting collaborations. Drop me a message and I'll respond within 24 hours.",
      social: 'SOCIAL_HANDLES',
      form: {
        name: 'Your Name',
        email: 'your@email.com',
        message: 'Your message...',
        send: 'SEND_MESSAGE',
        sending: 'SENDING...',
        sent: 'MESSAGE_SENT ✓',
        error: 'Failed to send. Please try again.',
      },
    },
    footer: {
      rights: '© 2024 M. Fahmi Hafidz B — All rights reserved.',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      github: 'GitHub',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      hire: 'REKRUT_SAYA',
    },
    hero: {
      greeting: '// Hai, Nama Saya',
      location: 'Islamabad, Pakistan',
      desc: 'Membangun aplikasi web yang skalabel dengan kode bersih dan teknologi modern. Bersemangat menciptakan pengalaman digital yang mulus dari frontend hingga backend. Tersedia untuk peluang baru.',
      viewWork: 'LIHAT_KARYA',
      getInTouch: 'HUBUNGI_SAYA',
    },
    about: {
      title: 'TENTANG_SAYA',
      role: 'Full Stack Developer',
      bio1: 'Seorang Full Stack Developer yang bersemangat dengan pengalaman langsung membangun aplikasi web tingkat produksi. Saya spesialisasi dalam pengalaman frontend dan sistem backend yang tangguh.',
      bio2: 'Stack saya berkisar pada React, TypeScript, dan Node.js — menghadirkan solusi yang performatif dan skalabel yang disukai pengguna.',
      bio3: 'Saya percaya dalam menulis kode yang bersih dan mudah dipelihara serta selalu mengikuti perkembangan teknologi terbaru. Selalu bersemangat menghadapi tantangan baru.',
      download: 'UNDUH_CV.pdf',
      available: 'Tersedia ✓',
      stats: {
        projects: 'Proyek',
        experience: 'Pengalaman',
        coffees: 'Kopi',
      },
      doing: [
        '> Pengembangan frontend dengan React & TypeScript',
        '> Desain REST API dengan Express.js & Node.js',
        '> Desain database dengan MySQL & MongoDB',
        '> UI responsif dengan Tailwind CSS',
      ],
    },
    skills: {
      title: 'TEKNOLOGI',
    },
    github: {
      title: 'AKTIVITAS_GITHUB',
    },
    portfolio: {
      title: 'PORTOFOLIO',
    },
    contact: {
      title: 'HUBUNGI_SAYA',
      subtitle: 'Mari membangun sesuatu bersama',
      heading: 'Terbuka untuk',
      highlight: 'peluang',
      desc: 'Saya saat ini tersedia untuk proyek freelance, posisi penuh waktu, dan kolaborasi menarik. Kirim pesan dan saya akan merespons dalam 24 jam.',
      social: 'MEDIA_SOSIAL',
      form: {
        name: 'Nama Kamu',
        email: 'email@kamu.com',
        message: 'Pesan kamu...',
        send: 'KIRIM_PESAN',
        sending: 'MENGIRIM...',
        sent: 'PESAN_TERKIRIM ✓',
        error: 'Gagal mengirim. Coba lagi.',
      },
    },
    footer: {
      rights: '© 2024 M. Fahmi Hafidz B — Semua hak dilindungi.',
    },
  },
};

export type Lang = 'en' | 'id';
export type Translations = typeof translations.en;