import React from 'react'
// import  FiSend  from "react-icons/ai";
const ChatText = () => {
  return (
      <div className=' bg-[#EBEBEB] text-white flex justify-between p-3 rounded-lg '>
        <input type="text" className='focus:outline-none border-none w-full bg-[#EBEBEB] text-[#C1C1C1]' placeholder="Type your message here.."/>
        <button className='text-white bg-[#017AF9] w-14 h-9 cursor-pointer rounded-md leading-9'> 
          <span>Send</span>
          {/* <FiSend/> */}
        </button>
      </div>
  )
}

export default ChatText