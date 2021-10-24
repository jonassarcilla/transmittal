import React, { memo, useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

import { Label, IconButton, Image, ImageFit } from '@fluentui/react';
import { ListGroup, Placeholder, Stack } from 'react-bootstrap';

import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';
import requests from '../services/requests';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

const emojiIcon = { 
    iconName: 'Print'
};

const qrCodeProps = {
    imageFit: ImageFit.center,
    width: 60,
    height: 60,
    styles: {
        root: { 
        margin: '0px 5px 0px 0px'
        }
    }
};
  
const companyLogoProps = {
    imageFit: ImageFit.center,
    width: 40,
    height: 40,
    styles: {
        root: { 
        margin: '0px 5px 0px 0px'
        }
    }
};



const TransmittalDetailsHeader = ({transmittalDetails, printPreview}) => {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
                <div className="d-flex flex-row align-items-center">
                    {(() => {
                        if(transmittalDetails.isLoading == true || Object.keys(transmittalDetails.details).length == 0){
                            return <Placeholder>
                                <Placeholder.Button lg={12} size="lg" bg="secondary" style={{ width: 60, height: 60 }}/>
                            </Placeholder>
                        }
                        else {
                            const qr_code_url = transmittalDetails.details.qr_code_url || qrcode_logo

                            return <Image
                                {...qrcode_logo}
                                src={qr_code_url}
                                alt='QR Code'
                            />
                        }
                    })()}
                </div>
                <div className="d-flex flex-row align-items-center">
                    {(() => {
                        if(transmittalDetails.isLoading == true){
                            return <Placeholder style={{ marginLeft: 10 }}>
                                   <Placeholder.Button lg={12} size="lg" bg="secondary" style={{ width: 40, height: 40 }}/>
                                </Placeholder>
                        }
                        else {
                            const company_img_url = transmittalDetails.details.company_img_url || company_logo

                            return <Image
                                {...companyLogoProps}
                                src={company_img_url}
                                alt='Company Name'
                            />
                        }
                    })()}
                    <div>
                    
                    </div>
                    <div>
                    {(() => {
                        if(transmittalDetails.isLoading == true){
                            return <Placeholder as="p" animation="wave" className="mt-2">
                                    <Placeholder xs={10} size="lg" bg="secondary" className="mx-3" style={{ width: 300, height: 25 }}/>
                                </Placeholder>
                        } else {
                            return <Label style={{fontSize: 24 }}>{transmittalDetails.details.company_name} Transmittal</Label>
                        }
                    })()}   
                    </div>
                </div>
            </div>
            <div>
                {(() => {
                    if(transmittalDetails.isLoading == false){
                        if(printPreview == false){
                            return <NoPrint>
                                <Link to={`/transmittal?tid=` + transmittalDetails.details.id } target="_blank" rel="noopener noreferrer">
                                    <IconButton className="printDocument" iconProps={emojiIcon} title="Print Transmittal" ariaLabel="Print Transmittal" disabled={false} checked={false} />
                                </Link>
                            </NoPrint>
                        } else {
                            return <IconButton className="printDocument" 
                                    iconProps={emojiIcon} 
                                    title="Print Transmittal" 
                                    ariaLabel="Print Transmittal" disabled={false} checked={false} 
                                    onClick={() => window.print()}
                                />
                        }
                        
                    }
                })()}
            </div>
        </header>
    )
}

export default TransmittalDetailsHeader
