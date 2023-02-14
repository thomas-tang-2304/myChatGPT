import React, { useContext, useEffect, useRef, useState } from 'react';
import ListIntent from './ListIntent/listIntent';
import Button from './Button/button';
import Modal from './Modal/modal';
import { MessageContext } from '@/contexts/MessageContext';
import { useRouter } from 'next/router';

const stylesNewChat = `
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
  truncate
  
  ark:bg-gray-800 
  dark:hover:bg-gray-700 
  dark:focus:ring-gray-700
  hover:bg-gray-900 
`

const stylesButton = `
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
  const router = useRouter()

  // hooks declaration
  const [isShowing, setIsShowing] = useState(false);
  const [listIntent, setListIntent] = useState<any>([]);
  const [currentChatScrollHeight, setCurrentChatScrollHeight] = useState(ChatTitles?.current?.scrollHeight)

  const { setIsLoading, setMessageArray } = useContext<any>(MessageContext)

  const handleRemoveChat = (id: any) => {
    const newList = listIntent.filter((item: any) => item.id !== id);

    setListIntent(newList);
    console.log('oki')

  };



  const addNewChat = (value: string) => {

    localStorage.clear()
    setIsLoading(false)
    setMessageArray([])
    router.reload()

    setIsShowing(false)
  };

  return (
    <>
      <div className={`back-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl items-stretch`}>
        <div className={`h-auto`}>
          <div className='p-2'>
            <button onClick={() => { setIsShowing(true) }} type="button" className={`${stylesButton} justify-center mb-2 pl-2`}>
              + New Chat</button>
            {isShowing && <Modal setIsShowing={setIsShowing} styles={stylesButton} addNewChat={addNewChat} setListIntent={setListIntent} />}
          </div>
        </div>
        <div
          className={`grow .scrollbar .scrollbar-style-2 h-max`}
          id={"chat-title-scroller"}
          ref={ChatTitles}
        >

          {Array.from(listIntent)?.map((item: any) =>
            <ListIntent item={item} onclick={() => handleRemoveChat(item.id)} styles={stylesNewChat} />
          )}
        </div>

        <div className='flex  p-3 flex-col gap-2 border-t-[1px] border-indigo-500 mt-2 pt-2'>
          <Button styles={stylesButton} theme={theme} setTheme={setTheme} setListIntent={setListIntent} />
        </div>
      </div>
    </>
  )
}
