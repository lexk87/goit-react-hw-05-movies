import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';
import { Loader } from 'components';
import { ReviewsList, ReviewsItem, Txt, TxtBold } from './Reviews.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const showMovieReviews = async () => {
            try {
                const res = await getMovieReviews(movieId);
                setReviews(res.results);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        showMovieReviews();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            <ReviewsList>
                {reviews.map(({ author, id, content }) => {
                    return (
                        <ReviewsItem key={id}>
                            <Txt>
                                <TxtBold>Author:</TxtBold> {author}
                            </Txt>
                            <Txt>{content}</Txt>
                        </ReviewsItem>
                    );
                })}
            </ReviewsList>
        </>
    );
};

export default Reviews;
