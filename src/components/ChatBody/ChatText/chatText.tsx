import { MessageContext } from '@/contexts/MessageContext';
import { finishedText, getMessageReponse, refreshText } from '@/pages/api/apiRequest';
import Input from '@/utils/components/Input';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { FiSend } from "react-icons/fi";


let stopReason = "length";

const ChatText = ({ lastMessage, setLastMessage }: any) => {
  const [newMessage, setNewMessages] = useState('');
  const { messageArray, setMessageArray, setIsLoading, isLoading, isReset, setIsReset } = useContext<any>(MessageContext);



  const messageRender = async () => {

    setMessageArray((prevState: any) => [...prevState, { id: Date.now(), contentMessage: newMessage, variant: 'user', time: moment().format('LT') }])

    setIsLoading(true)

    stopReason = await getMessageReponse(newMessage);
    while (stopReason == "length") {
      stopReason = await getMessageReponse(newMessage);

      setLastMessage(finishedText)
    }
    setLastMessage(finishedText)
    setMessageArray((prevState: any) => [...prevState, { id: Date.now(), contentMessage: finishedText, variant: 'bot', time: moment().format('LT') }])


    setIsLoading(false)
  }

  const saveMessage = () => {
    if (messageArray?.length > 0) {
      localStorage.setItem('newMessage', JSON.stringify(messageArray));
    }
  }

  const hanldeKeyDown = async (evt: any) => {
    if (evt.key === 'Enter' && newMessage) {

      if (newMessage !== '') {
        messageRender();
      }
      setNewMessages('')
      refreshText()
    }
  }

  const hanldeClick = async () => {
    if (newMessage !== '') {
      messageRender();
    }
    setNewMessages('')
  }

  useEffect(() => {
    saveMessage()
  }, [messageArray])

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
          <button className={`${isLoading === true ? 'bg-[#ccc]' : 'bg-[#017AF9] hover:bg-[#2474ca]'} text-white w-16 h-9 cursor-pointer flex justify-center items-center rounded-md leading-9`} onClick={hanldeClick}
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