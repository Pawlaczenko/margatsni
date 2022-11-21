import { css } from "styled-components";

const variables = css`
    :root {
        // COLORS
        --base-color-white: 0, 0%;
        --color-grey-background: hsla(var(--base-color-white),98%,100%);
        --color-grey-lightest: hsla(var(--base-color-white),96%,100%);
        --color-grey-light: hsla(var(--base-color-white),85%,100%);
        --color-grey: hsla(var(--base-color-white),58%,100%);

        --base-color-blue: 216, 56%;
        --color-blue: hsla(var(--base-color-blue),50%,100%);

        //GENERAL STYLES
    }
`;

export default variables;