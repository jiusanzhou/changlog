import PropTypes from 'prop-types'

import GithubSource from '../plugins/source-gh'

/**
 * User: { id, username, name, avatar, url }
 * Release: { id, name, title, abstract, body, draft, prerelease, category, created_at, published_at, author: User , url }
 * Source: Name() string, Type() string, Setup({}) error, List({since=null}) []Release, Latest() Release, IsLatest(name) bool
 */

const __sources = {}

const m = ({ type, repo, options }) => {
    const _ = __sources[type]
    return _?(new __sources[type](repo, options)):null
}

// register plugins
[
    GithubSource,
].map(i => __sources[i.type] = i)

export default m