"use client"

import {
  amber, amberDark,
  blue, blueDark,
  bronze, bronzeDark,
  brown, brownDark,
  crimson, crimsonDark,
  cyan, cyanDark,
  gold, goldDark,
  grass, grassDark,
  gray, grayDark,
  green, greenDark,
  indigo, indigoDark,
  iris, irisDark,
  jade, jadeDark,
  lime, limeDark,
  mauve, mauveDark,
  mint, mintDark,
  olive, oliveDark,
  orange, orangeDark,
  pink, pinkDark,
  plum, plumDark,
  purple, purpleDark,
  red, redDark,
  ruby, rubyDark,
  sage, sageDark,
  sand, sandDark,
  sky, skyDark,
  slate, slateDark,
  teal, tealDark,
  tomato, tomatoDark,
  violet, violetDark,
  yellow, yellowDark,
} from "@radix-ui/colors"

type ColorObj = Record<string, string>

const COLOR_LIGHT: Record<string, ColorObj> = {
  gray, mauve, slate, sage, olive, sand,
  tomato, red, ruby, crimson, pink, plum, purple, violet, iris, indigo,
  blue, cyan, teal, jade, green, grass, mint, sky,
  lime, yellow, amber, orange,
  brown, bronze, gold,
}

const COLOR_DARK: Record<string, ColorObj> = {
  gray: grayDark, mauve: mauveDark, slate: slateDark, sage: sageDark, olive: oliveDark, sand: sandDark,
  tomato: tomatoDark, red: redDark, ruby: rubyDark, crimson: crimsonDark, pink: pinkDark, plum: plumDark,
  purple: purpleDark, violet: violetDark, iris: irisDark, indigo: indigoDark,
  blue: blueDark, cyan: cyanDark, teal: tealDark, jade: jadeDark, green: greenDark, grass: grassDark,
  mint: mintDark, sky: skyDark,
  lime: limeDark, yellow: yellowDark, amber: amberDark, orange: orangeDark,
  brown: brownDark, bronze: bronzeDark, gold: goldDark,
}

function getSteps(colorName: string, dark = false): string[] {
  const obj = dark ? COLOR_DARK[colorName] : COLOR_LIGHT[colorName]
  if (!obj) return []
  return Array.from({ length: 12 }, (_, i) => obj[`${colorName}${i + 1}`])
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function ColorScale({ name, dark = false }: { name: string; dark?: boolean }) {
  const steps = getSteps(name, dark)

  return (
    <div className="not-prose flex items-center gap-0.5 my-1">
      <span className="w-20 shrink-0 text-xs text-default-11 font-medium">{capitalize(name)}</span>
      <div className="flex flex-1 gap-0.5 min-w-0">
        {steps.map((color, i) => (
          <div
            key={i}
            title={`${name}${i + 1}: ${color}`}
            className="h-8 flex-1 rounded"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}

const GROUPS: { label: string; colors: string[] }[] = [
  {
    label: "Grays",
    colors: ["gray", "mauve", "slate", "sage", "olive", "sand"],
  },
  {
    label: "Reds & Pinks",
    colors: ["tomato", "red", "ruby", "crimson", "pink"],
  },
  {
    label: "Purples & Blues",
    colors: ["plum", "purple", "violet", "iris", "indigo", "blue"],
  },
  {
    label: "Greens",
    colors: ["cyan", "teal", "jade", "green", "grass", "mint", "sky"],
  },
  {
    label: "Warm",
    colors: ["lime", "yellow", "amber", "orange"],
  },
  {
    label: "Metals",
    colors: ["brown", "bronze", "gold"],
  },
]

export function RadixPalette({ dark = false }: { dark?: boolean }) {
  return (
    <div className="not-prose my-6 space-y-6">
      {GROUPS.map((group) => (
        <div key={group.label}>
          <p className="mb-2 text-xs font-semibold text-default-11 uppercase tracking-wider">{group.label}</p>
          <div className="space-y-1">
            <div className="flex items-center gap-0.5">
              <span className="w-20 shrink-0" />
              <div className="flex flex-1 gap-0.5 min-w-0">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="flex-1 text-center text-[10px] text-default-11 pb-0.5">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            {group.colors.map((name) => (
              <ColorScale key={name} name={name} dark={dark} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function SolarTokens() {
  const tokens = [
    { name: "default", color: "gray", label: "Gray — Surfaces, borders, text" },
    { name: "brand", color: "orange", label: "Orange — Primary actions" },
    { name: "error", color: "red", label: "Red — Destructive / invalid" },
    { name: "success", color: "green", label: "Green — Confirmation" },
    { name: "warning", color: "amber", label: "Amber — Warning" },
    { name: "info", color: "sky", label: "Sky — Informational" },
  ]

  return (
    <div className="not-prose my-6 space-y-2">
      <div className="flex items-center gap-0.5 mb-1">
        <span className="w-44 shrink-0" />
        <div className="flex flex-1 gap-0.5 min-w-0">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="flex-1 text-center text-[10px] text-default-11 pb-0.5">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      {tokens.map(({ name, color, label }) => {
        const steps = getSteps(color)
        return (
          <div key={name} className="flex items-center gap-0.5">
            <div className="w-44 shrink-0">
              <span className="text-xs font-mono font-medium text-default-12">{name}</span>
              <span className="ml-2 text-xs text-default-11">({color})</span>
            </div>
            <div className="flex flex-1 gap-0.5 min-w-0">
              {steps.map((c, i) => (
                <div
                  key={i}
                  title={`${name}-${i + 1} / ${color}${i + 1}: ${c}`}
                  className="h-8 flex-1 rounded"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
