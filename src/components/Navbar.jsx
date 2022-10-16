import React from 'react'
import {Link} from 'react-router-dom';

import {logo} from "../utils/constants"
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="sticky top-0 w-full py-2 px-5 flex items-center justify-between bg-neutral-800">
      <Link className='flex gap-2' to={'/'}>
        <img src={logo} alt="logo" width={35}/>
        <p className='text-white text-2xl font-bold'>YouTube</p>
      </Link>

      <SearchBar />
    </nav>
  )
}

export default Navbar