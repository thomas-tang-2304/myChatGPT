import React, {useState} from 'react';
import {FiLogOut} from 'react-icons/fi';
import {BsTrash} from 'react-icons/bs';
import {BsFillLightbulbOffFill} from 'react-icons/bs';
import {BsFillLightbulbFill} from 'react-icons/bs';
import {BsFillChatRightFill} from 'react-icons/bs';
import {TiDeleteOutline} from 'react-icons/ti';

const newChatClassNames = `
  text-white 
  text-base

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

export default function Sidebar({theme, setTheme}: any) {
  const [listIntent, setListIntent] = useState<any>([]);
  const [hoverListIntent, setHoverListIntent] = useState(false);
  
  const handleRemoveChat = (id:any) => {
    const newList = listIntent.filter((item: any) => item.id !== id);

    setListIntent(newList);
  };

  const addNewChat = () => {
    const newChat = listIntent.concat({name: `Bạn tên gì? ${listIntent.length}`  , id: listIntent.length});

    setListIntent(newChat);
  };

  const toggleTheme = () => {
    setTheme((prev: any) => prev === "dark" ? 'light' : 'dark');
  };

  return (
    <>
      <div className={`back-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl`}>
        <div>
          <div className='p-2'><button onClick={addNewChat} type="button" className={`${buttonClassNames} mb-2 dark:border-gray-700`}>+ New Chat</button></div>
          <div className={`${hoverListIntent ? 'overflow-y-scroll' : 'overflow-hidden'} h-[300px]`} onMouseEnter={()=> setHoverListIntent(true)} onMouseLeave={()=> setHoverListIntent(false)}>
            {listIntent.map((item: any) => 
              <a href='#' key={item.id} className={`${newChatClassNames}`}> 
                <span><BsFillChatRightFill /></span> 
                {item.name}
                <button onClick={() => handleRemoveChat(item.id)}><TiDeleteOutline /></button>
              </a>
            )}
          </div>
        </div>

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
      </div>
    </>
  )
}
