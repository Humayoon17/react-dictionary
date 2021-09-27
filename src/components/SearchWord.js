import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import Header from './Header';

const SearchWord = ({ searchWord, isLoading }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchWord(value);
  };

  return (
    <div>
      <Header />
      <form className='center_element search_input' onSubmit={onSubmit}>
        <TextField
          label='Search Word'
          id='outlined-size-small'
          size='small'
          value={value}
          onChange={onChange}
        />
        <IconButton aria-label='Search Word' color='primary' onClick={onSubmit}>
          <SearchIcon fontSize='inherit' />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchWord;
