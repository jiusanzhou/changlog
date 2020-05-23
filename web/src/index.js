import React from 'react'
import ReactDOM from 'react-dom'

import Demo from "./examples/demo-page"

import * as serviceWorker from './utils/serviceWorker'

import "./styles/index.css"

// auto install
import "./core/install"

ReactDOM.render(<Demo />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
