function delay(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds)
    })
}

delay(1000)
.then(newDate => {
    console.log(newDate)
})



import { randomBytes } from 'crypto'

/**
 * 
 * @param {*} callbackBasedApi  randomBytes 함수
 * @returns 
 * callbackBasedApi(...newArgs)에서 실행된 newArgs 객체에 대해 성공하면 resolve(result) 실행
 */
function promisify (callbackBasedApi) {
  return function promisified (...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
         (err, result) => {
          if (err) {
            return reject(err)
          }

          resolve(result)
        }
      ]
      callbackBasedApi(...newArgs)
    })
  }
}

const randomBytesP = promisify(randomBytes)            
randomBytesP(32)                                        // promisified(...args)  ...args = 32
  .then(buffer => {
    console.log(`Random bytes: ${buffer.toString()}`)
  })