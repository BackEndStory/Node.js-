readFIle('foo.txt', 'utf8', (err,data)=>{
    if(err){
        handleError(err)
    }else{
        processData(data)
    }
})

// 콜백은 맨 마지막에 추가한다.
// 콜백 함수 매개변수에서 애러는 맨 처음에 넣는다.



import { readFIle } from 'fs'

/**
 * 
 * @param {*} filename 
 * @param {*} callback 
 * 오류 전파
 */
function readJsn(filename, callback){
    readFIle(filename, 'utf8', (err,data)=>{  // 오류가 없을 경우 null, undefined로 err인자가 나옴.
        let parsed
        if(err){
            return callback(err)
        }

        try{
            parsed = JSON.parse(data)
        }catch(err){
            return callback(err)
        }
        callback(null, parsed)
    })
}