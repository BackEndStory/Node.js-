import { promises as fsPromises} from 'fs'
import { dirname } from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import {urlToFilename, getPageLinks} from './util.js'
import { promisify } from 'util'


const mkdirpPromises = promisify(mkdirp)

function download(url, filename){
    console.log(`Downloading ${url}`)
    let content
    return superagent.get(url)
    .then((res) => {
        content = res.text
        return mkdirpPromises(dirname(filename))
    })
    .then(()=>
        fsPromises.writeFile(filename, content)

    )
    .then(()=>{
        console.log(`Downloaded and saved : ${url}`)
        return content
    })  
}


/**
 * 병렬 실행
 * @param {*} currentUrl 
 * @param {*} content 
 * @param {*} nesting 
 * @returns 
 */
function spiderLinks (currentUrl, content, nesting) {
    if (nesting === 0) {
      return Promise.resolve()
    }
  
    const links = getPageLinks(currentUrl, content)
    const promises = links
      .map(link => spider(link, nesting - 1))             // 각 링크별로 spider함수를 호출하는 코드를 promises 배열에 저장
  
    return Promise.all(promises)                          // 호출 형태의 배열을 동시에 수행
  }




export function spider (url, nesting) {
    const filename = urlToFilename(url)
    return fsPromises.readFile(filename, 'utf8')
      .catch((err) => {
        if (err.code !== 'ENOENT') {
          throw err
        }
  
        return download(url, filename)
      })
      .then(content => spiderLinks(url, content, nesting))
  }