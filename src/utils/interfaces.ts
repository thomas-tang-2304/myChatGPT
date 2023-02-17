import { InputHTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

interface NotificationLoginBar {
  icon: React.FC;
  text?: string;
  popUpColorClassName?: string;
}

interface User {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}
interface ChatProps {
  info: UserInfo;
  theme: any;
  setTheme: any;
}

interface UserInfo {
  image: {
    width: number;
    height: number;
    url: StaticImageData;
  };
  fullName: string;
  id: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  background: string;
  button: {
    isContained: boolean;
    element: JSX.Element | undefined;
    background: string | undefined;
  };
  type: string;
  value?: string;
  onKeyDown?: any;
  handleChange?: any;
  placeholderText: string;
}
interface WindowSize {
  width?: number;
  height?: number;
}

interface MessageType {
  id: number;
  variant: 'bot' | 'user';
  contentMessage: string;
  time: string;
}

export type { User, ChatProps, UserInfo, InputProps, WindowSize, MessageType };
