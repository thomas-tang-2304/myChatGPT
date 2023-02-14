import { MessageContext } from '@/contexts/MessageContext';
import { getMessageReponse } from '@/pages/api/apiRequest';
import Input from '@/utils/components/Input';
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { FiSend } from "react-icons/fi";

const ChatText = () => {
  const [newMessage, setNewMessages] = useState('');
  const [messageArray, setMessageArray] = useContext<any>(MessageContext);

  const messageRender = async()=>{
    const currMessageArray = [...messageArray]
    currMessageArray.push({id:Date.now(),contentMessage:newMessage,variant:'user'})
    // await setMessageArray([...messageArray,{id:Date.now(),contentMessage:newMessage,variant:'user'}])

    const response = await getMessageReponse(newMessage);
    // setMessageArray(currMessageArray)

    // await setMessageArray([...messageArray,{id:Date.now(),contentMessage:response?.data?.choices[0]?.text,variant:'bot'}])
    currMessageArray.push({id:Date.now(),contentMessage:response?.data?.choices[0]?.text,variant:'bot'})
    setMessageArray(currMessageArray)
    localStorage.setItem('newMessage',JSON.stringify(currMessageArray));
  }

    const hanldeKeyDown = async(evt:any)=>{
      if(evt.key ==='Enter' && newMessage){
        if(newMessage !==''){
          messageRender();
        }
        setNewMessages('')
      }
    }
    useEffect(()=>{
      const messData = localStorage.getItem('newMessage')
      if(messData !== null){
        setMessageArray(JSON.parse(messData))
      }
    },[])
    
    const hanldeClick = async()=>{
      if(newMessage !==''){
        messageRender();
      }
      setNewMessages('')
    }  
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