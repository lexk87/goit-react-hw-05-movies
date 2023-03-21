import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';
import { Loader } from 'components';
import {
    ReviewsList,
    ReviewsItem,
    Txt,
    TxtBold,
    NoReviews,
} from './Reviews.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getMovieReviews(movieId)
            .then(res => setReviews(res.results))
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
    }, [movieId]);

    if (!reviews) {
        return <>{isLoading && <Loader />}</>;
    }

    return (
        <>
            {reviews.length === 0 && (
                <NoReviews>We can't find any reviews for this movie</NoReviews>
            )}
            {isLoading && <Loader />}
            {reviews.length > 0 && (
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
            )}
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
        </>
    );
};

export default Reviews;
