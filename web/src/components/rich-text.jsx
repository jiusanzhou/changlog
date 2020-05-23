import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'rebass'

const RichText = ({ content, ...props }) => {
    return <Box dangerouslySetInnerHTML={{ __html: content }} {...props} />
}

RichText.propTypes = {
    content: PropTypes.string.isRequired
}

export default RichText