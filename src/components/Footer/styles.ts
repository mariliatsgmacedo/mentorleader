import styled from "styled-components";
import { transparentize } from 'polished';

export const ContainerFooter = styled.footer`
 background: ${transparentize(0.9, '#C4C4C4')};
 width: 100%;
 position: absolute;
 bottom: 0;

 @media (max-width: 600px) {
        position: relative;
    }
`;

export const Content = styled.section`
    max-width: 1120px;
    padding: 1rem;
    margin: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        display: inline-block;
        list-style: none;
    }
    img {
        width: 40px;
        height: 40px;
        margin-left: 24px;
    }
`;