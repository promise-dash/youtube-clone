import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from "../utils/constants"

function Menubar({ setSelectedCategory}) {
  return (
    <>
    <div className='flex gap-5 m-2 overflow-auto text-sm'>
        {categories.map((category) => (
          <Link to={`/search/${category.name}`}>
            <button key={category.name} 
            className="bg-neutral-800 text-white rounded-3xl px-3 py-2 hover:bg-neutral-70 focus:text-black focus:bg-white"
            onClick={() => setSelectedCategory(category.name)}
            >
            
              <span>{category.name}</span>
            </button>
            </Link>
        ))}
        
    </div>
    <hr className='bg-gray-500 opacity-10'/>
    </>
  )
}

export default Menubar