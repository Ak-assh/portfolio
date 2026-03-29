export type Theme = 'eclipse' | 'ember' | 'arctic';

export const THEMES: Theme[] = ['eclipse', 'ember', 'arctic'];

export function getNextTheme(current: Theme): Theme {
  const index = THEMES.indexOf(current);
  return THEMES[(index + 1) % THEMES.length];
}
