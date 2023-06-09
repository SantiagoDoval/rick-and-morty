import React, { createContext, useState } from 'react'


export const contexto = createContext()



export const UseContext = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }
    
    return (
        <contexto.Provider value={{
            darkMode,
            handleClick
        }}>
            {children}
        </contexto.Provider>
    )
}

