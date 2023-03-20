import styled from 'styled-components';

export const ReviewsList = styled.ul`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const ReviewsItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #2d3035;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 100%;
`;

export const Txt = styled.p`
    color: lightgray;
    font-size: 18px;
    &:first-of-type {
        margin-bottom: 15px;
    }
`;

export const TxtBold = styled.span`
    font-size: 21px;
    font-weight: 700;
`;

export const NoReviews = styled.p`
    color: lightgray;
    font-weight: 700;
    font-size: 21px;
    margin-top: 30px;
    padding: 15px;
    background-color: #2d3035;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
