import React from 'react'
import ChatItem from './ChatItem/chatItem'

type Props = {}

const ChatContent = (props: Props) => {
    return (
        <div className='flex-3 w-full h-full justify-center items-center text-center overflow-auto'>
            <div className=''>
                {/* <ChatItem/> */}
            </div>
        </div>
    )
}

export default ChatContent