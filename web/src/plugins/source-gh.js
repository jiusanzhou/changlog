
// https://api.github.com/repos/strapi/strapi/releases

class GithubSource {

    _type = 'gh'
    _alias = ['github']

    _name = 'default'

    constructor({ name }) {
        this._name = name
    }

    get type () {
        return this._type
    }

    get name () {
        return this._name
    }

    init ({ repo }) {
        // check if repo exits
        if ( !repo || repo.indexOf('/') <= 0 ) return "repo 不合法"
    }
    
    list () {

    }

    latest () {

    }

    isLatest () {

    }
}

export default GithubSource