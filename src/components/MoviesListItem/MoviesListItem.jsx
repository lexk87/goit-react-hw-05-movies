import {
    Item,
    ItemLink,
    ImgWrapper,
    Img,
    ItemTitle,
} from './MoviesListItem.styled';
import noPhotoPlaceholder from '../../img/no-poster-placeholder.jpg';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesListItem = ({ id, title, poster }) => {
    const location = useLocation();

    return (
        <Item>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
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

MoviesListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
};
