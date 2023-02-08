import { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Image from 'next/image'
import Sidebar from '../Sidebar';
import ChatBody from '../ChatBody/ChatBody';
import useWindowSize from '@/customHooks/useWindowSize';


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


export default function ChatSpace({ info, theme, setTheme }: ChatProps) {

    return (
        < div className={`h-full flex p-8 bg-white rounded-lg shadow-2xl`
        }>

            <div className={`w-80`}>
                <Sidebar theme={theme} setTheme={setTheme}/>
            </div>
            <div className={`h-full w-full bg-secondary rounded-r-xl`}>
                <ChatBody />
            </div>
        </div >
    )
}


