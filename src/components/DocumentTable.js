import React, { Component } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import { getFileToDownload } from '../services/api'

import { Label, ActionButton } from '@fluentui/react';
import { Button, Placeholder } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import { FaRegFilePdf, FaRegFile, FaDownload } from "react-icons/fa";

import { AppContext } from '../contexts/AppContext';


export default class DocumentTable extends Component {
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

    renderNoDataIndication() {
        return <Placeholder as="p" animation="wave" className="my-1">
            <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
            <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
            <Placeholder xs={6} size="lg" bg="secondary" style={{ width: '95%', height: 20 }}/>
        </Placeholder>
    }

    renderBootStrapTable(){
        const appContextState = this.context.state;
        const transmitalInfo = appContextState.selectedTransmittal;
        const documents = transmitalInfo && this.props.isLoading === false ? transmitalInfo.documents: [];

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
                      <Button variant="link" size="sm" className="px-0" 
                        onClick={() => {
                            getFileToDownload(filePath, fileName).then(response => {
                                console.log(response);
                            });
                        }}
                      >
                        <FaDownload style={{ fontSize: 20 }} />
                      </Button>
                  </div>
                </NoPrint>
              }
            }
        ];
        
        return <BootstrapTable wrapperClasses="documentTable" 
            keyField="id" 
            data={ documents || [] } 
            columns={ columns } 
            noDataIndication={this.renderNoDataIndication()}>
        </BootstrapTable>
    }

    downloadTransmittalFile(filePath, fileName){
        getFileToDownload(filePath, fileName).then(response => {
            console.log(response);
        });
    }

    downloadAllTransmittalFiles() {
        const appContextState = this.context.state;
        const transmitalInfo = appContextState.selectedTransmittal;
        const documents = transmitalInfo && this.props.isLoading === false ? transmitalInfo.documents: [];

        documents.map((document, index) => {
          getFileToDownload(document.filePath, document.fileName).then(
            response => {
              console.log(response);
          });
        });
    }

    render() {
        return (
            <section className="flex-fill">
              <div className="d-flex justify-content-between align-items-center">
                <Label style={{fontSize: 16 }}>Documents</Label>
                <NoPrint>
                  <ActionButton className="printDocument" 
                    iconProps={{iconName: 'DownloadDocument'}} 
                    title="Print Transmittal" 
                    ariaLabel="Print Transmittal"
                    onClick={() => this.downloadAllTransmittalFiles()}
                    >
                    Download All
                  </ActionButton>
                </NoPrint>
              </div>
                {this.renderBootStrapTable()}
            </section>
        )
    }
}
