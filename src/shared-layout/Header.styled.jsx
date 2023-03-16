import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';

export const AppHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2d3035;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const Navigation = styled.nav`
    padding: 20px;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 40px;
    @media screen and (min-width: 480px) {
        margin: 0 auto;
        width: 480px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export const NavigationLink = styled(NavLink)`
    color: lightgray;
    font-size: 21px;
    font-weight: 700;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:first-child.active {
        color: lightgray;
    }
    &:first-child.active:hover,
    &:first-child.active:focus {
        color: green;
    }
    &.active {
        color: green;
    }
    &:hover,
    &:focus {
        color: green;
    }
`;

export const HeaderLogo = styled(SiThemoviedatabase)`
    fill: currentColor;
    width: 40px;
    height: 40px;
`;
