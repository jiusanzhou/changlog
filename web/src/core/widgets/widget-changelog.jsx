import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Flex, Box, Link, Text, Button, Image } from 'rebass'

import {
    IoIosClose,
    IoIosArrowBack,
    IoMdOpen,
} from "react-icons/io"

import ReactMarkdown from 'react-markdown'

import "github-markdown-css"

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
    onClick,
    ...item,
}) => {

    const _classContainer = {
        padding: '7px 15px',
        paddingBottom: 0,
        // borderLeft: `3px solid ${borderColor}`, // is new???
        marginBottom: 1,
        maxWidth: 400,
    }

    const _classMeta = {
        marginRight: 10,
    }

    const _classContent = {
        flex: 1,
        paddingBottom: 2,
        borderBottom: "1px solid #f3f3f3",
    }

    const _classTitle = {
        lineHeight: '14px',
        fontSize: '14px',
        flex: 1,
        cursor: "pointer",
    }

    const _classTag = {
        cursor: 'pointer'
    }

    const _classTime = {
        fontSize: 10,
        fontColor: '#969696',
        marginTop: '3px',
    }

    if (prerelease) {
        _classTag.background = 'unset'
        _classTag.borderRadius = 'unset'
        _classTag.color = '#f66a0a'
        _classTag.borderColor = '#f66a0a'
    } else if (draft) {
        _classTag.background = 'unset'
        _classTag.borderRadius = 'unset'
        _classTag.color = '#cb2431'
        _classTag.borderColor = '#cb2431'
    }

    return <Flex sx={_classContainer}>
        <Box sx={_classMeta}>
            <Box variant='badge' sx={_classTag}>{tag}</Box>
        </Box>
        <Box sx={_classContent}>
            <Flex>
                <Text onClick={() => onClick()} fontWeight='bold' sx={_classTitle}>
                    {name || title}
                </Text>
                <Box ml={2}>
                    <Link target="_blank" href={url}><IoMdOpen /></Link>
                </Box>
            </Flex>
            <Flex mt={2} justifyContent="space-between">
                <Flex>
                    {author ? <Image
                        width={20} height={20}
                        sx={{ borderRadius: 20 }}
                        mr={2}
                        variant='avatar' src={author.avatar} /> : null}
                    {author
                        ? <Text display="flex" alignItems="center" color={"rgba(71,82,93,.4)"}>{author.username}</Text> : null}
                </Flex>
                <Text
                    display="flex" alignItems="center" sx={_classTime}>{toNow(published_at)}</Text>
            </Flex>
            <Box>
                {/* <ReactMarkdown source={body} /> */}
                {/* Preview 2 lines or 50 words */}
            </Box>
        </Box>
    </Flex>
}

const ChangelogContainer = ({
    title = '更新日志',
    mode,
    color = '#4441E1',
    releases = [],
    loading = true,
    children,
    onBack, // onBack back button
    onClose, // onClick close button
}) => {

    const _classWraper = {
        flexDirection: 'column',
        position: 'fixed',
        top: 45,
        right: 45,

        background: '#fff',
        // minWidth: 320,
        width: 380,
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
            fontSize: '14px',
            overflow: 'hidden',
            wordBreak: 'break-all',
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
        <Flex sx={_classHeader}>
            <Box width={35}>
                {onBack
                    ? <Button p={2} alignSelf="center" bg={"unset"} color="black">
                        <Flex justifyContent="start" onClick={onBack}><IoIosArrowBack size={18} /></Flex>
                    </Button>
                    : null}
            </Box>
            <Flex justifyContent="center" alignItems="center" flex={1} width={3 / 5}>
                <h3>{title}</h3>
            </Flex>
            <Box width={35}>
                <Button p={2} bg={"unset"} color="black" onClick={onClose}>
                    <Flex justifyContent="end"><IoIosClose size={18} /></Flex>
                </Button>
            </Box>
        </Flex>
        <Box sx={_classContainer}>{children}</Box>
        <Box sx={_classFooter}>
            <Link target="_blank" href="https://labs.zoe.im/changelog">
                Powered ⚡ by <span>Changelog</span>
            </Link>
        </Box>
    </Flex>
}

const ChangelogDetail = ({ detail: { body, author, published_at } }) => {
    return <Flex flexDirection="column" p={2}>
        {/* head */}
        <Flex mb={2}>
            <Flex mr={1} flex={1}>
                {author ? <Image
                    width={30} height={30}
                    sx={{ borderRadius: 30 }}
                    mr={2}
                    variant='avatar' src={author.avatar} /> : null}
                {author ? <Text
                    display="flex" alignItems="center"
                    color={"rgba(71,82,93,.4)"}>{author.username}</Text> : null}
            </Flex>
            <Text
                display="flex" alignItems="center"
                fontSize={14} color="#969696">{toNow(published_at)}</Text>
        </Flex>
        <Box fontSize={12} className="markdown-body">
            <ReactMarkdown source={body} />
        </Box>
        {/* end */}
        <Box height={40}></Box>
    </Flex>
}

const ChangelogList = ({ releases, onItemClick }) => {
    return <Flex flexDirection="column">
        {releases.map((item, i) => <ChangelogItem onClick={() => onItemClick(item)} key={`__${i}`} {...item} />)}
        {/* load more */}
    </Flex>
}

const Changelog = ({
    releases,
    ...props,
}) => {

    const [detailItem, setDetailItem] = useState(null)


    const extendProps = {}
    if (detailItem) extendProps.title = detailItem.name

    return <ChangelogContainer {...props} {...extendProps} onBack={detailItem ? () => setDetailItem(null) : null}>
        {detailItem
            ? <ChangelogDetail detail={detailItem} />
            : <ChangelogList onItemClick={setDetailItem} releases={releases} />}
    </ChangelogContainer>
}

const Trigger = ({ children, eventName = "changelog" }) => {
    const _onClick = () => {
        window.dispatchEvent(new Event(eventName))
    }

    const style = {
        display: "inline-flex",
        "::after": {
            content: `" "`,
            background: "#4441E1",
            width: 5,
            height: 5,
            borderRadius: 5,
            // TODO: add breath animation
            animation: 'breath-animation 1s linear infinite alternate;',
            '@keyframes breath-animation': {
                // '0%': { height: 100, width: 100 },
                // '30%': { height: 400, width: 400, opacity: 1 },
                // '40%': { height: 405, width: 405, opacity: 0.3 },
                // '100%': { height: 100, width: 100, opacity: 0.6 },
            }
        }
    }

    return React.cloneElement(children, { onClick: _onClick, sx: style })
}

export {
    Changelog,
    Trigger
}