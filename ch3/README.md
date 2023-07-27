# Node.js-DesignPatternBibble
node.js 디자인 패턴 바이블 도서 스터디


❌콜백 함수라고 해서 무조건 비동기는 아니다 ex) map함수 <br>

<h1> 지연 실행 </h1>

동기를 비동기로 처리하기<br>

```
function inconsist(filename, cb){
  if(cache.has(filename)){
   cb(cache.get(filename))}
else{
readFile(filename,'utf8',(err,data) =>{
cache.set(filename,data)
})
}

```
위 함수를<br>
process.nextTick(()=> callback(cache...)) <br>
or<br>
setImmediate() 사용<br>

둘의 차이점은 <br>
nextTick()은 백그라운드이후에 바로 실행 1순위가 된다. 하지만 재귀함수 실행일 경우 기아가 올 수 있다.<br>

setImmediate()는 태스크 큐에 들어간다.<br>

<h1> 관찰자 패턴 </h1>
=> 특정 이벤트가 일어났을 때, 확인 하기 위해 관찰자를 붙임<br>

(관찰자 함수 이미지)<br>

![Alt text](asdf.jpg)


관찰자 패턴은 콜백 패턴에 관찰자(Observer)를 추가한 디자인 패턴입니다.<br>
콜백 패턴은 비동기 작업을 처리하기 위해 콜백 함수를 사용하는 패턴이고, <br>
관찰자 패턴은 객체 간의 상태 변화를 감지하여 이벤트 기반의 비동기 처리를 위해 콜백 함수를 등록하는 패턴입니다.<br>

따라서 관찰자 패턴은 콜백 패턴의 확장이라고 볼 수 있습니다. <br>
콜백 패턴은 단일 비동기 작업을 처리하는데 사용되며, <br>

<strong>비동기 작업의 결과를 콜백 함수로 전달받아 처리합니다.</strong> <br>
하지만 <strong>관찰자 패턴은 비동기 작업을 처리하면서 동시에 이벤트를 통해 여러 객체 간의 상태 변화를 감지하여 처리합니다.</strong><br>



