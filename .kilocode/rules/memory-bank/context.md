# Active Context: Malayalam Reader App

## Current State

**App Status**: Deployed — standalone HTML app for Malayalam reading speed improvement, served via Next.js on Vercel.

The app lives at `public/malayalam-reader.html` and the root URL (`/`) redirects to it.

## Recently Completed

- [x] Malayalam-to-Latin transliteration engine (built-in, no external deps)
- [x] 6 embedded sample texts (Ramayana, Kumaran Asan, Vayalar, Basheer, proverbs, Madhavikutty)
- [x] Word hover tooltips showing phonetic transliteration (desktop)
- [x] Touch-based transliteration display (mobile)
- [x] Full text transliteration panel
- [x] English translation via MyMemory API (free, no key required)
- [x] Custom text paste feature
- [x] Mobile-first responsive design
- [x] Noto Serif Malayalam font from Google Fonts
- [x] Auto-loads random text on page init (fixed empty page issue)
- [x] Vercel deployment via Next.js (root redirects to `/malayalam-reader.html`)

## App Architecture

| Component | Implementation |
|-----------|---------------|
| HTML file | `public/malayalam-reader.html` (standalone, self-contained) |
| Root redirect | `src/app/page.tsx` → `redirect("/malayalam-reader.html")` |
| Transliteration engine | Custom character-level Malayalam→Latin mapping (Mozhi scheme) |
| Translation API | MyMemory (`api.mymemory.translated.net/get?q=...&langpair=ml\|en`) |
| Font | Noto Serif Malayalam (Google Fonts CDN) |
| Sample texts | 6 embedded literary excerpts + proverbs |

## Key Design Decisions

1. **Standalone HTML in public/**: No build step for the app itself, works offline (except translation)
2. **Mozhi romanization**: ASCII-friendly transliteration (e.g., `aa` not `a`)
3. **Touch support**: Fixed bottom tooltip for mobile, CSS hover for desktop
4. **MyMemory API**: Free, 500 bytes/request limit, ~5000 words/day free tier
5. **Auto-load**: `showRandomText()` called on init so page is never empty

## Session History

| Date | Changes |
|------|---------|
| 2026-03-29 | Malayalam Reader app created as standalone HTML file |
| 2026-03-30 | Fixed empty page (auto-load on init), deployed to Vercel via Next.js |
