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
          if(selectedTransmittal.id !== currentTransmittal.id){
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

    return (
      <PrintProvider>
        <div className={`d-flex flex-column p-3 print-preview ${ appContextState.isPrintPreviewOnly === true ? "vh-100" : "vh-91"}`}>
          <TransmittalDetailsHeader isLoading={this.state.isLoading}/>
          <TransmittalDetailsContent isLoading={this.state.isLoading} />
          <DocumentTable isLoading={this.state.isLoading}/>
            <footer>
              <Label style={{fontSize: 16 }}>Disclaimer</Label>
              <cite style={{fontSize: 12}}>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
            </footer>
        </div>
      </PrintProvider>
    )
  }
}
