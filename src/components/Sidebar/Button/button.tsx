import React from 'react';
import {FiLogOut} from 'react-icons/fi';
import {BsTrash} from 'react-icons/bs';
import {BsFillLightbulbOffFill} from 'react-icons/bs';
import {BsFillLightbulbFill} from 'react-icons/bs';

export default function Button({theme, setTheme, setListIntent, buttonClassNames}: any) {
  const toggleTheme = () => {
    setTheme((prev: any) => prev === "dark" ? 'light' : 'dark');
  };
    return (
      <div className='flex p-3 flex-col gap-2 border-t-[1px] border-indigo-500 mt-2 pt-2'>
        <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={() => setListIntent([])}>
          <span className={`mx-3`}>
            <BsTrash />
          </span>
          Clear conversations
        </button>

        <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
          {theme === "dark"
            ? 
            (<><span className={`mx-3 back-secondary`}><BsFillLightbulbFill /></span><span>Light Mode</span></>) 
            : 
            (<><span className={`mx-3 back-secondary`}><BsFillLightbulbOffFill /></span><span>Dark Mode</span></>) 
          }
        </button>

        <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`}>
          <span className={`mx-3`}>
            <FiLogOut />
          </span>
          Log out
        </button>
      </div>
    )
}