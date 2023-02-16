import { createContext, useState } from 'react';


type MessageProps = {
  children: React.ReactNode
}

const MessageContext = createContext([]);

const MessageProvider: React.FC<MessageProps> = ({ children }): any => {

  const [theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(false)
  const [messageArray, setMessageArray] = useState([]);
  const [isTyping, setIsTyping] = useState(false)

  return (
    <MessageContext.Provider value={{ messageArray, setMessageArray, isLoading, setIsLoading, theme, setTheme, isTyping, setIsTyping } as any}>
      <div className={theme}>
        {children}
      </div>
    </MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext };
