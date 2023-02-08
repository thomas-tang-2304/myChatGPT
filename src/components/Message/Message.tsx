import React from 'react';
import clsx from 'clsx';

type Message = {
  variant?: 'bot' | 'user';
  className?: string;
  urlAvatar: string;
  contentMessage: string;
  time?: any;
};

export const Message: React.FC<Message> = ({
  className,
  variant,
  urlAvatar,
  contentMessage,
  time,
}) => {
  return (
    <div
      className={clsx(
        'message p-3 rounded-lg',
        variant === 'bot' ? 'col-start-1 col-end-8' : 'col-start-6 col-end-13',
        className,
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-start',
          variant === 'bot' ? null : 'flex-row-reverse',
          className,
        )}
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-ful">
          <img className="rounded-full w-full h-full" src={urlAvatar} alt="" />
        </div>
        <div
          className={clsx(
            'max-w-[50%]',
            variant === 'bot' ? 'ml-3' : 'mr-3',
            className,
          )}
        >
          <div
            className={clsx(
              'relative text-sm bg-white py-2 px-4 shadow',
              variant === 'bot'
                ? 'bg-white rounded-r-lg rounded-bl-lg'
                : 'bg-indigo-100 rounded-l-lg rounded-br-lg',
            )}
          >
            {contentMessage}
          </div>
          <span className={clsx(
              'flex text-xs text-gray-500 mt-1',
              variant === 'bot'
                ? 'justify-end mr-2'
                : 'justify-start ml-2',
            )}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
