import React, { useState } from 'react'
import  {FiSend}  from "react-icons/fi";

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
      <div className='bg-[#EBEBEB] flex w-full justify-between p-3 rounded-br-lg'>

        <input 
          className=' focus:ring-0 border-none w-full bg-[#EBEBEB]'
          type="text"
          placeholder="Type your message here.."
          value={newMessage}
          onChange={(evt)=>setNewMessage(evt.target.value)} 
          onKeyDown={handleSendMessage}
          />

        <button 
          className='text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9'
          onClick={handleSendMessage}
          >
          <FiSend/>
        </button>
      </div>
  )
}

export default ChatText