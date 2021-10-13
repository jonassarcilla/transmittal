import React from 'react'
import { Stack } from '@fluentui/react'
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardPreview,
    DocumentCardTitle,
  } from '@fluentui/react/lib/DocumentCard';


const people = [
    { name: 'Annie Lindqvist', },
    { name: 'Roko Kolar' },
    { name: 'Aaron Reid' },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];



const TransmittalList = () => {
    return (
        <Stack style={{ width: '250px', height: '91vh', backgroundColor: '#fff', overflowY: 'auto'}}>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard><DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard><DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard><DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard>
                <DocumentCardDetails>
                <DocumentCardTitle title="Kimberley Morrisson" shouldTruncate />
                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                </DocumentCardDetails>
            </DocumentCard>
        </Stack>
    )
}

export default TransmittalList
