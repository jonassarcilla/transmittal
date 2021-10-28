import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../contexts/AppContext';

import { Label, IconButton, Image, ImageFit, initializeIcons } from '@fluentui/react';
import { Placeholder } from 'react-bootstrap';

import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';


export default class TransmittalDetailsHeader extends Component {
    static contextType = AppContext;

    constructor(props) {
		super(props);

		this.state = {
            isQRImgLoaded: false,
            isCompanyImgLoaded: false,
            isWindowsPrintLoaded: false
		};
	}

    renderCompanyLogo(){
        const appContextState = this.context.state;

        if(this.props.isLoading){
            return <Placeholder as="p" animation="wave" className="mt-2 mx-3">
                <Placeholder xs={10} size="lg" bg="secondary" style={{ width: 30, height: 30 }}/>
            </Placeholder>
        } else {
            if(appContextState.selectedTransmittal === null){
                return false;
            }

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
                onLoad={() => this.setState({isQRImgLoaded: true})}
            />
        }
    }

    renderQRCodeImg(){
        const appContextState = this.context.state;

        if(this.props.isLoading){
            return <Placeholder as="p" animation="wave" className="mt-2">
                <Placeholder xs={10} size="lg" bg="secondary" style={{ width: 60, height: 60 }}/>
            </Placeholder>
        } else {
            if(appContextState.selectedTransmittal === null){
                return false;
            }

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
                onLoad={() => this.setState({isCompanyImgLoaded: true})}
            />
        }
    }

    renderPrintPage() {
        const appContextState = this.context.state;

        if(this.props.isLoading){
            return <Placeholder as="p" animation="wave">
                <Placeholder xs={10} size="lg" bg="secondary" style={{ width: 20, height: 20 }}/>
            </Placeholder>
        } else {
            if(appContextState.selectedTransmittal === null){
                return false;
            }

            const emojiIcon = { 
                iconName: 'Print'
            };

            if(appContextState.isPrintPreviewOnly == false){
                return <NoPrint>
                    <Link to={`/transmittal?tid=` + appContextState.selectedTransmittal.id } target="_blank" rel="noopener noreferrer">
                        <IconButton className="printDocument" iconProps={emojiIcon} title="Print Transmittal" ariaLabel="Print Transmittal" disabled={false} checked={false} />
                    </Link>
                </NoPrint>
            } else {
                if(this.state.isQRImgLoaded 
                    && this.state.isCompanyImgLoaded){
                    
                    return <NoPrint>
                        <IconButton className="printDocument" 
                            iconProps={emojiIcon} 
                            title="Print Transmittal" 
                            ariaLabel="Print Transmittal" disabled={false} checked={false} 
                            onClick={() => window.print()}
                        />
                    </NoPrint>
                }
            }
        }
    }

    renderTransmittalTitle(){
        const appContextState = this.context.state;

        if(this.props.isLoading){
            return <Placeholder as="p" animation="wave" className="mt-2">
                <Placeholder xs={10} size="lg" bg="secondary" className="mx-2" style={{ width: 300, height: 25 }}/>
            </Placeholder>
        } else {
            if(appContextState.selectedTransmittal === null){
                return false;
            }

            return <Label style={{fontSize: 24 }}>{ appContextState.selectedTransmittal.company_name || null } Transmittal</Label>
        }
    }

    componentDidUpdate(prevProps, prevState){
        const appContextState = this.context.state;

        if(this.state.isQRImgLoaded 
            && this.state.isCompanyImgLoaded 
            && appContextState.isPrintPreviewOnly 
            && this.state.isWindowsPrintLoaded == false){
            window.print();

            this.setState({isWindowsPrintLoaded: true})
        }
    }

    render() {
        initializeIcons();
        
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
                            {this.renderTransmittalTitle()} 
                        </div>
                    </div>
                </div>
                <div>
                    {this.renderPrintPage()}
                </div>
            </header>
        )
    }
}
