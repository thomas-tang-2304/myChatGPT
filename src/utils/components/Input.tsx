import React, { InputHTMLAttributes, useState } from 'react'
import { InputProps } from '../interfaces';


const Input = ({ background, button, placeholderText, type, handleChange, value, onKeyDown }: InputProps) => {
    return (
        <div className={`${background} text-white flex w-full justify-between p-3 rounded-br-lg items-center transition-all`}>
            <input type={type} value={value} className={`focus:ring-0 border-none w-full ${background} text-black`} placeholder={placeholderText}
                onChange={handleChange}
                onKeyDown={onKeyDown}
            />
            {button.isContained ? button?.element : null}
        </div>
    )
}
export default Input;