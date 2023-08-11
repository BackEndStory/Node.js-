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


//   leakingLoopAsync 함수는 재귀적으로 자신을 호출하고 있습니다. 이 재귀 호출은 await delay(1)로 인해 프라미스의 해결을 기다린 후에 수행됩니다. 그러나 재귀 호출을 반환할 때 기존 함수 스코프가 스택에 쌓이게 되므로, 매 호출마다 새로운 스택 프레임이 생성되고 결국 메모리가 누수될 가능성이 있습니다.

// 반면에 nonLeakingLoopAsync 함수는 무한 루프 내에서 await delay(1)을 사용하고 있습니다. 이 경우 await 키워드로 프라미스의 해결을 기다리면서도 현재 함수 스코프는 중단되고 이벤트 루프로 돌아갑니다. 따라서 새로운 루프 반복이 시작될 때 이전 반복의 스택 프레임은 이미 해제되어있고 메모리 누수가 발생하지 않습니다.


for (let i = 0; i < 1e6; i++) {
    leakingLoop()
    nonLeakingLoop()
    nonLeakingLoopWithErrors()
    nonLeakingLoopAsync()
    leakingLoopAsync()
  }