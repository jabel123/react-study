## React에서 DOM 이벤트 다루기

JSX로 작성한 엘리먼트에 속성 값으로 이벤트 핸들러(함수 정의)를 정의한다(JSX를 사용하지 않고 createElement()를 이용해서 일반적인 자바스크립트로 작성한 경우에는 속성으로 넘겨줄 수 있다). 속성으로 사용하는 이벤트 이름은 표준 W3C DOM 이벤트를 onClick, onMouseOver 처럼 카멜표기법으로 처리한다.

다음 예제 코드는 React에서 사용자가 버튼을 클릭했을 때 실행할 이벤트 리스너를 정의하고 있다. 이벤트 리스너에서 this를 콘솔에 푯하도록 했다. 여기서 event객체는 내장 DOM 이벤트 객체를 개선한 것으로, 합성 이벤트(SyntheticEvent)라고 부른다. 

```
<button onClick={(function(event){
    console.log(this, event)
}).bind(this)}
    Save
</button>
```

bind()를 이용하면 이벤트 핸들러 함수가 클래스인 인스턴스인 React엘리먼트에 대한 참조를 유지할 수 있다. 만약 바인딩하지 않으면 use strict를 선언한 상태에서 this는 null이 된다. 다음 경우에는 bind(this)로 바인딩하지 않는다.
- this를 이용해서 해당 클래스를 차모할 필요가 없을 때
- ES6+ 클래스 대신 예전 방식인 React.createClass()를 사용할 때, 이때는 createClass()가 자동으로 바인딩한다.
- 화살표 함수(() => {})를 사용할 때

### React버전 15에서 지원하는 DOM 이벤트
|이벤트 분류|React가 지원하는 이벤트|
|---|---|
|마우스 이벤트| onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,<br> onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, <br>onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, <br>onMouseOut, onMouseOver, onMouseUp
|키보드 이벤트| onKeyDown, onKeyPress, onKeyUp|
|클립보드 이벤트| onCopy, onCut, onPaste|
|폼 이벤트|onChange, onInput, onSubmit, onInvalid|
|포커스 이벤트|onFocus, onBlur|
|터치 이벤트|onTouchCancel, onTouchEnd, onTouchMove, onTouchStart|
|UI 이벤트|onScroll|
|휠 이벤트|onWheel|
|영역선택 이벤트|onSelect|
|이미지 이벤트|onLoad, onError|
|애니메이션 이벤트|onAnimationStart, onAnimationEnd, onAnimationIteration|
|트랜지션 이벤트|onTransition|
