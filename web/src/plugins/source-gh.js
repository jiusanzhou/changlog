import { extractMeta } from '../utils/markdown'


// https://api.github.com/repos/strapi/strapi/releases

const _baseApi = "https://api.github.com/repos"

const _apiList = (repo) => `${_baseApi}/${repo}/releases`
const _apiLatest = (repo) => `${_apiList(repo)}/latest`

const println = (msg) => console.log(`[SOURCE] [GH] ${msg}`)

class GithubSource {

    static _type = 'gh'
    static _alias = ['github']

    _name = 'default'

    _repo
    _options = {}

    _apiUrlList
    _apiUrlLatest

    constructor(repo, options = {}) {
        if (!repo) throw ("不合法 repo: " + repo)
        this._repo = repo
        this._options = options

        this._apiUrlList = _apiList(this._repo)
        this._apiUrlLatest = _apiLatest(this._repo)
    }

    // convert data to source
    _userFromJson({ id, login, name, avatar_url, html_url }) {
        return {
            id,
            username: login,
            name: null, // TODO:
            avatar: avatar_url,
            url: html_url,
        }
    }

    _releaseFromJson({ id, tag_name, name, body, draft, prerelease, created_at, published_at, author, html_url }) {

        // TODO: parse markdown t get meta and abstract

        return {
            id,
            tag: tag_name,
            name: name,
            body,
            draft,
            prerelease,
            created_at,
            published_at,
            author: this._userFromJson(author),
            url: html_url,
            ...extractMeta(body),
        }
    }

    static get type() {
        return this._type
    }

    get name() {
        return this._name
    }

    // page: 1, limit: 10
    list(params) {
        let { page = 1, limit = 10 } = params || {}
        println("LIST: " + this._apiUrlList)
        return new Promise((resolve, reject) => {
            fetch(this._apiUrlList)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    resolve(data.map(i => this._releaseFromJson(i)))
                })
        })
    }

    // load more

    // get detail

    latest() {

    }

    isLatest() {

    }
}

export default GithubSource