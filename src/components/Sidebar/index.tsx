import React, { useContext, useEffect, useRef, useState } from 'react';
import ListIntent from './ListIntent/listIntent';
import Button from './Button/button';
import Modal from './Modal/modal';
import { MessageContext } from '@/contexts/MessageContext';
import { GoPrimitiveDot } from 'react-icons/go';

const stylesNewChat = `
  text-white 
  text-lg

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
  text-gray-200 
  text-[1rem]
  flex
  items-center

  w-full
  
  focus:outline-none 
  focus:ring-4 
  focus:ring-gray-300 
  font-medium rounded-xl 
  
  p-2
  
  bg-gray-800 
  ark:bg-gray-800 
  dark:hover:bg-gray-700 
  dark:focus:ring-gray-700
  hover:bg-gray-900 
`

const stylesButtonDisabled = `
  text-white 
  text-[1.4rem]
  flex
  items-center

  w-full
  
  focus:outline-none 
  focus:ring-4 
  focus:ring-gray-300 
  font-medium rounded-lg 
  
  p-2
  
  bg-[#ccc] 
  cursor-not-allowed
`

export default function Sidebar({ theme, setTheme, text, setText }: any) {
  const ChatTitles: any = useRef<HTMLElement>()
  // const router = useRouter()

  // hooks declaration
  const [isShowing, setIsShowing] = useState(false);
  const [listIntent, setListIntent] = useState<any>([]);

  const { setIsLoading, setMessageArray, isLoading } = useContext<any>(MessageContext)

  const handleRemoveChat = (id: any) => {
    const newList = listIntent.filter((item: any) => item.id !== id);

    setListIntent(newList);
  };

  const addNewChat = (value: string) => {

    localStorage.clear()
    setIsLoading(false)
    setMessageArray([])

    setIsShowing(false)
  };

  const newChatClick = () => {
    setIsShowing(true)
  }

  return (
    <>
      <div className={`back-primary flex flex-col justify-between font-white h-full text-white-900 rounded-l-xl items-stretch`}>
        <div className="w-full flex text-white p-2 ">
          <div className="w-8 mr-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" />
          </div>
          <div className="flex items-end font-bold">DigiexBOT</div>
        </div>
        <div className={`h-auto`}>
          <div className='p-2'>
            <button onClick={newChatClick} type="button" className={isLoading === false ? `${stylesButton} justify-center mb-2 pl-2` : `${stylesButtonDisabled} justify-center mb-2 pl-2`} disabled={isLoading === true ? true : false}>
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

        <div className='flex p-3 flex-col gap-2 mt-2 pt-2'>
          <Button styles={stylesButton} setListIntent={setListIntent} />
          <div className='flex border-t border-sky-500 p-2'>
            <div className="w-10 mr-2">
              <img className='rounded-full' src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" alt="" />
            </div>
            <div>
              <p className="font-bold leading-[15px]">Nguyễn Văn A <br/><span className='text-xs font-light flex'>Đang online <GoPrimitiveDot className='text-green-500'/></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
