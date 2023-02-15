import { Message } from '@/components/Message/Message';
import MessageSkeleton from '@/components/MessageSkeleton/MessageSkeleton';
import { MessageContext } from '@/contexts/MessageContext';

import moment from 'moment';
import React, { useContext, useEffect, useRef } from 'react';

type Props = {};

const ChatContent = ({ lastMessage }: any) => {
  const { messageArray, isLoading, setMessageArray } = useContext<any>(MessageContext || "");
  const messageEndRef = useRef<any>(null)
  const renderMessage = () => {
    return (<>
      {messageArray?.map((message: any, index: number) => {
        return (<Message
          key={index}
          variant={message.variant}
          contentMessage={message.contentMessage}
          time={message.time}
        />)
      })}
      
      {isLoading && <Message
        key={messageArray.length + 1}
        variant={"bot"}
        contentMessage={lastMessage}
        time={new Date().getTime()}
      />}

    </>
    )
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
