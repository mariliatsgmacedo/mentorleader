import styled from "styled-components";
import { transparentize } from "polished";

export const Title = styled.h1`
    max-width: 1100px;
    margin:auto;
    text-align: center;
`;

export const ContainerMentorCard = styled.section`
    background: ${transparentize(0.9, '#C4C4C4')};
    max-width: 1100px;
    margin: 3rem auto;
    padding: 1rem;
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Cards = styled.article`
    background: var(--background-html);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    border-radius: 0.25rem;

    margin-right: 1rem;

    img {
        width: 50%;
        margin: 0.25rem;
    }

    h4{
        font-size: 1.2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 0.25rem;
    }

    p{
        width: 80%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 1rem;
    }

    button {
        width: 80%;
        padding: 0.6rem;
        border-radius: 0.25rem;
        border: 1px solid #C0C0C0;
        margin-bottom: 1rem;
        background: transparent;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        width: 70%;
        justify-content: center;
        align-items: center;
    }

`;

