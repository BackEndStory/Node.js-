import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './util.js'


export function spider(url, nesting, cb){
    const filename = urlToFilename(url)
    fs.readFile(filename,'utf8', (err, fileContent) => {
        if(err){
           if(err.code != 'ENOENT'){
            return cb(err)
           }
           return download(url, filename, (err, requestContent) => {
            if(err){
                return cb(err)
            }
            spiderLinks(url, requestContent, nesting, cb)
          
        })
        }
    spiderLinks(url, fileContent, nesting, cb)
   })
}

function spiderLinks (currentUrl, body, nesting, cb) {
    if (nesting === 0) {
      // Remember Zalgo?
      return process.nextTick(cb)
    }
  
    const links = getPageLinks(currentUrl, body) 
    if (links.length === 0) {
      return process.nextTick(cb)
    }

    let complete = 0
    let hasErrors = false

    function done(err){
      if(err){
        hasErrors = true
        return cb(err)
      }
      if(++complete === links.length && !hasErrors){
        return cb()
      }
    }

    links.forEach(link => spider(link, nesting - 1, done))
  
   
  }
