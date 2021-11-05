import React, { Component } from 'react'
import Moment from 'react-moment';

import { AppContext } from '../contexts/AppContext';
import { Label } from '@fluentui/react';
import { Placeholder } from 'react-bootstrap';

export default class TransmittalDetailsContent extends Component {
    static contextType = AppContext;

    renderDetails(){
        const transmitalInfo = this.props.selectedTransmittal;

        if(this.props.isLoading){
            const placeHolderContent = Array.apply(null, {length: 5}).map((value, index) => {
                return <p key={index} className="placeholder-glow">
                    <span className="placeholder col-12 placeholder-lg"></span>
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
            if(transmitalInfo === null){
                return false;
            }

            return <div className="container-fluid">
                <div className="row" style={{ minWidth: 250, fontSize: 14, border: '2px solid #313f52' }}>
                <div className="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Transmittal:</b> <span>{transmitalInfo.UniqueId}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Sent By:</b> <span>{transmitalInfo.Sender}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Project:</b> <span>{transmitalInfo.ProjectTitle}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Issued On:</b> <span><Moment date={transmitalInfo.IssueDate} format="MMMM DD, YYYY" /><br/></span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Key Contact:</b> <span>{transmitalInfo.Contact}</span></p>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Subject:</b> <span>{transmitalInfo.Subject}</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Message:</b> <span>{transmitalInfo.Message}</span></p>
                </div>
                </div>
            </div>
        }
    }

    render() {
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
