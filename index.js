/**
 * Created by XadillaX on 2014/8/5.
 */
require("sugar");
var escapist = require("node-escapist");
var CharBuffer = require("char-buffer");

/**
 * escape html
 * @param html
 * @returns {*}
 */
exports.escape = function(html) {
    return escapist.escape(html);
};

/**
 * unescape html
 * @param html
 * @returns {*}
 */
exports.unescape = function(html) {
    var temp = escapist.unescape(html);

    // with `&#0000`
    // need add hex    by mcdong
    //  一共含有两种格式 五位数字 或者是 x 加四位十六进制数

    var andSharp = /&#([x|X]{1}[\d|a-f|A-F]{4}|\d{5});/g;
    var result = temp.match(andSharp);

    // no match
    if(!Array.isArray(result)) {
        return temp;
    }

    // reduce
    temp = result.unique().reduce(function(html, code) {
        var buffer = new CharBuffer();
        var charCode = parseInt(code.substr(2));
        buffer.append(charCode);

        var regex = new RegExp(code, "g");
        return html.replace(regex, buffer.toString());
    }, temp);

    return temp;
};
