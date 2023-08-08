# Node.js-DesignPatternBibble
node.js 디자인 패턴 바이블 도서 스터디


 <h1>Promise</h1>

프로미스 용어 : </br>
      대기 중 : 비동기 작업이 완료되지 않았을 떄</br>
      이행됨 : 작업이 성공적으로 끝났을 때</br>
      거부됨 : 작업이 에러와 함께 종료 됐을 때</br>
      결정된 : 이행 or 거부</br>

      ex) promise.then(inFulfilled, onRejected)</br></br>

      ``` 
      asyncOperation(arg, (err,result) =>{
        if(err){

        }
        // 결과 처리
      })


      asyncOperationPromise(arg)
      .then(result1 => {
        return asyncOperationPromise(arg2)
      })
      .then(result2 => {
        return 'done
      })
      .then(undefined, err => {

      })
      ```

      ※ 프로미스 예시</br>
      => onFulfilled나 onRejected가 없을 시</br>
      이행 값 또는 거부 사유는 자동으로 체인 내의 다음 프로미스로 전달됨.</br></br>



      ※ onFulfilled나 onRejected가 있을 시</br>
        - x가 값이면 x를 가지고 이행한다.
        - x가 프로미스라면 프로미스 x의 이행값으로 가지고 이행한다.
        - x가 프로미스라면 프로미스 x의 거부 사유를 최종적인 거부 사유로 하여 거부한다.





     Promise A가 처리될 때 그것이 이행 또는 거부되어, onFulfilled나 onRejected 콜백을 호출한다.</br>
     콜백의 실행 결과가 프로미스 B를 이행 또는 거부하고 차례로 그 결과가 프로미스 B의 then() 호출 시 </br>
     전달되는 onFulfilled나 onRejected 콜백으로 전파된다.</br>

     프로미스의 중요 특성은 비록 값을 가지고 프로미스를 동기적으로 해결한다 할지라고 적어도 한 번은 onFulfilled나 onRejected 콜백이 비동기적으로 호출된다는 보장을 한다.
    



