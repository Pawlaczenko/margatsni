import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import variables from "./variables";
import animations from "./animations";

const GlobalStyle = createGlobalStyle`
    ${variables}
    ${animations}

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }

    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
    }

    .react-icons {
        vertical-align: middle;
        display: inline;
    }

    ${reset}
`;

export default GlobalStyle;