import React, { Component } from 'react'
import { Placeholder } from 'react-bootstrap';

import { AppContext } from '../contexts/AppContext';
import '../styles/pageHeader.css'

export default class PageHeader extends Component {
    static contextType = AppContext;

    render() {
        const appContext = this.context;

        return (
            <div id="pageHeader">
                {(() => {
                    if(appContext.state.isLoading || appContext.state.userInfo == null) {
                        return <Placeholder as="p" animation="wave">
                                <Placeholder xs={6} size="lg" bg="secondary" className="mx-3 mt-3"/>
                            </Placeholder>
                    } else {
                        const userInfo = appContext.state.userInfo;
                        return <h2>Welcome, {userInfo.Name}</h2>
                    }
                })()}
            </div>
        )
    }
}
