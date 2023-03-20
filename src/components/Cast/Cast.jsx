import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'services';
import { Loader } from 'components';
import noPhotoPlaceholder from '../../img/no-poster-placeholder.jpg';
import {
    CastList,
    CastItem,
    ImgWrapper,
    Img,
    ActorName,
    Txt,
    TxtBold,
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
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        showMovieActors();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
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
        </>
    );
};

export default Cast;
