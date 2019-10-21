import React from 'react'

import ChangelogList from './widget-changelog-list'
// import ChangelogItem from './widget-changelog-item'
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
        return <div>
            <ChangelogList />
            <ChangelogTrigger />
            <CongratulationBoom />
            <NotifactionBar />
        </div>
    }
}

export default App