import { Readable } from 'stream';
import Chance from 'chance';
import { channel } from 'diagnostics_channel';


const chance = new Chance();

export class RandomStream extends Readable{
    constructor(options){
        super(options);
        this.emittedBytes = 0;
    }

    _read(size){
        const chunk = chance.string({ length : size});
        this.push(chunk, 'utf8');
        this.emittedBytes += chunk.length;
        if(chance.bool({ likelihood : 5})){
            this.push(null);
        }
    }
}

let emittedBytes = 0

const randomStream = new Readable({
  read (size) {
    const chunk = chance.string({ length: size })
    this.push(chunk, 'utf8')
    emittedBytes += chunk.length
    if (chance.bool({ likelihood: 5 })) {
      this.push(null)
    }
  }
})

randomStream
  .on('data', (chunk) => {
    console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`)
  })
  .on('end', () => {
    console.log(`Produced ${emittedBytes} bytes of random data`)
  })


