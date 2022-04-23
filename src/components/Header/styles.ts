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

    a {
        color: var(--light-font-white);
        text-decoration: none;
    }

    button {
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
    }

    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;