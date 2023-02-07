import { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Image from 'next/image'

export interface ChatProps {
    info: UserInfo
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


export default function ChatSpace({ info }: ChatProps) {

    // const [messages, setMessages] = useState([{
    //     id: "1",
    //     text: "hello"

    // }])

    return (
        // <div className={`p-2 w-[800px] mx-auto`}>
        //     <main className={`chat-header py-2 px-1 flex items-center shadow-md`}>
        //         <span className={`active-badge mr-2`}><VscCircleLargeFilled className={`text-green-600`} /></span>
        //         <h1 className={`text-3xl `}>
        //             {info.fullName}
        //         </h1>

        //         {/* <div className={`chat-options-group`}>
        //             <IoMdCall className={`mr-2`} />
        //             <IoMdVideocam className={`mr-2`} />
        //         </div> */}
        //     </main>
        //     <div className={`chat-frame`}>

        //         {messages.map((msg, index) =>
        //             msg.id == "1" ?
        //                 (<span className={`message float-right`} key={index}>

        //                     <Image
        //                         className={`rounded-full object-cover
        //                 `}
        //                         src={info.image.url}
        //                         width={info.image.width}
        //                         height={info.image.height}

        //                     />
        //                     <p className={`message-text`}>
        //                         {msg.text}
        //                     </p>
        //                 </span>)
        //                 :
        //                 <span className={`message float-right`} key={index}>

        //                     <Image
        //                         className={`rounded-full object-cover
        //                 `}
        //                         src={info.image.url}
        //                         width={info.image.width}
        //                         height={info.image.height}

        //                     />
        //                     <p className={`message-text`}>
        //                         {msg.text}
        //                     </p>
        //                 </span>
        //         )}

        //     </div>
        // </div>

        <div className={`h-full flex p-8 bg-primary rounded-lg shadow-2xl`}>
            <div className={`h-full w-[30%] bg-secondary z-10 rounded-l-xl rounded-r-lg`}>
                <p className='justify-center shadow-lg h-full flex items-center'>Side bar</p>
            </div>
            <div className={`h-full w-[70%] bg-secondary relative -left-4 rounded-r-xl`}>
                <p className='justify-center shadow-lg h-full flex items-center'>Chat Space</p>
            </div>
        </div>
    )
}
