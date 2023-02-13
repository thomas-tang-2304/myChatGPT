import { Message } from '@/components/Message/Message';
import { MessageContext } from '@/contexts/MessageContext';
import moment from 'moment';
import React, { useContext, useEffect, useRef } from 'react';

type Props = {};

const ChatContent = (props: Props) => {
  const [messageArray, _] = useContext<any>(MessageContext);
  const messageEndRef = useRef<any>(null)

  const renderMessage = () => {
    return messageArray?.map((message: any, index: number) => {
      return ( <Message key={index}
        variant={message.variant}
        contentMessage={message.contentMessage}
        time={moment().format('LT')}
      />)
    })
  }

  useEffect(()=> {
    messageEndRef.current?.scrollIntoView()
  },[messageArray])

  return (
    <div className="w-full h-full overflow-y-scroll">
      {renderMessage()}
      <div ref={messageEndRef}/>
    </div>
    
  );
};

export default ChatContent;
