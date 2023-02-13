import { Message } from '@/components/Message/Message';
import { MessageContext } from '@/contexts/MessageContext';
import React, { useContext } from 'react';
import * as fs from 'fs'

type Props = {};

const ChatContent = (props: Props) => {
  const [messageArray, _] = useContext<any>(MessageContext);



  const renderMessage = () => {
    return messageArray?.map((message: any) => {
      return (<Message key={message.id}
        variant={message.variant}
        urlAvatar="https://images.unsplash.com/photo-1675710512122-435d73e05dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
        contentMessage={message.contentMessage.replace('\n\n', '')}
        time={message.time}

      />)
    })
  }

  return (
    <div className="w-full h-full overflow-y-scroll">
      {renderMessage()}
    </div>

  );
};

export default ChatContent;
