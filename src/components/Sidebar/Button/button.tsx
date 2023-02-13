import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTrash, BsFillLightbulbOffFill, BsFillLightbulbFill } from 'react-icons/bs';

export default function Button({theme, setTheme, setListIntent, styles}: any) {

  const toggleTheme = () => {
    setTheme((prev: any) => prev === "dark" ? 'light' : 'dark');
    console.log(theme)
  };

    return (
        <>
          <button type="button" className={`${styles} dark:border-gray-700 flex leading-3`} onClick={() => setListIntent([])}>
            <span className={`mx-3`}>
              <BsTrash />
            </span>
            Clear conversations
          </button>

          <button type="button" className={`${styles} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
            <span className={`mx-3 back-secondary`}>
              {theme === "light" ? <BsFillLightbulbOffFill /> : <BsFillLightbulbFill />}
            </span>
            <span>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>

          <button type="button" className={`${styles} dark:border-gray-700 flex leading-3`}>
            <span className={`mx-3`}>
              <FiLogOut />
            </span>
            Log out
          </button>
        </>
    )
}