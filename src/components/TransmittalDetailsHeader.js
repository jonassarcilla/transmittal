import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../contexts/AppContext';

import { Label, IconButton, Image, ImageFit, initializeIcons } from '@fluentui/react';
import { ListGroup, Placeholder, Stack } from 'react-bootstrap';

import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';


export default class TransmittalDetailsHeader extends Component {
    static contextType = AppContext;

    constructor(props) {
		super(props);

		this.state = {
            isLoading: true,
            details: null,
            currentProjectId: null,
		};
	}

    renderCompanyLogo(){
        const appContextState = this.context.state;

        if(appContextState.selectedTransmittal == null){
            return <p aria-hidden="true" className="placeholder-glow px-2">
                    <span className="placeholder placeholder-lg col-12 bg-secondary mx-2"></span>
                </p>
        }
        else {
            const company_img_url = appContextState.selectedTransmittal.company_img_url || company_logo;
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

            return <Image
                {...companyLogoProps}
                src={company_img_url}
                alt='Company Name'
            />
        }
    }

    renderQRCodeImg(){
        const appContextState = this.context.state;

        if(appContextState.selectedTransmittal == null){
            return <p aria-hidden="true" className="placeholder-glow px-2">
                    <span className="placeholder placeholder-lg col-12 bg-secondary mx-2"></span>
                </p>
        }
        else {
            const qr_code_url = appContextState.selectedTransmittal.qr_code_url || qrcode_logo
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

            return <Image
                {...qrCodeProps}
                src={qr_code_url}
                alt='QR Code'
            />
        }
    }

    componentDidUpdate(){
        const appContextState = this.context.state;
        
        if(appContextState.isLoading === false 
            && appContextState.userInfo 
            && appContextState.selectedTransmittal
            && this.state.isLoading === true
            || (this.state.details && appContextState.selectedTransmittal !== this.state.details)
          ){
              this.setState({updateView: true, isLoading: false, currentProjectId: appContextState.selectedProject, details: appContextState.selectedTransmittal});
          }
    }

    render() {
        initializeIcons();
        const appContextState = this.context.state;

        return (
            <header className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                    <div className="d-flex flex-row align-items-center">
                        {this.renderQRCodeImg()}
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            {this.renderCompanyLogo()}
                        </div>

                        <div>
                            {(() => {
                                
                                if(this.state.isLoading == true || appContextState.selectedTransmittal == null){
                                    return <Placeholder as="p" animation="wave" className="mt-2">
                                            <Placeholder xs={10} size="lg" bg="secondary" className="mx-3" style={{ width: 300, height: 25 }}/>
                                        </Placeholder>
                                } else {
                                    return <Label style={{fontSize: 24 }}>{ appContextState.selectedTransmittal.company_name || null } Transmittal</Label>
                                }
                            })()} 
                        </div>
                    </div>
                </div>
                <div>
                    {(() => {
                        const emojiIcon = { 
                            iconName: 'Print'
                        };

                        if(this.state.isLoading == false && appContextState.selectedTransmittal){
                            
                            if(appContextState.isPrintPreviewOnly == false){
                                return <NoPrint>
                                    <Link to={`/transmittal?tid=` + appContextState.selectedTransmittal.id } target="_blank" rel="noopener noreferrer">
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
}
