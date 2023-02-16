
import React, { useContext, useEffect, useRef } from 'react';
import { MessageContext } from '@/contexts/MessageContext';

import { Message } from '@/components/Message/Message';
import MessageSkeleton from '@/components/MessageSkeleton/MessageSkeleton';
import { MessageType } from '@/utils/interfaces';

type Props = {};

const ChatContent = ({ lastMessage }: any) => {
  const { messageArray, isLoading } = useContext<any>(MessageContext || "");
  const messageEndRef = useRef<HTMLDivElement>(null)
  const resLastMessage = lastMessage.replace("\n\n", "")
  const renderMessage = () => {
    return (<>
      {messageArray?.map((message: any, index: number) => {
        const resMessage = message.contentMessage.replace("\n\n", "")
        return (
          <Message
            key={index}
            variant={message.variant}
            contentMessage={message.contentMessage}
            // contentMessage={<span style={{ whiteSpace: "pre-line" }}>{resMessage.startsWith("?") === true ? resMessage.replace('?', '') : resMessage}</span>}
            time={message.time}
          />
        )
      }


      )}

      {isLoading && (lastMessage ? <Message
        key={messageArray.length + 1}
        variant={"bot"}
        contentMessage={lastMessage}
        // contentMessage={<span style={{ whiteSpace: "pre-line" }}>{resLastMessage.startsWith("?") === true ? resLastMessage.replace('?', '') : resLastMessage}</span>}
        time={lastMessage.time}
      /> : <MessageSkeleton />)}

    </>
    )
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messageArray])

  return (
    <div className="w-full h-full overflow-y-scroll">
      {renderMessage()}
      <div ref={messageEndRef} />
    </div>

  );
};

export default ChatContent;
