import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import GloabalStyles from '../GlobalStyles';
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
    },
    font: {
        size: 1
    }
}
const themesMap = {
    light: {
        // light theme properties goes here 
        ...BaseTheme,
        color: {
            color1:'#F9F1F0',
            color2:'#FADCD9',
            color3:'#F8AFA6',
            color4:'#F79489'
        }
    },
    dark: {
        // dark theme properties goes here 
        ...BaseTheme,
        color: {         
            color1:'#0B0909',
            color2:'#44444C',
            color3:'#8C8C8C',
            color4:'#D6D6D6',

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
    console.log(theme);
    return (
        <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                <GloabalStyles />
                {children}
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    )
}

export default ThemeContext