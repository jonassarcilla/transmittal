import * as React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import PageHeader from '../components/PageHeader';
import ProjectNavigation from '../components/ProjectNavigation';
import TransmittalList from '../components/TransmittalList';
import TransmittalDetails from '../components/TransmittalDetails';

// Styles definition
const stackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
    height: '100vh',
  }
};

const pageHeaderStackItemStyles = {
  root: {
    alignItems: 'start',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    justifyContent: 'start',
  }
};

const contentStackStyles = {
  root: {
    alignItems: 'start',
    background: '#fff',
    color: DefaultPalette.white,
    display: 'flex',
    justifyContent: 'start',
  }
}

const projectListStackStyles = {
    root: {
        alignItems: 'start',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        justifyContent: 'start',
        overflow: 'hidden', 
        height:'100vh',
        maxWidth: 250
    }
}

const transmittalListStackStyles = {
    root: {
        alignItems: 'start',
        background: 'green',
        color: DefaultPalette.white,
        display: 'flex',
        justifyContent: 'start',
        maxWidth: 250,
        overflow: 'auto', 
        height:'100vh'
    }
}

const transmittalDetailsStackStyles = {
    root: {
        alignItems: 'start',
        background: '#fff',
        color: DefaultPalette.white,
        display: 'flex',
        justifyContent: 'start',
        overflowX: 'auto',
        // height:'100vh',
    }
}

const AppLayout = () => {
    return (
        <Stack styles={stackStyles}>
            <Stack.Item styles={pageHeaderStackItemStyles}>
            <PageHeader/>
            </Stack.Item>
            <Stack.Item grow disableShrink styles={contentStackStyles}>
                <Stack>
                    <Stack horizontal styles={stackStyles}>
                        <Stack.Item grow disableShrink styles={projectListStackStyles}>
                            <ProjectNavigation/>
                        </Stack.Item>
                        <Stack.Item grow disableShrink styles={transmittalListStackStyles}>
                            <TransmittalList/>
                        </Stack.Item>
                        <Stack.Item grow styles={transmittalDetailsStackStyles}>
                            <TransmittalDetails/>
                        </Stack.Item>
                    </Stack>
                </Stack>
            </Stack.Item>
        </Stack>
    )
}

export default AppLayout
