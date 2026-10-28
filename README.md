# Torii (鳥居) — The Gateway Portal

> **Three realms. One gate.**  
> The unified dark minimalist gateway connecting [Tanuki](https://tanuki-ashy-zeta.vercel.app), [Kitsune](https://kitsune-sepia-six.vercel.app), and [Gumiho](https://gumiho-beta.vercel.app).

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Git Integration (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect **Next.js** framework preset.
4. *(Optional)* Add the environment variables below if using custom domains, or leave empty to use default production endpoints.
5. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## ⚙️ Environment Variables (Configurable)

| Variable | Description | Default Value |
|---|---|---|
| `NEXT_PUBLIC_TANUKI_URL` | Target URL for Tanuki (Movies) | `https://tanuki-ashy-zeta.vercel.app` |
| `NEXT_PUBLIC_KITSUNE_URL` | Target URL for Kitsune (Anime) | `https://kitsune-sepia-six.vercel.app` |
| `NEXT_PUBLIC_GUMIHO_URL` | Target URL for Gumiho (Series/K-Dramas) | `https://gumiho-beta.vercel.app` |

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack
- **Framework:** Next.js 16 (App Router + Turbopack)
- **Styling:** Tailwind CSS v4 + Pure GPU Keyframes (Zero CPU background particles)
- **Search Engine:** Cross-Realm OmniSearch querying Cinemeta, Jikan, and TVMaze in parallel
