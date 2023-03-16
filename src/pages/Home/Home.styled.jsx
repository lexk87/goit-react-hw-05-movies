import styled from 'styled-components';

export const Main = styled.main``;

export const MainTitle = styled.h1`
    text-align: center;
    color: lightgray;
    margin-bottom: 30px;
    font-size: 32px;
    @media screen and (min-width: 480px) {
        font-size: 36px;
    }
    @media screen and (min-width: 768px) {
        font-size: 40px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 44px;
    }
`;
