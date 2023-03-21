import { Films } from './MoviesList.styled';
import { MoviesListItem } from 'components';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    return (
        <Films>
            {movies.map(({ id, title, poster_path }) => (
                <MoviesListItem
                    key={id}
                    id={id}
                    title={title}
                    poster={poster_path}
                />
            ))}
        </Films>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster_path: PropTypes.string,
        })
    ),
};
