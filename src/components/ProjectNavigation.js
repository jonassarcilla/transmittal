import React, {useState} from 'react'
import { Label, initializeIcons } from '@fluentui/react'
import { Button, Row, Col, ListGroup, Tab, Badge, Collapse  } from 'react-bootstrap';
import { FiChevronsLeft } from "react-icons/fi";
import '../styles/projectNavigation.css';

const projectList = [
    {
        id: 1,
        projectName: 'Aurecon Master',
        transmittalCount: 8
    },
    {
        id: 2,
        projectName: 'Aurecon Demo Space',
        transmittalCount: 1
    },
    {
        id: 3,
        projectName: 'Aurecon Master Longer Name',
        transmittalCount: 1000
    }
];

const ProjectNavigation = () => {
    initializeIcons();

    const [open, setOpen] = useState(true);
    
    return (
        <div id="projectNavigation" class="d-flex flex-column">
            <div className="projectHead">
                <div class="d-flex justify-content-between">
                    <Collapse in={open} dimension="width">
                        <Label>Projects</Label>
                    </Collapse>
                    <Button
                        variant="outline-dark"
                        onClick={() => setOpen(!open)}
                        // aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <FiChevronsLeft/>
                    </Button>
                </div>
            </div>
            <div className="projectList">
                <Tab.Container defaultActiveKey="#link1">
                    <Row>
                        <Col>
                            <Collapse in={open} dimension="width" style={{ minWidth: 250 }}>
                                <ListGroup variant="flush">
                                    {projectList.map(({ id, projectName, transmittalCount }) => (
                                        <ListGroup.Item action href={ "#project-" + id } variant="primary">
                                            <div class="d-flex justify-content-between">
                                                <div className="projectName">{projectName}</div>
                                                <Badge bg="dark">{transmittalCount}</Badge>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Collapse>
                        </Col>
                        {/* <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                This is tab 1
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                This is tab 2
                            </Tab.Pane>
                        </Tab.Content>
                        </Col> */}
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default ProjectNavigation
