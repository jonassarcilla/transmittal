import React from 'react'
import { Label, IconButton, ActionButton, Image, ImageFit } from '@fluentui/react';
import BootstrapTable from 'react-bootstrap-table-next';
import company_logo from '../images/company_logo.png';
import qrcode_logo from '../images/QR_Code.png';

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
  },
};

const companyLogoProps = {
  imageFit: ImageFit.center,
  width: 40,
  height: 40,
  styles: {
    root: { 
      margin: '0px 5px 0px 0px'
    }
  },
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

const TransmittalDetails = () => {
    return (
        <div class="d-flex flex-column p-3" style={{ height: '91vh', overflowY: 'auto', backgroundColor: '#ffffff !important' }}>
            <header class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row">
                <div class="d-flex flex-row align-items-center">
                      <Image
                        {...qrCodeProps}
                        src={qrcode_logo}
                        alt='Example of the image fit value "center" on an image smaller than the frame.'
                      />
                </div>
                <div class="d-flex flex-row align-items-center">
                    <div>
                      <Image
                        {...companyLogoProps}
                        src={company_logo}
                        alt='Example of the image fit value "center" on an image smaller than the frame.'
                      />
                    </div>
                    <div>
                      <Label style={{fontSize: 24 }}>Aurecon Transmittal</Label>
                    </div>
                </div>
              </div>
              <div>
                <IconButton className="printDocument" iconProps={emojiIcon} title="Print Transmittal" ariaLabel="Print Transmittal" disabled={false} checked={false} />
              </div>
            </header>
            
            <section className="py-3">
              <div className="d-flex justify-content-between align-items-center">
                <Label style={{fontSize: 16 }}>Details</Label>
              </div>
              <div className="container-fluid">
                <div class="row" style={{ minWidth: 250, fontSize: 14, border: '2px solid #313f52' }}>
                  <div class="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Transmittal:</b> <span>[To Be Generated]</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Sent By:</b> <span>Kimberley Morrisson</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Project:</b> <span>Test Project</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Issued On:</b> <span>Oct 5, 2021</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Key Contact:</b> <span>Eurich De Castro</span></p>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <p style={{ marginBottom: '0.5em'}}><b>Subject:</b> <span>UI Review of Transmittal</span></p>
                    <p style={{ marginBottom: '0.5em'}}><b>Message:</b> <span>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</span></p>
                  </div>
                </div>
              </div>
            </section>
            <section class="flex-fill">
              <div className="d-flex justify-content-between align-items-center">
                <Label style={{fontSize: 16 }}>Documents</Label>
                <ActionButton className="printDocument" iconProps={{iconName: 'DownloadDocument'}} title="Print Transmittal" ariaLabel="Print Transmittal" disabled={false} checked={false}>
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

export default TransmittalDetails
