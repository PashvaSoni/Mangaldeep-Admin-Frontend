import React, { useContext, useState } from 'react'
import { json } from 'stream/consumers';

type Props = {
    children?: React.ReactNode;
};

type AuthProps = {
    token: string,
    userData: {
        id: string,
        name: string,
        phonenumber: string,
        photo?: string
    }
}

type AuthContextProps = {
    User: AuthProps,
    setUser: React.Dispatch<React.SetStateAction<AuthProps>>
}

const AuthorizationContext = React.createContext({} as AuthContextProps)

export function useAuth() {
    return useContext(AuthorizationContext);
}

const AuthContext = ({ children }: Props) => {
    const [User, setUser] = useState({ token: localStorage.getItem('token') || '', userData: JSON.parse(localStorage.getItem('userinfo') || '{}')|| {} } as AuthProps)
    console.log(User);
    return (
        <AuthorizationContext.Provider value={{ User, setUser }}>
            {children}
        </AuthorizationContext.Provider>
    )
}

export default AuthContext;