import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import styles from './Components.module.css'

export default function NotificationPopup({ icon, text, popUpColorClassName }: any) {

  return (
    <>
      <div className={`absolute ${styles.popupOpen} ${popUpColorClassName} right-8 px-5 py-3 rounded-lg flex items-center gap-2`}>
        {icon}
        <p>{text}</p>
      </div>
    </>
  )
}
