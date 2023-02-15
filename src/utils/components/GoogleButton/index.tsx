import React, { useEffect, useState } from 'react'
// import styles from './googleButton.module.scss'
import jwt_decode from 'jwt-decode'
import jwt from 'jsonwebtoken';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { User } from '@/utils/interfaces';

const cookies = new Cookies();



export default function GoogleAuth() {
    const router = useRouter();

    const [userCredentials, setUserCredentials] = useState<any>(null);

    const onSuccess = (credentialResponse: any) => {
        const { email, email_verified, name, picture, given_name, family_name }: User = jwt_decode(credentialResponse.credential);


        const newToken = jwt.sign({ email, email_verified, name, picture, given_name, family_name }, "chatGPT - digiex")
        cookies.set("cred-token", newToken)
        setUserCredentials(newToken)
    }

    useEffect(() => {
        const isCookieSet = cookies.get("cred-token");

        if (isCookieSet)
            router.push('/');
    }, [userCredentials])



    const CLI_ID: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    return (

        <GoogleOAuthProvider clientId={CLI_ID}>
            <div className='flex justify-center w-full mx-auto'>


                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    logo_alignment={'center'}
                    shape={"circle"}
                    useOneTap
                />
            </div>

        </GoogleOAuthProvider>

    );
}
