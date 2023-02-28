import React, { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatContent from './ChatContent/chatContent';
import TitleHeader from './ChatHeader/titleHeader';
import ChatText from './ChatText/chatText';

const ChatBody = () => {
  // const data =useContext(MessageStore)
  // console.log(data)
  const [lastMessage, setLastMessage] = useState('')
  return (
    <div className="flex flex-col items-center justify-between w-full h-full back-frame">
     

        <TitleHeader />
        <ChatContent lastMessage={lastMessage} />
        <ChatText lastMessage={lastMessage} setLastMessage={setLastMessage} />

    </div>
  );
};

export default ChatBody;
