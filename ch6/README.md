# Node.js-DesignPatternBibble
node.js 디자인 패턴 바이블 도서 스터디


<h1>Readable 스트림</h1>

non-flowing <br>

스트림에 읽을 수 있는 새로운 데이터가 있다는 것을 나타내는 readable 이벤트에 대해 리스너를 연결하는 작업이 포함됨<br><br>

flowing<br>

데이터 이벤트에 리스너를 연결하는 것입니다.<br>
데이터는 read()를 사용하여 가져오지 않고 대신 도착하자마자 데이터 리스너로 바로 전달<br>