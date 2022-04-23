import styled from "styled-components";
import { transparentize } from "polished";

export const ContainerCardBanner = styled.section`
    max-width: 1120px;
    margin: 3rem auto;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Cards = styled.article`
    background: ${transparentize(0.9, '#C4C4C4')};
    text-align: center;
    padding: 2rem;
    max-width: 25rem;
    border-radius: 0.25rem;

    img {
        width: 20%;
        height: 20%;
    }

    p{
        margin-top: 1rem;
    }

   
`;