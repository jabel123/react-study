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
---

## React 합성 이벤트 객체 다루기

브라우저에 따라 W3C 명세를 다르게 구현할 수 있다. DOM 이벤트를 다룰 때, 이벤트 핸들렂에 전달되는 이벤트 객체에 다른 프로퍼티나 메서드가 있을 수도 있다. 

브라우저 간의 차이로 인해 이벤트를 처리하는 코드를 작성할 때 크로스 브라우징 문제를 경험할 수 있다. 예를 들어 IE에서 대상 요소를 가져오려면 event.srcElement에 접근하지만, Chrome, Safari, Firefox 브라우저에서는 event.target으로 접근한다. 

React의 해결책은 브라우저 내장 이벤트를 감샀는 것이다. 웹 페이지를 실행하는 브라우저의 구현에 관계없이 이벤트가 W3C 명세를 따르도록 만들었다. 내부적으로 React는 합성 이벤트(SyntheticEvent)를 위한 특별한 클래스를 사용한다. Synthetic 클래스의 인스턴스를 이벤트 핸들러에 전달하는 것이다. 예를 들어 합성 이벤트 객체에 접근하려면 다음 예제 코드처럼 이벤트 핸들러 함수에 인자로 event를 추가할 수 있다.

```
class Mouse extends React.Component{
    render() {
        return <div>
            <div
                style={{style: '1px solid red'}}
                onMouseOVer={((event)=>{
                    console.log('mouse is over with event')
                    console.dir(event)
                }).bind(this)}
            >
        </div>
    }
}
```
이벤트의 프로퍼티와 메서드는 stopPropagation(), preventDefault(), target, currentTarget처럼 대부분의 브라우저 내장 이벤트와 같다. 내장 프로퍼티나 메서드를 찾을 수 없을 떄는 nativeEvent를 통해서 브라우저의 내장 이벤트에 접근할 수 있다.

React 버전 15의 ㅎ바성 이벤트 인터페이스에 포함되어 있는 몇 가지 프로퍼티와 메서드를 살펴보면 다음과 같다.
- currentTarget: 이벤트를 캡처한 요소의 DOMEventTarget(대상 요소 또는 부모 요소일 수 있다.)
- target: DOMEventTarget, 이벤트가 발생한 요소
- nativeEvent: DOMEvent, 브라우저 내장 이벤트 객체
- preventDefault(): 링크나 폼 전송 버튼처럼 기본 동작을 방지하는 메서드
- isDefaultPrevented(): 기본 동작이 방지되었을 때 실행하면 true를 반환한다.
- stopPropagation(): 이벤트 전파 중단
- isPropagationStopped(): 이벤트 전파가 중단되었을 때 실행하면 true를 반환한다.
- type: 태그열 문자열
- presist(): 합성 이벤트를 이벤트 풀에서 꺼낸 후 사용자 코드에서 이벤트에 대한 참조를 유지할 수 있도록 한다.
- isPersistent(): 합성 이벤트를 이벤트 풀에서 꺼낸 경우 실행하면 true를 반환한다. 

대부분의 경우 UI를 만들 떄는 이벤트 캡처뿐만 아니라 입력상자의 텍스트가 필요한 경우도 있는데, event.target.value로 접근한다. 

--- 
## 이벤트와 상태 이용하기 

이벤트와 함꼐 상태를 사용하여 이벤트를 처리하고 컴포넌트의 상태를 변경할 수 있다면 사용자 조작과 상호작용하는 UI를 만들 수 있을 것이다. 모든 이벤트를 캡처해서 이벤트에 따라 뷰와 애플리케이션 로직을 변경할 수 있으므로 재미도 있을 것이다. 또한, 외부 코드나 표현이 불필요하므로 더욱 독립적인 컴포넌트를 만들 수 있다. 

---
## 이벤트 핸들러를 속성으로 전달하기 

다음과 같은 경우를 생각해본다. 상태비저장 컴포넌트로 만든 버튼이 있다. 이 버튼 컴포넌트는 스타일만 입혀져 있다. 어떻게 하면 이 버튼에 이벤트 리스너를 연결해서 실행시킬 수 있을까?

잠시 속성으로 다시 돌아가보자. 속성은 변경이 불가능하며, 부모 컴포넌트에서 자식으로 전달된다. 자바스크립트에서는 함수가 일급 객체이므로, 자식 엘리먼트의 속성으로 함수를 전달해서 이벤트 핸들러로 사용할 수 있다.

상태비저장 컴포넌트에서 발생하는 이벤트를 처리하는 방법은 이벤트 핸들러를 상태비저장 컴포넌트의 속성으로 전달하고 전달한 이벤트 핸들러 함수를 상태비저장 컴포넌트에서도 실행하도록 하는 것이다. 예를들어 앞에서 살펴본 예제의 기능을 둘로 분리한여 ClickCounterButton 컴포넌트와 Content 컴포넌트를 만들어보자. ClickCOunterButton은 둔ㄷ한 컴포넌트이고, Content는 영리한 컴포넌트다. 

---

## 컴포넌트 간의 데이터 교환

이전 예제에서 클릭 이벤트 핸들러는 부모 컴포넌트에 작성했다. 이벤트 핸들러를 자식 컴포넌트에 둘 수도 있지만, 부모 컴포넌트에 이벤트 핸들러를 두면 자식 컴포넌트들과 정보를 교환할 수 있다. 이전에도 버튼을 예제로 사용하는데, 대신 render() 메서드에서 카운터값을 제거해보다. 컴포넌트는 단일 지향적이며 세분화된 표현의 일부라는 점을 기억하고 있을 것이다. 카운터를 새로운 컴포넌트 Counter에서 처리하자. 이렇게 해서 컴포넌트를 총 세개, 즉 ClickCounterBUtton, Counter, Counter를 생성한다. 

---

# React가 지원하지 않는 DOM 이벤트 처리하기

resize처럼 미지원 이벤트에 연결하려면 React컴포넌트의 라이프사이클 이벤트를 사용한다. componentDidMount()에서 window의 resize 이벤트 리스너를 추가하고, 같은 이벤트 리스너를 componentWillUnmount()에서 제거해서 컴포넌트가 DOM에서 제거될 떄 이벤트 리스너도 제거된다. 

컴포넌트를 제거한 후에 이벤트 리스너를 방치하는 것은 메모리 누수를 일으켜서, 갑자기 애플리케이션이 중단될 수도 있다.


# 요약

- onClick은 마우스와 트랙패드의 클릭을 캡쳐한다.
- JSX 문법으로 이벤트 리스너를 추가할 때는 &lt; a onNAME={METHOD} &gt;   로 작성한다.
- constructor() 또는 JSX를 이용해 bind()로 이벤트 핸들러에 this를 바인딩해서 컴포넌트 클래스의 인스턴스에 접근할 수 있따.
- componentDidMount()는 브라우저에서만 실행된다. componentWillMount()는 브라우저와 서버 측 렌더링에서 모두 실행된다.
- React는 합성 이벤트 객체를 제공함으로써 거의 대부분의 표준 HTML DOM 지원한다. 
- React를 다른 프레임워크와 통합하거나 React가 지원하지 않는 이벤트를 처리하기 위해 componentDidMOunt()와 componentWillUnmount()를 사용할 수 있다. 