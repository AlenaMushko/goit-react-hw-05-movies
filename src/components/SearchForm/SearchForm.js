import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

 const SearchFilmsForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }
    onSubmit(searchValue);
  };

   const handleNameChange = e => {
     let searchValueFilms = e.currentTarget.value.trim();
    setSearchValue(searchValueFilms.toLowerCase());
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" >
          <FcSearch style={{ width: '2.5em', height: '2.5em' }} />
          <SearchFormButtonLabel >
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          value={searchValue}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </SearchForm>
    </SearchBar>
  );
};

export default SearchFilmsForm;

SearchFilmsForm.propTypes = { onSubmit: PropTypes.func };
