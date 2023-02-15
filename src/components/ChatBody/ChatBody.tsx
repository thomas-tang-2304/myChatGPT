import React, { useContext, useState } from 'react';
import ChatContent from './ChatContent/chatContent';
import TitleHeader from './ChatHeader/titleHeader';
import ChatText from './ChatText/chatText';

const ChatBody = () => {
  // const data =useContext(MessageStore)
  // console.log(data)
  const [lastMessage, setLastMessage] = useState('')
  return (
    <div className="back-frame rounded-r-lg flex flex-col justify-between items-center h-full w-full">
      <TitleHeader />
      <ChatContent lastMessage={lastMessage} />
      <ChatText lastMessage={lastMessage} setLastMessage={setLastMessage} />

    </div>
  );
};

export default ChatBody;
