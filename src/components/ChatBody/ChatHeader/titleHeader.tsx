import useWindowSize from '@/customHooks/useWindowSize';
import { FaBars } from 'react-icons/fa'
import React, { useContext, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Sidebar from '@/components/Sidebar';
import { ModalContext } from '@/contexts/ModalContext';

const TitleHeader = () => {
  const [onClickBar, setOnClickBar] = useState(false)
  const [theme, setTheme] = useContext(ModalContext)

  const size = useWindowSize();
  const width = size.width

  const barClicked = () => {
    setOnClickBar(!onClickBar)
  }

  return (
    <div className='flex items-center justify-between flex-1 w-full px-4 py-5 text-xl font-bold text-center border-b-2 '>
      {
        onClickBar ? (
          <>
            {width && width < 640 ? (
              <>
                <div className='fixed inset-0 z-10 bg-black fade-in' onClick={barClicked}></div>
                <div className='fixed top-0 bottom-0 left-0 z-20 flex h-full fade-in-full'>
                  <Sidebar  />
                  <div className='flex items-center justify-center h-8 p-4 mt-2 ml-2 text-center text-white border-2' onClick={barClicked}>
                    <RxCross1 />
                  </div>
                </div>
              </>
            ) : ''}
          </>
        ) : ""
      }
      {width && width < 640 ? (
        <div className='flex items-center justify-center h-full px-3 py-2 cursor-pointer text-color hover:text-slate-200' onClick={barClicked}>
          <FaBars />
        </div>
      ) : ''}
      <h1 className='w-full text-lg text-color'>New Chat Box</h1>
      {width && width < 640 ? (
        <div className='flex items-center justify-center h-full px-3 py-2 cursor-pointer text-color hover:text-slate-200'>
          <BsPlusLg />
        </div>
      ) : ''}
    </div>
  )
}

export default TitleHeader