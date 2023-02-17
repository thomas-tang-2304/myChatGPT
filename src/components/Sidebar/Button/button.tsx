import React, { useContext, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTrash, BsFillLightbulbOffFill, BsFillLightbulbFill } from 'react-icons/bs';
import Cookies from 'universal-cookie/cjs/Cookies';
import { useRouter } from 'next/router';
import { MessageContext } from '@/contexts/MessageContext';

const cookies = new Cookies()

export default function Button({ setListIntent, styles }: any) {
  const router = useRouter()
  const [hasLogout, setHasLogout] = useState(false)
  const { theme, setTheme }: any = useContext(MessageContext)

  const toggleTheme = () => {
    setTheme((prev: any) => prev === "dark" ? 'light' : 'dark');
  };

  const handleLogout = () => {
    setHasLogout(true)
  }

  useEffect(() => {
    if (hasLogout) {
      cookies.remove("cred-token")
      router.push('/login')
    }
    if (!cookies.get("cred-token")) router.push('/login')
  }, [hasLogout, cookies.get("cred-token")])

  return (
    <>
      <button type="button" className={`${styles} dark:border-gray-700 flex leading-3`} onClick={toggleTheme} >
        <span className={`mx-3 back-secondary`}>
          {theme === "light" ? <BsFillLightbulbOffFill /> : <BsFillLightbulbFill />}
        </span>
        <span>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>

      <button
        type="button"
        className={`${styles} dark:border-gray-700 flex leading-3`}
        onClick={() => setHasLogout(true)}
      >
        <span className={`mx-3`}>
          <FiLogOut />
        </span>
        Log out
      </button>
    </>
  )
}