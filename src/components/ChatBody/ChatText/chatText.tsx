import { MessageContext } from '@/contexts/MessageContext';
import { getMessageReponse } from '@/pages/api/apiRequest';
import Input from '@/utils/components/Input';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { FiSend } from "react-icons/fi";

const ChatText = () => {
  const [newMessage, setNewMessages] = useState('');
  const [messageArray, setMessageArray, isLoading, setIsLoading] = useContext<any>(MessageContext);

  const messageRender = async()=>{

    setMessageArray((prevState: any) => [...prevState, { id: Date.now(), contentMessage: newMessage, variant: 'user', time: moment().format('LT')}])

    setIsLoading(true)
    const response = await getMessageReponse(newMessage);

    setMessageArray((prevState: any) => [...prevState, { id: Date.now(), contentMessage: response?.data?.choices[0]?.text, variant: 'bot', time: moment().format('LT') }])
    
    setIsLoading(false)
  
  }
  const handleLocal =()=>{
    if(messageArray.length !==0){
      localStorage.setItem('newMessage',JSON.stringify(messageArray));
    }
  }
    useEffect(()=>{
      handleLocal()
    },[messageArray])

    useEffect(()=>{
      const messData = localStorage.getItem('newMessage')
      if(messData !== null){
        setMessageArray(JSON.parse(messData))
      }
    },[])
    
  const hanldeKeyDown = async (evt: any) => {
    if (evt.key === 'Enter' && newMessage) {
      if (newMessage !== '') {
        messageRender();
      }
      setNewMessages('')
    }
  }

  const hanldeClick = async () => {
    if (newMessage !== '') {
      messageRender();
    }
    setNewMessages('')
  }
  useEffect(() => {
    const messData = localStorage.getItem('newMessage')
    if (messData !== null) {
      setMessageArray(JSON.parse(messData))
    }
  }, [])

  return (

    <Input
      background="bg-[#EBEBEB]"
      button={{
        isContained: true,
        element: (
          <button className={`text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9`}  onClick={hanldeClick} disabled
          >
            <FiSend />
          </button>
        ),
        background: "bg-[#017AF9]",
      }}
      type="text"
      value={newMessage}
      onKeyDown={hanldeKeyDown}
      handleChange={(evt: any) => { setNewMessages(evt.target.value) }}
      placeholderText="Type your message here.."
    />
  )
}
export default ChatText;