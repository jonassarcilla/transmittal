import React, { memo, useState, useContext, useEffect }  from 'react'
import { UserContext } from '../contexts/UserContext';
import requests from "../services/requests";

import { Label } from '@fluentui/react'
import { Button, Row, Col, ListGroup, Tab, Badge, Collapse, Placeholder, Stack } from 'react-bootstrap';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import '../styles/projectNavigation.css';

const ProjectNavigation = ({ user }) => {
    const [userInfoContext, setUserInfoContext] = useContext(UserContext);

    const [open, setOpen] = useState(true);
    const [projectNavigation, setProjectNavigation] = useState({ isLoading: true, projectList: [] });

    const getProjectsData = (userInfo) => {
        requests.getProjects(userInfo.id).then((response) => {
            setProjectNavigation({ isLoading: false, projectList: response.data });

            if(response.data.length > 0){
                setUserInfoContext({...userInfoContext, selectedProject: response.data[0].id});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const selectProject = (event, id) => {
        const activeProjects = document.getElementsByClassName("list-group-item-primary active");

        for (var i = 0; i < activeProjects.length; i++) {
            activeProjects[i].classList.remove("active");
        }

        event.target.closest(".list-group-item-primary").className += " active";

        setUserInfoContext({...userInfoContext, selectedProject: id});
    }

    if(user.isLoading === false 
            && user.userInfo !== null 
            && projectNavigation.isLoading == true)
    {
        const userInfo = user.userInfo;
        getProjectsData(userInfo);
    }

    return (
        <div id="projectNavigation" className="d-flex flex-column">
            <div className="projectHead">
                <div className="d-flex justify-content-between">
                    <Collapse in={open} dimension="width">
                        <Label>Projects</Label>
                    </Collapse>
                    <Button
                        variant="outline-dark"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        {(() => {
                            if (open == true) {
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
                            <Collapse in={open} dimension="width" style={{ minWidth: 250 }}>
                                {(() => {
                                    if (projectNavigation.isLoading == true) {
                                        return <Placeholder as="p" animation="wave" className="mt-2">
                                                    <Stack direction="horizontal" gap={1}>
                                                        <Placeholder xs={8} size="lg" bg="secondary" className="mx-3"/>
                                                        <Placeholder xs={1} size="lg" bg="primary" className="mx-3" />
                                                    </Stack>
                                                </Placeholder>
                                                
                                    } else {
                                        return <ListGroup variant="flush">
                                            {   
                                                projectNavigation.projectList.map(({ id, title, transmittalCount }, index) => (
                                                    <ListGroup.Item key={id} variant="primary"
                                                        onClick={(event) => selectProject(event, id)}
                                                        className={`${index == 0 ? "active" : ""}`}
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
                            </Collapse>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default memo(ProjectNavigation)
