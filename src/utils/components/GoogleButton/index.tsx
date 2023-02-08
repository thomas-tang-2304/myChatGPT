import React from 'react'
import styles from './googleButton.module.scss'

export default function GoogleLoginButton() {
    return (
        <div className={`hover:bg-blue-400 ${styles["google-btn"]}`}>
            <div className={styles["google-icon-wrapper"]}>
                <img className={styles["google-icon"]} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className={styles["btn-text"]}><b>Sign in with google</b></p>
            <div>

            </div>
        </div>
    )
}
