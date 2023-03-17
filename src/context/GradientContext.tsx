import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string
    secondary: string
}


interface ContextProps {
    colors: ImageColors,
    previousColors: ImageColors,
    setPreviousMainColors: (colors: ImageColors) => void,
    setMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps) //todo lo que se expone hacia afuera


export const GradientProvider = ({ children }: any) => {

    const [previousColors, setpreviousColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setPreviousMainColors = (colors: ImageColors) => {
        setpreviousColors(colors)
    }
    const setMainColors = (colors: ImageColors) => {
        setColors(colors)
    }

    return (
        <GradientContext.Provider value={{
            previousColors,
            colors,
            setPreviousMainColors,
            setMainColors

        }}>
            {children}
        </GradientContext.Provider>
    )
}