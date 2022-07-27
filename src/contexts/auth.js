import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(()=>{
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("user_db");

        if (userToken & userStorage){
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if(hasUser) setUser(hasUser[0])
        }

    })

    const signin = (email,password) => {
        const userStorage = localStorage.getItem("user_db");
        const hasUser = JSON.parse(userStorage)?.filter((user) => user.email === JSON.parse(userToken).email);

        if (hasUser[0].email === email && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({email, password}))
            setUser({email, password});
            return;
        } else {
            return "E-mail ou senha incorretos"
        }

    }

    const signup = (email,password) => {
        const userStorage = localStorage.getItem("user_db");
        const hasUser = JSON.parse(userStorage)?.filter((user) => user.email === JSON.parse(userToken).email);

        if(hasUser?.length) {
            return "Já existe uma conta com este e-mail"
        }

        let newUser;

        if (userStorage){
            newUser = [...userStorage, {email, password}];
        }else {
            newUser = [{email, password}];
        }
        localStorage.setItem("user_db", JSON.stringify({email, password}));
    }





    return <AuthContext.Provider>{children}</AuthContext.Provider>
}