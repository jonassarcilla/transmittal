import React from 'react'

const headerStyles = {
    backgroundColor: '#dcdcdc',
    color: '#000',
    width: '100%',
    borderTop: '8px solid #313f51',
    borderBottom: '1px solid #eaeaea'
}

const labelStyles = {
    margin: '0',
    padding: '10px 5px',
    fontWeight: 'normal',
    color: '#393939'
}

const PageHeader = () => {
    return (
        <div className="ms-Grid-col" style={headerStyles}>
           <h2 style={labelStyles}>Welcome, Kimberley Morrison</h2>
        </div>
    )
}

export default PageHeader
