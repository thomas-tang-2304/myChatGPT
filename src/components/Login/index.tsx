import Image from 'next/image';
import React, { useState } from 'react';
import DigiExLogo from '@/public/images/digiex_avatar.png'
import GoogleLoginButton from '@/utils/components/GoogleButton';
import ChatGPTLogo from '@/public/images/ChatGPTLogo.png';
import NotificationPopup from './components/NotificationPopup';
import { ImCross, ImCheckmark } from 'react-icons/im'
import { TypeAnimation } from 'react-type-animation';




export default function index() {
    const [isValid, setIsValid] = useState<boolean | null>(null)


    return (
        <>
            {isValid != null ? (isValid == false
                ? <NotificationPopup
                    popUpColorClassName={'bg-red-50'}
                    icon={<ImCross className='text-red-500' />}
                    text={"Không thể truy cập!"}
                />
                : <NotificationPopup
                    popUpColorClassName={'bg-green-50'}
                    icon={<ImCheckmark className='text-green-500' />}
                    text={"Đăng nhập thành công!"}
                />) : null}
            <div className="flex flex-col items-center justify-start h-[520px] gap-10  mx-auto border w-[24rem] bg-secondary rounded-md">
                <div className={`w-full`}>
                    <div className={`w-44`}>

                        <Image src={DigiExLogo} alt="" />
                    </div>
                </div>
                <h1
                    className={`text-center font-bold text-3xl flex items-center justify-center gap-2`}
                >
                    <Image
                        className="rounded-full"
                        src={ChatGPTLogo}
                        alt="Chat GPT icon"
                        width={48}
                        height={48}
                    />
                    Chat GPT
                </h1 >
                <div className={'flex flex-col items-evenly px-5 flex-grow'}>
                    <div className={`flex flex-col gap-3`}>
                        <div className="flex px-6 text-lg">
                            <div className={`flex-grow h-fit`}>

                                <TypeAnimation
                                    // Same String at the start will only be typed once, initially
                                    sequence={[

                                        `Welcome to the coolest chatGPT experience ever!
                                        Here, we have the latest security features to keep your information
                                safe and secure, so you can relax and enjoy your time on the site.
                                Thanks!`,
                                        600,

                                    ]}
                                    speed={75} // Custom Speed from 1-99 - Default Speed: 40

                                    wrapper="span" // Animation will be rendered as a <span>
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />
                            </div>
                            {/* <h2 className={`text`}>Welcome to the coolest chatGPT experience ever!</h2>
                            <div className='cursor'></div>
                            <h2 className={`text`} >
                                Here, we have the latest security features to keep your information
                                safe and secure, so you can relax and enjoy your time on the site.
                                Thanks!
                            </h2>
                            <div className='cursor'></div> */}
                        </div>
                    </div>
                </div>
                <GoogleLoginButton isValid={isValid} setIsValid={setIsValid} />
            </ div>
        </>
    );
}
