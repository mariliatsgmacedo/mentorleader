import styled from "styled-components";

export const Container = styled.header`
    background: var(--primary-color);
`;

export const ContentHeader = styled.section`
    max-width: 1120px;
    margin: auto;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        flex-direction: row;
    }

    a {
        color: var(--light-font-white);
        text-decoration: none;
    }

    nav a {
        background: rgba(0,0,0,0.2);
        color: var(--light-font-white);
        padding: 0.7rem 1rem;
        margin: 1rem;
        border-radius: 4px;
    }
    /* nav > :first-child {
        background: rgba(0,0,0,0.2);
        color: var(--light-font-white);
        padding: 0.7rem 1rem;
        margin: 1rem;
        border-radius: 4px;
    } */

    button[type=button] {
        background: transparent;
        border: none;
        font-size: 2.5rem;
        color: var(--light-font-white);
    }

    /* button {
        background: rgba(0,0,0,0.2);
        color: var(--light-font-white);

        border: none;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0 2rem;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.7);
        }  
    } */

    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;