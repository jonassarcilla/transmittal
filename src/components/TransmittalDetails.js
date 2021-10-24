import React, { memo, useState, useContext, useEffect, useRef } from 'react'
import { UserContext } from '../contexts/UserContext';
import requests from '../services/requests';

import PrintProvider, { Print, NoPrint } from 'react-easy-print';


import { Label, IconButton, ActionButton, Image, ImageFit, initializeIcons } from '@fluentui/react';
import { Button, Placeholder } from 'react-bootstrap';
import { FaRegFilePdf, FaRegFile, FaDownload } from "react-icons/fa";

import BootstrapTable  from 'react-bootstrap-table-next';
import TableHeaderColumn from 'react-bootstrap-table-next';
import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';


import TransmittalDetailsHeader from './TransmittalDetailsHeader';
import TransmittalDetailsContent from './TransmittalDetailsContent';
import '../styles/transmittalDetails.css'

const emojiIcon = { 
  iconName: 'Print'
};

const columns = [
  {
    dataField: 'fileName',
    text: 'File Name',
    headerStyle: (colum, colIndex) => {
      return { width: '20%', textAlign: 'center' };
    },
    formatter: function(cell, row, rowIndex){
      return <a href={row.filepath}>
          <NoPrint>
            <FaRegFilePdf style={{ fontSize: 20, color: 'red', marginRight: 5 }}/>
          </NoPrint>
          {cell}
        </a>
    }
  }, 
  {
    dataField: 'title',
    text: 'Title',
    headerStyle: (colum, colIndex) => {
      return { width: '30%', textAlign: 'center' };
    },
  },
  {
    dataField: 'rev',
    text: 'Rev',
    headerStyle: (colum, colIndex) => {
      return { width: '10%', textAlign: 'center' };
    },
  },
  {
    dataField: 'state',
    text: 'State',
    headerStyle: (colum, colIndex) => {
      return { width: '10%', textAlign: 'center' };
    },
  },
  {
    dataField: 'status',
    text: 'Status',
    headerStyle: (colum, colIndex) => {
      return { width: '20%', textAlign: 'center' };
    },
  },
  {
    dataField: 'size',
    text: 'Size',
    headerStyle: (colum, colIndex) => {
      return { width: '7%', textAlign: 'center' };
    },
    formatter: function(cell, row, rowIndex){
      return cell + ' KB'
    }
  },
  {
    dataField: 'id',
    text: '',
    headerClasses: 'no-print',
    classes: 'no-print',
    headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };
    },
    headerFormatter:(column, colIndex, components) => {
      return <NoPrint>{column.text}</NoPrint>
    },
    formatter: function(cell, row, rowIndex){
      const filePath = row.filePath;
      const fileName = row.fileName;

      return <NoPrint>
        <div style={{textAlign: 'center'}}>
            <Button variant="link" size="sm" className="px-0">
              <FaRegFile style={{ fontSize: 20 }} />
            </Button>
            <Button variant="link" size="sm" className="px-0" onClick={() => downloadTransmittalFile(filePath, fileName)}>
              <FaDownload style={{ fontSize: 20 }} />
            </Button>
        </div>
      </NoPrint>
    }
  }
];

const downloadTransmittalFile = (filePath, fileName) => {
  requests.getFileToDownload(filePath, fileName).then(
    response => {
      console.log(response);
    });
}

const downloadAllTransmittalFiles = (documents) => {
  documents.map((document, index) => {
    requests.getFileToDownload(document.filePath, document.fileName).then(
      response => {
        console.log(response);
    });
  });
}


const TransmittalDetails = ({ user, printPreview }) => {
    initializeIcons();

    const [userInfoContext] = useContext(UserContext);
    const [transmittalDetails, setTransmittalDetails] = useState({ isLoading: true, details: {} });
    const ref = useRef();

    const NoDataIndication = () => (
      <Placeholder as="p" animation="wave" className="my-1">
          <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
          <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
          <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
      </Placeholder>
    );    

    const height = (printPreview == "false") ? '91vh': '100vh';
    const printPreviewStyle = {
      height: height, 
      overflowY: 'auto', 
      backgroundColor: '#ffffff !important'
    };

    useEffect(() => {
      if(printPreview == "true" && transmittalDetails.isLoading == true){
        if(user.isLoading == false){
          const transmittalInfo = user.details;
          transmittalInfo.qr_code_url = transmittalInfo.qr_code_url || qrcode_logo;
          transmittalInfo.company_img_url = transmittalInfo.company_img_url || company_logo;
  
          setTransmittalDetails({ isLoading: false, details: transmittalInfo });
        }
      } else {
        if(user.isLoading === false 
          && user.userInfo !== null 
          && user.selectedTransmittal
          && transmittalDetails.isLoading == true && printPreview == "false"
          || (ref.current && ref.current != user.selectedTransmittal))
        {
          const transmittalInfo = user.selectedTransmittal;
          transmittalInfo.qr_code_url = transmittalInfo.qr_code_url || qrcode_logo;
          transmittalInfo.company_img_url = transmittalInfo.company_img_url || company_logo;

          if(ref.current && ref.current != user.selectedTransmittal){
            setTransmittalDetails({ ...transmittalDetails, details: transmittalInfo });
          }
    
          setTransmittalDetails({ isLoading: false, details: transmittalInfo });

          ref.current = user.selectedTransmittal;
        }
      }

      if(printPreview == "true" && transmittalDetails.isLoading == false){
        setTimeout(function(){ window.print() }, 3000)
      }
    }, [user, transmittalDetails, printPreview]);

    return (
      <PrintProvider>
        <div className="d-flex flex-column p-3" style={printPreviewStyle}>
            <TransmittalDetailsHeader transmittalDetails={transmittalDetails} printPreview={printPreview}/>
            
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
            </footer>
        </div>
      </PrintProvider>
      
    )
}

export default memo(TransmittalDetails)
