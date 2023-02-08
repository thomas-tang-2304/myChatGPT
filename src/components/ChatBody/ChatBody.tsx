import React from 'react';
import ChatContent from './ChatContent/chatContent';
import TitleHeader from './ChatHeader/titleHeader';
import ChatText from './ChatText/chatText';

const ChatBody = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <TitleHeader />
      <ChatContent />
      <ChatText />
    </div>
  );
};

export default ChatBody;
