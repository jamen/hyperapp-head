// Used on route updates.
export const patchHead = head => {
    Object.assign(document.head, head.attributes)

    for (const el of document.head.childNodes) {
        for (const node of head.children) {
            if (node.nodeName === 'title' && el.nodeName === 'TITLE') {
                document.title = node.children[0]
                Object.assign(el, node.attributes)
            } else if (testMetaKeys(node, el)) {
                Object.assign(el, node.attributes)
            }
        }
    }
}

// Used for prerendering
export const mergeHead = (targetHead, head) => {
    Object.assign(targetHead.attributes, head.attributes)

    for (const meta of head.children) {
        for (const targetMeta of targetHead.children) {
            if (targetMeta.nodeName === 'title' && meta.nodeName === 'title') {
                targetMeta.children = [ ...meta.children ]
                Object.assign(targetMeta.attributes, meta.attributes)
            } if (testMetaKeys(targetMeta, meta)) {
                Object.assign(targetMeta.attributes, meta.attributes)
            }
        }
    }
}

// Keys to match <meta> and <link> by between updates.
const metaKeys = [ 'name', 'property', 'itemprop', 'http-equiv', 'rel' ]

const testMetaKeys = (node1, node2) => {
    for (const key of metaKeys) {
        if (node1[key] && node2[key] && node1[key] === node2[key]) {
            return true
        }
    }
}