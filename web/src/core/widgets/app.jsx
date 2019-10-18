import React from 'react'

import ChangelogList from './widget-changelog-list'
import ChangelogItem from './widget-changelog-item'
import ChangelogTrigger from './widget-changelog-trigger'
import CongratuBoom from './widget-congratulation-boom'
import ReleaseNotify from './widget-release-notifaction'

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
        return <div>
            <ChangelogList />
            <ChangelogTrigger />
            <CongratuBoom />
            <ReleaseNotify />
        </div>
    }
}

export default App