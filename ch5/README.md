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


![23](https://github.com/Ryeolee/Node.js-DesignPartternBibble/assets/106163272/70f7e9b4-8f3b-4412-958b-b38de6c04f1f)




     Promise A가 처리될 때 그것이 이행 또는 거부되어, onFulfilled나 onRejected 콜백을 호출한다.</br>
     콜백의 실행 결과가 프로미스 B를 이행 또는 거부하고 차례로 그 결과가 프로미스 B의 then() 호출 시 </br>
     전달되는 onFulfilled나 onRejected 콜백으로 전파된다.</br>

     프로미스의 중요 특성은 비록 값을 가지고 프로미스를 동기적으로 해결한다 할지라고 적어도 한 번은 onFulfilled나 onRejected 콜백이 비동기적으로 호출된다는 보장을 한다.</br></br>

    <h3>프라미스 API</h3>

    Promise 생성자 ( new Promise((resolve, reject) =>{}))</br>
    인자 </br>
      1. resolve(obj) : 호출될 때 제공된 이행값으로 프로미스를 이행하는 함수</br>
      2. reject(err)  : err 사유와 함께 프라미스를 거부</br>

   <h4>Promise 객체의 정적 메소드</h4> 
    1. Promise.resolve(obj) : 다른 프라미스, thenable 또는 값에서 새로운 프라미스를 생성</br>
    2. Promise.reject(err)  : err를 이유로 거부하는 Promise를 생성</br>
    3. Promise.all(iterable) : 반복 가능한 객체내의 모든 프라미스가 이행되면 이행된 결과값들의 배열을 이행값으로 하여 이행하는 새로운 프라미스를 생성</br>
    (객체 내의 하나라도 거부되면 Promise.all()로 반환된 프라미스는 첫 번째 거부 사유를 가지고 거부될 것이다.</br>
    4. Promise.allSettled(iterable) :  반복 가능한 객체내의 모든 프라미스가 이행되거나 거부될 때까지 기다린 다음 입력된 각각의 Promise에 대한 이행값 또는 거부 사유를 담은 객체의 배열을 반환</br>
    (Promise.all과 차이점은 Promise.allSettled는 프라미스 중 하나가 거부될 때 즉시 거부되지 않고 모든 프라미스가 이행되거나 거부될 때까지 기다린다.)</br>
    5. Promise.race(iterable) : 반복 가능 객체에서 처음으로 결정된 프라미스를 반환</br>
    
   <h4>promise 인스턴스</h4> 

   1. promise.then(onFulfilled, onRejected) : 프라미스 필수 함수</br>
   2. promise.catch(onRejected) : promise.then(undefinded, onRejected)에 대한 편리한 버전 (예외처리)</br>
   3. promise.finally(onFinally) : onFinally 콜백은 입력으로 인자를 수신하지 않으며 여기에서 반환된 값은 무시된다. Finally에서 반환한 프라미스는 현재 프라미스 인스턴스의 이행값 또는 거부 사유로 결정된다.</br>
    
    
 


