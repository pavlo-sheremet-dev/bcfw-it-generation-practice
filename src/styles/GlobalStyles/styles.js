import { css } from '@emotion/react';

import { theme } from 'styles';

export const globalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    min-height: 100vh;
    background: #cccccc;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .particle {
    z-index: -1;
  }

  #root {
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: ${theme.breakpoints.md};
      grid-template-areas:
        'header header'
        'sidebar main'
        'footer footer';
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: ${theme.breakpoints.lg};
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: ${theme.breakpoints.xl};
    }
  }

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in;
  }
`;
