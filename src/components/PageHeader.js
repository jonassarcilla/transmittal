import React from 'react'

const headerStyles = {
    backgroundColor: '#fefefe',
    color: '#000',
    width: '100%',
    borderTop: '8px solid #313f51',
    borderBottom: '3px solid #f7f7f7'
}

const labelStyles = {
    margin: '0',
    padding: '10px 5px',
    fontWeight: 'normal',
    color: '#393939'
}

const PageHeader = () => {
    return (
        <div style={headerStyles}>
           <h2 style={labelStyles}>Welcome, Kimberley Morrison</h2>
        </div>
    )
}

export default PageHeader
