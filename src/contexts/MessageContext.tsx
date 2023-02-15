import { createContext, useState } from 'react';

type MessageProps = {
  children: React.ReactNode
}

const MessageContext = createContext([]);

const MessageProvider: React.FC<MessageProps> = ({ children }): any => {
  const [isLoading, setIsLoading] = useState(false)
  const [messageArray, setMessageArray] = useState([]);
  const [isTyping, setIsTyping] = useState(false)

  return (
    <MessageContext.Provider value={{ messageArray, setMessageArray, isLoading, setIsLoading, isTyping, setIsTyping } as any}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext };
