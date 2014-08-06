/**
 * Created by XadillaX on 2014/8/5.
 */
var escaper = require("../");

console.log(escaper.escape("¤¥€"));                                                     ///<= &curren;&yen;&euro;
console.log(escaper.unescape("&lt;span&gt;&#29579;&#23612;&#29595;&lt;/span&gt;"));     ///<= <span>王尼玛</span>
console.log(escaper.unescape("&#12501;&#12521;&#12531;&#12489;&#12540;&#12523;"));      ///<= フランドール
console.log(escaper.unescape("(&#x256d;&#xffe3;3&#xffe3;)&#x256d;&#x2661;"));           ///<= (╭￣3￣)╭♡
