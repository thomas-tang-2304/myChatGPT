import React, { useContext, useRef, useState } from 'react';
import Button from './Button/button';
import Modal from './Modal/modal';
import { MessageContext } from '@/contexts/MessageContext';
import jwt_decode from 'jwt-decode';
import { RiChatNewLine } from 'react-icons/ri'
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
  font-[600]
  flex
  items-center

  w-full
  
  focus:outline-none 
  focus:ring-4 
  focus:ring-gray-300 
  font-medium
  
  p-3
  mt-1

  bg-black/[.1]
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

  const [decoded, setDecoded] = useState<any>(token ? jwt_decode(token) : null);

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
      <div className={`back-primary flex flex-col justify-between font-white h-full text-white-900 items-stretch`}>
        <div className="flex w-full text-white ">
          <div className="w-40 ">
            <img src="images/logoDigiex.png" />
          </div>
          {/* <div className="flex items-end font-bold">DigiexBOT</div> */}
        </div>
        <div className={`h-auto`}>
          <div className='my-2'>
            <button onClick={newChatClick} type="button" className={isLoading === false ? `${stylesButton} mb-2 pl-5` : `${stylesButtonDisabled} justify-center mb-2 pl-2`} disabled={isLoading === true ? true : false}>
              <RiChatNewLine className='mr-3' /> New Chat</button>
            {isShowing && <Modal setIsShowing={setIsShowing} styles={stylesButton} addNewChat={addNewChat} setListIntent={setListIntent} />}
          </div>
        </div>
        <div
          className={`grow scrollbar scrollbar-style-2 h-max`}
          id={"chat-title-scroller"}
          ref={ChatTitles}
        >
         
        </div>

        <div className=''>
          <Button styles={stylesButton} setListIntent={setListIntent} />
          <div className='flex p-2 border-t-2 border-sky-500'>
            <div className="relative w-10 mr-2">
              <img className='rounded-full' src={decoded?.picture} alt="" />
            </div>
            <div className='flex items-center'>
              <p className="font-bold text-gray-300 leading-[15px]">{decoded?.name}
                <span className='text-[13px] font-bold  flex text-gray-600'>{decoded?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
