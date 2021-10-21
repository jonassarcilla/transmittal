import React, { memo } from 'react'
import { Placeholder } from 'react-bootstrap';
import '../styles/pageHeader.css'

const PageHeader = ({ user }) => {
    return (
        <div id="pageHeader">
            {(() => {
                const userInfo = user.userInfo;

                if (userInfo == null || user.isLoading == true) {
                    return <Placeholder as="p" animation="wave">
                                <Placeholder xs={6} size="lg" bg="secondary" className="mx-3 mt-3"/>
                           </Placeholder>
                } else {
                    const firstName = userInfo.firstName || null,
                          lastName = userInfo.lastName || null;

                    return <h2>Welcome, {firstName} {lastName}</h2>
                }
            })()}
        </div>
    )
}

export default memo(PageHeader)
