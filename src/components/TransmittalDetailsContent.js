import React, { Component } from 'react'
import Moment from 'react-moment';

import { AppContext } from '../contexts/AppContext';
import { Label } from '@fluentui/react';
import { Placeholder } from 'react-bootstrap';

export default class TransmittalDetailsContent extends Component {
    static contextType = AppContext;

    renderDetails(){
        const appContextState = this.context.state;

        if(this.props.isLoading){
            const placeHolderContent = Array.apply(null, {length: 5}).map((value, index) => {
                return <p class="placeholder-glow">
                    <span class="placeholder col-12 placeholder-lg"></span>
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
            if(appContextState.selectedTransmittal === null){
                return false;
            }

            const transmitalInfo = appContextState.selectedTransmittal;

            return <div className="container-fluid">
                <div className="row" style={{ minWidth: 250, fontSize: 14, border: '2px solid #313f52' }}>
                <div className="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Transmittal:</b> <span>{transmitalInfo.transmittalNo}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Sent By:</b> <span>{transmitalInfo.sender}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Project:</b> <span>{transmitalInfo.project_name}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Issued On:</b> <span><Moment date={transmitalInfo.issue_date} format="MMMM DD, YYYY" /><br/></span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Key Contact:</b> <span>{transmitalInfo.contact}</span></p>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Subject:</b> <span>{transmitalInfo.subject}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Message:</b> <span>{transmitalInfo.message}</span></p>
                </div>
                </div>
            </div>
        }
    }

    render() {
        const appContextState = this.context.state;

        return (
            <section className="py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <Label style={{fontSize: 16 }}>Details</Label>
                </div>
                {this.renderDetails()}
            </section>
        )
    }
}
