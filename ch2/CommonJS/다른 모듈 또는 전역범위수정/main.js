require('./patcher')
const logger = require('./logger')
logger.customMesssage();

/*
 모듈이 전역 범위의 다른 모듈이나 객체를 수정할 수 있다고 말했다. 이를 몽키 패치라고 한다.
 위 기술은 위험한 기술이다
 => 핵심은 전역 네임스페이스나 다른 모듈을 수정하는 모듈을 갖는 데에는 부작용이 있다
*/