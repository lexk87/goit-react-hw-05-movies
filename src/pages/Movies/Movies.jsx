import { Container, Loader, FilmsList, SearchForm } from 'components';
import { Main } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'services';

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchedFilm = searchParams.get('title');

    useEffect(() => {
        if (!searchedFilm) {
            setMovies(null);
            return;
        }

        setIsLoading(true);

        const showSearchedMovies = async () => {
            try {
                const res = await getSearchedMovies(searchedFilm);
                console.log(res);
                setMovies(res.results);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        showSearchedMovies();
    }, [searchedFilm]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchField.value;

        if (!searchQuery) {
            console.log('error');
            return;
        }

        setSearchParams({ title: searchQuery });
    };

    return (
        <Main>
            <Container>
                <SearchForm onSubmit={handleSubmit} />
                {isLoading && <Loader />}
                {movies && <FilmsList movies={movies} />}
            </Container>
        </Main>
    );
};

export default Movies;
