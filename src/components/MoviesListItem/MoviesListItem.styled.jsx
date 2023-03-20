import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 100%;
    @media screen and (min-width: 480px) {
        width: calc((100% - 30px) / 2);
    }
    @media screen and (min-width: 768px) {
        width: calc((100% - 60px) / 3);
    }
    @media screen and (min-width: 1200px) {
        width: calc((100% - 90px) / 4);
    }
`;

export const ItemLink = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #2d3035;
    height: 100%;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.05);
    }

    &:hover Img,
    &:focus Img {
        transform: scale(1.2);
    }

    &:hover p,
    &:focus p {
        color: green;
    }
`;

export const ImgWrapper = styled.div`
    width: 100%;
    margin-bottom: 15px;
    overflow: hidden;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    object-fit: cover;
    @media screen and (min-width: 480px) {
        height: 260px;
    }
    @media screen and (min-width: 768px) {
        height: 288px;
    }
    @media screen and (min-width: 1200px) {
        height: 356px;
    }
`;

export const ItemTitle = styled.p`
    color: lightgray;
    font-size: 24px;
    font-weight: 700;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 480px) {
        font-size: 18px;
    }
`;
