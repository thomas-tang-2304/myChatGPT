import React from 'react'
import Sidebar from '../Sidebar';
import ChatBody from '../ChatBody/ChatBody';
import useWindowSize from '@/customHooks/useWindowSize';
import { ChatProps} from '@/utils/interfaces';

export default function ChatSpace({ theme, setTheme }: ChatProps) {

    const size = useWindowSize();
    const width = size.width

    return (
        < div className={`h-full flex p-8 bg-white rounded-lg shadow-2xl`
        }>
            {width && width >= 640 ? (<div className={`w-80`}>
                <Sidebar theme={theme} setTheme={setTheme} />
            </div>) : ''}

            <div className={`h-full w-full bg-secondary rounded-r-xl`}>
                <ChatBody />
            </div>
        </div >
    )
}


