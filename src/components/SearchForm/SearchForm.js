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

export const SearchFilmsForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // if(searchValue === ''){...?...}
    onSubmit(searchValue);
    console.log(searchValue);
    setSearchValue('');
  };

  const handleNameChange = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="button">
          <FcSearch style={{ width: '2.5em', height: '2.5em' }} />
          <SearchFormButtonLabel className="button-label">
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

SearchFilmsForm.propTypes = { onSubmit: PropTypes.func };
