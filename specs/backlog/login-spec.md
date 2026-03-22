# Login

## Description

Page d'authentification de SolarUI. Permet à un utilisateur existant de se connecter avec son email et son mot de passe.

**Objectif utilisateur** : s'authentifier rapidement, sans friction.
**Contexte** : première page visible, accès non-authentifié. Page isolée (pas de navigation principale).

**Figma** : à générer

---

## Reference Screen

| | |
|---|---|
| **Reference URL** | None — nouveau layout, construction from scratch |
| **Reference node ID** | — |
| **Shell elements to clone** | — |
| **What changes vs reference** | N/A |

---

## Visual Reference

| | |
|---|---|
| **Pattern** | Page formulaire / détail (centré — auth variant) |
| **Screenshots studied** | Aucun screenshot disponible |
| **Key composition rules** | Card centré sur fond `Default/2`, 1 colonne, largeur 400px, gap champs `Sizes/1` (16px) |

**Composition notes:**
Auth pattern standard : fond pleine page `Default/2`, card centré verticalement et horizontalement (ou légèrement au-dessus du centre), logo en haut de la card, titre, champs, CTA, lien secondaire. Densité standard.

---

## Layout Structure

```
┌─────────────────────────────────────────────────┐  1440px
│                                                 │
│                                                 │  bg: Palette/Default/2
│         ┌──────────────────────────┐            │
│         │ Logo / Brand mark        │            │  haut de card
│         │                          │  400px     │
│         │ Titre (Title/Medium)     │            │
│         │ Subtitle (Body/Small)    │            │
│         │                          │            │
│         │ ─────────────────────── │            │
│         │                          │            │
│         │ [Label] Email            │            │
│         │ [Input]                  │            │
│         │                          │            │
│         │ [Label] Mot de passe     │            │
│         │ [Input type=password]    │            │
│         │           [Lien oublié?] │            │
│         │                          │            │
│         │ [Button Primary — full]  │            │
│         │                          │            │
│         │ ─────────────────────── │            │
│         │                          │            │
│         │ Pas de compte? [S'inscrire]│           │
│         └──────────────────────────┘            │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Sections

### 1. Brand mark
- **Purpose** : identité visuelle, réassurance
- **DS Components** : Texte statique ou logo SVG (hors DS)
- **Content** : "SolarUI" en `Title/Medium` ou logotype
- **Behavior** : statique

### 2. Header de card
- **Purpose** : orienter l'utilisateur
- **DS Components** : Texte natif Figma
- **Content** :
  - Titre : "Connexion" — `Title/Medium`, `Default/12`
  - Sous-titre : "Entrez vos identifiants pour accéder à votre compte." — `Body/Small`, `Default/11`
- **Behavior** : statique

### 3. Formulaire
- **Purpose** : saisie des identifiants
- **DS Components** :
  - `Label` × 2 (Email, Mot de passe)
  - `Input` × 2 (email + password)
  - `Button` (Se connecter, Primary, full-width)
  - `Button` (Mot de passe oublié ?, Link, aligné droite)
- **Content** :
  - Email : placeholder "email@exemple.fr"
  - Password : placeholder "••••••••"
- **Behavior** : champs verticaux, lien "Mot de passe oublié" sur la même ligne que le label password (aligné droite)

### 4. Footer de card
- **Purpose** : CTA d'inscription (utilisateurs sans compte)
- **DS Components** : `Separator` + texte `Body/Small` + `Button (Variant=Link)`
- **Content** : "Pas encore de compte ? S'inscrire"
- **Behavior** : lien vers /register

---

## States

| State | Description |
|-------|-------------|
| Default | Champs vides, bouton actif |
| Filled | Email + password saisis, bouton actif |
| Loading | Bouton désactivé + spinner (après soumission) |
| Error | Alert sous le formulaire : "Email ou mot de passe incorrect." + champs en état Invalid |

---

## DS Components Used

| Component | Variant/Size | Key | Strategy | Section |
|-----------|-------------|-----|----------|---------|
| `Card` | default | `983f910914027178b8b10e46c98ed027a140796b` | import | Conteneur principal |
| `Label` | default | `4b3b30400dd30001f02dac1e4beb2eaefdbe6e69` | import | Champ Email + Password |
| `Input` | Default, [State]=Default, Is Value=False | `1cdfffa0062c27aba7058a0f9e0adb4ce7041ba3` | import | Champ Email |
| `Input` | Default, [State]=Default, Is Value=False | `1cdfffa0062c27aba7058a0f9e0adb4ce7041ba3` | import | Champ Password |
| `Input` | Invalid, [State]=Invalid, Invalid=True | `1cdfffa0062c27aba7058a0f9e0adb4ce7041ba3` | import | État erreur |
| `Button` | Primary, [State]=Default | `4f378192f67ab48473791b225e61d598b33ae4ab` | import | CTA Se connecter |
| `Button` | Link, [State]=Default | `4f378192f67ab48473791b225e61d598b33ae4ab` | import | Mot de passe oublié + S'inscrire |
| `Separator` | default | `6a5656b694fcd78865226165464aa02df033d357` | import | Séparateur footer |
| `Alert` | default | `dad1d7be23188216006a554044db24f7e3fa0d6e` | import | État erreur global |

---

## New DS Components Required

None — tous les patterns sont couverts par les composants DS existants.

---

## Content Structure

**Card title** : "Connexion"
**Card subtitle** : "Entrez vos identifiants pour accéder à votre compte."
**Email label** : "Adresse email"
**Email placeholder** : "email@exemple.fr"
**Password label** : "Mot de passe"
**Password placeholder** : "••••••••"
**Lien oublié** : "Mot de passe oublié ?"
**CTA** : "Se connecter"
**Footer** : "Pas encore de compte ?"  +  lien "S'inscrire"
**Erreur** : "Adresse email ou mot de passe incorrect."

---

## Design Tokens

### Layout
| Token | Valeur | Usage |
|-------|--------|-------|
| `Sizes/1` | 16px | Gap entre champs |
| `Sizes/1,50` | 24px | Padding interne card |
| `Sizes/0,25` | 4px | Gap label → input |
| `Sizes/0,75` | 12px | Gap label → lien "oublié" (row) |
| Card width | 400px | Fixe |

### Couleurs
| Token | Usage |
|-------|-------|
| `Palette/Default/2` | Fond de page |
| `Palette/Default/1` | Fond card |
| `Palette/Default/7` | Bordure card + inputs |
| `Palette/Default/12` | Titre |
| `Palette/Default/11` | Sous-titre, labels, placeholder |
| `Palette/Accent/9` | Fond bouton Primary |
| `Palette/Error/7-8` | Bordure input en erreur |
| `Palette/Error/11` | Texte message d'erreur |

### Typographie
| Élément | Style |
|---------|-------|
| Titre card | `Title/Medium` |
| Sous-titre | `Body/Small` |
| Labels | `Label/Small` |
| Bouton | `_UI/Button` |
| Footer text | `Body/Small` |

---

## Responsive Rules

| Breakpoint | Layout |
|-----------|--------|
| Desktop (>1024px) | Card 400px centré, fond full-page |
| Tablet (768-1024px) | Card 400px centré, idem |
| Mobile (<768px) | Card full-width (margin 16px de chaque côté), pas de bg |

---

## Acceptance Criteria

- [ ] Card centré verticalement et horizontalement sur fond `Default/2`
- [ ] Largeur card : 400px (desktop/tablet)
- [ ] Email input pleine largeur dans la card
- [ ] Password input pleine largeur avec lien "oublié" aligné droite
- [ ] Bouton "Se connecter" pleine largeur
- [ ] État erreur affiché avec Alert + inputs en Invalid
- [ ] Séparateur + footer avec lien "S'inscrire"
- [ ] Tous les tokens DS utilisés (pas de hex hardcodé)

---

## Decisions

1. **Logo** : logo SolarUI (texte stylisé) en haut de la card
2. **OAuth** : boutons "Continuer avec Google" + "Continuer avec GitHub" (Button Variant=Secondary, full-width), placés AU-DESSUS du formulaire email/password, séparés par un Separator "ou"
3. **Fond** : fond neutre `Palette/Default/2`
