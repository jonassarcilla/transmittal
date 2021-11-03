import React, { Component } from 'react'

import { AppContext } from '../contexts/AppContext';
import { getProjects } from '../services/api'

import { Label } from '@fluentui/react'
import { Button, Row, Col, ListGroup, Tab, Badge } from 'react-bootstrap';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import '../styles/projectNavigation.css';

import TransmittalList from '../components/TransmittalList';

export default class ProjectNavigation extends Component {
    static contextType = AppContext;

    constructor(props) {
		super(props);

		this.state = {
			open: true,
            isLoading: true,
            projectList: [],
            selectedProjectId: null
		};
	}

    getProjectsData(userInfo){
        getProjects(userInfo.Id).then((response) => {
            const projectList = response.data;
            this.setState({ isLoading: false, projectList: projectList });

            if(projectList.length > 0){
                this.setState({selectedProjectId: projectList[0].Id});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    selectProject(event, id) {
        const appContext = this.context;

        const activeProjects = document.getElementsByClassName("list-group-item-primary active");

        for (var i = 0; i < activeProjects.length; i++) {
            activeProjects[i].classList.remove("active");
        }

        event.target.closest(".list-group-item-primary").className += " active";

        appContext.setState({selectedProject: id, selectedTransmittal: null});
        
        this.setState({selectedProjectId: id});
    }

    componentDidUpdate(){
        const appContextState = this.context.state;
        
        if(appContextState.isLoading === false && appContextState.userInfo && this.state.isLoading === true){
            this.getProjectsData(appContextState.userInfo);
        }
    }

    render() {
        return (
            <>
                <aside className="appContainer">
                    <div id="projectNavigation" className="d-flex flex-column">
                        <div className="projectHead">
                            <div className="d-flex justify-content-between">
                                {(() => {
                                    if (this.state.open === true) {
                                        return <Label>Projects</Label>
                                    }
                                })()}
                                <Button
                                    variant="outline-dark"
                                    onClick={() => {
                                        this.setState({ ...this.state, open: !this.state.open });
                                    }}
                                    data-toggle="collapse" 
                                    data-target="#collapse" 
                                    aria-expanded={this.state.open}
                                    aria-controls="collapse"
                                >
                                    {(() => {
                                        if (this.state.open === true) {
                                            return <FiChevronsLeft/>
                                        } else {
                                            return <FiChevronsRight/>
                                        }
                                    })()}
                                </Button>
                                
                            </div>
                        </div>
                        <div className="projectList">
                            <Tab.Container>
                                <Row>
                                    <Col>
                                        <div id="#collapse" className={`${ !this.state.open ? 'collapse' : ''}`} style={{ minWidth: 250 }}>
                                            {(() => {
                                                if (this.state.isLoading === true) {
                                                    return <p aria-hidden="true" className="placeholder-glow px-2">
                                                        <span className="placeholder placeholder-lg col-9 bg-secondary mx-2"></span>
                                                        <span className="placeholder placeholder-lg col-1 bg-dark mx-2"></span>
                                                        <span className="placeholder"></span>
                                                    </p>
                                                }
                                                else {
                                                    return <ListGroup variant="flush">
                                                        {   
                                                            this.state.projectList.map(({ Id, Title, TransmittalCount }, index) => (
                                                                <ListGroup.Item key={Id} variant="primary"
                                                                    onClick={(event) => this.selectProject(event, Id)}
                                                                    className={`${index === 0 ? "active" : ""}`}
                                                                >
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="projectName">{Title}</div>
                                                                        <Badge bg="dark">{TransmittalCount}</Badge>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            ))
                                                        }
                                                    </ListGroup>
                                                }
                                            })()}
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </aside>

                <TransmittalList selectedProjectId={this.state.selectedProjectId}/>
            </>
        )
    }
}