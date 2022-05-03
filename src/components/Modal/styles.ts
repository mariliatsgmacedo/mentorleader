import styled from "styled-components";

export const ContainerModal = styled.main`
    background: var(--background-modal);
    border-radius: 4px;
    text-align: center;
    
    button {
        text-align: center;
        width: 50%;
        padding: 0.25rem;
        border-radius: 0.25rem;
        border: 1px solid #821284;
        background: transparent;
        color: var(--primary-color);
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    `;

export const Content = styled.section`
    padding: 1rem;
    text-align: start;

    hr{
        margin-bottom: 1rem;
    }

`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    h3 {
        font-size: 2rem;
    }

    img {
        width: 10rem;
        height: 10%;
        padding: 0.25rem;
        border-radius: 50%;
    }
`;

export const List = styled.ul`
    display: flex;
    padding: 0.25rem;

    li {
      padding: 0.5rem 1rem;
      list-style: none;
      background-color: var(--primary-color);
      border-radius:1rem;
      color: var(--light-font-white);
      margin-right: 1rem;
      margin-bottom: 1rem;

    }
`;



