import React, { Component } from 'react'

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
                            <div className="preview-header-date">{transmittalInfo.issued_date}<br/>{transmittalInfo.issued_time}</div>
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
                    <TransmittalDetails selectedTransmittal={this.state.selectedTransmittal}/>
                </article>
            </>
        )
    }
}
