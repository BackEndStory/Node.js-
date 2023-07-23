const Logger = require('./logger')

const dbLogger = new Logger('DB')
dbLogger.info('This is an informationa message')
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')

// 단일 진입점을 제공하지만 서브스택 패턴과 비교하면 훨씬 더 많은 모듈의 내부를 노출한다
// 그러나 다른 한편으로는 기능 확장에 있어 훨씬 더 강력할 수 있다.

