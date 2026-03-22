# File Cover — SolarUI Community

## Description

Frame de couverture du fichier Figma SolarUI publié sur la Figma Community. Visible en miniature dans les résultats de recherche de la Community et en header du fichier.
- **Quoi** : visuel de présentation du DS, 1920×960px
- **Pour qui** : designers qui découvrent SolarUI sur la Community
- **Objectif** : donner envie d'ouvrir le fichier — communiquer le sérieux du DS, son esthétique, et sa richesse en un coup d'œil

---

## Dimensions & Canvas

| Propriété | Valeur |
|-----------|--------|
| Largeur | 1920px |
| Hauteur | 960px |
| Mode | Dark |
| Background | `Neutrals/Gray/1` (Dark = #111111) |

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│   [LEFT ZONE — 55%]              [RIGHT ZONE — 45%]              │
│                                                                   │
│   Logo mark (☀ soleil)          ┌──────────────────────────┐    │
│   "Solar UI"  ←── Display/Small │  Component Grid Preview  │    │
│   Tagline                        │                           │    │
│   ─────────                      │  Buttons  Badge  Switch   │    │
│   38 components · Geist font     │  Input    Slider  Select  │    │
│   Built on Radix · shadcn/ui     │  Avatar   Progress Tabs   │    │
│   Dark & Light mode              │  Dialog   Accordion …     │    │
│                                  └──────────────────────────┘    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Zone gauche (x=0, w=1056px)
- Padding horizontal : 128px (≈ 8 × Sizes/2)
- Padding vertical : 96px
- Layout : VERTICAL, align CENTER, justify CENTER
- Contenu : [logo mark] + wordmark + tagline + séparateur + stats row

### Zone droite (x=1056, w=864px)
- Background légèrement distinct : `Neutrals/Gray/2` (Dark = #191919) ou transparent avec un cadre border subtle
- Padding : 64px
- Composants arrangés en grille flottante, overlapping léger, légère rotation (±3°) pour dynamisme
- Masquage progressif vers les bords (fade out) via rectangle gradient RGBA

---

## Sections

### 1. Logo mark
- Élément visuel solaire : cercle + rayons stylisés construit en raw frames (pas de composant DS)
- Couleur : `Palette/Accent/9` (couleur solide, accent)
- Taille : 64×64px
- Positionné au-dessus du wordmark, gap 16px (`Sizes/1`)

### 2. Wordmark "Solar UI"
- Style : **Display/Small** (Geist SemiBold, 32.4px)
- Couleur : `Palette/Default/12` (texte haut contraste)
- Tracking : légèrement élargi (letter-spacing +1px, hardcoded exception justifiée)

### 3. Tagline
- Texte : *"A design system for React. Crafted for real products."*
- Style : **Body/Medium** (Geist Medium, 16px)
- Couleur : `Palette/Default/11` (texte low contrast, secondaire)
- Gap avec wordmark : 12px

### 4. Séparateur
- Ligne horizontale 40px, 1px épaisseur
- Couleur : `Palette/Default/6` (subtle border)
- Gap vertical : 24px de chaque côté

### 5. Stats / Chips
- Disposition : HORIZONTAL, gap 24px
- 3 items :
  - `38 components` ✓ confirmé
  - `Geist · Radix`
  - `Light & Dark`
- Format de chaque chip : raw frame (background `Palette/Default/3`, border `Palette/Default/6`, radius `Radius/Medium`, padding 8×12px)
- Typographie : **Label/Small** (12.4px Medium)
- Couleur texte : `Palette/Default/11`

### 6. Component Grid (zone droite)
Grille informelle 3×3 ou 3×4 de composants DS importés. Disposition en "scattered grid" avec rotation légère.

**Composants retenus (visuellement représentatifs) :**

| Composant | Variant | Key |
|-----------|---------|-----|
| Button | Variant=Primary, State=Default | `4f378192f67ab48473791b225e61d598b33ae4ab` |
| Button | Variant=Secondary, State=Default | `4f378192f67ab48473791b225e61d598b33ae4ab` |
| Button | Variant=Ghost, State=Default | `4f378192f67ab48473791b225e61d598b33ae4ab` |
| Badge | — | `ba783c70b336812a6a02e534b27608d555e17900` |
| Switch | Checked=True | `79b797dd8dbb0acd33a365a180d173fbd82b407b` |
| Switch | Checked=False | `79b797dd8dbb0acd33a365a180d173fbd82b407b` |
| Input | State=Default | `1cdfffa0062c27aba7058a0f9e0adb4ce7041ba3` |
| Slider | — | `9f5e88204b91ed019d80808b8b2e3d06065c167a` |
| Avatar | — | `6c8df1297e3713f8fd07bdef1bc641ed745e0262` |
| Tabs | — | `10edaa151522a2b5d24d306cf7e8e1ead9bb0453` |
| Progress | — | `e028cd80ff4fb0c2624df01e1b109e1cbb99a075` |

Chaque composant est importé via `importComponentByKeyAsync` / `importComponentSetByKeyAsync`, placé en instance, puis positionné manuellement avec légère rotation (`rotation` property) : entre -3° et +3°.

Les composants sont regroupés dans un frame "Component Preview" :
- Background : transparent
- Overflow : HIDDEN (pour le fade/mask)
- Disposition : manuelle (absolute positioning)

---

## Design Tokens Summary

| Token | Usage |
|-------|-------|
| `Neutrals/Gray/1` (Dark #111111) | Background principal |
| `Neutrals/Gray/2` (Dark #191919) | Background zone droite subtil |
| `Palette/Default/12` | Texte principal (wordmark) |
| `Palette/Default/11` | Texte secondaire (tagline, chips) |
| `Palette/Default/6` | Subtle border (chips, séparateur) |
| `Palette/Default/3` | Background chips |
| `Palette/Accent/9` | Logo mark couleur solide |
| `Radius/Medium` | Border-radius chips |
| `Sizes/1` (16px) | Gap logo/wordmark |
| `Sizes/2` (32px) | Gap entre sections |
| `Sizes/8` (128px) | Padding horizontal zone gauche |

---

## Typographie

| Élément | Style DS | Clé |
|---------|---------|-----|
| Wordmark "Solar UI" | Display/Small | `ae6ae7f574d09d9d124bdea42d843e46c9b20f51` |
| Tagline | Body/Medium | `5997f81ddaf119e733d6f36e12e2f1a30cc10f63` |
| Stats chips | Label/Small | `254e33d3596300d38690bc7dc14d8dd7f16ec01c` |

Fonts à loader : `Geist Regular`, `Geist Medium`, `Geist SemiBold`

---

## Génération — Approche atomique

| Étape | Contenu | Script |
|-------|---------|--------|
| Step 1 | Frame principale 1920×960 + fond + zone gauche (layout) | ~50 lignes |
| Step 2 | Logo mark + wordmark + tagline + séparateur + chips | ~60 lignes |
| Step 3 | Zone droite + frame composants + positionnement | ~40 lignes |
| Step 4 | Import et placement des composants DS (grid) | ~80 lignes |
| Step 5 | Fade mask gradient + finitions visuelles | ~30 lignes |

→ Screenshot après chaque étape.

---

## Acceptance Criteria

- [ ] Frame 1920×960px, fond `Neutrals/Gray/1` Dark
- [ ] "Solar UI" visible et lisible en Display/Small
- [ ] Tagline lisible en Body/Medium
- [ ] 3 chips stats présents (38 components, Geist·Radix, Light & Dark)
- [ ] ≥ 8 composants DS visibles dans la zone droite
- [ ] Aucun hex hardcodé (sauf tracking wordmark — exception notée)
- [ ] Tous les composants DS importés, aucun raw frame pour les composants existants
- [ ] Logo mark soleil visuellement lisible et bien proportionné

---

## Open Questions

- Nombre exact à afficher : `38 components` (registry Figma) ou `54 components` (code) ? → **À confirmer par le user**
- ~~Faut-il un fond légèrement texturé (noise) ou rester flat ?~~ → **Noise/texture** ✓ confirmé
- Le logo mark : utiliser un SVG existant ou construire en raw frames Figma ?
