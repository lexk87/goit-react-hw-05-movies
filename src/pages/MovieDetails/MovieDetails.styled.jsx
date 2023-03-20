import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main``;

export const BackLink = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    height: 40px;
    padding: 0 30px;
    background-color: #2d3035;
    color: lightgray;
    font-size: 21px;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: green;
    }
`;

export const MovieCard = styled.div`
    padding: 15px;
    background-color: #2d3035;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 30px;
    }
`;

export const ImgWrapper = styled.div`
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
        margin: 0;
        width: 300px;
    }
    @media screen and (min-width: 1200px) {
        width: 400px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    @media screen and (min-width: 480px) {
        height: 615px;
    }
    @media screen and (min-width: 768px) {
        height: 450px;
    }
    @media screen and (min-width: 1200px) {
        height: 600px;
    }
`;

export const InfoWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 368px;
    }
    @media screen and (min-width: 1200px) {
        width: 700px;
    }
`;

export const MovieTitle = styled.h1`
    color: lightgray;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (min-width: 480px) {
        font-size: 32px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 40px;
    }
`;

export const Txt = styled.p`
    color: lightgray;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const TxtBold = styled.span`
    font-size: 21px;
    font-weight: 700;
`;

export const SubTitle = styled.h2`
    color: lightgray;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media screen and (min-width: 480px) {
        flex-direction: row;
        gap: 30px;
    }
`;

export const MoreDetailsLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 151px;
    padding: 0 30px;
    background-color: lightgray;
    height: 40px;
    font-size: 21px;
    font-weight: 700;
    color: #2d3035;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: green;
    }
`;
