import * as loggerModule from './logger' // 모든 객체를 가져와 해당 이름으로 지정

import { log } from './logger'  // 하나의 객체만 가져옴

import { log, Logger } from './logger' // 하나 이상의 객체를 가져와 사용

// const log = console.log   오류가 걸리므로
import { log as log2 } from './logger'  // 이 방법으로 대체한다.

const log = console.log
log('안녕')
log2('하이')

import MyLogger from './logger'

const logger = new MyLogger('info')
logger.log('Hello')

