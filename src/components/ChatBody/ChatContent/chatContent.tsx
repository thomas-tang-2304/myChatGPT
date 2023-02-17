
import React, { useContext, useEffect, useRef } from 'react';
import { MessageContext } from '@/contexts/MessageContext';
import { Message } from '@/components/Message/Message';
import MessageSkeleton from '@/components/MessageSkeleton/MessageSkeleton';
import { MessageType } from '@/utils/interfaces';
import Markdown from '@/components/Markdown';

type Props = {};

const ChatContent = ({ lastMessage }: any) => {
  const { messageArray, isLoading } = useContext<any>(MessageContext || "");
  const messageEndRef = useRef<HTMLDivElement>(null)
  const renderMessage = () => {
    return (<>
      {messageArray?.map((message: any, index: number) => {
        return (

          <Message
            key={index}
            variant={message.variant}
            contentMessage={
              <span style={{ whiteSpace: "pre-line" }}>
                {message.contentMessage.replace("\n\n", "")}
              </span>
            }
            time={message.time}
          />
        )
      }
      )}

      {isLoading && (lastMessage ? <Message
        key={messageArray.length + 1}
        variant={"bot"}
        contentMessage={
          <span style={{ whiteSpace: "pre-line" }}>
            {lastMessage.replace("\n\n", "")}
          </span>
        }
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
