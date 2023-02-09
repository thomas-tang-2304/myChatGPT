import React, { useState } from 'react'


export interface InputProps {
    background: string
    button: {
        isContained: boolean;
        element: JSX.Element | undefined;
        background: string | undefined;
    }
    type: string,
    value?:string,
    onKeyDown?: any,
    handleChange?:any,
    placeholderText: string;
}

const Input = ({ background, button, placeholderText,type,handleChange,value,onKeyDown}: InputProps) => {
    return (
        <div className={`${background} text-white flex w-full justify-between p-3 rounded-br-lg items-center`}>
            <input type={type} value={value} className={`focus:ring-0 border-none w-full ${background} text-[#C1C1C1]`} placeholder={placeholderText} 
            onChange={handleChange}
            onKeyDown ={onKeyDown}
            />
            {button.isContained ?
                button?.element
                :
                null
            }

        </div>
    )
}
export default Input;