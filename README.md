# AldoPython — Portfolio Site

Situs portofolio statis dibangun dengan **Astro** (SEO-ready: sitemap, Open Graph, JSON-LD).
Tema desain: **"Decrypted Signal"** — judul ter-*decrypt* saat load; proyek klien tampil ter-redaksi (NDA).

## Jalankan lokal
```bash
npm install        # sekali saja
npm run dev        # buka http://localhost:4321  (live reload)
```

## Build untuk produksi
```bash
npm run build      # hasil statis ada di folder dist/
npm run preview    # cek hasil build sebelum deploy
```

## Deploy ke GitHub Pages (gratis)
1. Buat repo bernama **`AldoPython.github.io`** di GitHub.
2. Di `astro.config.mjs`, pastikan `site` sudah benar (default: `https://aldopython.github.io`).
   - Kalau pakai repo project biasa (mis. `portfolio`), tambahkan `base: '/portfolio'`.
3. Push isi folder ini ke repo, lalu aktifkan GitHub Pages via GitHub Actions
   (Astro punya panduan resmi: docs.astro.build/en/guides/deploy/github/), atau
   deploy folder `dist/` ke Netlify / Vercel / Cloudflare Pages (drag & drop `dist`).

## Ganti konten
Semua teks & data proyek ada di **`src/pages/index.astro`** (array `work`, `confidential`, `skills`, dst.).
Warna & gaya di **`src/styles/global.css`**. Avatar: **`public/avatar.png`**.

## Catatan privasi
Bagian **Client Work** sengaja menyensor nama klien/target (blok ██ + label NDA).
Ubah/ tambah di array `confidential` — bagian `{ r: '██████' }` adalah teks yang diredaksi.
