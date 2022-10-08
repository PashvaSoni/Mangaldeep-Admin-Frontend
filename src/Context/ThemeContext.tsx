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
            color1:'#b4d7fa',
            color2:'#95c9fc',
            color3:'#1890ff;',
            color4:'#037bfc'
        },
        font:{
            ...BaseTheme.font,
            fontColor:"Black"
        }
    },
    dark: {
        // dark theme properties goes here 
        ...BaseTheme,
        color: {         
            color1:'#222324',
            color2:'#44596e',
            color3:'#1890ff',
            color4:'#7dc1ff',
        },
        font:{
            ...BaseTheme.font,
            fontColor:"White"
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
                <GloabalStyles />
                {children}
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    )
}

export default ThemeContext