import { css } from '@emotion/react';

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

    @media (min-width: 768px) {
      max-width: 768px;
      grid-template-areas:
        'header header'
        'sidebar main'
        'footer footer';
    }

    @media (min-width: 1280px) {
      max-width: 1280px;
    }

    @media (min-width: 1920px) {
      max-width: 1920px;
    }
  }
`;
