# Malayalam Reader

A browser-based reading aid for Malayalam text. Hover or tap any word to see its English phonetic pronunciation. Shows full text transliteration and English translation on demand.

Built for people who can understand spoken Malayalam but find reading slow. **This is not a language learning tool** — just a reading speed trainer.

Click the live [page here](https://arun-ks.github.io/TransliterateMalayalam) to use this.

This was generated using AppBuiler of [kilo.ai](https://kilo.ai)


## How It Works

1. The page loads with a set of Malayalam proverbs by default.
2. Click **Paste Malayalam Text** to load your own text.
3. **Hover** (desktop) or **tap** (mobile) any word to see its phonetic transliteration in a tooltip.
4. Click **Transliteration** to see the full text in Latin script.
5. Click **Translation** to get an English translation via [MyMemory API](https://mymemory.translated.net/).

### URL Parameter

Alternateively, the user can pass the Malayalam text as URL parameters as in `?MlText=<malayalam text>` & it would auto load when the page is rendered.

## Transliteration Scheme

The app uses a modified **Mozhi** romanization — an ASCII-friendly phonetic scheme widely used for Malayalam transliteration. Each Malayalam character maps to a predictable Latin equivalent.

### Independent Vowels

| Malayalam | Name | Hindi | Output |
|-----------|------|-------|--------|
| അ | a | अ | `a` |
| ആ | aa | आ | `aa` |
| ഇ | i | इ | `i` |
| ഈ | ii | ई | `ii` |
| ഉ | u | उ | `u` |
| ഊ | uu | ऊ | `uu` |
| ഋ | r̥ | ऋ | `r̥` |
| ൠ | r̥̄ | ॠ | `r̥̄` |
| ഌ | l̥ | ऌ | `l̥` |
| ൡ | l̥̄ | ॡ | `l̥̄` |
| എ | e | — | `e` |
| ഏ | ee | ए | `ee` |
| ഐ | ai | ऐ | `ai` |
| ഒ | o | — | `o` |
| ഓ | oo | ओ | `oo` |
| ഔ | au | औ | `au` |

### Consonants

Every consonant carries an inherent `a` vowel. The transliteration drops this `a` only when a vowel sign follows or when a virama (chandrakkala) suppresses it.

| Malayalam | Hindi | Output | | Malayalam | Hindi | Output | | Malayalam | Hindi | Output |
|-----------|-------|--------|-|-----------|-------|--------|-|-----------|-------|--------|
| ക | क | `ka` | | ട | ट | `ṭa` | | പ | प | `pa` |
| ഖ | ख | `kha` | | ഠ | ठ | `ṭha` | | ഫ | फ | `pha` |
| ഗ | ग | `ga` | | ഡ | ड | `ḍa` | | ബ | ब | `ba` |
| ഘ | घ | `gha` | | ഢ | ढ | `ḍha` | | ഭ | भ | `bha` |
| ങ | ङ | `ṅa` | | ണ | ण | `ṇa` | | മ | म | `ma` |
| ച | च | `cha` | | ത | त | `ta` | | യ | य | `ya` |
| ഛ | छ | `chha` | | ഥ | थ | `tha` | | ര | र | `ra` |
| ജ | ज | `ja` | | ദ | द | `da` | | റ | ऱ | `ṟa` |
| ഝ | झ | `jha` | | ധ | ध | `dha` | | ല | ल | `la` |
| ഞ | ञ | `ña` | | ന | न | `na` | | ള | ळ | `ḷa` |
| | | | | | | | | ഴ | — | `ḻa` |
| | | | | | | | | വ | व | `va` |
| | | | | | | | | ശ | श | `sha` |
| | | | | | | | | ഷ | ष | `ṣa` |
| | | | | | | | | സ | स | `sa` |
| | | | | | | | | ഹ | ह | `ha` |

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

| Chillus | Hindi | Output |
|---------|-------|--------|
| ൺ | न | `n` |
| ൻ | न | `n` |
| ർ | र | `r` |
| ൽ | ल | `l` |
| ൾ | ळ | `ḷ` |
| ൿ | क | `k` |

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
