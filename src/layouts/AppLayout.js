import * as React from 'react';
// import 'office-ui-fabric-react/dist/css/fabric.css';
// import { Stack } from '@fluentui/react/lib/Stack';
// import { DefaultPalette } from '@fluentui/react/lib/Styling';
import PageHeader from '../components/PageHeader';
import ProjectNavigation from '../components/ProjectNavigation';
import TransmittalList from '../components/TransmittalList';
import TransmittalDetails from '../components/TransmittalDetails';

const AppLayout = () => {
    return (
        <div class="d-flex flex-column" style={{ overflow: 'hidden' }}>
            <header class="sticky-top" style={{ overflow: 'hidden' }}>
                <PageHeader/>
            </header>
            <main class="d-flex flex-column" style={{ height: '100vh', overflow: 'hidden'}}>
                <div class="d-flex align-items-stretch" style={{ height: '100vh', overflow: 'hidden' }}>
                    <aside>
                        <ProjectNavigation/>
                    </aside>

                    <section>
                        <TransmittalList/>
                    </section>

                    <article flex-grow-1>
                        <TransmittalDetails/>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default AppLayout
