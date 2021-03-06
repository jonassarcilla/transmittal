import React, { memo, useState, useContext, useEffect } from 'react'
import { Label } from '@fluentui/react';
import { Placeholder } from 'react-bootstrap';

const TransmittalDetailsContent = ({transmittalDetails}) => {
    const [contentInfo, setContentInfo] = useState({ isLoading: true, content: null });
    
    return (
        <section className="py-3">
            <div className="d-flex justify-content-between align-items-center">
                <Label style={{fontSize: 16 }}>Details</Label>
            </div>
            {(() => {
                if(transmittalDetails.isLoading == true || Object.keys(transmittalDetails.details).length == 0){
                    const placeHolderContent = Array.apply(null, {length: 5}).map((value, index) => {
                        return <p key={index} style={{ marginBottom: '0.5em'}}>
                            <Placeholder as="p" animation="wave" className="my-1">
                                <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
                            </Placeholder>
                        </p>
                    });

                    return <div className="container-fluid">
                        <div className="row" style={{ minWidth: 250, fontSize: 14, border: '2px solid #313f52' }}>
                        <div className="col-12 col-md-12 col-lg-6">
                            {placeHolderContent}
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                        {placeHolderContent}
                        </div>
                        </div>
                    </div>
                } else {
                    const transmitalInfo = transmittalDetails.details;

                    return <div className="container-fluid">
                        <div className="row" style={{ minWidth: 250, fontSize: 14, border: '2px solid #313f52' }}>
                        <div className="col-12 col-md-12 col-lg-6">
                            <p style={{ marginBottom: '0.5em'}}><b>Transmittal:</b> <span>{transmitalInfo.transmittalNo}</span></p>
                            <p style={{ marginBottom: '0.5em'}}><b>Sent By:</b> <span>{transmitalInfo.sender}</span></p>
                            <p style={{ marginBottom: '0.5em'}}><b>Project:</b> <span>{transmitalInfo.project_name}</span></p>
                            <p style={{ marginBottom: '0.5em'}}><b>Issued On:</b> <span>{transmitalInfo.issue_date}</span></p>
                            <p style={{ marginBottom: '0.5em'}}><b>Key Contact:</b> <span>{transmitalInfo.contact}</span></p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <p style={{ marginBottom: '0.5em'}}><b>Subject:</b> <span>{transmitalInfo.subject}</span></p>
                            <p style={{ marginBottom: '0.5em'}}><b>Message:</b> <span>{transmitalInfo.message}</span></p>
                        </div>
                        </div>
                    </div>
                }
            })()}
        </section>
    )
}

export default TransmittalDetailsContent
