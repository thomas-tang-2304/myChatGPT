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
    <div className='py-5 px-4 text-xl font-bold flex-1 w-full text-center border-b-2 flex justify-between items-center '>
      {
        onClickBar ? (

          <>
            {width && width < 640 ? (
              <>
                <div className='fixed inset-0 bg-black z-10 fade-in' onClick={barClicked}></div>
                <div className='fixed left-0 bottom-0 top-0 flex z-20 h-full fade-in-full'>
                  <Sidebar theme={theme} setTheme={setTheme} containerClass='content-between grid p-3 bg-primary font-white h-full text-white-900 rounded-tr-xl rounded-br-lg' />
                  <div className='ml-2 mt-2 p-4 border-2 h-8 text-center flex justify-center items-center text-white' onClick={barClicked}>
                    <RxCross1 />
                  </div>
                </div>
              </>
            ) : ''}

          </>
        ) : ""
      }
      {width && width < 640 ? (
        <div className='h-full flex justify-center items-center py-2 px-3 cursor-pointer hover:text-slate-200' onClick={barClicked}>
          <FaBars />
        </div>
      ) : ''}


      <h1 className='w-full text-lg text-color'>New Chat Box</h1>

      {width && width < 640 ? (
        <div className='h-full flex justify-center items-center py-2 px-3 cursor-pointer hover:text-slate-200'>
          <BsPlusLg />
        </div>
      ) : ''}
    </div>
  )
}

export default TitleHeader