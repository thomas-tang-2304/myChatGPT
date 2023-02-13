import Input from '@/utils/components/Input';
import React, { useState, useContext } from 'react'
import { FiSend } from "react-icons/fi";
import axios, { CancelTokenSource } from "axios"
import { MessageContext } from '@/contexts/MessageContext';
import { sendAPIChatGPT, finishedText, refreshText } from '@/utils/apiRequests/chatGPT';
import Circle from '@/utils/components/LoadingCircle/Circle';




const ChatText = () => {
  const [newMessage, setNewMessages] = useState('');
  const [messageArray, setMessageArray] = useContext<any>(MessageContext)
<<<<<<< HEAD
  const [isSending, setIsSending] = useState(false)



  const hanldeKeyDown = async (evt: any) => {
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()
    setIsSending(true)
    refreshText()
    if (evt.key === 'Enter' && newMessage) {
      if (newMessage !== '') {
        await setMessageArray((prev: string[]) => [
          ...prev,
          { id: messageArray.length + 1, contentMessage: newMessage, variant: 'user', time }
        ])
        await sendAPIChatGPT(newMessage)
        await setMessageArray((prev: string[]) => [
          ...prev,
          { id: messageArray.length + 1, contentMessage: finishedText, variant: 'bot', time }
        ])
=======
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
>>>>>>> 647716400f08e9245b76abcdd5e7500b8e48a856
      }
      setNewMessages('')
    }
    setIsSending(false)
  }

  const hanldeClick = async () => {

    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes()
    setIsSending(true)
    refreshText()
    if (newMessage !== '') {

      await setMessageArray((prev: string[]) => [
        ...prev,
        { id: messageArray.length + 1, contentMessage: newMessage, variant: 'user', time }
      ])
      await sendAPIChatGPT(newMessage)
      await setMessageArray((prev: string[]) => [
        ...prev,
        { id: messageArray.length + 1, contentMessage: finishedText, variant: 'bot', time }
      ])

      setNewMessages('')
    }
    setIsSending(false)
  }


  return (
    <>

      {isSending
        ? <>
          {console.log(messageArray)}
          <Circle />
        </>
        : null}
      < Input
        background="bg-[#EBEBEB]"
        button={{
          isContained: true,
          element: (
            <button
              disabled={isSending}
              className={`disabled:opacity-25 text-white bg-[#017AF9] w-16 h-9 hover:bg-black cursor-pointer flex justify-center items-center rounded-md leading-9`} onClick={hanldeClick}
            >
              <FiSend />
            </button>
          ),
          background: "bg-[#017AF9]",
        }
        }
        type="text"
        value={newMessage}
        onKeyDown={hanldeKeyDown}
        handleChange={(evt: any) => { setNewMessages(evt.target.value) }}
        placeholderText="Type your message here.."
      />
    </>
  )
}
export default ChatText;