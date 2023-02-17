import React, { useContext, useRef, useState } from 'react';
import Button from './Button/button';
import Modal from './Modal/modal';
import { MessageContext } from '@/contexts/MessageContext';
import { GoPrimitiveDot } from 'react-icons/go';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

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
  text-white 
  text-[1rem]
  flex
  items-center

  w-full
  
  focus:outline-none 
  focus:ring-4 
  focus:ring-gray-300 
  font-medium rounded-lg 
  
  p-2
  
  shadow-md 
  shadow-black
  bg-blue-500
  ark:bg-gray-800 
  dark:hover:bg-gray-700 
  dark:focus:ring-gray-700
  hover:bg-gray-900
  hover:text-white 
`

const stylesButtonDisabled = `
  text-white 
  text-[1rem]
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

export default function Sidebar() {
  // const router = useRouter()
  const cookies = new Cookies();
  const token = cookies.get('cred-token');
  const ChatTitles: any = useRef<HTMLElement>()
  
  const [decoded, setDecoded] = useState<any>(jwtDecode(token));
  console.log(decoded)

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
          {/* {Array.from(listIntent)?.map((item: any) =>
            <ListIntent item={item} onclick={() => handleRemoveChat(item.id)} styles={stylesNewChat} />
          )} */}
          
        </div>

        <div className='flex p-3 flex-col gap-2 mt-2 pt-2'>
          <Button styles={stylesButton} setListIntent={setListIntent} />
          <div className='flex border-t border-sky-500 p-2'>
            <div className="w-10 mr-2 relative">
              <img className='rounded-full' src={decoded.picture} alt="" />
              {
                token === ""
                ? <GoPrimitiveDot className='text-gray absolute right-[0.1px] top-[28px]'/>
                : <GoPrimitiveDot className='text-[#16be48] absolute right-[0.1px] top-[28px]'/>
              }
            </div>
            <div className='flex items-center'>
              <p className="font-bold leading-[15px]">{decoded.name} <br/>
              {token === "" 
                ? <span className='text-[13px] font-light flex text-gray-900'>offline</span>
                : <span className='text-[13px] font-light flex text-green-900'>Đang online</span>
              }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
