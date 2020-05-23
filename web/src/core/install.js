import React from 'react'
import ReactDOM from 'react-dom'

import Changelog from './widgets/app'

const defaultAttachElement = '__changelog_container'

// inject element to dom
const attach = document.createElement('div')
attach.setAttribute('id', defaultAttachElement)
document.body.insertBefore(attach, document.body.firstChild)

// load config from global

ReactDOM.render(<Changelog />, document.getElementById(defaultAttachElement))