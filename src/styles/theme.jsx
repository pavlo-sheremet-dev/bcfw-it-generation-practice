export const theme = Object.freeze({
  fs: {
    xs: '0.075rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    title: '1.75rem',
    title2: '2rem',
  },
  fw: {
    title: 600,
    subTitle: 500,
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1280px',
    xl: '1920px',
  },
});
