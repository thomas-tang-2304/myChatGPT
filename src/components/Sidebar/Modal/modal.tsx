import React, { useState } from 'react'
// 
const modalBackground = `
    fixed
    left-0
    top-0
    w-full
    h-full
    z-[1000]
    overflow-auto
    bg-[rgba(0,0,0,0.6)]
    bg-[rgba(0,0,0,0]
`
const stylesButton = `
    text-white
    focus:ring-4 
    font-medium 
    rounded-lg 
    text-sm 
    px-5 py-2.5 mr-2 mb-2 
`
export default function modal({setIsShowing, styles, addNewChat}: any) {
    const [value, setValue] = useState('');

  return (
    <>
        <div className={`${modalBackground}`}>
            <div className='bg-gray-800 p-3 fixed left-[40%] top-[30%] rounded-lg grid gap-4 grid-cols-1'>
                <div className='text-base font-bold text-white'>New Chat</div>
                <div className='body'>
                    <input type="text" className={`${styles}`} onChange={(e) => setValue(e.target.value)} value={value}/>
                </div>
                <div className='flex justify-end'>
                    <button onClick={() => {setIsShowing(false)}} type="button" className={`${stylesButton} dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300`}>Cancel</button>
                    <button onClick={() => addNewChat(value)} type="submit" className={`${stylesButton} bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>save</button>
                </div>
            </div>
        </div>
    </>
  )
}
