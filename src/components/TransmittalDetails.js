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
        <Stack styles={stackStyles}>
            <Stack.Item>
                <Stack horizontal>
                    <Stack.Item align='start'>Company Logo</Stack.Item>
                    <Stack.Item align='end'>Print Page</Stack.Item>
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <Stack>
                    Doecument Details
                </Stack>
            </Stack.Item>
            <Stack.Item>
                Documents Table
            </Stack.Item>
            <Stack.Item disableShrink>
                Disclaimer
                <p>
                    ** The user agrees to use the drawings/data only for the purpose for which it was develop by Aurecon. A user of Aurecon drawings/data in electronic format accepts the associated risk of using it without taking reasonable measures to verify the accuracy thereof against the original un-editable version, available from Aurecon. Any discrepancy between the drawings/data and the contract shall be finally decided by the Engineer/Principal
                </p>
            </Stack.Item>
        </Stack>
    )
}

export default TransmittalDetails
