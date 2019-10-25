import React from 'react'

import { Box } from 'rebass'

import { ThemeProvider } from 'theme-ui'

import ChangelogList from './widget-changelog-list'
import ChangelogTrigger from './widget-changelog-trigger'
import CongratulationBoom from './widget-congratulation-boom'
import NotifactionBar from './widget-notifaction-bar'

import Source from '../source'

import theme from '../../themes/default'

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
        this._source = Source({
            type: 'gh',
            repo: 'aerokube/selenoid',
        })

        this.state = {
            releases: [],
        }
        
        this._source.list().then((releases) => {
            this.setState({releases})
        })
    }

    render () {
        const { releases } = this.state
        return <ThemeProvider theme={theme}><Box>
            {/* Changelog列表 */}
            <ChangelogList releases={releases} />
            {/* Changelog触发器 */}
            <ChangelogTrigger />
            {/* 庆祝彩蛋 */}
            <CongratulationBoom />
            {/* 新版本通知<顶部通知条, 卡片，模态窗> */}
            <NotifactionBar />
        </Box></ThemeProvider>
    }
}

export default App