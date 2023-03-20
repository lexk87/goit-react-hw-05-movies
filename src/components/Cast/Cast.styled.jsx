import styled from 'styled-components';

export const CastList = styled.ul`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #2d3035;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 100%;
    @media screen and (min-width: 480px) {
        width: calc((100% - 30px) / 2);
    }
    @media screen and (min-width: 768px) {
        width: calc((100% - 90px) / 4);
    }
    @media screen and (min-width: 1200px) {
        width: calc((100% - 150px) / 6);
    }
`;

export const ImgWrapper = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    @media screen and (min-width: 480px) {
        height: 260px;
    }
    @media screen and (min-width: 768px) {
        height: 194px;
    }
    @media screen and (min-width: 1200px) {
        height: 207px;
    }
`;

export const ActorName = styled.p`
    color: lightgray;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const Txt = styled.p`
    color: lightgray;
    font-weight: 400;
    font-size: 18px;
`;

export const TxtBold = styled.span`
    font-weight: 700;
`;
