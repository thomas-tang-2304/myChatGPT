import React from 'react';
import clsx from 'clsx';
import { TypeAnimation } from 'react-type-animation';

type Message = {
  id?: number
  variant?: 'bot' | 'user';
  urlAvatar?: string;
  contentMessage?: string;
  time?: string;
};

export const Message: React.FC<Message> = ({
  variant,
  urlAvatar = (variant === 'bot') ? 'images/ChatGPTLogo.png' : 'images/default-avatar.png',
  contentMessage,
  time,
  children
}) => {
  return (
    <div
      className={clsx(
        'p-3 rounded-lg',
        variant === 'bot' ? 'col-start-1 col-end-8' : 'col-start-6 col-end-13',
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-start',
          variant === 'bot' ? null : 'flex-row-reverse',
        )}
      >

        <div className="flex items-center justify-center w-10 h-10 rounded-ful">
          <img className="object-cover w-full h-full rounded-full" src={urlAvatar} alt="Avatar" />
        </div>
        <div
          className={clsx(
            'max-w-[50%]',
            variant === 'bot' ? 'ml-3' : 'mr-3',
          )}
        >
          <div
            className={clsx(
              'relative text-sm bg-white py-2 px-4 shadow break-words',
              variant === 'bot'
                ? 'bg-white rounded-r-lg rounded-bl-lg'
                : 'bg-indigo-200 rounded-l-lg rounded-br-lg',
            )}
          >
            {children}
            {variant === 'bot' ? (
              <TypeAnimation
                sequence={[
                  `${contentMessage ? contentMessage : ''}`
                ]}
                wrapper="div"
                repeat={0}
                cursor={false}
              />
            ) : contentMessage}

          </div>
          <span className={clsx(
            'flex text-xs text-gray-500 mt-1',
            variant === 'bot'
              ? 'justify-start ml-2'
              : 'justify-end mr-2',
          )}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
