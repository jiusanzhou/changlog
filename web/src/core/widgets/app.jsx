import React from 'react'

import { Box } from 'rebass'

import ChangelogList from './widget-changelog-list'
import ChangelogTrigger from './widget-changelog-trigger'
import CongratulationBoom from './widget-congratulation-boom'
import NotifactionBar from './widget-notifaction-bar'

/**
 * 核心模块:
 * - 欢迎Widget(alive) with 祝贺Widget(超时自动消失), Configuarable conponents
 * - Changelog 列表 Widget
 * - Source
 * - Position
 */

class App extends React.Component {
    constructor() {
        super()
    }

    render () {
        return <Box>
            {/* Changelog列表 */}
            <ChangelogList />
            {/* Changelog触发器 */}
            <ChangelogTrigger />
            {/* 庆祝彩蛋 */}
            <CongratulationBoom />
            {/* 新版本通知<顶部通知条, 卡片，模态窗> */}
            <NotifactionBar />
        </Box>
    }
}

export default App