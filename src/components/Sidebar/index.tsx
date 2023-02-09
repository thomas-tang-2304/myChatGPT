import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import { BsFillLightbulbOffFill } from 'react-icons/bs';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { BsFillChatRightFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
<<<<<<< Updated upstream
import ChatSpace from '../Chat/ChatSpace';
import styles from '@/styles/Home.module.css';

const APP_THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
}
=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
interface SidebarProps {
  containerClass?: string
}

export default function Sidebar({ containerClass }: SidebarProps) {

  const containerClassNames = containerClass ? containerClass : `content-between grid p-3 bg-primary font-white h-full text-white-900 rounded-l-xl rounded-r-lg`

  const buttonClassNames = `
=======
const buttonClassNames = `
>>>>>>> Stashed changes
    text-white 
    text-lg
    flex
    items-center
    justify-center
<<<<<<< Updated upstream

    w-full
    
=======
    w-full
  
>>>>>>> Stashed changes
    focus:outline-none 
    focus:ring-4 
    focus:ring-gray-300 
    font-medium rounded-lg 
<<<<<<< Updated upstream
    
    py-2
    
=======
  
    py-2
  
>>>>>>> Stashed changes
    bg-gray-800 
    ark:bg-gray-800 
    dark:hover:bg-gray-700 
    dark:focus:ring-gray-700
    hover:bg-gray-900 
<<<<<<< Updated upstream
  `

=======
`

export default function Sidebar({ theme, setTheme }: any) {
  const [listIntent, setListIntent] = useState<any>([]);
  const [hoverListIntent, setHoverListIntent] = useState(false);

  const handleRemoveChat = (id: any) => {
    const newList = listIntent.filter((item: any) => item.id !== id);
>>>>>>> Stashed changes

  const dark = ` 
  text-white-900
  bg-black
  `
  const light = ` 
    text-white-900
    bg-primary
  `


  const [chat, setChat] = useState<any>([]);
  const [theme, setTheme] = useState(APP_THEMES.DARK);

  const handleRemoveChat = (id: any) => {
    const newList = chat.filter((item: any) => item.id !== id);

    setChat(newList);
  };


  const addNewChat = () => {
<<<<<<< Updated upstream
    const newChat = chat.concat({ name: `Bạn tên gì? ${chat.length}`, id: chat.length });
=======
    const newChat = listIntent.concat({ name: `Bạn tên gì? ${listIntent.length}`, id: listIntent.length });
>>>>>>> Stashed changes

    setChat(newChat);
  };

  const toggleTheme = () => {
    setTheme((curr) => curr === APP_THEMES.LIGHT ? APP_THEMES.DARK : APP_THEMES.LIGHT);

  };

  return (
    <>
      <div className={`${theme === APP_THEMES.DARK ? styles.dark : styles.light} bg-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl`}>
        {/* <div className={`${containerClassNames}`}> */}
        <div>
          <div className='p-2'><button onClick={addNewChat} type="button" className={`${buttonClassNames} mb-2 dark:border-gray-700`}>+ New Chat</button></div>
<<<<<<< Updated upstream
          {chat.map((item: any) =>
            <a href='#' key={item.id} className={`${newChatClassNames}`}>
              <span><BsFillChatRightFill /></span>
              {item.name}
              <button onClick={() => handleRemoveChat(item.id)}><TiDeleteOutline /></button>
            </a>
          )}
=======
          <div className={`${hoverListIntent ? 'overflow-y-scroll' : 'overflow-hidden'} h-[300px]`} onMouseEnter={() => setHoverListIntent(true)} onMouseLeave={() => setHoverListIntent(false)}>
            {listIntent.map((item: any) =>
              <a href='#' key={item.id} className={`${newChatClassNames}`}>
                <span><BsFillChatRightFill /></span>
                {item.name}
                <button onClick={() => handleRemoveChat(item.id)}><TiDeleteOutline /></button>
              </a>
            )}
          </div>
>>>>>>> Stashed changes
        </div>

        <div className='flex p-3 flex-col gap-2 border-t-2 border-indigo-500 mt-2 pt-2'>
          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={() => setChat([])}>
            <span className={`mx-3`}>
              <BsTrash />
            </span>
            Clear conversations
          </button>

          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
<<<<<<< Updated upstream
            {theme === APP_THEMES.LIGHT
              ?
              (<><span className={`mx-3`}><BsFillLightbulbFill /></span><span>Light Mode</span></>)
              :
              (<><span className={`mx-3`}><BsFillLightbulbOffFill /></span><span>Dark Mode</span></>)
=======
            {theme === "dark"
              ?
              (<><span className={`mx-3 back-secondary`}><BsFillLightbulbFill /></span><span>Light Mode</span></>)
              :
              (<><span className={`mx-3 back-secondary`}><BsFillLightbulbOffFill /></span><span>Dark Mode</span></>)

>>>>>>> Stashed changes
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
