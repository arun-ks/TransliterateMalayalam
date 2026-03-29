# Active Context: Malayalam Reader App

## Current State

**App Status**: ✅ Complete - Standalone HTML app for Malayalam reading speed improvement

The app is a single-file HTML application (`malayalam-reader.html`) that helps users improve Malayalam reading speed by providing hover/tap transliteration of words.

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

## App Architecture

| Component | Implementation |
|-----------|---------------|
| Transliteration engine | Custom character-level Malayalam→Latin mapping (Mozhi scheme) |
| Translation API | MyMemory (`api.mymemory.translated.net/get?q=...&langpair=ml\|en`) |
| Font | Noto Serif Malayalam (Google Fonts CDN) |
| Sample texts | 6 embedded literary excerpts + proverbs |

## Key Design Decisions

1. **Standalone HTML**: Single file, no build step, works offline (except translation)
2. **Mozhi romanization**: ASCII-friendly transliteration (e.g., `aa` not `ā`)
3. **Touch support**: Fixed bottom tooltip for mobile, CSS hover for desktop
4. **MyMemory API**: Free, 500 bytes/request limit, ~5000 words/day free tier

## Text Sources for Malayalam Content

### Best Sources (Public Domain / Free)

| Source | URL | Content |
|--------|-----|---------|
| Malayalam Wikisource | `ml.wikisource.org` | Public domain literary works (Ezhuthachan, etc.) |
| Malayalam Wikipedia | `ml.wikipedia.org` | Encyclopedic articles, news topics |
| Internet Archive | `archive.org` | Scanned books (Adhyatma Ramayanam, etc.) |
| Malayalam news sites | `mathrubhumi.com`, `manoramaonline.com` | Current news articles |
| DC Books | `dcbooks.com` | Book excerpts (some free) |
| Kerala Sahitya Akademi | `sahityaakademi.gov.in` | Literary works |

### Recommended for Reading Practice

1. **Malayalam proverbs** (പഴഞ്ചൊല്ലുകൾ) — Short, simple sentences
2. **Children's stories** (കുട്ടിക്കഥകൾ) — Simpler vocabulary
3. **News headlines** — Modern, conversational Malayalam
4. **Folk songs** (നാടോടിപ്പാട്ടുകൾ) — Rhythmic, easy to follow
5. **Adhyatma Ramayanam** — Classic, widely known (good for familiarity)

## Session History

| Date | Changes |
|------|---------|
| 2026-03-29 | Malayalam Reader app created as standalone HTML file |
