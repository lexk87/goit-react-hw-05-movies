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
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        showMovieDetails();
    }, [movieId]);

    const { poster_path, title, vote_average, overview, genres } = movieInfo;
    const userScore = Math.round(vote_average * 10);
    // const movieGenres = genres.map(genre => genre.name).join(' | ');

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
                            <TxtBold>User Score:</TxtBold> {userScore}%
                        </Txt>
                        <SubTitle>Overview</SubTitle>
                        <Txt>{overview}</Txt>
                        <SubTitle>Genres</SubTitle>
                        <Txt>Action | Adventure | Comedy</Txt>
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
        </Main>
    );
};

export default MovieDetails;
