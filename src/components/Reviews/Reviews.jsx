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
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const showMovieReviews = async () => {
            try {
                const res = await getMovieReviews(movieId);
                setReviews(res.results);
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

        showMovieReviews();
    }, [movieId]);

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

export default Reviews;
