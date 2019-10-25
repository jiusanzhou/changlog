import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Link, Text } from 'rebass'

import { Popover } from '@blueprintjs/core'

import ChangelogItem from './widget-changelog-item'

const ChangelogList = ({
    title = '更新日志',
    mode,
    color = '#4441E1',
    releases = [],
    showPreRelease = true,
    showDraft = false,
}) => {

    const _classWraper = {
        flexDirection: 'column',
        position: 'fixed',
        top: 45,
        right: 45,

        background: '#fff',
        minWidth: 320,
        minHeight: 400,
        maxHeight: '60vh',
        boxShadow: '0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08)',
        borderRadius: 2,
    }

    const _classHeader = {
        textAlign: 'center',
        padding: '12px',
        borderBottom: '1px solid #eee',

        h3: {
            fontWeight: 'bold',
            fontSize: '14px'
        }
    }

    const _classContainer = {
        flex: '1 1 100%',
        overflowY: 'auto',
        scrollbarColor: '#c0c0c0 #f1f1f1',
        scrollbarWidth: 'thin',
    }

    const _classFooter = {
        textAlign: 'center',
        padding: '12px',
        borderTop: '1px solid #eee',
        fontSize: '12px',

        '& a:hover': {
            textDecoration: 'none',
        },
        '& a span': {
            fontWeight: 'bold',
        }
    }

    return <Flex sx={_classWraper}>
        <Box sx={_classHeader}>
            <Text><h3>{title}</h3></Text>
        </Box>
        <Box sx={_classContainer}>
            {releases.map((item, i) => <ChangelogItem key={`__${i}`} {...item} />)}
        </Box>
        <Box sx={_classFooter}>
            <Link target="_blank" href="https://labs.zoe.im/changelog">
                Powered ⚡ by <span>Changelog</span>
            </Link>
        </Box>
    </Flex>
}

ChangelogList.propTypes = {
    // PropTypes
}

export default ChangelogList