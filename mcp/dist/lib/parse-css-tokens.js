import { readFileSync } from 'fs';
import { PATHS } from './paths.js';
let cached = null;
export function parseCssTokens() {
    if (cached)
        return cached;
    const css = readFileSync(PATHS.solarThemeCss, 'utf-8');
    const semanticGroups = {};
    let radius = '0.5rem';
    let heightControl = '2.25rem';
    const themeMatch = css.match(/@theme\s*\{([^}]+)\}/);
    if (themeMatch) {
        const themeBlock = themeMatch[1] ?? '';
        const tokenRegex = /--color-(\w+)-\d+:\s*var\(--(\w+)-\d+\)/g;
        let match;
        while ((match = tokenRegex.exec(themeBlock)) !== null) {
            const group = match[1];
            const color = match[2];
            if (group && color && !semanticGroups[group]) {
                semanticGroups[group] = color;
            }
        }
        const radiusMatch = themeBlock.match(/--radius:\s*([^;]+)/);
        if (radiusMatch?.[1])
            radius = radiusMatch[1].trim();
        const heightMatch = themeBlock.match(/--height-control:\s*([^;]+)/);
        if (heightMatch?.[1])
            heightControl = heightMatch[1].trim();
    }
    cached = { semanticGroups, radius, heightControl };
    return cached;
}
