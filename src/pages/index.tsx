import Head from 'next/head';
import MyImg from '@/public/images/myImg.jpg'

import ChatSpace from '@/components/Chat/ChatSpace';
import { UserInfo } from '@/utils/interfaces';
import React, { useContext, useEffect } from 'react';
import { MessageContext } from '@/contexts/MessageContext';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';


export default function Home() {

  const cookies = new Cookies()
  const router = useRouter();
 


  useEffect(() => {
    if (!cookies.get("cred-token")) router.push('/login')
  }, [cookies])
  return (
    <>
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
      
          <ChatSpace />

    </>
  );
}
