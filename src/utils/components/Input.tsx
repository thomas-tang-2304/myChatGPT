import { type } from 'os';
import React from 'react'
import { FiSend } from "react-icons/fi";

export interface InputProps {
    background: string
    button: {
        isContained: boolean;
        element: JSX.Element | undefined;
        background: string | undefined;
    }
    type: string,

    placeholderText: string;
}

const Input = ({ background, button, placeholderText, type }: InputProps) => {
    return (
        <div className={`${background} text-white flex w-full justify-between p-3 rounded-br-lg items-center`}>
            <input type={type} className={`focus:ring-0 border-none w-full ${background} text-[#C1C1C1]`} placeholder={placeholderText} />

            {button.isContained ?
                button?.element
                :
                null
            }

        </div>
    )
}

export default Input