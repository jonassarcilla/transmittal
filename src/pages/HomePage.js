import React, { Component } from 'react'
import queryString from 'query-string';
import { AppContext } from '../contexts/AppContext';
import { getUserByTransmittalId, getUserByLink } from '../services/api'


import AppLayout from '../layouts/AppLayout';

export default class HomePage extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isLoading: true, 
            userInfo: null,
            selectedProject: null,
            selectedTransmittal: null,
            isPrintPreviewOnly: false
		};
	}

    componentWillMount() {
        const params = queryString.parse(this.props.location.search),
            tid = params.tid || null,
            magicLink = params.magicLink || null;
            
        if(tid){
            getUserByTransmittalId(tid).then((response) => {
                const userInfo = response.data[0];
                this.setState({ ...this.state, isLoading: false, userInfo: userInfo});
            })
        } else if(magicLink){
            getUserByLink(magicLink).then((response) => {
                const userInfo = response.data[0];
                this.setState({ ...this.state, isLoading: false, userInfo: userInfo, isPrintPreviewOnly: true});
            })
        } else {
            // Go to Not Found
        }
    }

    render() {
        
        return (
            <AppContext.Provider value={this.state, this}> 
                <AppLayout/>
                {/* <TransmittalDetails user={transmittalDetails } printPreview="true"/> */}
            </AppContext.Provider>
        )
    }
}