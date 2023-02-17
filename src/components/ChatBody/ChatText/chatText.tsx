import { MessageContext } from '@/contexts/MessageContext';
import { finishedText, getMessageReponse, refreshText } from '@/pages/api/apiRequest';
import Input from '@/utils/components/Input';
import { MessageType } from '@/utils/interfaces';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { FiSend } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';


let stopReason = "length";

const ChatText = ({ lastMessage, setLastMessage }: any) => {
  const [newMessage, setNewMessages] = useState('');
  const { messageArray, setMessageArray, setIsLoading, isLoading, setIsTyping, theme } = useContext<any>(MessageContext);



  const messageRender = async () => {

    setMessageArray((prevState: [MessageType]) => [...prevState, { id: Date.now(), contentMessage: newMessage, variant: 'user', time: moment().format('LT') }])

    setIsLoading(true)

    stopReason = await getMessageReponse(newMessage);
    while (stopReason == "length") {
      setLastMessage(finishedText)
      stopReason = await getMessageReponse(finishedText);

    }
    setLastMessage(finishedText)
    setMessageArray((prevState: any) => [...prevState, { id: Date.now(), contentMessage: finishedText, variant: 'bot', time: moment().format('LT') }])


    setIsLoading(false)
  }
  const handleLocal = () => {
    if (messageArray.length !== 0) {
      localStorage.setItem('newMessage', JSON.stringify(messageArray));
    }
  }
  useEffect(() => {
    handleLocal()
  }, [messageArray])

  useEffect(() => {
    const messData = localStorage.getItem('newMessage')
    if (messData !== null) {
      setMessageArray(JSON.parse(messData))
    }
  }, [])

  const hanldeKeyDown = async (evt: any) => {
    if (evt.key === 'Enter' && newMessage) {

      if (newMessage !== '') {
        setIsTyping(true)
        messageRender();
      }
      setNewMessages('')
      refreshText()
      setLastMessage("")
    }

  }

  const hanldeClick = async () => {
    if (newMessage !== '') {
      setIsTyping(true)
      messageRender();
    }
    setNewMessages('')
    refreshText()
    setLastMessage("")
  }
  useEffect(() => {

    setIsTyping(false)
    const messData = localStorage.getItem('newMessage')
    if (messData !== null) {
      setMessageArray(JSON.parse(messData))
    }
  }, [])

  return (
    <Input
      background={`${theme === "dark" ? "bg-[#4b5563] text-white" : "bg-[#EBEBEB]"}`}
      button={{
        isContained: true,
        element: (
          <button className={`${isLoading === true ? 'bg-[#ccc]' : 'back-primary hover:bg-[#2474ca]'} text-white w-16 h-9 cursor-pointer flex justify-center items-center rounded-md leading-9`} onClick={hanldeClick}
            disabled={isLoading === true ? true : false}
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