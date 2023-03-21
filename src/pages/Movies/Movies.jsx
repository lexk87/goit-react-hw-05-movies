import { Container, Loader, MoviesList, SearchForm } from 'components';
import { Main } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'services';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        getSearchedMovies(searchedFilm)
            .then(res => {
                const fetchedData = res.results;
                if (fetchedData.length === 0) {
                    toast.warn(
                        'There are no movies matching your search request.',
                        {
                            position: 'top-center',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        }
                    );
                    return;
                }
                setMovies(fetchedData);
            })
            .catch(error => {
                console.log(error);
                toast.error(
                    'Oops... Something went wrong. Please, try to refresh the page.',
                    {
                        position: 'top-center',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    }
                );
            })
            .finally(() => setIsLoading(false));
    }, [searchedFilm]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchField.value;

        if (!searchQuery) {
            toast.warn('Your search request is empty!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            setSearchParams();
            return;
        }

        setSearchParams({ title: searchQuery });
    };

    // if (!movies) {
    //     return <>{isLoading && <Loader />}</>;
    // }

    return (
        <Main>
            <Container>
                <SearchForm onSubmit={handleSubmit} />
                {isLoading && <Loader />}
                {movies && <MoviesList movies={movies} />}
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Main>
    );
};

export default Movies;
