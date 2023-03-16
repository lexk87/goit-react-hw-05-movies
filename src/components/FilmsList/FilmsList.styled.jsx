import styled from 'styled-components';

export const Films = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
