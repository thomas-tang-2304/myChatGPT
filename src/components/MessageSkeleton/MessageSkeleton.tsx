import React from 'react'
import ReactLoading from "react-loading";
import { Message } from '../Message/Message'

type Props = {}

function MessageSkeleton({}: Props) {
  return (
   <Message variant='bot' children={<ReactLoading type={'bubbles'} color="black" height='32px' width='32px'/>}/>
  )
}

export default MessageSkeleton