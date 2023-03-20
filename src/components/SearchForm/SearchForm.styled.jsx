import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchFilmForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    padding: 0 15px;
    width: calc(100% - 40px);
    height: 40px;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: #2d3035;
    @media screen and (min-width: 480px) {
        width: 440px;
    }
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    color: #2d3035;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: green;
    }
`;

export const SearchIcon = styled(FaSearch)`
    width: 25px;
    height: 25px;
    fill: currentColor;
`;
