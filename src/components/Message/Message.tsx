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
  urlAvatar,
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
        <div className="flex items-center justify-center w-10 h-10 rounded-ful">
          <img className="w-full h-full rounded-full" src={urlAvatar} alt="" />
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
                : 'bg-indigo-100 rounded-l-lg rounded-br-lg',
            )}
          >
            {/* {`${contentMessage}`} */}
            {
              contentMessage.split("\n").map((message, index) =>
                <div style={{ minHeight: 16 }} key={index}>{message}</div>)

            }
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
