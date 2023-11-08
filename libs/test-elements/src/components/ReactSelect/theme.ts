import { Theme } from 'react-select';

const SLATE_300 = '#cbd5e1';

export const customTheme = (theme: Theme): Theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    neutral20: SLATE_300,
  },
});
