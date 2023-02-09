import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTrash, BsFillLightbulbOffFill, BsFillLightbulbFill, BsFillChatRightFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';



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

export default function Sidebar({ theme, setTheme }: any) {
  const ChatTitles: any = useRef<HTMLElement>()

  // hooks declaration
  const [listIntent, setListIntent] = useState<any>([]);
  const [currentChatScrollHeight, setCurrentChatScrollHeight] = useState(ChatTitles?.current?.scrollHeight)




  const handleRemoveChat = (id: any) => {
    const newList = listIntent.filter((item: any) => item.id !== id);

    setListIntent(newList);
  };

  const addNewChat = () => {
    const newChat = listIntent.concat({ name: `Bạn tên gì? ${listIntent.length}`, id: listIntent.length });
    setCurrentChatScrollHeight(ChatTitles?.current?.scrollHeight);
    setListIntent(newChat);
    
  };
  
  const toggleTheme = () => {
    setTheme((prev: any) => prev === "dark" ? 'light' : 'dark');
  };
  
  useEffect(() => {
    let a = ChatTitles.current?.scrollHeight;
    ChatTitles.current.scrollTop = ChatTitles?.current?.scrollHeight;

    console.log(a)

    return () => {
      console.log("end")
    };
  }, [currentChatScrollHeight]);

  return (
    <>
      <div className={`back-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl items-stretch`}>
        <div className={`h-auto`}>
          <div className='p-2'>
            <button onClick={addNewChat} type="button" className={`${buttonClassNames} mb-2 dark:border-gray-700 pl-2`}>
              + New Chat</button>
          </div>

        </div>
        <div
          className={`overflow-y-scroll grow .scrollbar .scrollbar-style-2 h-max`}
          id={"chat-title-scroller"}
          ref={ChatTitles}
        >
          {listIntent.map((item: any) =>
            <a href='#' key={item.id} className={`${newChatClassNames}`}>
              <span><BsFillChatRightFill /></span>
              {item.name}
              <button onClick={() => handleRemoveChat(item.id)}><TiDeleteOutline /></button>
            </a>
          )}
        </div>

        <div className='flex  p-3 flex-col gap-2 border-t-[1px] border-indigo-500 mt-2 pt-2'>
          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={() => setListIntent([])}>
            <span className={`mx-3`}>
              <BsTrash />
            </span>
            Clear conversations
          </button>

          <button type="button" className={`${buttonClassNames} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
            <span className={`mx-3 back-secondary`}>
              {theme === "light" ? <BsFillLightbulbOffFill /> : <BsFillLightbulbFill />}
            </span>
            <span>
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
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
