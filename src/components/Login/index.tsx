import Input from '@/utils/components/Input';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import GoogleLoginButton from '@/utils/components/GoogleButton';

import ChatGPTLogo from '@/public/images/ChatGPTLogo.png';

export default function index() {
    const [isDisplayPassword, setDisplayPassword] = useState(false);
    const handleChangeDisplayPassword = () => {
        setDisplayPassword((prev) => !prev);
    };

    const eyeButtonClassNames = `bg-primary p-2 rounded`;
    return (
        <div className="flex flex-col justify-center h-full gap-3 mx-auto border max-w-[400px] bg-secondary">
            <div className={`text-center flex flex-col gap-3`}>
                <h1
                    className={`font-bold text-2xl flex items-center justify-center gap-2`}
                >
                    <Image
                        className="rounded-full"
                        src={ChatGPTLogo}
                        alt="Chat GPT icon"
                        width={48}
                        height={48}
                    />
                    Chat GPT
                </h1>
                <div className="px-6 text-sm">
                    <h2>Welcome to the coolest chatGPT experience ever!</h2>
                    <h2>
                        Here, we have the latest security features to keep your information
                        safe and secure, so you can relax and enjoy your time on the site.
                        Thanks!
                    </h2>
                </div>
            </div>
            <div className={`login-inputs flex flex-col items-center`}>
                <div className={`mb-3 w-3/4`}>
                    <Input
                        background="bg-secondary border rounded-lg text-xs p-2"
                        button={{
                            isContained: false,
                            element: undefined,
                            background: undefined,
                        }}
                        type="text"
                        placeholderText="Email@"
                    />
                </div>
                <div className={`mb-3 w-3/4`}>
                    <Input
                        background="bg-secondary border rounded-lg text-xs p-2"
                        button={{
                            isContained: true,
                            background: 'bg-primary',
                            element: isDisplayPassword ? (
                                <button
                                    className={eyeButtonClassNames}
                                    onClick={handleChangeDisplayPassword}
                                >
                                    <AiFillEyeInvisible />
                                </button>
                            ) : (
                                <button
                                    className={eyeButtonClassNames}
                                    onClick={handleChangeDisplayPassword}
                                >
                                    <AiFillEye />
                                </button>
                            ),
                        }}
                        type={isDisplayPassword ? 'text' : 'password'}
                        placeholderText="Password"
                    />
                </div>
                <div className={`mb-3 w-3/4 `}>
                    <button
                        className={`h-[42px] bg-primary w-full text-secondary font-extrabold hover:bg-blue-400 hover:shadow-md rounded-sm`}
                        onClick={handleChangeDisplayPassword}
                    >
                        Sign in
                    </button>
                </div>

                <hr className={`mb-3 w-3/4 text-center gap-3 flex flex-col`} />

                <div className={`w-3/4`}>
                    <GoogleLoginButton />
                </div>
            </div>
        </ div>
    );
}
