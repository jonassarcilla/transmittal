import { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import requests from "../services/requests";

import AppLayout from '../layouts/AppLayout';


const HomePage = () => {
    const { userid } = useParams();
    const [user, setUser] = useState({isLoading:true, userInfo: null });

    const getUserData = () => {
        requests.getUser(userid).then((response) => {
            setUser({isLoading:false, userInfo: response.data[0] })
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getUserData();
    },[]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            <AppLayout/>
        </UserContext.Provider>
    )
}

export default memo(HomePage);
