import { SearchFilmForm, Input, Button, SearchIcon } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
    return (
        <SearchFilmForm onSubmit={onSubmit}>
            <Input type="text" name="searchField" placeholder="Search movies" />
            <Button type="submit" area-aria-label="Search">
                <SearchIcon />
            </Button>
        </SearchFilmForm>
    );
};
