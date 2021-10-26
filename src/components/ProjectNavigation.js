import React, { Component } from 'react'

import { AppContext } from '../contexts/AppContext';
import { getProjects } from '../services/api'

import { Label } from '@fluentui/react'
import { Button, Row, Col, ListGroup, Tab, Badge } from 'react-bootstrap';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import '../styles/projectNavigation.css';

export default class ProjectNavigation extends Component {
    static contextType = AppContext;

    constructor(props) {
		super(props);

		this.state = {
			open: true,
            isLoading: true,
            projectList: []
		};
	}

    getProjectsData(userInfo){
        const appContext = this.context;

        getProjects(userInfo.id).then((response) => {
            const projectList = response.data;
            this.setState({ isLoading: false, projectList: projectList });

            if(projectList.length > 0){
                appContext.setState({selectedProject: projectList[0].id});
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
    }

    componentDidUpdate(){
        const appContextState = this.context.state;
        
        if(appContextState.isLoading === false && appContextState.userInfo && this.state.isLoading === true){
            this.getProjectsData(appContextState.userInfo);
        }
    }

    render() {
        return (
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
                                                    this.state.projectList.map(({ id, title, transmittalCount }, index) => (
                                                        <ListGroup.Item key={id} variant="primary"
                                                            onClick={(event) => this.selectProject(event, id)}
                                                            className={`${index === 0 ? "active" : ""}`}
                                                        >
                                                            <div className="d-flex justify-content-between">
                                                                <div className="projectName">{title}</div>
                                                                <Badge bg="dark">{transmittalCount}</Badge>
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
        )
    }
}