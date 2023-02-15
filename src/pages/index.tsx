import Head from 'next/head';
import MyImg from '@/public/images/myImg.jpg'

import ChatSpace from '@/components/Chat/ChatSpace';
import React from 'react';
import { MessageProvider } from '@/contexts/MessageContext';
import { UserInfo } from '@/utils/interfaces';

export default function Home({ theme, setTheme }: any) {
  const info: UserInfo = {
    image: {
      width: 30,
      height: 30,
      url: MyImg
    },
    fullName: "Hong Tang",
    id: "1"
  }

  return (
    <MessageProvider>
      <Head>
        <title>Chat GPT</title>
        <meta
          name="description"
          content="Chat GPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Orbitron:wght@500&family=Saira:ital,wght@1,500&display=swap" rel="stylesheet" />
      </Head>
      <div className={` container p-3 h-[100vh] w-full mx-auto`}>

        <ChatSpace info={info} theme={theme} setTheme={setTheme} />
      </div>
    </MessageProvider>
  );
}
