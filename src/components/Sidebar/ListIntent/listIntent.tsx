import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti';
import { BsFillChatRightFill } from 'react-icons/bs';

export default function listIntent({item, styles, onclick}: any) {
  return (
    <>
        <a href='#' key={item.id} className={`${styles}`}>
              <span><BsFillChatRightFill /></span>
              {item.name}
              <button onClick={onclick}><TiDeleteOutline /></button>
        </a>
    </>
  )
}
