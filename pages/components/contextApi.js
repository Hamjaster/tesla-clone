import React, { createContext, useState } from 'react'

export const Context = createContext()

export function ContextProvider({ children }) {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <Context.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </Context.Provider>
    )
}
