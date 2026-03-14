import { parseCssTokens } from '../lib/parse-css-tokens.js';
const STEP_ROLES = [
    { step: 1, role: 'App background', tailwindClass: g => `bg-${g}-1`, example: 'Page background' },
    { step: 2, role: 'Subtle background', tailwindClass: g => `bg-${g}-2`, example: 'Card or sidebar background' },
    { step: 3, role: 'UI element background', tailwindClass: g => `bg-${g}-3`, example: 'Inactive button or input background' },
    { step: 4, role: 'Hovered UI element background', tailwindClass: g => `bg-${g}-4`, example: 'Hovered row or button hover state' },
    { step: 5, role: 'Active/selected element', tailwindClass: g => `bg-${g}-5`, example: 'Selected row or pressed element' },
    { step: 6, role: 'Subtle border', tailwindClass: g => `border-${g}-6`, example: 'Hairline dividers, table borders' },
    { step: 7, role: 'UI element border', tailwindClass: g => `border-${g}-7`, example: 'Input border, ring in resting state' },
    { step: 8, role: 'Hovered UI element border', tailwindClass: g => `border-${g}-8`, example: 'Input border on focus or hover' },
    { step: 9, role: 'Solid background', tailwindClass: g => `bg-${g}-9`, example: 'Primary action button fill, badge background' },
    { step: 10, role: 'Hovered solid background', tailwindClass: g => `bg-${g}-10`, example: 'Hover state of a solid button' },
    { step: 11, role: 'Low-contrast text', tailwindClass: g => `text-${g}-11`, example: 'Secondary text, placeholders, muted labels' },
    { step: 12, role: 'High-contrast text', tailwindClass: g => `text-${g}-12`, example: 'Primary body text, headings' },
];
const ANTI_PATTERNS = [
    'Never use `dark:` prefixes — dark mode is fully automatic via Radix UI color variables.',
    'Never use shadcn/ui default tokens like `text-muted-foreground`, `bg-background`, `text-foreground`, `text-primary`. Use SolarUI semantic tokens instead (e.g. `text-default-11`, `bg-default-1`, `text-default-12`, `bg-brand-9`).',
    'Never use arbitrary hex values for colors. Always use a semantic group + step (e.g. `bg-error-3` instead of `bg-[#ff0000]`).',
    'Do not invent new token names. The only valid groups are: default, brand, error, success, warning, info.',
];
export function getColorToken(group, step) {
    const tokens = parseCssTokens();
    if (!group) {
        // Return overview of all groups
        const overview = {
            groups: Object.entries(tokens.semanticGroups).map(([g, radixColor]) => ({
                group: g,
                radixColor,
                purpose: groupPurpose(g),
                exampleClasses: [`bg-${g}-9`, `text-${g}-11`, `border-${g}-7`],
            })),
            layoutTokens: {
                radius: tokens.radius,
                heightControl: tokens.heightControl,
                heightControlNote: 'Use h-control (--height-control) for all buttons and form inputs to ensure alignment.',
            },
            stepRoles: STEP_ROLES.map(s => ({ step: s.step, role: s.role })),
            antiPatterns: ANTI_PATTERNS,
        };
        return JSON.stringify(overview, null, 2);
    }
    const radixColor = tokens.semanticGroups[group];
    if (!radixColor) {
        const valid = Object.keys(tokens.semanticGroups).join(', ');
        return `Unknown group "${group}". Valid groups: ${valid}`;
    }
    if (step !== undefined) {
        const stepInfo = STEP_ROLES.find(s => s.step === step);
        if (!stepInfo)
            return `Invalid step ${step}. Steps must be between 1 and 12.`;
        return JSON.stringify({
            group,
            step,
            radixColor,
            tailwindClass: stepInfo.tailwindClass(group),
            role: stepInfo.role,
            example: stepInfo.example,
            antiPatterns: ANTI_PATTERNS,
        }, null, 2);
    }
    // Full group breakdown
    const result = {
        group,
        radixColor,
        purpose: groupPurpose(group),
        steps: STEP_ROLES.map(s => ({
            step: s.step,
            role: s.role,
            tailwindClass: s.tailwindClass(group),
            example: s.example,
        })),
        antiPatterns: ANTI_PATTERNS,
    };
    return JSON.stringify(result, null, 2);
}
function groupPurpose(group) {
    const purposes = {
        default: 'Neutral grays for backgrounds, text, borders, and general UI chrome.',
        brand: 'Primary brand color for CTAs, links, and key interactive elements.',
        error: 'Destructive actions, validation errors, and critical alerts.',
        success: 'Positive confirmations, completed states, and success feedback.',
        warning: 'Caution states, warnings, and non-critical alerts.',
        info: 'Informational messages, tips, and neutral highlights.',
    };
    return purposes[group] ?? '';
}
