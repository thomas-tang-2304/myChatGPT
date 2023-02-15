import { InputHTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';
export interface User {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}
export interface ChatProps {

  info: UserInfo
  theme: any;
  setTheme: any;
}

export interface UserInfo {
  image: {
      width: number;
      height: number;
      url: StaticImageData;
  },
  fullName: string;
  id: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  background: string
  button: {
      isContained: boolean;
      element: JSX.Element | undefined;
      background: string | undefined;
  }
  type: string,
  value?:string,
  onKeyDown?: any,
  handleChange?:any,
  placeholderText: string;
}
export interface WindowSize {
  width?: number
  height?: number
}
