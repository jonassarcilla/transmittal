import React, { Component } from 'react'
import queryString from 'query-string';
import { AppContext } from '../contexts/AppContext';
import { getTransmittalDetailsByLink, getTransmittalDetailsById } from '../services/api'
import TransmittalDetails from '../components/TransmittalDetails';

export default class TransmittalPage extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isLoading: true, 
            selectedTransmittal: null,
            isPrintPreviewOnly: true
		};
	}

    componentWillMount() {
        const params = queryString.parse(this.props.location.search),
            tid = params.tid || null,
            mlink = params.mlink || null;
        
        if(tid){
            getTransmittalDetailsById(tid).then((response) => {
                const selectedTransmittal = response.data[0];
                this.setState({isLoading: false, selectedTransmittal: selectedTransmittal});
            }).catch(response => {
                this.setState({isLoading: false });
            });
        }
        else if(mlink){
            getTransmittalDetailsByLink(mlink).then((response) => {
                const selectedTransmittal = response.data[0];

                if(selectedTransmittal){
                    this.setState({isLoading: false, selectedTransmittal: selectedTransmittal});
                } else {
                    this.setState({isLoading: false });
                }
            }).catch(response => {
                this.setState({isLoading: false });
            });
        } else {
            // Go to Not Found
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state, this}>
                <TransmittalDetails selectedTransmittal={this.state.selectedTransmittal} isTransmittalListLoading={this.state.isLoading}/>
            </AppContext.Provider>
        )
    }
}
