
import Head from 'next/head';
import MyImg from '@/public/images/myImg.jpg'

import ChatSpace, { ChatProps, UserInfo } from '@/components/Chat/ChatSpace';


export default function Home() {
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
    <>
      <Head>
        <title>Chat GPT</title>
        <meta
          name="description"
          content="Chat GPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container p-3 h-[100vh] w-full mx-auto`}>
        <ChatSpace info={info} />
      </div>
    </>

  );
}
