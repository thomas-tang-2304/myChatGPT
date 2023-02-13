import { createContext, useEffect, useState } from 'react';

type MessageProps ={
    children: React.ReactNode
}

const DEFAULT_VALUE : []  = [] 

const MessageContext = createContext(DEFAULT_VALUE);

const MessageProvider :React.FC<MessageProps>  = ({children}) :any => {
  
  const [messageArray, setMessageArray] = useState(DEFAULT_VALUE);
  return (
    <MessageContext.Provider value = {[messageArray, setMessageArray] as any}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext};
