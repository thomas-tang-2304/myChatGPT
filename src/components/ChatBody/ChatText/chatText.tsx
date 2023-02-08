import Input from '@/utils/components/Input';
import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";


const ChatText = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async(evt:any)=>{

    if(evt.key ==='Enter' && newMessage){
      setNewMessage("");
      setMessages([...messages]);
      console.log(newMessage);
      
      //xu ly api, tao axios export sendMessage
      // sendMessage({ content: newMessage, chatId: selectedChat?._id })
      // .then((res) => {
      //   setNewMessage("");
      //   setMessages([...messages, res?.data]);
      // })
      // .catch((error) =>{
      //   console.error(error);
      // })
    }
  }
  return (

    <Input
      background="back-frame"
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