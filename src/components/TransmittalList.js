import React, { memo, useState, useContext, useEffect }  from 'react'
import { UserContext } from '../contexts/UserContext';
import requests from "../services/requests";

import { ListGroup, Placeholder, Stack } from 'react-bootstrap';
import '../styles/transmittalList.css';

const transmittalList = [
    {
        "id": 1,
        "sender": "Kimberley Morrison",
        "transmittalNo": "520123-TRN-000111",
        "issued_date": "Tues",
        "issued_time": "17:15",
        "subject": "UI Review of Transmittal",
        "message": "This is the start of the message"
    },
    {   
        "id": 2,
        "sender": "Kimberley Morrison",
        "transmittalNo": "520123-TRN-000111",
        "issued_date": "23/09/21",
        "issued_time": "17:15",
        "subject": "UI Review of Transmittal",
        "message": "This is the start of the message"
    },
    {   
        "id": 3,
        "sender": "Kimberley Morrison Longer Name",
        "transmittalNo": "520123-TRN-000111-longer-number",
        "issued_date": "23/09/21",
        "issued_time": "17:15",
        "subject": "UI Review of Transmittal Longer Subject Name",
        "message": "This is the start of the message Much more longer messae"
    }
];


const TransmittalList = ({user}) => {
    const [userInfoContext, setUserInfoContext] = useContext(UserContext);
    const [transmittalNavigation, setTransmittalNavigation] = useState({ isLoading: true, transmittalList: [] });

    const getTransmittalsData = (projectId) => {
        requests.getTransmittalList(projectId).then((response) => {
            setTransmittalNavigation({ isLoading: false, transmittalList: response.data });

            if(response.data.length > 0){
                setUserInfoContext({...userInfoContext, selectedTransmittal: response.data[0]});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    if(user.isLoading === false 
        && user.userInfo !== null 
        && user.selectedProject
        && transmittalNavigation.isLoading == true)
    {
        getTransmittalsData(user.selectedProject);
    }

    const selectTransmittal = (event, transmittalInfo) => {
        const activeTransmittal = document.getElementsByClassName("list-group-item-light active");

        for (var i = 0; i < activeTransmittal.length; i++) {
            activeTransmittal[i].classList.remove("active");
        }

        event.target.closest(".list-group-item-light").className += " active";
        setUserInfoContext({...userInfoContext, selectedTransmittal: transmittalInfo});
    }

    return (
        <div id="transmittalList">
            {(() => {
                if (transmittalNavigation.isLoading == true) {
                    return <Placeholder as="p" animation="wave" className="mt-2">
                                <Stack direction="horizontal" gap={1}>
                                    <Placeholder xs={8} size="lg" bg="secondary" className="mx-3"/>
                                    <Placeholder xs={1} size="lg" bg="secondary" className="mx-3" />
                                </Stack>
                                <Placeholder xs={10} size="sm" bg="success" className="mx-3"/>
                                <Placeholder xs={10} size="sm" bg="secondary" className="mx-3"/>
                                <Placeholder xs={10} size="sm" bg="secondary" className="mx-3"/>
                            </Placeholder>
                } else {
                    return <ListGroup variant="flush">
                        {transmittalNavigation.transmittalList.map((transmittalInfo, index) => {
                            return (
                                <ListGroup.Item variant="light"
                                    onClick={(event) => selectTransmittal(event, transmittalInfo)}
                                    className={`py-3 ${index == 0 ? "active" : ""}`}
                                >
                                    <div class="d-flex justify-content-between preview-header">
                                        <div>
                                            <h5>{transmittalInfo.sender}</h5>
                                            <p>{transmittalInfo.transmittalNo}</p>
                                        </div>
                                        <div class="preview-header-date">{transmittalInfo.issued_date}<br/>{transmittalInfo.issued_time}</div>
                                    </div>
                                    <div className="preview-content">
                                        <h6>{transmittalInfo.subject}</h6>
                                        <p>{transmittalInfo.message}</p>
                                    </div>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                }
            })()}
        </div>
    )
}

export default memo(TransmittalList)
