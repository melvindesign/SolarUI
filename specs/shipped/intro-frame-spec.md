# Intro Frame — SolarUI

## Description

Frame de présentation de l'introduction du design system, destinée à la page "Introduction" du fichier Figma SolarUI. Ce n'est pas la page documentation complète (pas de sidebar), mais un frame éditorial autonome qui capture l'essentiel : ce qu'est SolarUI, sur quoi il s'appuie, et sa philosophie.

- **Quoi** : frame éditoriale 1440px wide, hauteur libre (content-driven)
- **Pour qui** : designers qui ouvrent le fichier Figma SolarUI pour la première fois
- **Objectif** : transmettre l'identité du DS en un coup d'œil — pas un doc, une déclaration visuelle

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [HERO — 1440 × 480px]                                      │
│  Padding H: 120px                                           │
│                                                             │
│  ← 55% text zone          45% visual →                     │
│  "Solar UI"                [Composants grid léger]          │
│  Tagline                                                    │
│  Description (2 lignes)                                     │
├─────────────────────────────────────────────────────────────┤
│  [STACK STRIP — 1440 × 72px]                                │
│  Fond: Palette/Default/2 · Border top/bottom: Default/6    │
│  Next.js · Tailwind CSS · Radix UI · shadcn/ui · TypeScript │
├─────────────────────────────────────────────────────────────┤
│  [PHILOSOPHY — 1440 × ~480px]                               │
│  Padding H: 120px · Padding V: 80px                         │
│  Title "Philosophy" centré                                  │
│  Grid 2×2 de cards principe                                 │
└─────────────────────────────────────────────────────────────┘
```

**Largeur frame** : 1440px
**Hauteur totale** : ~1080px (480 + 72 + 528)
**Mode** : Dark

---

## Sections

### 1. Hero

**Zone gauche (60%)**
- Eyebrow : `Label/Small` · `Palette/Accent/9` · texte : `Design System for React`
- Headline : `Display/Medium` · `Palette/Default/12` · texte : `Solar UI`
- Tagline : `Body/Medium` · `Palette/Default/11` · texte : *"Open-source components built on shadcn/ui, Tailwind CSS, and Radix UI. Accessible, customizable, and yours to own."*
- Gap entre éléments : `Sizes/1` (16px)

**Zone droite (40%)**
- Groupe de 6 à 8 instances de composants DS (Button, Badge, Input, Switch, Slider, Select, Tabs, Progress) placées en grille 2-col propre, légère opacité réduite (80%) pour ne pas écraser le texte
- Fond zone droite : `Palette/Default/2` avec border-left `Palette/Default/6`

**Background hero** : `Palette/Default/1`
**Padding** : 120px horizontal, 80px vertical

---

### 2. Stack Strip

- Layout : HORIZONTAL, gap `Sizes/3` (48px), centré
- 5 items : `Next.js`, `Tailwind CSS`, `Radix UI`, `shadcn/ui`, `TypeScript`
- Format : logo (raw text ou icône) + label texte, `Label/Medium` · `Palette/Default/11`
- Séparateurs visuels : `·` entre chaque item, `Palette/Default/6`
- Fond : `Palette/Default/2`, bordures top/bottom `Palette/Default/6` (1px)
- Hauteur fixe : 72px

---

### 3. Philosophy

**Header section**
- Eyebrow : `Label/Small` · `Palette/Accent/9` · texte : `Philosophy`
- Titre : `Headline/Medium` · `Palette/Default/12` · texte : `Intentional by design`
- Sous-titre : `Body/Small` · `Palette/Default/11` · texte : *"Not arbitrary conventions — each principle addresses a real visual or interaction problem."*
- Centré, max-width 560px

**Grid 2×2 de cards principe**

| # | Titre | Description courte |
|---|-------|-------------------|
| 1 | Open code, no lock-in | You own the source. No wrappers, no black boxes — you read and modify directly. |
| 2 | Controls share a height | Buttons and inputs always align. `h-control` enforces this at the token level. |
| 3 | Default, compact, responsive | Two structural modes. One token switch changes spacing, height, and type everywhere. |
| 4 | Group, categorize, order | Proximity signals relationship. A well-defined category exposes its own gaps. |

**Chaque card (raw frame, pas le composant Card)**
- Fond : `Palette/Default/2`
- Border : `Palette/Default/6` 1px
- Radius : `Radius/Medium`
- Padding : 24px
- Icône illustration : 32×32px, fond `Palette/Accent/3`, radius `Radius/Medium`, icône Lucide 16px `Palette/Accent/9`
- Titre : `Title/Small` · `Palette/Default/12`
- Description : `Body/Small` · `Palette/Default/11`
- Gap interne : `Sizes/1` (16px)

Grid : 2 colonnes, gap `Sizes/1,50` (24px), max-width 960px, centré dans la zone

---

## Design Tokens

| Token | Usage |
|-------|-------|
| `Palette/Default/1` | Background hero, background page |
| `Palette/Default/2` | Stack strip, cards philosophy |
| `Palette/Default/6` | Bordures cards, strip borders, séparateurs |
| `Palette/Default/11` | Texte secondaire, tagline, descriptions |
| `Palette/Default/12` | Texte principal (Display, titres) |
| `Palette/Accent/9` | Eyebrow labels, icônes accent |
| `Palette/Accent/3` | Fond icônes cards |
| `Radius/Medium` | Border-radius cards |
| `Sizes/1` (16px) | Gap interne composants |
| `Sizes/1,50` (24px) | Padding cards, gap grid |
| `Sizes/3` (48px) | Gap stack strip items |

---

## Typographie

| Élément | Style | Clé |
|---------|-------|-----|
| "Solar UI" wordmark | Display/Medium | `880fe93e87e70fc5e033eb20f899d92167da8b64` |
| Tagline | Body/Medium | `5997f81ddaf119e733d6f36e12e2f1a30cc10f63` |
| Eyebrow labels | Label/Small | `254e33d3596300d38690bc7dc14d8dd7f16ec01c` |
| Section headline | Headline/Medium | `286cee4f7802025f44e3a8277b20156530cf91ec` |
| Card title | Title/Small | `4b2433794b691a10ae16a6f388cde168b3e2cc67` |
| Card description | Body/Small | `b67e0da4f949ebd85d5e52753360b62c97480514` |
| Stack items | Label/Medium | `4b8f6a04f568d778ca806f1ba3a1d19f7346abce` |

---

## DS Components Used (zone droite hero)

| Composant | Node ID (live) | Stratégie |
|-----------|---------------|-----------|
| Button | `2168:412` | getNodeByIdAsync |
| Badge | `2252:1112` | getNodeByIdAsync |
| Input | `2181:1268` | getNodeByIdAsync |
| Switch | `2126:14` | getNodeByIdAsync |
| Slider | `2251:836` | getNodeByIdAsync |
| Select | `2252:906` | getNodeByIdAsync |
| Tabs | `2258:1727` | getNodeByIdAsync |
| Progress | `2252:1124` | getNodeByIdAsync |

---

## Génération — Approche atomique

| Étape | Contenu |
|-------|---------|
| Step 1 | Frame principale 1440×1080 + fond Dark + 3 sous-frames (hero, strip, philosophy) |
| Step 2 | Hero : texte zone gauche (eyebrow + headline + tagline) |
| Step 3 | Hero : zone droite avec instances composants en grille 2-col |
| Step 4 | Stack strip : 5 items centrés |
| Step 5 | Philosophy : header section + 4 cards principe |

---

## Acceptance Criteria

- [ ] Frame 1440px wide, Dark mode
- [ ] "Solar UI" en Display/Medium lisible
- [ ] Tagline en Body/Medium
- [ ] Zone droite : ≥ 6 composants DS visibles, proprement alignés
- [ ] Stack strip : 5 technos visibles, centré
- [ ] 4 cards philosophie avec titre + description + icône accent
- [ ] Aucun hex hardcodé, tous les tokens sémantiques
- [ ] Tous les composants DS importés via node ID (pas raw frames)

---

## Décisions

- Icônes cards : `<Code2>` (open code), `<Ruler>` (single height), `<Layers>` (sizing system), `<Grid>` (group/order)
- Zone droite hero : opacité des instances à **60%**
