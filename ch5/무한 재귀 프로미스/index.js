function delay(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds)
    })
}


function leakingLoop() {
    return delay(1)
        .then(() => {
            console.log(`Tick ${Date.now()}`)
            return leakingLoop()
        })
}

function nonLeakingLoop() {
    delay(1)
        .then(() => {
            console.log(`Tick ${Date.now()}`)
            nonLeakingLoop()
        })
}


function nonLeakingLoopWithErrors() {
    return new Promise((resolve, reject) => {
        (function internalLoop() {
            delay(1)
                .then(() => {
                    console.log(`Tick ${Date.now()}`)
                    internalLoop()
                })
                .catch(err => {                             // 애러 처리 가능
                    reject(err)
                })
        })()
    })
}


async function nonLeakingLoopAsync () {
    while (true) {
      await delay(1)
      console.log(`Tick ${Date.now()}`)
    }
  }
  
  async function leakingLoopAsync () {
    await delay(1)
    console.log(`Tick ${Date.now()}`)
    return leakingLoopAsync()                    // 재귀로 인한 메모리 누수
  }


//leakingLoop()

nonLeakingLoop()