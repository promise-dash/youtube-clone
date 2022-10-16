import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }


  };
  return (
    <form action="" className='w-80 bg-neutral-700 px-3 py-2 rounded-full flex items-center justify-between'
    onSubmit={handleSubmit}
    >
        <input className='outline-none border-none px-3 bg-inherit text-white' type="text" placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className='text-white cursor-pointer'/>
    </form>
  )
}

export default SearchBar