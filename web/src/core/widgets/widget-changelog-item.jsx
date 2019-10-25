import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Link, Text } from 'rebass'

import ReactMarkdown from 'react-markdown'

const ChangelogItem = ({ 
    // id,
    tag,
    name,
    title,
    abstract = 'It’s extremely useful for using design system components to render markdown and weaving interactive components in with existing markdown.',
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
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 15px',
        borderLeft: `3px solid ${borderColor}`,
        marginBottom: 10,
        maxWidth: '400px'
    }

    const _classTitle = {
        marginLeft: 10,
        lineHeight: '14px',
        fontSize: '14px',
        flex: 1,
    }

    const _classTag = {}

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

    return <Box sx={_classContainer}>
        <Link target="_blank" href={url}>
            <Flex>
                <Box variant='badge' sx={_classTag}>{tag}</Box>
                <Text fontWeight='bold' sx={_classTitle}>{name||title}</Text>
            </Flex>
        </Link>
        <Text>{abstract}</Text>
    </Box>
}

export default ChangelogItem