


// ---(\s*.+)*---

const _metaBlockRegex = /(^\s*---((\s*.+\s*)*)---)?\s*(.+)*\n*/
const _metaKVRegex = /(.+)?\s*:\s*(.+)/g

const _emojiRegex =  /<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu

export const extractEmoji = (content) => {
    // TODO:
    let r
    let emojis = []
    // while ( ( r = _emojiRegex.exec(content) ) ) {
    //     emojis.push(r)
    // }
    return emojis
}

export const extractMeta = (content) => {
    let meta = {
        rightIcon: null,
        title: null,
        category: null,
    }
    // first get meta block
    let _block = _metaBlockRegex.exec(content)
    if (!_block) return meta
    _block = _block[2] || ''
    meta["abstract"] = _block[4] || ''
    let r
    while ( (r =_metaKVRegex.exec(_block)) ) {
        meta[r[1]] = meta[r[2]]
    }
    return meta
}