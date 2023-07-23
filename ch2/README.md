# Node.js-DesignPatternBibble
node.js 디자인 패턴 바이블 도서 스터디

<h2>CommonJS 순환 종속성</h2>


```
// Main.js
const a = require('./a');
const b = require('./b');
console.log('a->', JSON.stringify(a, null, 2))
console.log('b->', JSON.stringify(b, null, 2))
```

```
// a.js
exports.loaded = false
const b = require('./b');
module.exports = {
   b,
   loaded : true
}
```

```
// b.js
exports.loaded = false
const b = require('./a');
module.exports = {
   a,
   loaded : true
}
```

![KakaoTalk_Photo_2023-07-23-21-23-38 001](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/6dc72f20-d54d-45df-8414-6295cf03effb)

![KakaoTalk_Photo_2023-07-23-21-23-39 002](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/3fee6ba7-977b-4c51-b784-7e822b1455c6)

위 그림 처럼 CommonJS를 사용할 경우 종속성으로 인해 어떤 js파일이 먼저 require()되는 지에 따라 어떤 파일이 불완전한 버전을 받게된 다는 것을 알 수 있다.





