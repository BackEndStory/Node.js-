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



<h2>ESM의 순환 종속성</h2>


```
// main.js
import * as a from './a.js'
import * as b from './b.js'
console.log('a->', a)
console.log('b->', b)
```

```
// a.js
import * as bModule from './b.js'
export let loaded = false
export const b = bModule
loaded = true
```

```
// b.js
import * as aModule from './a.js'
export let loaded = false
export const a = bModule
loaded = true
```
![KakaoTalk_20230725_163852693_04](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/f8c37273-900a-41f3-8d4b-aac030be2e3f)


![KakaoTalk_20230725_163852693_03](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/2e7edebf-f7d0-4d65-9c05-08cf4108fe27)


![KakaoTalk_20230725_163852693_02](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/15b05fcd-524d-4068-8052-57f29f397ff4)


![KakaoTalk_20230725_163852693_01](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/d72b9115-7ff1-4e32-bcae-1622b5dc46e5)


![KakaoTalk_20230725_163852693](https://github.com/BackEndStory/Node.js-DesignPartternBibble/assets/106163272/e857b685-b21a-406a-8f27-b9e648086818)

임포트된 모든 모듈들은 참조로 추적되고 우리는 순환 종속성이 존재하는 상황에서도 모든 모듈이 다른 모듈의 최신 상태를 갖고 있음을 확신할 수있다.


