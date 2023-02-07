
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Rightbar from '@/components/Rightbar';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar/>
    </div>
  );
}
