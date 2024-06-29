/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [errorStatus, setErrorStatus] = useState()
    const [loading, setLoading] = useState(true);
    const [points, setPoints] = useState(0)
    const [ level, setLevel ] = useState('Bronze');

    useEffect(() => {
        if(points == 0 && points < 1000) {
            setLevel('Bronze')
        } else if(points > 1000 && points <= 10000){
            setLevel('Silver');
        } else if(points > 10000){
            setLevel('Gold');
        } else{
            setLevel('Diamond');
        } 
    }, [points])

    useEffect(() => {
        if(window.location.pathname == "/login" || window.location.pathname == "/"){
            return
        }
        if(errorStatus){
            alert("Token kadaluwarsa harap login kembali...")
            setErrorStatus("")
            window.location.href = '/login'
        }
    }, [errorStatus])

    const fetchUserData = async(token, role) => {
        let url;
        if (role == 'admin') {
            url = 'https://buildong-api.vercel.app/admin';
        } else {
            url = 'https://buildong-api.vercel.app/user';
        }
        const config = {
            headers: { authorization: `Bearer ${token}` }
        };
        try {
            const response = await axios.get(url, config);
            if(role !== 'admin'){
                setPoints(response.data.user.account?.points)
            }
            setUser(response.data);
        } catch (error) {
            alert(error)
            console.log(error)
            if(error.code == 'ERR_NETWORK'){
                return setErrorStatus('Please check your network connection')
            }
            setErrorStatus(error.response)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        let token = localStorage.getItem('token');
        const role = localStorage.getItem('role'); 
        if (token) {
            token = token.replace(/"/g, '');
        }        
        if (token && role) {
            fetchUserData(token, role);
        } 
    }, []);

    return(
        <UserContext.Provider value={{user, loading, points, level}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;