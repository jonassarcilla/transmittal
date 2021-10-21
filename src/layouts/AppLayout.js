import { useContext, memo } from "react";
import { UserContext } from '../contexts/UserContext';
import requests from "../services/requests";

import PageHeader from '../components/PageHeader';
import ProjectNavigation from '../components/ProjectNavigation';
import TransmittalList from '../components/TransmittalList';
import TransmittalDetails from '../components/TransmittalDetails';


const AppLayout = () => {
    const [user] = useContext(UserContext);

    return (
        <div class="d-flex flex-column" style={{ overflow: 'hidden' }}>
            <header class="sticky-top" style={{ overflow: 'hidden' }}>
                <PageHeader user={user}/>
            </header>
            <main class="d-flex flex-column" style={{ height: '100vh', overflow: 'hidden'}}>
                <div class="d-flex align-items-stretch" style={{ height: '100vh', overflow: 'hidden' }}>
                    <aside style={{ borderRight: '1px solid gainsboro'}}>
                        <ProjectNavigation user={user}/>
                    </aside>

                    <section style={{ borderRight: '1px solid gainsboro'}}>
                        <TransmittalList user={user}/>
                    </section>

                    <article flex-grow-1>
                        <TransmittalDetails user={user}/>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default memo(AppLayout)
