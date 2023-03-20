import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'services';
import { Loader } from 'components';
import noPhotoPlaceholder from '../../img/no-poster-placeholder.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    CastList,
    CastItem,
    ImgWrapper,
    Img,
    ActorName,
    Txt,
    TxtBold,
    NoActors,
} from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const showMovieActors = async () => {
            try {
                const res = await getMovieActors(movieId);
                setActors(res.cast);
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

        showMovieActors();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {actors.length === 0 && (
                <NoActors>We can't find any cast for this movie</NoActors>
            )}
            {actors.length > 0 && (
                <CastList>
                    {actors.length > 0 &&
                        actors.map(({ character, id, name, profile_path }) => {
                            return (
                                <CastItem key={id}>
                                    <ImgWrapper>
                                        <Img
                                            src={
                                                profile_path
                                                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                                    : `${noPhotoPlaceholder}`
                                            }
                                            alt={name}
                                        />
                                    </ImgWrapper>
                                    <ActorName>{name}</ActorName>
                                    <Txt>
                                        <TxtBold>Character: </TxtBold>
                                        {character ? character : 'No info'}
                                    </Txt>
                                </CastItem>
                            );
                        })}
                </CastList>
            )}
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
        </>
    );
};

export default Cast;
