import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

// import styles from './googleButton.module.scss'
import jwt_decode from 'jwt-decode'
import jwt_encode from 'jwt-encode';

import { User } from '@/utils/interfaces';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';

import Image from 'next/image';
import GoogleLogo from "@/public/images/google_logo.png"
import styles from './googleButton.module.scss'

const cookies = new Cookies();



export default function GoogleAuth({ setIsValid, isValid }: any) {
    const router = useRouter();

    const [userCredentials, setUserCredentials] = useState<any>(null);
    const logoSize = 80;

    const [wasHover, setWasHover] = useState(false)

    const handleHover = () => {
        setWasHover((prev: boolean) => !prev);
    }

    const onSuccess = (credentialResponse: any) => {
        const { email, email_verified, name, picture, given_name, family_name }: User = jwt_decode(credentialResponse.credential);
        const newToken: any = jwt_encode({ email, email_verified, name, picture, given_name, family_name }, "chatGPT - digiex")
        if (email.includes("@digiex.group")) {
            cookies.set("cred-token", newToken)
            setIsValid(true)
            router.push("/")
        }
        else {
            setIsValid(false);
            setTimeout(() => {
                setIsValid(null)
            }, 4000)
        }
    }

    useEffect(() => {
        const isCookieSet = cookies.get("cred-token");

        if (isCookieSet)
            router.push('/');
    }, [userCredentials])

    useEffect(() => {
        setTimeout(() => {
            setWasHover(true)
        }, 2500)
    }, [])

    const CLI_ID: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    return (
        <div className={`flex items-center justify-center gap-3 mb-5`}>
            <div
                onClick={handleHover}

                className={`border rounded-full p-3 ${styles.logo}`}
                style={{ width: logoSize, height: logoSize }}
            >

                <Image src={GoogleLogo} alt="Google Login" />
            </div>
            <div className={`${styles.transform} ${wasHover ? styles.loginToggle : styles.loginToggleClose}`}>

                <GoogleOAuthProvider clientId={CLI_ID} >


                    <GoogleLogin
                        type={"standard"}
                        size={'large'}
                        onSuccess={onSuccess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        logo_alignment={'center'}
                        shape={"pill"}
                        useOneTap
                    />

                </GoogleOAuthProvider>
            </div>
        </div>

    );
}
