import React from 'react'
import { Link } from 'react-router-dom';
import { menu } from "../utils/constants";

function Sidebar() {
  return (
    <div className='py-5 px-2 w-fit h-full bg-neutral-800 text-white flex flex-col items-center justify-start gap-8 text-xs fixed left-0 top-15 z-50'>
       {menu.map((ele) => (
        <Link to={'/'}>
          <button key={ele.name} className=' text-white flex flex-col items-center justify-center hover:text-neutral-400 focus:text-neutral-400'>
            <span>{ele.icon}</span>
            <span>{ele.name}</span>
          </button>
        </Link>
       ))}
    </div>
  )
}

export default Sidebar