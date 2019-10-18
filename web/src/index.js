import React from 'react'
import ReactDOM from 'react-dom'

import App from './core/widgets/app'

import * as serviceWorker from './utils/serviceWorker'

import "./styles/index.css"

const defaultAttachElement = '__changelog_container'

// inject element to dom
const attach = document.createElement('div')
attach.setAttribute('id', defaultAttachElement)
document.body.insertBefore(attach, document.body.firstChild)

ReactDOM.render(<App />, document.getElementById(defaultAttachElement))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
