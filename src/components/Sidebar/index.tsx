import React from 'react';
import {FiLogOut} from 'react-icons/fi';
import {BsTrash} from 'react-icons/bs';
import {BsFillLightbulbOffFill} from 'react-icons/bs';

export default function Sidebar() {
  return (
    <>
      <div className='content-between grid p-3 bg-gray-900 font-white w-2/12 h-screen text-white-900'>
        <div>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 pr-32 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+ New Chat</button>
        </div>
        <div className='grid content-end border-t-2 border-indigo-500 pt-2'>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3.5 pr-30 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex leading-3"><span className='pr-2'><BsTrash /></span> Clear conversations</button>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3.5 pr-30 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex leading-3"><span className='pr-2'><BsFillLightbulbOffFill /></span> Light mode</button>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3.5 pr-32 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex leading-3"><span className='pr-2'><FiLogOut /></span> Log out</button>
        </div>
      </div>
    </>
  )
}
