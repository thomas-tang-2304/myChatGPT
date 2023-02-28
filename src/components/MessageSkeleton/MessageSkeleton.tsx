import { MessageContext } from '@/contexts/MessageContext';
import React, { useContext } from 'react'
import ReactLoading from "react-loading";
import { Message } from '../Message/Message'


function MessageSkeleton({ }: Props) {
  const { theme } = useContext(MessageContext)
  return (
    <Message variant='bot' children={<ReactLoading type={'bubbles'} color={`${theme == "light" ? "black" : "white"}`} height='32px' width='32px' />} />
  )
}

export default MessageSkeleton