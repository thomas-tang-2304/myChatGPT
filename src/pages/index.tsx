
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Rightbar from '@/components/Rightbar';
import ChatBody from '@/components/ChatBody/ChatBody';


export default function Home() {
  return (
    <div className='flex w-full'>
      <Sidebar/>
      <ChatBody/>
    </div>
  );
}
