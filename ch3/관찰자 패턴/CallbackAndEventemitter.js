const eventEmitter = glob(pattern, [options], callback)   // glob 함수 안에는 emit()가 있다.

import glob from 'glob'

glob('data/*.txt',                                       // 콜백과 관찰자를 통합한 예시
    (err,files) => {
        if(err){
            return console.error(err)
        }
        console.log(`All files found : ${JSON.stringify(files)}`)
    })
    .on('match', match => console.log(`Match found : ${match}`))