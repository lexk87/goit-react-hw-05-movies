import { Main, MainTitle } from './Home.styled';
import { Container, Loader } from 'components';
import { MoviesList } from 'components';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const showTrendingMovies = async () => {
            try {
                const res = await getTrendingMovies();
                setMovies(res.results);
            } catch (error) {
                toast.error(
                    'Oops... Something went wrong. Please, try to refresh the page.',
                    {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    }
                );
            } finally {
                setIsLoading(false);
            }
        };

        showTrendingMovies();
    }, []);

    return (
        <Main>
            <Container>
                <MainTitle>TRENDING TODAY</MainTitle>
                {isLoading && <Loader />}
                {movies && <MoviesList movies={movies} />}
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={5000}
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

export default Home;
