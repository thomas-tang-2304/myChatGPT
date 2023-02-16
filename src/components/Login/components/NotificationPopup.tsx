import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import styles from './Components.module.css'

export default function NotificationPopup({ icon, text }: any) {

  return (
    <>
      <div className={`absolute ${styles.popupOpen} right-8 p-5 bg-white rounded-lg flex items-center gap-2`}>
        {icon}
        <p>{text}</p>
      </div>
    </>
  )
}
