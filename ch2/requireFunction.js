
/**
 * 
 * @param {*} moduleName 해당 모듈이름을 받음 
 * @returns  헤당 모듈의 코드를 내보냄
 * 해당 모듈의 전체 경로를 찾아 id에 삽입
 * 해당 모듈에 대한 캐시가 있는지 확인 후 있다면 그 모듈을 리턴
 * 모듈 틀을 만든 후, 캐시에 저장
 * 모듈 소스 코드를 해당 파일에서 읽어온다
 * 모듈 내용을 호출자에게 반환
 */
function require(moduleName){                     
     
    console.log(`Require invoked for module : ${moduleName}`)
    const id = require.resoleve(moduleName)
    if(require.cache[id]){
        return require.cache[id].exports
    }

    const module = {
        export : {},
        id
    }
    
    require.cache[id] = module
    
    loadModule(id, module, require)
    
    return module.exports
}

require.cache = {}
require.resolve = (moduleName) => {
    // 모듈이름으로 id로 불리게 되는 모듈의 전체경로를 찾아낸다.
}


