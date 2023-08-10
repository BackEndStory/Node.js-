async function playingWithDelays(){
    console.log('Delaying ', new Date())
    const dateAfterOneSecond = await delay(1000)
    console.log(dateAfterOneSecond)
    const dateAgterThreeSeconds = await delay(3000)
    console.log(dateAgterThreeSeconds)

    return 'done'
}

async function playingWithErrors(throwSyncError){
    try{
        if(throwSyncError){
            throw new Error('This is a error')
        }
        await delayError(1000)

    }catch(err){
        console.error(`we have an error ${err.message}`)

    }finally{
        console.log('Done')
    }
}




async function errorCaught () {
    try {
      return  delayError(1000)
    } catch (err) {
      console.error('Error caught by the async function: ' +
        err.message)
    }
  }
  





function delay(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds)
    })
}


function delayError(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Error ${milliseconds}`))
        }, milliseconds)
    })
}

// playingWithDelays().then(result => {
//     console.log(`fter 4 seconds : ${result}`)
// })

//playingWithErrors(false)



errorCaught()
.catch(err => console.error('Error caught by the caller: ' +
  err.message))