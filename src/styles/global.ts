import { css } from "@linaria/core";

export default css`
  :global() {
    :root {
    }

    html {
    }

    body {
      font-family: "Work Sans", system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", Arial, sans-serif;
      font-optical-sizing: auto;
      font-size: var(--font-size-base);
    }

    * {
      box-sizing: border-box;
    }

    /* prettier-ignore */
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    button {
      font-family: inherit;
    }

    input {
      font-family: "Work Sans";
    }

    img {
      object-fit: cover;
    }

    a {
      text-decoration: none;
    }

    pre code {
      font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono", "Oxygen Mono", "Ubuntu Mono", "Source Code Pro",
        "Fira Mono", "Droid Sans Mono", "Consolas", "Courier New", monospace;
    }
  }
`;
