import React from 'react'
import  {FiSend}  from "react-icons/fi";
const ChatText = () => {
  return (
      <div className=' bg-[#EBEBEB] text-white flex w-full justify-between p-3 rounded-br-lg'>
        <input type="text" className=' focus:ring-0 border-none w-full bg-[#EBEBEB] text-[#C1C1C1]' placeholder="Type your message here.."/>
        <button className='text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9'> 
          <FiSend/>
        </button>
      </div>
  )
}

export default ChatText