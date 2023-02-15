import React, { useContext, useEffect, useRef } from 'react';
import { MessageContext } from '@/contexts/MessageContext';
import { Message } from '@/components/Message/Message';
import MessageSkeleton from '@/components/MessageSkeleton/MessageSkeleton';
import { MessageType } from '@/utils/interfaces';

const ChatContent = () => {
  const { messageArray, isLoading } = useContext<any>(MessageContext || "");
  const messageEndRef = useRef<HTMLDivElement>(null)
  const renderMessage = () => {
    return messageArray?.map((message: MessageType, index: number) => {
      return (<Message key={index}
        variant={message.variant}
        contentMessage={message.contentMessage}
        time={message.time}
      />)
    })
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messageArray])

  return (
    <div className="w-full h-full overflow-y-scroll">
      {renderMessage()}
      {isLoading && <MessageSkeleton />}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatContent;
