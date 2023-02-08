import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import { BsFillLightbulbOffFill } from 'react-icons/bs';

export default function Sidebar() {

  const buttonClassNames = `
    text-white 
    text-xs

    w-full
    
    focus:outline-none 
    focus:ring-4 
    focus:ring-gray-300 
    font-medium rounded-lg 
    
    py-2
    
    bg-gray-800 
    ark:bg-gray-800 
    dark:hover:bg-gray-700 
    dark:focus:ring-gray-700
    hover:bg-gray-900 
  `

  return (
    <>
      <div className='content-between grid p-3 bg-primary font-white h-full text-white-900 rounded-l-xl rounded-r-lg'>
        
        <div>
          <button type="button" className={`${buttonClassNames} dark:border-gray-700`}>+ New Chat</button>
        </div>

        <div className='flex flex-col gap-2 border-t-2 border-indigo-500 pt-2'>
          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`}>
            <span className={`mx-3`}>
              <BsTrash />
            </span>
            Clear conversations
          </button>

          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`}>
            <span className={`mx-3`}>
              <BsFillLightbulbOffFill />
            </span>
            Light mode
          </button>

          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`}>
            <span className={`mx-3`}>
              <FiLogOut />
            </span>
            Log out
          </button>
        </div>
      </div>
    </>
  )
}
