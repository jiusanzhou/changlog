import React from "react"

import { Flex, Box, Heading, Text, Button } from "rebass"

import { Trigger } from "../core/widgets/widget-changelog"

export default () => {
    return <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading pt={5}>容器云平台</Heading>
        <Flex mt={2}>
            <Button variant='primary' color="black">主页</Button>
            <Button variant='primary' color="black">控制台</Button>
            <Button variant='primary' color="black">关于</Button>
            <Button variant='primary' color="black">博客</Button>
            <Trigger><Button variant='primary' color="black">更新日志</Button></Trigger>
        </Flex>
    </Flex>
}