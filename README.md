# Malayalam Reader

A browser-based reading aid for Malayalam text. Hover or tap any word to see its English phonetic pronunciation. Shows full text transliteration and English translation on demand.

Built for people who can understand spoken Malayalam but find reading slow. Not a language learning tool — just a reading speed trainer.

## How It Works

1. The page loads with a set of Malayalam proverbs by default.
2. Click **Paste Malayalam Text** to load your own text.
3. **Hover** (desktop) or **tap** (mobile) any word to see its phonetic transliteration in a tooltip.
4. Click **Transliteration** to see the full text in Latin script.
5. Click **Translation** to get an English translation via [MyMemory API](https://mymemory.translated.net/).

Newlines and paragraph breaks in the source text are preserved.

## Features

- Single HTML file, zero dependencies, no build step
- Built-in transliteration engine — works fully offline
- Word-level phonetic tooltips on hover/tap
- Full-text transliteration panel
- English translation panel (requires internet)
- Mobile-first responsive layout
- Noto Serif Malayalam font loaded from Google Fonts

## Deployment

Hosted via [GitHub Pages](https://pages.github.com/). To deploy:

1. Go to **Settings > Pages** in the repo
2. Set **Source** to "Deploy from a branch"
3. Select the `main` branch, `/ (root)` folder
4. Save — the site will be live at `https://<username>.github.io/<repo-name>/`

No server, no environment variables, no config.

## Transliteration Scheme

The app uses a modified **Mozhi** romanization — an ASCII-friendly phonetic scheme widely used for Malayalam transliteration. Each Malayalam character maps to a predictable Latin equivalent.

### Independent Vowels

| Malayalam | Name | Output |
|-----------|------|--------|
| അ | a | `a` |
| ആ | aa | `aa` |
| ഇ | i | `i` |
| ഈ | ii | `ii` |
| ഉ | u | `u` |
| ഊ | uu | `uu` |
| ഋ | r̥ | `r̥` |
| ൠ | r̥̄ | `r̥̄` |
| ഌ | l̥ | `l̥` |
| ൡ | l̥̄ | `l̥̄` |
| എ | e | `e` |
| ഏ | ee | `ee` |
| ഐ | ai | `ai` |
| ഒ | o | `o` |
| ഓ | oo | `oo` |
| ഔ | au | `au` |

### Consonants

Every consonant carries an inherent `a` vowel. The transliteration drops this `a` only when a vowel sign follows or when a virama (chandrakkala) suppresses it.

| Malayalam | Output | | Malayalam | Output | | Malayalam | Output |
|-----------|--------|-|-----------|--------|-|-----------|--------|
| ക | `ka` | | ട | `ṭa` | | പ | `pa` |
| ഖ | `kha` | | ഠ | `ṭha` | | ഫ | `pha` |
| ഗ | `ga` | | ഡ | `ḍa` | | ബ | `ba` |
| ഘ | `gha` | | ഢ | `ḍha` | | ഭ | `bha` |
| ങ | `ṅa` | | ണ | `ṇa` | | മ | `ma` |
| ച | `cha` | | ത | `ta` | | യ | `ya` |
| ഛ | `chha` | | ഥ | `tha` | | ര | `ra` |
| ജ | `ja` | | ദ | `da` | | റ | `ṟa` |
| ഝ | `jha` | | ധ | `dha` | | ല | `la` |
| ഞ | `ña` | | ന | `na` | | ള | `ḷa` |
| | | | | | | ഴ | `ḻa` |
| | | | | | | വ | `va` |
| | | | | | | ശ | `sha` |
| | | | | | | ഷ | `ṣa` |
| | | | | | | സ | `sa` |
| | | | | | | ഹ | `ha` |

### Vowel Signs (Modifiers)

When a vowel sign follows a consonant, the inherent `a` is replaced:

| Malayalam sign | Output | Example | Result |
|----------------|--------|---------|--------|
| ാ (aa) | `aa` | ക + ാ | `kaa` |
| ി (i) | `i` | ക + ി | `ki` |
| ീ (ii) | `ii` | ക + ീ | `kii` |
| ു (u) | `u` | ക + ു | `ku` |
| ൂ (uu) | `uu` | ക + ൂ | `kuu` |
| ൃ (r̥) | `r̥` | ക + ൃ | `kr̥` |
| െ (e) | `e` | ക + െ | `ke` |
| േ (ee) | `ee` | ക + േ | `kee` |
| ൈ (ai) | `ai` | ക + ൈ | `kai` |
| ൊ (o) | `o` | ക + ൊ | `ko` |
| ോ (oo) | `oo` | ക + ോ | `koo` |
| ൌ / ൗ (au) | `au` | ക + ൌ | `kau` |

### Virama (Chandrakkala ്)

The virama suppresses the inherent vowel, leaving only the consonant core:

- ക + ് → `k`
- ന + ് → `n`
- ല + ് → `l`

This is how consonant clusters work: ന + ് + ത = `nta`.

### Chillus (അന്തസ്ഥ)

Chillus are standalone consonant forms without any inherent vowel. They appear at word endings:

| Chillus | Output |
|---------|--------|
| ൺ | `n` |
| ൻ | `n` |
| ർ | `r` |
| ൽ | `l` |
| ൾ | `ḷ` |
| ൿ | `k` |

### Other Signs

| Sign | Name | Output |
|------|------|--------|
| ം | Anusvaram | `ṁ` |
| ഃ | Visargam | `ḥ` |

### Example

```
മലയാളം → malayaaḷaṁ
അമ്മ   → amma
വീട്   → viiṭ
കേരളം → keeraḷaṁ
```

### Design Notes

- The scheme uses **double vowels** (`aa`, `ii`, `uu`, `ee`, `oo`) instead of diacritics (`ā`, `ī`, `ū`, `ē`, `ō`) for maximum readability on any device without special font support.
- Retroflex consonants use dots below (`ṭ`, `ḍ`, `ṇ`, `ḷ`) where distinguishable, falling back to plain Latin if the rendering environment does not support them.
- The transliteration is **phonetic**, not orthographic. It reflects how words sound, not how they are spelled.

## Translation — MyMemory API

English translation uses the [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php), a free service.

### Limits

| Tier | Daily character limit |
|------|-----------------------|
| Anonymous (no key) | **5,000 characters** |
| With valid email (`de` param) | **50,000 characters** |
| Per request | **500 bytes** |

The app handles the per-request limit by chunking text into segments of ~400 characters with a 300ms delay between requests.

### What This Means in Practice

- A typical Malayalam news article (~2,000 chars) can be translated **2-3 times per day** on the anonymous tier.
- For heavier use, you can add your email to the API call (the `de` parameter in the `translate()` function) to get 50,000 chars/day.
- The daily limit resets at **UTC midnight**.
- Transliteration has **no limits** — it runs entirely in the browser with no API calls.

## Where to Get Malayalam Text

| Source | What |
|--------|------|
| [ml.wikisource.org](https://ml.wikisource.org) | Public domain literary works |
| [ml.wikipedia.org](https://ml.wikipedia.org) | Encyclopedic articles |
| Malayalam news sites (Mathrubhumi, Manorama) | Current news, conversational style |
| [archive.org](https://archive.org) — search "Malayalam" | Scanned books |

**Suggested progression** for building reading speed:

1. Proverbs (short, simple sentences)
2. Children's stories (basic vocabulary)
3. News headlines (modern, everyday Malayalam)
4. Literary excerpts (poetry, novels)

## License

Do whatever you want with it.
