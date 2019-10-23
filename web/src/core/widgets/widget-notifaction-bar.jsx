import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Text, Link } from 'rebass'

import RichText from '../../components/rich-text'
import Beacon from '../../components/beacon'

const _modes = {
    embed: {
        
    },
    line: {

    },
    card: {

    }
}

const ReleaseNotify = ({
    content,
    leftTitle,
    rightIcon,
    disable,
    mode,
    className,
    background,
    primaryColor,
    zIndex,
    pillColor, textColor, anchorColor,
    position,
}) => {
    if (disable) return null

    const _classWraper = {
        position: 'fixed',
        top: 16,
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
    }

    const _classContainer = {
        // flex p-1 rounded-full no-underline hover:no-underline
        display: 'flex',
        padding: '0.25rem',
        borderRadius: '380px',
        textDecoration: 'none',
        // TODO: compute light color from primary color
        background: background || '#E6E6FF', // primaryColor + '2F',
        alignItems: 'center',
        userSelect: 'none',
        position: 'relative',
        zIndex: zIndex,
        // transition: 'all ease-in .2s',
        '&:hover': {
            textDecoration: 'none',
        }
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
        maxWidth: '250px',
        whiteSpace: 'nowrap',
        '> *': {
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    }

    const _classAnchor = {
        color: primaryColor,
        marginLeft: '10px',
        marginRight: '5px',
        fontWeight: 'bold',
    }

    return <Flex className={className} sx={_classWraper}>
        <Link sx={_classContainer}>
            <Text className={`bar_pill`} fontWeight="bold" sx={_classPill}>{leftTitle}</Text>
            <Box className={`bar_content`} sx={_classContent}>
                <RichText content={content}/>
            </Box>
            <Text className={`bar_anchor`} sx={_classAnchor}>{rightIcon}</Text>
        </Link>
    </Flex>
}

ReleaseNotify.propTypes = {
    content: PropTypes.string,
    leftTitle: PropTypes.string,
    rightIcon: PropTypes.string,
    disable: PropTypes.bool,
    mode: PropTypes.oneOf(Object.keys(_modes)),
    className: PropTypes.string,
    primaryColor: PropTypes.string,
    zIndex: PropTypes.number,
    // TODO:
    // pillColor, textColor, anchorColor,
    // position,
}

ReleaseNotify.defaultProps = {
    content: '我们又发布新功能啦！',
    leftTitle: '新版本',
    rightIcon: '🚀', // '👉', // '➤',
    disable: false,
    // mode,
    // background,
    primaryColor: '#4441E1', // '#ff813f', // '#55bc8a'
    zIndex: 9990,
    // pillColor, textColor, anchorColor,
    // position,
}

export default ReleaseNotify