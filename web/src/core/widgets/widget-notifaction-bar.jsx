import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Text, Link } from 'rebass'

import RichText from '../../components/rich-text'

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
    disable, mode, children,
    background,
    primaryColor = '#4441E1',
    pillColor, textColor, anchorColor,
    position,
}) => {
    if (disable) return null
    const classes = [
        
    ]

    const _classWraper = {
        top: 28,
    }

    const _classContainer = {
        background: background || primaryColor + '2F',
        alignItems: 'center',
    }

    const _classPill = {
        background: primaryColor,
        color: '#fff',
        fontSize: '10px',
        padding: '3px 4px',
        borderRadius: '380px',
        marginRight: '10px',
    }

    const _classContent = {
        color: primaryColor,
        fontSize: '13px',
        fontWeight: '500',
    }

    const _classAnchor = {
        color: primaryColor,
        marginLeft: '10px',
        fontWeight: 'bold',
        '&:hover': {
            marginLeft: '12px'
        }
    }

    return <Flex className={`fixed justify-center w-full align-center`} sx={_classWraper}>
        <Link className={`flex p-1 border rounded-full no-underline hover:no-underline`} sx={_classContainer}>
            <Text className={`bar_pill`} fontWeight="bold" sx={_classPill}>新版本</Text>
            <Box className={`bar_content`} sx={_classContent}>
                <RichText content={'内容'}/>
            </Box>
            <Text className={`bar_anchor`} sx={_classAnchor}>→</Text>
        </Link>
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