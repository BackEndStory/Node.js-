import { Transform } from 'stream'

export class ReplaceStream extends Transform {
  constructor (searchStr, replaceStr, options) {
    super({ ...options })
    this.searchStr = searchStr
    this.replaceStr = replaceStr
    this.tail = ''
  }

  _transform (chunk, encoding, callback) {
    const pieces = (this.tail + chunk).split(this.searchStr)
   // console.log(pieces);
    const lastPiece = pieces[pieces.length - 1]
   // console.log(lastPiece);
    const tailLen = this.searchStr.length - 1
    //console.log(tailLen);
    this.tail = lastPiece.slice(-tailLen)
    //console.log(this.tail);
    pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen)
    console.log(pieces[pieces.length - 1]);

    //console.log(lastPiece);
    // console.log(tailLen);

    this.push(pieces.join(this.replaceStr))
    callback()
  }

  _flush (callback) {
    this.push(this.tail)
    callback()
  }
}



// import { Transform } from 'stream'

// const searchStr = 'World'
// const replaceStr = 'Node.js'
// let tail = ''

// const replaceStream = new Transform({
//   defaultEncoding: 'utf8',

//   transform (chunk, encoding, cb) {
//     const pieces = (tail + chunk).split(searchStr)
//     const lastPiece = pieces[pieces.length - 1]
//     const tailLen = searchStr.length - 1
//     tail = lastPiece.slice(-tailLen)
//     pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen)
//     this.push(pieces.join(replaceStr))
//     cb()
//   },

//   flush (cb) {
//     this.push(tail)
//     cb()
//   }
// })

// replaceStream.on('data', chunk => console.log(chunk.toString()))
// replaceStream.write('Hello W')
// replaceStream.write('orld!')
// replaceStream.end()