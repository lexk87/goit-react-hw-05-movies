import { LoaderSpinnerContainer, LoaderSpinner } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderSpinnerContainer>
            <LoaderSpinner strokeColor="white" width="80" />
        </LoaderSpinnerContainer>
    );
};
