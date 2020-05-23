import React from 'react'

import { Box } from 'rebass'

import { ThemeProvider } from 'theme-ui'

import CongratulationBoom from './widget-congratulation-boom'
import NotifactionBar from './widget-notifaction-bar'

import { Changelog } from "./widget-changelog"

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

    constructor(props) {
        super(props)

        this.state = {
            releases: [],
            loading: true,

            visible: false,
            firstView: false,
            hasNewer: false,
        }

        this._loadSource()
    }

    _loadSource() {
        this._source = Source({
            type: 'gh',
            repo: '88250/solo',
            // from config
        })

        let {
            showPreRelease = true,
            showDraft = false,
        } = this.props

        this._source.list().then((releases) => {
            this.setState({ releases, loading: false })
        })
    }

    componentDidMount() {

        this._intallTrigger()
    }

    _eventName = "changelog"

    _intallTrigger() {
        window.addEventListener(this._eventName, () => {
            this.setState({ visible: !this.state.visible })
        })

        // bind event trigger
        let trigger = "#changelog-trigger"
        let method = "click"
        // defualt click
        let ele = document.querySelector(trigger)
        // TODO: warning if trigger is null
        if (ele) ele.addEventListener(method, () => {
            window.dispatchEvent(new Event(this._eventName))
        })

        // add other style
    }

    _onClose() {
        this.setState({ visible: false })
    }

    // 判断是否有最新版本
    // 判断是否提示

    render() {
        const { releases } = this.state
        return <ThemeProvider theme={theme}><Box>
            {/* Changelog列表 */}
            {this.state.visible ? <Changelog {...this.state} onClose={this._onClose.bind(this)} /> : null}
            {/* 庆祝彩蛋 */}
            {this.state.firstView ? <CongratulationBoom /> : null}
            {/* 新版本通知<顶部通知条, 卡片，模态窗> */}
            {this.state.hasNewer ? <NotifactionBar /> : null}
        </Box></ThemeProvider>
    }
}

export default App