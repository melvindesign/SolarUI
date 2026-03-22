# NavigationMenuItem Component

## Description

Élément de navigation du DS SolarUI. Couvre trois cas d'usage au sein d'une barre de navigation :

- **Link** — lien direct vers une page, sans dropdown.
- **Trigger** — déclencheur de dropdown. Toujours accompagné d'un ChevronDown fixe qui pivote à 180° à l'ouverture.
- **ContentLink** — lien à l'intérieur d'un `NavigationMenuContent` (dropdown). Structure verticale, supporte titre + description optionnelle.

**Principe de design** : surface interactive uniforme entre Link et Trigger pour une top bar lisible ; ContentLink enrichit le dropdown avec une hiérarchie titre/description.

| Niveau | Composant | Rôle |
|--------|-----------|------|
| 1 — Component Set | `NavigationMenuItem` | Item de nav — 3 variants |

**Figma :** à générer

---

## Architecture Overview

```
NavigationMenuItem (Component Set — Variant=Link | Trigger | ContentLink)
│
├── Variant=Link
│   ├── [optional] LeadingIcon  ← INSTANCE_SWAP, contrôlé par showLeadingIcon
│   └── Label                  ← TEXT
│
├── Variant=Trigger
│   ├── [optional] LeadingIcon  ← INSTANCE_SWAP, contrôlé par showLeadingIcon
│   ├── Label                  ← TEXT
│   └── ChevronDown            ← FIXE (toujours présent, pas de toggle)
│                                 rotation 180° quand State=Open
│
└── Variant=ContentLink
    ├── [optional] LeadingIcon  ← INSTANCE_SWAP, contrôlé par showLeadingIcon
    ├── Title                  ← TEXT
    └── [optional] Description ← TEXT, contrôlé par showDescription
```

---

## Variants & States

### Variant = Link

| State | Background | Text | Icon |
|-------|-----------|------|------|
| Default | `Palette/Default/1` | `Palette/Default/12` | `Palette/Default/11` |
| Hover | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` |
| Focus | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` |
| Active | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` |
| Disabled | `Palette/Default/1` | `Palette/Default/12` | `Palette/Default/11` |

### Variant = Trigger

| State | Background | Text | Chevron |
|-------|-----------|------|---------|
| Default | `Palette/Default/1` | `Palette/Default/12` | `Palette/Default/11`, 0° |
| Hover | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11`, 0° |
| Focus | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11`, 0° |
| Open | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11`, 180° |
| Open+Hover | `Palette/Default/4` | `Palette/Default/12` | `Palette/Default/11`, 180° |
| Active | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11`, 180° |
| Active+Hover | `Palette/Default/4` | `Palette/Default/12` | `Palette/Default/11`, 180° |
| Disabled | `Palette/Default/1` | `Palette/Default/12` | `Palette/Default/11`, 0° |

### Variant = ContentLink

| State | Background | Title | Description | Icon |
|-------|-----------|-------|-------------|------|
| Default | transparent | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |
| Hover | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |
| Focus | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |
| Active | `Palette/Default/3` | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |
| Active+Hover | `Palette/Default/4` | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |
| Disabled | transparent | `Palette/Default/12` | `Palette/Default/11` | `Palette/Default/11` |

> Focus ring (`Palette/Default/7`, 3px) présent sur Link / Trigger / ContentLink en State=Focus.
> Disabled : opacité 50% sur tous les variants.

---

## Layout Specs

### Link & Trigger

| Property | Value | Token |
|----------|-------|-------|
| Hauteur | 36px (fixe) | `Sizes/2,25` |
| Padding horizontal | 16px | `Sizes/1` |
| Padding vertical | 8px | `Sizes/0,5` |
| Gap icon ↔ label | 8px | `Sizes/0,5` |
| Gap label ↔ chevron (Trigger) | 4px | `Sizes/0,25` |
| Border radius | medium | `Radius/Medium` |
| Layout direction | HORIZONTAL | — |
| Align | CENTER | — |
| Icon size (leading) | 16×16px | — |
| Chevron size (Trigger) | 12×12px | — |

### ContentLink

| Property | Value | Token |
|----------|-------|-------|
| Padding | 8px | `Sizes/0,5` |
| Gap icon ↔ textes | 8px | `Sizes/0,5` |
| Gap title ↔ description | 4px | `Sizes/0,25` |
| Border radius | small | `Radius/Small` |
| Layout direction | HORIZONTAL (icon + colonne texte) | — |
| Colonne texte direction | VERTICAL | — |
| Icon size (leading) | 16×16px | — |
| Width | FILL (dans son conteneur) | — |

---

## Typographie

| Élément | Style |
|---------|-------|
| Label (Link / Trigger) | `Body/Small` (text-sm font-medium) |
| Title (ContentLink) | `Body/Small` (text-sm font-medium) |
| Description (ContentLink) | `Body/XSmall` ou `Label/XSmall` |

---

## Component Properties (Figma)

| Property | Type | Applies to | Default | Description |
|----------|------|-----------|---------|-------------|
| `Variant` | VARIANT | tous | Link | Link / Trigger / ContentLink |
| `State` | VARIANT | tous | Default | voir tables ci-dessus |
| `label` | TEXT | Link, Trigger | "Navigation" | Texte du label |
| `title` | TEXT | ContentLink | "Title" | Titre du lien content |
| `description` | TEXT | ContentLink | "Description" | Description optionnelle — multiligne, textAutoResize HEIGHT |
| `showLeadingIcon` | BOOLEAN | tous | false | Affiche/masque l'icône de tête |
| `leadingIcon` | INSTANCE_SWAP | tous | Icon/Grid | Icône de tête (swap) |
| `showDescription` | BOOLEAN | ContentLink | false | Affiche/masque la description |

> **ChevronDown sur Trigger** : toujours présent, pas de propriété BOOLEAN. La rotation est un état visuel (State=Open vs autres).

---

## Design Tokens Summary

### Spacing
| Token | Valeur | Usage |
|-------|--------|-------|
| `Sizes/2,25` | 36px | Hauteur Link & Trigger |
| `Sizes/1` | 16px | Padding horizontal Link & Trigger |
| `Sizes/0,5` | 8px | Padding vertical, gap icon/label, padding ContentLink |
| `Sizes/0,25` | 4px | Gap label/chevron, gap title/description |

### Couleurs
| Token | Usage |
|-------|-------|
| `Palette/Default/1` | Fond default (Link, Trigger) |
| `Palette/Default/3` | Fond hover / focus / active / open |
| `Palette/Default/4` | Fond open+hover / active+hover |
| `Palette/Default/11` | Icônes, chevron, description, texte secondaire |
| `Palette/Default/12` | Labels, titres |
| `Palette/Default/7` | Focus ring |

### Typographie
| Style | Usage |
|-------|-------|
| `Body/Small` | Label (Link/Trigger), Title (ContentLink) |
| `Body/XSmall` ou `Label/XSmall` | Description (ContentLink) |

---

## Acceptance Criteria

- [ ] Component set avec 3 variants (Link / Trigger / ContentLink)
- [ ] Tous les states présents pour chaque variant
- [ ] `label` (TEXT) exposé sur Link et Trigger
- [ ] `title` et `description` (TEXT) exposés sur ContentLink
- [ ] `showLeadingIcon` (BOOLEAN) + `leadingIcon` (INSTANCE_SWAP) sur les 3 variants
- [ ] `showDescription` (BOOLEAN) sur ContentLink
- [ ] ChevronDown toujours présent sur Trigger, **pas de BOOLEAN**
- [ ] State=Open → ChevronDown visuellement rotaté (180°)
- [ ] ContentLink fond transparent en Default (pas `Default/1`)
- [ ] Tous les tokens DS utilisés, aucun hex hardcodé
- [ ] Hauteur 36px fixe sur Link & Trigger
- [ ] Disabled = opacité 50% sur les 3 variants
- [ ] Focus ring visible sur State=Focus, 3 variants

---

## Open Questions

Aucune — spec complète.

## Drop Notes
**Dropped**: 2026-03-21
**Reason**: Priorité changée — file cover Figma Community
**Learnings**: Spec complète et validée, prête pour une prochaine session. Architecture propre (3 variants Link/Trigger/ContentLink), tokens correctement mappés.
