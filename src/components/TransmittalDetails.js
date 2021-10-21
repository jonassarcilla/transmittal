import React, { memo, useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';

import { Label, IconButton, ActionButton, Image, ImageFit, initializeIcons } from '@fluentui/react';
import BootstrapTable from 'react-bootstrap-table-next';
import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';
import requests from '../services/requests';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

import TransmittalDetailsHeader from './TransmittalDetailsHeader';
import TransmittalDetailsContent from './TransmittalDetailsContent';

const emojiIcon = { 
  iconName: 'Print'
};


const columns = [
  {
    dataField: 'fileName',
    text: 'File Name'
  }, 
  {
    dataField: 'title',
    text: 'Title'
  },
  {
    dataField: 'rev',
    text: 'Rev'
  },
  {
    dataField: 'state',
    text: 'State'
  },
  {
    dataField: 'status',
    text: 'Status'
  },
  {
    dataField: 'size',
    text: 'Size'
  },
  {
    dataField: 'ds',
    text: ''
  }
];

const documents = [
  {
    id: 1,
    fileName: 'P0000-DTR-000',
    title: 'Doc Title',
    rev: 'Rev 0',
    state: 'SHR',
    status: 'PC Approved For',
    size: '30 KB'
  },
  {
    id: 1,
    fileName: 'P0000-DTR-000',
    title: 'Doc Title',
    rev: 'Rev 0',
    state: 'SHR',
    status: 'S0 Started',
    size: '60 KB'
  },
  {
    id: 2,
    fileName: 'P0000-DTR-000',
    title: 'Doc Title',
    rev: 'Rev 0',
    state: 'APP/APS',
    status: 'S0 Started',
    size: '120 KB'
  }
]

const downloadTransmittalFile = () => {
  requests.getFileToDownload('http://speedtest.tele2.net/1MB.zip', '1MB.zip').then(
    response => {
      console.log(response);
    });
}

const TransmittalDetails = ({ user }) => {
    initializeIcons();

    console.log(user)
    const [userInfoContext] = useContext(UserContext);
    const [transmittalDetails, setTransmittalDetails] = useState({ isLoading: true, details: {} });

    if(user.isLoading === false 
      && user.userInfo !== null 
      && user.selectedTransmittal
      && transmittalDetails.isLoading == true)
    {
      const transmittalInfo = user.selectedTransmittal;
      transmittalInfo.qr_code_url = transmittalInfo.qr_code_url || qrcode_logo;
      transmittalInfo.company_img_url = transmittalInfo.company_img_url || company_logo;

      setTransmittalDetails({ isLoading: false, details: transmittalInfo })
    }
    

    
    return (
      <div class="d-flex flex-column p-3" style={{ height: '91vh', overflowY: 'auto', backgroundColor: '#ffffff !important' }}>
          <TransmittalDetailsHeader transmittalDetails={transmittalDetails}/>
          
          <TransmittalDetailsContent transmittalDetails={transmittalDetails}/>

          <section class="flex-fill">
            <div className="d-flex justify-content-between align-items-center">
              <Label style={{fontSize: 16 }}>Documents</Label>
              <ActionButton className="printDocument" 
                iconProps={{iconName: 'DownloadDocument'}} 
                title="Print Transmittal" 
                ariaLabel="Print Transmittal" 
                // disabled={false} 
                // checked={false} () => this.activatePlaylist(playlist.playlist_id)
                onClick={() => downloadTransmittalFile()}>
                Download All
              </ActionButton>
            </div>
            <BootstrapTable wrapperClasses="documentTable" keyField="id" data={ documents } columns={ columns } />
          </section>
          <footer   class="">
            <Label style={{fontSize: 16 }}>Disclaimer</Label>
            <cite style={{fontSize: 12}}>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
          </footer>
      </div>
    )
}

export default memo(TransmittalDetails)
