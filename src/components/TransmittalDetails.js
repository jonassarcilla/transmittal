import React from 'react'
import { Stack, DefaultPalette } from '@fluentui/react'

const stackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
      height: '100vh',
      width: '100',
      padding: '10px'
    },
  };
  const stackItemStyles = {
    root: {
      alignItems: 'center',
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      display: 'flex',
      height: 50,
      justifyContent: 'center',
    },
  };

const TransmittalDetails = () => {
    return (
        <div class="d-flex flex-column bd-highlight" style={{ height: '91vh' }}>
            <header class="p-2 d-flex justify-content-between">
                <div>Company Logo</div>
                <div>Print Page</div>
            </header>
            <section class="p-2 bd-highlight">Transmittal Details</section>
            <section class="p-2 bd-highlight flex-fill">Documents Table</section>
            <footer class="p-2 bd-highlight">
                <p>Disclaimer</p>
                <cite>** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal</cite>
            </footer>
        </div>
    )
}

export default TransmittalDetails
