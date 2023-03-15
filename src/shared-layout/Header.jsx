import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components';
import {
    AppHeader,
    Navigation,
    NavigationLink,
    HeaderLogo,
} from './Header.styled';

export const Header = () => {
    return (
        <>
            <AppHeader>
                <Navigation>
                    <NavigationLink to="/">
                        <HeaderLogo width="40px" height="40px" />
                    </NavigationLink>
                    <NavigationLink to="/">HOME</NavigationLink>
                    <NavigationLink to="/movies">MOVIES</NavigationLink>
                </Navigation>
            </AppHeader>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};
