import { css } from "styled-components";

const variables = css`
    :root {
        // COLORS
        --base-color-white: 0, 0%;
        --color-grey-background: var(--base-color-white,98%,100%);
        --color-grey-lightest: var(--base-color-white,96%,100%);
        --color-grey-light: var(--base-color-white,85%,100%);
        --color-grey: var(--base-color-white,58%,100%);

        --base-color-blue: 216, 56%;
        --color-blue: hsla(var(--base-color-blue),50%,100%);

        //GENERAL STYLES
    }
`;

export default variables;