import { Films } from './MoviesList.styled';
import { MoviesListItem } from 'components';

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
