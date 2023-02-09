import Input from '@/utils/components/Input';
import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";


const ChatText = () => {
  const [newMessage, setNewMessages] = useState('');
  const [messages, setMessages]= useState([])
  const hanldeKeyDown =(evt:any)=>{
    if(evt.key ==='Enter' && newMessage){
      setNewMessages('')
      setMessages([...messages]);
    }
  }
  const hanldeClick =(evt:any)=>{
    setNewMessages('')
    setMessages([...messages]);
  }  
  console.log(newMessage)
  return (

    <Input
      background="bg-[#EBEBEB]"
      button={{
        isContained: true,
        element: (
          <button className={`text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9`} onClick={hanldeClick}
          >
            <FiSend />
          </button>
        ),
        background: "bg-[#017AF9]",
      }}
      type="text"
      value={newMessage}
      onKeyDown={hanldeKeyDown}
      handleChange={(evt:any)=>{setNewMessages(evt.target.value)}}
      placeholderText="Type your message here.."
    />
  )
    }
export default ChatText;