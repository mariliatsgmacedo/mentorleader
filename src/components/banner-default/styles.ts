import styled from "styled-components";
import { transparentize } from 'polished';

export const ContainerBanner = styled.section`
    background: ${transparentize(0.9, '#C4C4C4')};
    
    max-width: 1100px;
    margin: 1.2rem auto 3rem auto;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    

    img {
        width: 200px;
        height: 200px;
    }

    p {
        margin-left: 16px;
        text-align: center;
        line-height: 1.7rem;
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;
    }

`;
