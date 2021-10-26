import React, { Component } from 'react'
import { AppContext } from '../contexts/AppContext';

import '../styles/appLayout.css'
import PageHeader from '../components/PageHeader';
import ProjectNavigation from '../components/ProjectNavigation';
import TransmittalList from '../components/TransmittalList';
import TransmittalDetails from '../components/TransmittalDetails';

export default class AppLayout extends Component {
    static contextType = AppContext;

    // constructor(props) {
    //     super(props);
    //     // //Let's declare an empty profile state here.
    //     // state = {
    //     //     profile: {},
    //     // };
    // }
    
    render() {
        return (
            <div id="appLayout" className="d-flex flex-column overflow-hidden fullHeight">
                <header className="sticky-top overflow-hidden">
                    <PageHeader/>
                </header>
                <main className="d-flex flex-column overflow-hidden fullHeight">
                    <div className="d-flex align-items-stretch overflow-hidden fullHeight">
                        <aside className="appContainer">
                            <ProjectNavigation/>
                        </aside>

                        <section className="appContainer">
                            <TransmittalList/>
                        </section>

                        <article flex-grow-1="true">
                            <TransmittalDetails/>
                        </article>
                    </div>
                </main>
            </div>
        )
    }
}
