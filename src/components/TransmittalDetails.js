import React, { Component } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

import { Label, ActionButton, Image, ImageFit } from '@fluentui/react';

import { AppContext } from '../contexts/AppContext';

import '../styles/transmittalDetails.css'
import TransmittalDetailsHeader from './TransmittalDetailsHeader';
import TransmittalDetailsContent from './TransmittalDetailsContent';
import DocumentTable from './DocumentTable';

export default class TransmittalDetails extends Component {
  static contextType = AppContext;

  constructor(props) {
		super(props);

		this.state = {
      isLoading: true,
      selectedTransmittal: null
		};
	}

  componentDidUpdate(prevProps, prevState){
      const selectedTransmittal = prevProps.selectedTransmittal;
      const currentTransmittal = this.props.selectedTransmittal;

      if(selectedTransmittal && currentTransmittal){
          if(selectedTransmittal.Id !== currentTransmittal.Id){
            this.setState({isLoading: true}, () => {
              setTimeout(function() {
                  this.setState({isLoading: false});
              }.bind(this), 500)
            })
          }
      }

      if(selectedTransmittal === null && currentTransmittal){
        this.setState({isLoading: false});
      }
  }

  render() {
    const appContextState = this.context.state;
    const isTransmittalListLoading = this.props.isTransmittalListLoading;
    const selectedTransmittal = this.props.selectedTransmittal;
    
    return (
      <PrintProvider>
        <div className={`d-flex flex-column p-3 print-preview ${ appContextState.isPrintPreviewOnly === true ? "vh-100 mx-2" : "vh-91"}`}>
        {(() => {
            if(isTransmittalListLoading === false && selectedTransmittal === null) {
              return <div className="container py-5 px-3 text-center" style={{ width: '66vw'}}>
                  <div className="row">
                      <p className="py-2">
                        <span className="d-block mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-inboxes" viewBox="0 0 16 16">
                                <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z"/>
                            </svg>
                        </span>
                        No transmittal details found
                      </p>
                  </div>
              </div>
            } else {

              if(isTransmittalListLoading) {
                return <div className="d-flex justify-content-center">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              }

              return <>
                <TransmittalDetailsHeader isLoading={this.state.isLoading} selectedTransmittal={selectedTransmittal}/>
                <TransmittalDetailsContent isLoading={this.state.isLoading} selectedTransmittal={selectedTransmittal}/>
                <DocumentTable isLoading={this.state.isLoading} selectedTransmittal={selectedTransmittal}/>
                <footer>
                  <Label style={{fontSize: 16 }}>Disclaimer</Label>
                  <cite style={{fontSize: 12}}>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
                </footer>
              </>
            }
        })()}
        </div>
      </PrintProvider>
    )
  }
}
