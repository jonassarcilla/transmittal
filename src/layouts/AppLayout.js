import React, { Component } from 'react'
import { AppContext } from '../contexts/AppContext';

import '../styles/appLayout.css'
import PageHeader from '../components/PageHeader';
import ProjectNavigation from '../components/ProjectNavigation';

export default class AppLayout extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            userInfo: null
		};
    }
    
    render() {
        return (
            <div id="appLayout" className="d-flex flex-column overflow-hidden fullHeight">
                <header className="sticky-top overflow-hidden">
                    <PageHeader/>
                </header>
                <main className="d-flex flex-column overflow-hidden fullHeight">
                    <div className="d-flex align-items-stretch overflow-hidden fullHeight">
                        <ProjectNavigation/>
                    </div>
                </main>
            </div>
        )
    }
}
