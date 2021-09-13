import { Box } from '@material-ui/core'
import React from 'react'
import Header from '../Header'

function Layout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <Box height="64px" />
            <Box>
                {children}
            </Box>
        </React.Fragment>
    )
}

export default Layout
