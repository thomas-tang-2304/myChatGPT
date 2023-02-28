import clsx from 'clsx';
import Markdown from '../Markdown';


type Message = {
  isLastMessage?: boolean;
  id?: number
  variant?: 'bot' | 'user';
  urlAvatar?: string;
  contentMessage?: any;
  time?: string;
};

export const Message: React.FC<Message> = ({
  variant,
  urlAvatar = (variant === 'bot') ? 'images/ChatGPTLogo.png' : 'images/default-avatar.png',
  contentMessage,
  time,
  children,
  isLastMessage = false

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
          'flex flex-col md:flex-row gap-2',
          variant === 'bot' ? 'items-start' : 'items-end md:flex-row-reverse',
        )}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-ful">
          <img className="object-cover w-full h-full rounded-full" src={urlAvatar} alt="Avatar" />
        </div>
        <div
          className={clsx(
            'md:max-w-[50%] max-w-full mx-3',
            variant === 'bot' ? 'md:ml-3' : 'md:mr-3',
          )}
        >
          <div
            className={clsx(
              'relative text-md message-color  py-2 px-4 shadow-lg text-color break-words',
              variant === 'bot'
                ? 'bg-white rounded-r-lg rounded-bl-lg'
                : 'bg-indigo-200 rounded-l-lg rounded-br-lg',
            )}
          >
            {children}
            {/* <ReactMarkdown children={contentMessage || ''} remarkPlugins={[remarkGfm]} /> */}

            <Markdown content={contentMessage} />
            {/* {contentMessage} */}
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
