import Input from '@/utils/components/Input';
import React from 'react'
import { FiSend } from "react-icons/fi";


const ChatText = () => {
  return (


    <Input
      background="bg-[#EBEBEB]"
      button={{
        isContained: true,
        element: (
          <button className={`text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9`}>
            <FiSend />

          </button>
        ),
        background: "bg-[#017AF9]",
      }}
      type="text"
      placeholderText="Type your message here.."
    />
  )
}

export default ChatText