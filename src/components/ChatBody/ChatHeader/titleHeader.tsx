import useWindowSize from '@/customHooks/useWindowSize';
import { FaBars } from 'react-icons/fa'

import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Sidebar from '@/components/Sidebar';

const TitleHeader = () => {
  const [onClickBar, setOnClickBar] = useState(false)

  const size = useWindowSize();
  const width = size.width

  const barClicked = () => {
    setOnClickBar(!onClickBar)
  }

  return (
    <div className='py-5 px-7 text-color back-frame w-full rounded-tr-lg text-xl font-bold flex-1'>
      <h1>Hi tao la Boot</h1>
    </div>
  )
}

export default TitleHeader