import {
    Item,
    ItemLink,
    ImgWrapper,
    Img,
    ItemTitle,
} from './FilmsListItem.styled';
import noPhotoPlaceholder from '../../img/no-poster-placeholder.jpg';

export const FilmsListItem = ({ id, title, poster }) => {
    return (
        <Item>
            <ItemLink to={'/movies/${id}'}>
                <ImgWrapper>
                    <Img
                        src={
                            poster
                                ? `https://image.tmdb.org/t/p/w500/${poster}`
                                : `${noPhotoPlaceholder}`
                        }
                        alt={title}
                    />
                </ImgWrapper>
                <ItemTitle>{title}</ItemTitle>
            </ItemLink>
        </Item>
    );
};
