True Html Escape
================

True module to escape and unescape html, including some unicode unescaping like `&#12345;` that other escaping modules don't include.

> Thanks to the base module [node-escapist](https://github.com/vpukhanov/node-escapist).

Installation
----------------

From npm:

```sh
$ npm install true-html-escape
```

From repo:

```sh
git clone https://github.com/XadillaX/true-html-escape.git
```

By [ZIP](https://github.com/XadillaX/true-html-escape/archive/master.zip).

Usage
----------------

```javascript
var escaper = require("true-html-escape");

escaper.escape("¤¥€");                                                  ///<= &curren;&yen;&euro;
escaper.unescape("&lt;span&gt;&#29579;&#23612;&#29595;&lt;/span&gt;");  ///<= <span>王尼玛</span>
escaper.unescape("&#12501;&#12521;&#12531;&#12489;&#12540;&#12523;");   ///<= フランドール
escaper.unescape("(&#x256d;&#xffe3;3&#xffe3;)&#x256d;&#x2661;")         ///<= (╭￣3￣)╭♡
```

> 所以说这货为了反转义一些非常恶心的 Unicode 转义编码，而 [npm](https://www.npmjs.org/search?q=escape%20html) 貌似找不到。

Contribute
----------------

You're welcome to improve this module.

Please contact me or just push request.

Thanks.
