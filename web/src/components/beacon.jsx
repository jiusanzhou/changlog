import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'rebass'

const Beacon = ({ children, color = '#E6E6FF' }) => {
    const _classContainer = {
        position: 'relative',
        '&:before': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: '100px',
            background: color,
            animation: 'beaconA 1.5s infinite',
            top: 0,
            left: 0,
        },
        '&:after': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: '100px',
            border: `2px solid ${color}`,
            animation: 'beaconB 1.5s infinite',
            top: 0,
            left: 0,
        }
        
    }
    return <Box sx={_classContainer}>
        { children }
    </Box>
}

Beacon.propTypes = {
    color: PropTypes.string,
}

export default Beacon