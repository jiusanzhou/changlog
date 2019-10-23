import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Link } from 'rebass'

const ChangelogItem = ({
    borderColor = '#4441E1'
}) => {

    const _classContainer = {
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 15px',
        borderLeft: `3px solid ${borderColor}`,
    }

    return <Link sx={_classContainer}>
        测试内容
    </Link>
}

export default ChangelogItem