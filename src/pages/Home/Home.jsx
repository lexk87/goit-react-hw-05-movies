import { Main, MainTitle } from './Home.styled';
import { Container, Loader } from 'components';
import { FilmsList } from 'components';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services';

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const showTrendingMovies = async () => {
            try {
                const res = await getTrendingMovies();
                console.log(res);
                setMovies(res.results);
            } catch (error) {
                console.log(error);
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
                {movies && <FilmsList movies={movies} />}
            </Container>
        </Main>
    );
};

export default Home;
