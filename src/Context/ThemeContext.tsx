import React, { useState, useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GloabalStyles from '../GlobalStyles';

type Props = {
    children?: React.ReactNode;
};
interface IContextProps {
    currentTheme: string;
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
    setTheme: React.Dispatch<React.SetStateAction<ThemeProp>>
}

export type ThemeProp = {
    device: {
        mobile: string,
        tablet: string,
        laptop: string,
    },
    font: {
        fontSize: number,
        fontColor: string,
        fontStyle: string
    },
    color: {
        color1: string,
        color2: string,
        color3: string,
        color4: string,
    }

}

const BaseTheme = {
    //some common theme goes here
    device: {
        mobile: `(max-width:480px)`,
        tablet: `(min-width: 481px) and (max-width: 1024px)`,
        laptop: `(min-width:1025px)`,
    },
    font: {
        fontSize: parseFloat(localStorage.getItem('fontSize') || '1') || 1,
        fontStyle: localStorage.getItem('fontStyle') || 'consolas'
    }
}
const themesMap = {
    light: {
        // light theme properties goes here 
        ...BaseTheme,
        color: {
            color1: '#b4d7fa',
            color2: '#95c9fc',
            color3: '#1890ff',
            color4: '#037bfc'
        },
        font: {
            ...BaseTheme.font,
            fontColor: "Black"
        }
    },
    dark: {
        // dark theme properties goes here 
        ...BaseTheme,
        color: {
            color1: '#222324',
            color2: '#44596e',
            color3: '#1890ff',
            color4: '#7dc1ff',
        },
        font: {
            ...BaseTheme.font,
            fontColor: "White"
        }
    }
}

const ThemePreferenceContext = React.createContext({} as IContextProps);


export function useCurrentTheme() {
    return useContext(ThemePreferenceContext);
}
const ThemeContext = ({ children }: Props) => {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');
    const [theme, setTheme] = useState(themesMap[currentTheme as keyof typeof themesMap])
    // const theme = themesMap[currentTheme as keyof typeof themesMap];
    // console.log(theme);
    useEffect(() => {
        setTheme({ ...theme, font: { ...themesMap[currentTheme as keyof typeof themesMap].font }, color: { ...themesMap[currentTheme as keyof typeof themesMap].color } })
    }, [currentTheme]);
    return (
        <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme, setTheme }}>
            <ThemeProvider theme={theme}>
                <GloabalStyles />
                {children}
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    )
}

export default ThemeContext