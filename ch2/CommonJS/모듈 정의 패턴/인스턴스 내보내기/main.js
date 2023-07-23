const logger = require('./logger')

logger.log('This is an informationa message')

/*
 모듈이 캐시되기 때문에 logger모듈을 필요로하는 모든 모듈은 실제로 항상 동일한 객체의 인스턴스를 받아 상태를 공유한다.
 => 싱클톤을 만드는 것과 비슷하다
 => 인스턴스의 고유성을 보장하지는 않는다
 
*/