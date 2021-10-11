import React from 'react'
import { Nav, initializeIcons } from '@fluentui/react'

const links = [
    {
        links:[
            {
                name: 'Project 1',
                url: '#',
                key: 'key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Project 2',
                url: '#',
                key: 'key2',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Project 3',
                url: '#',
                key: 'key3',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            }
        ]
    }
]

const navigationStyles = {
    root: {
        width: '300px',
        height: '100vh',
        boxSizing: 'border-box',
    }
}

const ProjectNavigation = () => {
    initializeIcons();
    
    return (
        <div style={{ backgroundColor: '#eeeeee'}}>
            <h3 style={{margin:'0', padding: '5px'}}>Projects</h3>
            <Nav
                groups={links}
                selectedKey="key1"
                styles={navigationStyles}
            />
        </div>
    )
}

export default ProjectNavigation
