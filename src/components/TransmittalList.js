import React, { Component } from 'react'
import Moment from 'react-moment';

import { AppContext } from '../contexts/AppContext';
import { getTransmittalList } from '../services/api'

import { ListGroup } from 'react-bootstrap';

import TransmittalDetails from '../components/TransmittalDetails';
import '../styles/transmittalList.css';

export default class TransmittalList extends Component {
    static contextType = AppContext;

    constructor(props) {
		super(props);

		this.state = {
            isLoading: true,
            transmittalList: [],
            selectedTransmittal: null
		};
	}

    getTransmittalsData(projectId) {
        const appContext = this.context;

        getTransmittalList(projectId).then((response) => {
            const transmittalList = response.data
            this.setState({ isLoading: false, transmittalList: transmittalList, currentProjectId: projectId });

            if(transmittalList.length > 0){
                appContext.setState({selectedTransmittal: transmittalList[0]});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    selectTransmittal(event, transmittalInfo){
        const appContext = this.context;

        const activeTransmittal = document.getElementsByClassName("list-group-item-light active");

        for (var i = 0; i < activeTransmittal.length; i++) {
            activeTransmittal[i].classList.remove("active");
        }

        event.target.closest(".list-group-item-light").className += " active";
        
        appContext.setState({selectedTransmittal: transmittalInfo});
        this.setState({ selectedTransmittal: transmittalInfo });
    }

    componentDidUpdate(prevProps, prevState){
        const selectedProjectId = prevProps.selectedProjectId;
        const currentProjectId = this.props.selectedProjectId;

        if(selectedProjectId && currentProjectId && selectedProjectId !== currentProjectId){
            this.setState({ isLoading: true, selectedTransmittal: null });
        }
    }

    renderLoading(){
        return <p aria-hidden="true" className="placeholder-glow p-2">
            <span className="placeholder placeholder-lg col-9 bg-secondary mx-2"></span>
            <span className="placeholder placeholder-lg col-1 bg-dark mx-2"></span>
            <span className="placeholder placeholder-lg col-11 bg-success mx-2"></span>
            <span className="placeholder placeholder-lg col-11 bg-secondary mx-2"></span>
            <span className="placeholder placeholder-lg col-11 bg-secondary mx-2"></span>
        </p>
    }

    renderList(){
        if(this.state.isLoading === false && this.state.transmittalList.length == 0){
            return <div className="py-5 px-3 text-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-inboxes" viewBox="0 0 16 16">
                        <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z"/>
                    </svg>
                </span>
                <p className="py-2">No transmittals found</p>
            </div>
        }

        return <ListGroup variant="flush">
            {this.state.transmittalList.map((transmittalInfo, index) => {
                return (
                    <ListGroup.Item key={index} variant="light"
                        onClick={(event) => this.selectTransmittal(event, transmittalInfo)}
                        className={`py-3 ${index === 0 ? "active" : ""}`}
                    >
                        <div className="d-flex justify-content-between preview-header">
                            <div>
                                <h5>{transmittalInfo.sender}</h5>
                                <p>{transmittalInfo.transmittalNo}</p>
                            </div>
                            <div className="preview-header-date">
                                <Moment date={transmittalInfo.issued_date} format="DD/MM/YY" /><br/>
                                <Moment date={transmittalInfo.issued_date} format="HH:MM" />
                            </div>
                        </div>
                        <div className="preview-content">
                            <h6>{transmittalInfo.subject}</h6>
                            <p>{transmittalInfo.message}</p>
                        </div>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    }

    loadTransmittals(selectedProjectId) {
        if(selectedProjectId && this.state.isLoading){
            const appContext = this.context;
            getTransmittalList(selectedProjectId).then((response) => {
                const transmittalList = response.data
                this.setState({ isLoading: false, transmittalList: transmittalList });
    
                if(transmittalList.length > 0){
                    appContext.setState({selectedTransmittal: transmittalList[0]});
                    this.setState({selectedTransmittal: transmittalList[0]})
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        const selectedProjectId = this.props.selectedProjectId;

        return (
            <>
                <section className="appContainer">
                    <div id="transmittalList">
                        {(() => {
                            if(this.state.isLoading && selectedProjectId){
                                this.loadTransmittals(selectedProjectId);
                            }
                        })()}
                        {this.state.isLoading ? this.renderLoading() : this.renderList() }
                    </div>
                </section>
                <article flex-grow-1="true">
                    <TransmittalDetails selectedTransmittal={this.state.selectedTransmittal} isTransmittalListLoading={this.state.isLoading}/>
                </article>
            </>
        )
    }
}
