import React, { Component } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

import { Label } from '@fluentui/react';

import { AppContext } from '../contexts/AppContext';

import '../styles/transmittalDetails.css'

import TransmittalDetailsHeader from './TransmittalDetailsHeader';
import TransmittalDetailsContent from './TransmittalDetailsContent';

export default class TransmittalDetails extends Component {
  static contextType = AppContext;

  constructor(props) {
		super(props);

		this.state = {
      isLoading: true,
      details: null,
      currentProjectId: null,
      currentTransmittalId: null
		};
	}

  componentDidUpdate(){
    const appContextState = this.context.state;
    
    if(appContextState.isLoading === false 
      && appContextState.userInfo 
      && appContextState.selectedTransmittal
      && this.state.isLoading === true
    || (this.state.details && appContextState.selectedTransmittal !== this.state.details)
    ){
        this.setState({isLoading: false,currentProjectId: appContextState.selectedProject, details: appContextState.selectedTransmittal})
    }
  }

  render() {
    const appContextState = this.context.state;

    return (
      <PrintProvider>
        <div className={`d-flex flex-column p-3 print-preview ${ appContextState.isPrintPreviewOnly === true ? "vh-100" : "vh-91"}`}>
            <TransmittalDetailsHeader />
            <TransmittalDetailsContent />
            {/* <TransmittalDetailsContent/> */}

            {/* <TransmittalDetailsHeader transmittalDetails={transmittalDetails} printPreview={printPreview}/>
            
            <TransmittalDetailsContent transmittalDetails={transmittalDetails}/>

            <section className="flex-fill">
              <div className="d-flex justify-content-between align-items-center">
                <Label style={{fontSize: 16 }}>Documents</Label>
                <NoPrint>
                  <ActionButton className="printDocument" 
                    iconProps={{iconName: 'DownloadDocument'}} 
                    title="Print Transmittal" 
                    ariaLabel="Print Transmittal"
                    onClick={() => downloadAllTransmittalFiles(transmittalDetails.details.documents || [])}>
                    Download All
                  </ActionButton>
                </NoPrint>
              </div>
                <BootstrapTable wrapperClasses="documentTable" 
                    keyField="id" 
                    data={ transmittalDetails.details.documents || [] } 
                    columns={ columns } 
                    noDataIndication={NoDataIndication}>
                </BootstrapTable>
            </section>

            <footer   className="">
              <Label style={{fontSize: 16 }}>Disclaimer</Label>
              <cite style={{fontSize: 12}}>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
            </footer> */}

            <footer   className="">
              <Label style={{fontSize: 16 }}>Disclaimer</Label>
              <cite style={{fontSize: 12}}>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
            </footer>
        </div>
      </PrintProvider>
    )
  }
}
