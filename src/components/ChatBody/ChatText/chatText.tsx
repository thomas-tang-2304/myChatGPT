import { MessageContext } from '@/contexts/MessageContext';
import Input from '@/utils/components/Input';
import React, { useState } from 'react'
import { useContext } from 'react';
import { FiSend } from "react-icons/fi";

const ChatText = () => {
  const [newMessage, setNewMessages] = useState('');
  const [messageArray, setMessageArray] = useContext<any>(MessageContext)
    const hanldeKeyDown =(evt:any)=>{
      if(evt.key ==='Enter' && newMessage){
        if(newMessage !==''){
          let currMessageArray = [...messageArray]
          currMessageArray.push({id:messageArray.length+1,contentMessage:newMessage,variant:'user'})
          setMessageArray(currMessageArray)
        }
        setNewMessages('')
      }
    }

    const hanldeClick =()=>{
      if(newMessage !==''){
        let currMessageArray = [...messageArray]
        currMessageArray.push({id:messageArray.length+1,contentMessage:newMessage,variant:'user'})
        setMessageArray(currMessageArray)
      }
      setNewMessages('')
    }  
  return (

    <Input
      background="back-frame"
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