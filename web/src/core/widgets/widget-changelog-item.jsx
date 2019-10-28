import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Link, Text } from 'rebass'

import ReactMarkdown from 'react-markdown'

import { toNow } from '../../utils/data-time'

const ChangelogItem = ({ 
    // id,
    tag,
    name,
    title,
    abstract,
    category,
    body,
    draft,
    prerelease,
    created_at,
    published_at,
    author,
    url,

    borderColor = '#4441E1',
    ...item
}) => {

    const _classContainer = {
        padding: '7px 15px',
        borderLeft: `3px solid ${borderColor}`,
        marginBottom: 10,
        maxWidth: 400
    }

    const _classMeta = {
        marginRight: 10,
    }

    const _classContent = {
        flex: '1 1 80%',
    }

    const _classTitle = {
        lineHeight: '14px',
        fontSize: '14px',
        flex: 1,
    }

    const _classTag = {}

    const _classTime = {
        fontSize: 10,
        fontColor: '#969696',
        marginTop: '3px',
    }

    if ( prerelease ) {
        _classTag.background = 'unset'
        _classTag.borderRadius = 'unset'
        _classTag.color = '#f66a0a'
        _classTag.borderColor = '#f66a0a'
    } else if ( draft ) {
        _classTag.background = 'unset'
        _classTag.borderRadius = 'unset'
        _classTag.color = '#cb2431'
        _classTag.borderColor = '#cb2431'
    }

    return <Flex sx={_classContainer}>
        <Box sx={_classMeta}>
            <Box variant='badge' sx={_classTag}>{tag}</Box>
            <Text sx={_classTime}>{toNow(published_at)}</Text>
        </Box>
        <Box sx={_classContent}>
            <Text fontWeight='bold' sx={_classTitle}>
                <Link target="_blank" href={url}>{name||title}</Link>
            </Text>
            <Box>
                {/* <ReactMarkdown source={body} /> */}
            </Box>
        </Box>
    </Flex>
}

export default ChangelogItem