import React from 'react'
import { ListGroup } from 'react-bootstrap';
import '../styles/transmittalList.css';

const transmittallist = [
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


const TransmittalList = () => {
    return (
        <div id="transmittalList">
            <ListGroup variant="flush">
                {transmittallist.map(({ id, sender, transmittalNo, issued_date, issued_time, subject, message }) => (
                    <ListGroup.Item action href={ "#transmittal-" + id } variant="light" className="py-3">
                        <div class="d-flex justify-content-between preview-header">
                            <div>
                                <h5>{sender}</h5>
                                <p>{transmittalNo}</p>
                            </div>
                            <div class="preview-header-date">{issued_date}<br/>{issued_time}</div>
                        </div>
                        <div className="preview-content">
                            <h6>{subject}</h6>
                            <p>{message}</p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default TransmittalList
