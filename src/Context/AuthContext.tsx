import React, { useContext, useState } from 'react'

type Props = {
    children?: React.ReactNode;
};

type AuthProps = {
    token: string,
    userData: {
        id:string,
        phonenumber: string,
        photo?: string
    }
}

type AuthContextProps = {
    User: AuthProps,
    setUser: React.Dispatch<React.SetStateAction<AuthProps>>
}

const AuthorizationContext = React.createContext({} as AuthContextProps)

export function useAuth(){
    return useContext(AuthorizationContext);
}

 const AuthContext = ({children}:Props) => {
    const [User, setUser] = useState({} as AuthProps)
    console.log(User);
    return (
        <AuthorizationContext.Provider value={{User,setUser}}>
            {children}
        </AuthorizationContext.Provider>
    )
}

export default AuthContext;