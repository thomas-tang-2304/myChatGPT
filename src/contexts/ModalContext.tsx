import { createContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export const ModalContext = createContext([])
const cookies = new Cookies()

const ModalProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        setTheme(cookies.get("theme") ?? "light")
    }, [])

    return (
        <ModalContext.Provider value={[theme, setTheme] as any}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider