// ESM은 export 한 단어만 사용한다.

export function log(message){
    console.log(message)
}

export const DEFAULT_LEVEL = 'info'

export const LEVELS = {
    error : 0,
    debug : 1,
    info : 2,
    data : 3,
    verbose : 5
}

export default class Logger{      // commonJS에서 module.exports = () =>{} 와 같은 것
    constructor(name){
        this.name = name
    }

    log(message){
        console.log(`${this.name} : ${message}`)
    }
}