import React from 'react'
import { Nav, Label, IconButton, PrimaryButton, Stack, initializeIcons } from '@fluentui/react'

const links = [
    {
        links:[
            {
                name: 'Project 1 dfdk dfksdl;kfsd dsfsdlfk sdf d;fk s;fks ;dkf s;dfk s;sk;',
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
        maxWidth: '250px',
        boxSizing: 'border-box',
    }
}

const emojiIcon = {
    iconName: 'DoubleChevronLeft8'
}

const ProjectNavigation = () => {
    initializeIcons();
    
    return (
        <div class="d-flex flex-column" style={{ backgroundColor: '#eeeeee'}}>
            <div>
                <Stack horizontal style={{ maxWidth: 250}}>
                    <Stack.Item grow>
                        <Label style={{margin:'0', padding: '5px', fontSize: 18, color: '#393939'}}>Projects</Label>
                    </Stack.Item>
                    <Stack.Item align="end">
                        <IconButton
                            iconProps={emojiIcon}
                            title="Emoji"
                            ariaLabel="Emoji"
                            disabled={false}
                            checked={false}
                        />
                    </Stack.Item>
                </Stack>
            </div>
            <div style={{ height: '86vh', overflowY: 'auto'}}>
                <Nav
                    groups={links}
                    selectedKey="key1"
                    styles={navigationStyles}/>
            </div>
        </div>

        // <div style={{ backgroundColor: '#eeeeee'}}>
            // <Stack horizontal style={{ maxWidth: 250}}>
            //     <Stack.Item grow>
            //         <Label style={{margin:'0', padding: '5px', fontSize: 18, color: '#393939'}}>Projects</Label>
            //     </Stack.Item>
            //     <Stack.Item align="end">
            //         <IconButton
            //             iconProps={emojiIcon}
            //             title="Emoji"
            //             ariaLabel="Emoji"
            //             disabled={false}
            //             checked={false}
            //         />
            //     </Stack.Item>
            // </Stack>
        //     {/* <Stack horizontal style={{ maxWidth: 250, overflowY: 'auto', height:'100vh'}}>
        //         <Stack.Item grow>
        //             <Label style={{
        //                 padding: '0px 20px 0px 27px', 
        //                 fontSize: 14, 
        //                 color: '#393939', 
        //                 whiteSpace: 'nowrap',
        //                 overflow: 'hidden',
        //                 textOverflow: 'ellipsis',
        //                 maxWidth: 200
        //             }}>Project 1 dfsdfsdf dsfsdfsd sdfds fsd dfdfsd</Label>
        //         </Stack.Item>
        //         <Stack.Item style={{width: 50}}>
        //             <PrimaryButton text="8" allowDisabledFocus disabled={false} checked={false} />
        //         </Stack.Item>
        //     </Stack> */}
        //     {/* <Nav
        //         groups={links}
        //         selectedKey="key1"
        //         styles={navigationStyles}
        //     /> */}

            
        // </div>
    )
}

export default ProjectNavigation
