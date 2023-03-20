import { Container } from 'components';
import {
    Main,
    BackLink,
    MovieCard,
    ImgWrapper,
    Img,
    InfoWrapper,
    MovieTitle,
    Txt,
    TxtBold,
    SubTitle,
    LinksWrapper,
    MoreDetailsLink,
} from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components';
import { getMovieDetails } from 'services';
import noPhotoPlaceholder from '../../img/no-poster-placeholder.jpg';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backlink = location.state?.from ?? '/movies';

    useEffect(() => {
        setIsLoading(true);

        const showMovieDetails = async () => {
            try {
                const res = await getMovieDetails(movieId);
                setMovieInfo(res);
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

        showMovieDetails();
    }, [movieId]);

    const { poster_path, title, vote_average, overview } = movieInfo;
    const { genres } = movieInfo;
    const userScore = Math.round(vote_average * 10);
    const movieGenres = genres.map(genre => genre.name).join(' | ');
    // const movieGenres = (genres || []).map(genre => genre.name).join(' | ');
    console.log('Genres:', genres);

    return (
        <Main>
            <Container>
                <BackLink to={backlink}>GO BACK</BackLink>
                {isLoading && <Loader />}
                <MovieCard>
                    <ImgWrapper>
                        <Img
                            src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                    : `${noPhotoPlaceholder}`
                            }
                            alt={title}
                        />
                    </ImgWrapper>
                    <InfoWrapper>
                        <MovieTitle>{title}</MovieTitle>
                        <Txt>
                            <TxtBold>User Score:</TxtBold>{' '}
                            {userScore ? userScore + '%' : 'No info'}
                        </Txt>
                        <SubTitle>Overview</SubTitle>
                        <Txt>{overview ? overview : 'No info'}</Txt>
                        <SubTitle>Genres</SubTitle>
                        {/* <Txt>Action | Adventure | Comedy</Txt> */}
                        <Txt>{movieGenres}</Txt>
                        <LinksWrapper>
                            <MoreDetailsLink
                                to="cast"
                                state={{ from: backlink }}
                            >
                                CAST
                            </MoreDetailsLink>
                            <MoreDetailsLink
                                to="reviews"
                                state={{ from: backlink }}
                            >
                                REVIEWS
                            </MoreDetailsLink>
                        </LinksWrapper>
                    </InfoWrapper>
                </MovieCard>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
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

export default MovieDetails;
