import styled from "styled-components";
import { transparentize } from 'polished';

export const Container = styled.article`
    background: ${transparentize(0.9, '#C4C4C4')};
    font-weight: 400;
    font-size: 1.5rem;
    margin: 3rem auto;
    max-width: 1100px;
    padding: 3rem 1rem;
    text-align: center;
`;

