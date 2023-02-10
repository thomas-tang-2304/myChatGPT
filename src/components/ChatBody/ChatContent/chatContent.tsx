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
        variant="user"
        contentMessage={message.contentMessage}
        time={moment().format('LT')}
      />)
    })
  }

  useEffect(()=> {
    messageEndRef.current?.scrollIntoView()
  },[messageArray])

  return (
    <div className=" border-y-[1px] w-full h-full overflow-y-scroll">
      <Message
        variant="user"
        contentMessage="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        time={'3:00 AM'}
      />
      <Message
        variant="bot"
        contentMessage="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        time={'3:01 AM'}
      />
      {renderMessage()}
      <div ref={messageEndRef}/>
    </div>
    
  );
};

export default ChatContent;
