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

    // with `&#0000;` or `&#xABCD;`
    // (thanks to mcdong)
    var andSharp = /&#([x|X]{1}[\d|a-f|A-F]+?|\d+?);/g;
    var result = temp.match(andSharp);

    // no match
    if(!Array.isArray(result)) {
        return temp;
    }

    // reduce
    temp = result.unique().reduce(function(html, code) {
        var buffer = new CharBuffer();

        var charCode = (code[2].toUpperCase() === 'X') ?
            parseInt(code.substr(3, code.length - 4), 16) :
            parseInt(code.substr(2));

        buffer.append(charCode);

        var regex = new RegExp(code, "g");
        return html.replace(regex, buffer.toString());
    }, temp);

    return temp;
};
