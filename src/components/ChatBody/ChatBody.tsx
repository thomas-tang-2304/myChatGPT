import { MessageStore } from '@/pages';
import React, { useContext } from 'react';
import ChatContent from './ChatContent/chatContent';
import TitleHeader from './ChatHeader/titleHeader';
import ChatText from './ChatText/chatText';

const ChatBody = () => {
  // const data =useContext(MessageStore)
  // console.log(data)
  return (
    <div className="back-frame flex flex-col justify-between items-center h-full w-full">
      <TitleHeader />
      <ChatContent />
      <ChatText />
 
    </div>
  );
};

export default ChatBody;
