import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
        --background-html: #F0F2F5;
        --background-modal: #f5f5f5;
        --primary-color:#821284;

        --light-font-white:#f7f7f7;
        --light-font-dark:#363636;

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

    //Modal Style

    .react-override-modal {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 700px;
        padding: 3rem;
        background: var(--background);
        position: relative;
        border-radius: 0.25rem;
    }

`;