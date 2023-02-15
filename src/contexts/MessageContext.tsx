import { createContext, useEffect, useRef, useState } from 'react';

type MessageProps = {
  children: React.ReactNode
}


const DEFAULT_VALUE: [] = []

const MessageContext = createContext([]);

const MessageProvider: React.FC<MessageProps> = ({ children }): any => {

  const [theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(false)
  const [messageArray, setMessageArray] = useState([]);

  return (
    <MessageContext.Provider value={{ messageArray, setMessageArray, isLoading, setIsLoading, theme, setTheme } as any}>
      <div className={theme}>
        {children}
      </div>
    </MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext };
