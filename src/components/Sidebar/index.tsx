import React, {useState} from 'react';
import {FiLogOut} from 'react-icons/fi';
import {BsTrash} from 'react-icons/bs';
import {BsFillLightbulbOffFill} from 'react-icons/bs';
import {BsFillLightbulbFill} from 'react-icons/bs';
import {BsFillChatRightFill} from 'react-icons/bs';
import {TiDeleteOutline} from 'react-icons/ti';
import ChatSpace from '../Chat/ChatSpace';
import styles from '@/styles/Home.module.css';

const APP_THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
}

const newChatClassNames = `
  text-white 
  text-xs

  w-full
  
  focus:outline-none 
  focus:ring-4 
  focus:ring-gray-300 
  font-medium
  
  py-2
  px-3 
  pr-26
  my-2
  
  flex 
  justify-around
  leading-3
  
  ark:bg-gray-800 
  dark:hover:bg-gray-700 
  dark:focus:ring-gray-700
  hover:bg-gray-900 
`

export default function Sidebar() {

  const buttonClassNames = `
    text-white 
    text-lg
    flex
    items-center

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


  const dark =` 
  text-white-900
  bg-black
  `
  const light =` 
    text-white-900
    bg-primary
  `

  const [chat, setChat] = useState<any>([]);
  const [theme, setTheme] = useState(APP_THEMES.DARK);

  const handleRemoveChat = (id:any) => {
    const newList = chat.filter((item: any) => item.id !== id);

    setChat(newList);
  };


  const addNewChat = () => {
    const newChat = chat.concat({name: `Bạn tên gì? ${chat.length}`  , id: chat.length});

    setChat(newChat);
  };

  const toggleTheme = () => {
    setTheme((curr) => curr === APP_THEMES.LIGHT ? APP_THEMES.DARK : APP_THEMES.LIGHT);

    console.log(theme)
  };
  console.log(theme)

  return (
    <>
      <div className={`${theme === APP_THEMES.DARK ? styles.dark : styles.light} bg-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl `}>
        <div>
          <div className='p-2'><button onClick={addNewChat} type="button" className={`${buttonClassNames} mb-2 dark:border-gray-700`}>+ New Chat</button></div>
          {chat.map((item: any) => 
            <a href='#' key={item.id} className={`${newChatClassNames}`}> 
              <span><BsFillChatRightFill /></span> 
              {item.name}
              <button onClick={() => handleRemoveChat(item.id)}><TiDeleteOutline /></button>
            </a>
          )}
        </div>

        <div className='flex p-3 flex-col gap-2 border-t-2 border-indigo-500 mt-2 pt-2'>
          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={() => setChat([])}>
            <span className={`mx-3`}>
              <BsTrash />
            </span>
            Clear conversations
          </button>

          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
            {theme === APP_THEMES.LIGHT 
              ? 
              (<><span className={`mx-3`}><BsFillLightbulbFill /></span><span>Light Mode</span></>) 
              : 
              (<><span className={`mx-3`}><BsFillLightbulbOffFill /></span><span>Dark Mode</span></>) 
            }
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



