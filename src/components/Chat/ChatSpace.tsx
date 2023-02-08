import { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Image from 'next/image'
import Sidebar from '../Sidebar';

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

    ;

    return (

        <div className={`h-full flex p-8 bg-gray-200 rounded-lg shadow-2xl`}>

            <div className={`w-[27%] z-10`}>

                <Sidebar theme={theme} setTheme={setTheme} />
            </div>
            <div className={`h-full w-[73%] bg-secondary relative -left-4 rounded-r-xl`}>
                <p className='justify-center shadow-lg h-full flex items-center'>Chat Space</p>
            </div>
        </div>
    )
}
