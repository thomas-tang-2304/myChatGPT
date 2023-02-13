import { createContext, useState } from 'react'

// interface ModalProps {
//     theme: string
// }

export const ModalContext = createContext([])

const ModalProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ModalContext.Provider value={[theme, setTheme] as any}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider