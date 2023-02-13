import React from 'react';
import clsx from 'clsx';

type Message = {
  id?: number
  variant?: 'bot' | 'user';
  urlAvatar?: string;
  contentMessage: string;
  time?: any;
};

export const Message: React.FC<Message> = ({
  variant,
  urlAvatar = (variant === 'bot') ? 'https://chromeunboxed.com/wp-content/uploads/2022/12/ChatGPT-Feature-1200x900.png' : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',
  contentMessage,
  time,
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
        <div className="flex items-center justify-center h-10 w-10 rounded-ful">
          <img className="rounded-full w-full h-full object-cover" src={urlAvatar} alt="" />
        </div>
        <div
          className={clsx(
            'max-w-[50%]',
            variant === 'bot' ? 'ml-3' : 'mr-3',
          )}
        >
          <div
            className={clsx(
              'relative text-sm bg-white py-2 px-4 shadow',
              variant === 'bot'
                ? 'bg-white rounded-r-lg rounded-bl-lg'
                : 'bg-indigo-200 rounded-l-lg rounded-br-lg',
            )}
          >
            {contentMessage}
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