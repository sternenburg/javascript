function displayAbbreviations() {
    // 检查兼容性
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    // 取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    
    // 遍历这些缩略词
    var defs = new Array();
    for (var i=0; i<abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    // 创建定义列表
    var dlist = document.createElement("dl");
    
    // 遍历定义
    for (key in defs) {
        var definition = defs[key];
    // 创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
    // 创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
    // 把定义标题及定义描述添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    // 上面两个循环应该可以放在一起

    // 创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // 把标题添加到页面主体
    document.body.appendChild(header);
    // 把列表添加到页面主体
    document.body.appendChild(dlist)
}
addLoadEvent(displayAbbreviations);