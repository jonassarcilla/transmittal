import React, { memo, useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import { useLocation } from "react-router-dom";
import requests from '../services/requests';

import TransmittalDetails from '../components/TransmittalDetails';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const TransmittalPage = () => {
    const [user, setUser] = useState({isLoading:true, userInfo: null });
    const [transmittalDetails, setTransmittalDetails] = useState({ isLoading: true, details: {} });

    let query = useQuery(),
        tid = query.get("tid"),
        magicLink = query.get("magicLink");

    console.log(tid)
    const getTransmittalData = () => {
        if(tid){
            requests.getTransmittalDetailsById(tid).then((response) => {
                console.log(response);
                setTransmittalDetails({isLoading:false, details: response.data })
            }).catch((error) => {
                console.log(error);
            })
        } else if(magicLink) {
            requests.getTransmittalDetailsByMagicLink(magicLink).then((response) => {
                console.log(response);
                setTransmittalDetails({isLoading:false, details: response.data })
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        getTransmittalData();
    },[]);
    

    return (
        <UserContext.Provider value={[user, setUser]}>
            <TransmittalDetails user={transmittalDetails } printPreview="true"/>
        </UserContext.Provider>
    )
}

export default TransmittalPage
