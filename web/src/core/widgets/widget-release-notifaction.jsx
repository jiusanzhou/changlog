import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'rebass'

const _modes = {
    embed: {
        
    },
    line: {

    },
    card: {

    }
}

const ReleaseNotify = ({
    className,
    disable, mode, children
}) => {
    if (disable) return null
    const classes = [
        
    ]
    return <Flex className={`bg-none fixed w-full justify-center p-4`} sx={{}}>
        <Box className={`bg-black w-2/5 p-1 border rounded-full`}>内容</Box>
    </Flex>
}

ReleaseNotify.propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    mode: PropTypes.oneOf(Object.keys(_modes)),
}

ReleaseNotify.defaultProps = {
    disable: false,
    mode: 'embed',
}

export default ReleaseNotify