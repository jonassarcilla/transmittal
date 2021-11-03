import React, { Component } from 'react'
import { AppContext } from '../contexts/AppContext';
import { getUserInfo } from '../services/api'


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
        getUserInfo().then((response) => {
            const userInfo = response.data[0];
            this.setState({ ...this.state, isLoading: false, userInfo: userInfo});
        })
    }

    render() {
        
        return (
            <AppContext.Provider value={this.state, this}> 
                <AppLayout/>
            </AppContext.Provider>
        )
    }
}