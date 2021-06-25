function getHtml(obj) {
    const { labeType, type, id, className, attribute, content } = obj;

    if (!labeType) {
        return `<${type} ${getId(id)} ${getClassName(className)} ${getAtt(
        attribute
      )} />`;
    } else {
        return `<${type} ${getId(id)} ${getClassName(className)} ${getAtt(
      attribute
    )} >${getContent(content)}</${type}>`;
    }
}

function getId(id) {
    if (id !== undefined) {
        return `id="${id}"`
    }
    return ""
}

function getClassName(className) {
    if (className !== undefined) {
        return `class="${className}"`
    }
    return ""
}

function getAtt(attribute) {
    let ret = "";
    if (attribute !== undefined)
        Object.keys(attribute).map((item) => {
            ret += ` ${item}="${attribute[item]}"`;
        });
    return ret;
}

function getContent(content) {
    let ret = "";
    if (content !== undefined)
        content.map(item => {
            if (typeof item == "object") {
                ret += getHtml(item)
            } else {
                ret += item;
            }
        })
    return ret;
}

module.exports = getHtml;