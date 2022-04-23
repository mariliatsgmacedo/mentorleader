import { createGlobalStyle } from 'styled-components';
import { convert } from '../utils/pixels-convert';

export const GlobalStyle = createGlobalStyle`
 :root {
        --background-html: #F0F2F5;
        --primary-color:#821284;
    }
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (min-width: 720px){
            font-size: 87.5% ; //14px
        }
    }
    /* html{
        font-size: ${convert(24)};
        @media(max-width: 768px){
            font-size: ${convert(18)};
        }
        @media(max-width: 1024px){
            font-size: ${convert(16)};
        }
    } */
    body {
        background: var(--background-html) ;
        -webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button {
        font-family: 'Nunito', sans-serif;
        font-weight:400;
    }
    
    button {
        cursor: pointer;
    }

`;