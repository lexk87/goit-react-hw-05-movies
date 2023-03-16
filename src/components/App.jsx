import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from 'shared-layout';

const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route
                            path="/movies/:movieId/cast"
                            element={<Cast />}
                        />
                        <Route
                            path="/movies/:movieId/reviews"
                            element={<Reviews />}
                        />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} /> */}
                </Route>
            </Routes>
        </>
    );
};
