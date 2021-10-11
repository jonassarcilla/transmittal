import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import { Stack } from '@fluentui/react';
import ProjectNavigation from './components/ProjectNavigation';

import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { getTheme } from '@fluentui/react/lib/Styling';

const stackTokens = { childrenGap: 0 };

const theme = getTheme();
const { palette, fonts } = theme;

const people = [
  { name: 'Annie Lindqvist', },
  { name: 'Roko Kolar' },
  { name: 'Aaron Reid' },
  { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];

const previewPropsUsingIcon = {
  previewImages: [
    {
      previewIconProps: {
        iconName: 'OpenFile',
        styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
      },
      width: 144,
    },
  ],
  styles: { previewIcon: { backgroundColor: palette.themePrimary } },
};

const previewProps = {
  getOverflowDocumentCountText: (overflowCount) => `+${overflowCount} more`,
  previewImages: [
    {
      name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
      linkProps: {
        href: 'http://bing.com',
        target: '_blank',
      },
      // previewImageSrc: TestImages.documentPreview,
      // iconSrc: TestImages.iconPpt,
      width: 144,
    },
    {
      name: 'New Contoso Collaboration for Conference Presentation Draft',
      linkProps: {
        href: 'http://bing.com',
        target: '_blank',
      },
      // previewImageSrc: TestImages.documentPreviewTwo,
      // iconSrc: TestImages.iconPpt,
      width: 144,
    },
    {
      name: 'Spec Sheet for design',
      linkProps: {
        href: 'http://bing.com',
        target: '_blank',
      },
      // previewImageSrc: TestImages.documentPreviewThree,
      // iconSrc: TestImages.iconPpt,
      width: 144,
    },
    {
      name: 'Contoso Marketing Presentation',
      linkProps: {
        href: 'http://bing.com',
        target: '_blank',
      },
      // previewImageSrc: TestImages.documentPreview,
      // iconSrc: TestImages.iconPpt,
      width: 144,
    },
  ],
};

const previewOutlookUsingIcon = {
  previewImages: [
    {
      previewIconProps: {
        iconName: 'OutlookLogo',
        styles: {
          root: {
            fontSize: fonts.superLarge.fontSize,
            color: '#0078d7',
            backgroundColor: palette.neutralLighterAlt,
          },
        },
      },
      width: 144,
    },
  ],
  styles: {
    previewIcon: { backgroundColor: palette.neutralLighterAlt },
  },
};


const navigationStyles = {
  root: {
      height: '100vh',
      boxSizing: 'border-box',
  }
}

function App() {
  return (
    <Stack styles={navigationStyles}>
        <Stack.Item>
          <div className="ms-Grid-col" style={{ backgroundColor: '#e5e5e5', borderTop: '15px solid #313f52'}}>
            <h2 style={{ margin: '0', paddingLeft: '10px'}}>Welcome, Kimberly Morrison</h2>
          </div>
        </Stack.Item>
        <Stack.Item>
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm-1 ms-xl-1">
                <ProjectNavigation/>
              </div>
              <div className="ms-Grid-col ms-sm-1 ms-xl-1">
              <Stack tokens={stackTokens} style={{ width: '300px', height: '100vh', backgroundColor: '#fff'}}>
                <DocumentCard>
                  <DocumentCardDetails>
                    <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                    <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                  </DocumentCardDetails>
                </DocumentCard>
                <DocumentCard>
                  <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
                  <DocumentCardDetails>
                    <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                    <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                  </DocumentCardDetails>
                </DocumentCard>
              </Stack>
              </div>

              <div className="ms-Grid-col ms-sm-1 ms-xl-1">
                Document Details
              </div>
            </div>
          </div>
        </Stack.Item>
    </Stack>
    
  );
}

export default App;
