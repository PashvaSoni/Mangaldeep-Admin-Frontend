import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'styled-components'

type Props = {
    children?: React.ReactNode;
};
interface IContextProps {
    currentTheme: string;
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>
}

const BaseTheme = {
    //some common theme goes here
    device: {
        mobile: `(max-width:480px)`,
        tablet: `(min-width: 481px) and (max-width: 1024px)`,
        laptop: `(min-width:1025px)`,
    }
}
const themesMap = {
    light: {
        // light theme properties goes here 
        ...BaseTheme,
        color: {
            backgroundColor: "#fff1e8"
        }
    },
    dark: {
        // dark theme properties goes here 
        ...BaseTheme,
        color: {
            backgroundColor: "#0f0f0f"
        }
    }
}

const ThemePreferenceContext = React.createContext({} as IContextProps);


export function useCurrentTheme() {
    return useContext(ThemePreferenceContext);
}
const ThemeContext = ({ children }: Props) => {
    const [currentTheme, setCurrentTheme] = useState('light');
    const theme = themesMap[currentTheme as keyof typeof themesMap];

    return (
        <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    )
}

export default ThemeContext