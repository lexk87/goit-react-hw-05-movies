import { Films } from './FilmsList.styled';
import { FilmsListItem } from 'components';

export const FilmsList = ({ movies }) => {
    return (
        <Films>
            {movies.map(({ id, original_title, poster_path }) => (
                <FilmsListItem
                    key={id}
                    id={id}
                    title={original_title}
                    poster={poster_path}
                />
            ))}
        </Films>
    );
};
