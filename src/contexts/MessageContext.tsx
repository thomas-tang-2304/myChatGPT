import { createContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';


type MessageProps = {
  children: React.ReactNode
}

const MessageContext = createContext([]);

const cookies = new Cookies()

const MessageProvider: React.FC<MessageProps> = ({ children }): any => {

  const [theme, setTheme] = useState<string>("light")
  const [isLoading, setIsLoading] = useState(false)
  const [messageArray, setMessageArray] = useState([]);
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (cookies.get("theme")) setTheme(cookies.get("theme"));
    else setTheme("light");
  }, [cookies])

  return (
    <MessageContext.Provider value={{ messageArray, setMessageArray, isLoading, setIsLoading, theme, setTheme, isTyping, setIsTyping } as any}>
      <div className={theme}>
        {children}
      </div>
    </MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext };
