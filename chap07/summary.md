# 리액트에서 폼 다루기

## React에서 폼을 다루기 위한 권장 방법 

일반적인 HTML에서 입력 요소를 다룰 때는 페이지의 DOM이 해당 요소의 값을 DOM 노드에서 관리한다. document.getElementById('email').value 또는 jQuery 메서드를 사용해서 값에 접근할 수 있따. 즉, DOM을 저장소로 사용한다.

React 공식 문서에는 "React 컴포넌트는 초기화 시점은 물론 어느 시점에서든지 뷰의 상태를 표현해야 한다."라고 설명한다. React는 선언형 스타일을 사용하여 UI를 묘사함으로써 모든 것을 단순하게 유지한다. 즉, React는 UI가 결과적으로 어떻게 보여야 할지에 대해 묘사한다. 

전통적인 HTML의 폼 요소는 사용자 입력에 의해 요소의 상태가 변경된다. 그렇지만 React는 UI를 묘사하기 위해 선언형 스타일을 사용하므로 상태를 적절히 반영하려면 입력이 동적이어야 한다.

따라서 컴포넌트 상태를 자바스크립트에서 관리하지 않고, 뷰와 동기화하지 않으면 문제가 나타난다. 내부 상태와 뷰가 다른 경우가 발생할 수 있다. React는 변경된 상태를 알 수 없으므로 온갖 문제와 버그에 직면하게 되고, React의 단순한 철학을 무너뜨린다. 가장 좋은 방법은 React의 render()메서드를 폼 요소의 데이터를 포함한 실제 DOM에 최대한 밀접하게 유지하는 것이다. 

``` 
render() {
    return <input type="text" name="title" value={this.state.title}>
}
```

위와 같이 작성할 경우 React는 사용자가 폼 요소에 무엇을 작성한다는 것을 알 수 없다. 그러므로 다음과 같이 작성해야 한다.

```
render() {
    return <input type="text" name="title" value={this.state.titel} onChange={this.handleChange.bind(this)}> 
}
```

### React에서 폼과 이벤트 정의하기

React는 표준 React DOM 이벤트와 함꼐, 폼 요소를 위한 세 가지 이벤트를 지원한다. 
- onChange : 폼의 입력 요소에 변경이 생기면 발생한다.
- onInput : &lt;textarea&gt;&lt;input&gt; 요소의 값이 변경될 때 발생한다. React 팀은 이 이벤트의 사용을 추천하지 않는다.
- onSubmit: 폼 제출 시 발생한다. 흔히 Enter를 눌렀을때 발생한다.


### 폼 요소 정의하기

HTML은 거의 모든 입력 영역을 네 가지 요소, &lt;input&gt;&lt;textarea&gt;&lt;select&gt;&lt;option&gt;을 사용해서 구현할 수 있다. 

React는 변경 가능한 속성인 value, checked, selected를 두어 폼 요소를 특별하게 다루고 있다. 이 특별한, 변경 가능한 속성은 대화형 속성 이라고 부른다. 

변경할수있는 대화형 속성은 다음과 같다. 폼 요소에 연결한 onChange 같은 이벤트에서 이 속성을 읽을 수 있다. 
- value :  &lt;input&gt;&lt;textarea&gt;&lt;select&gt; 에 적용된다.
- checked : &lt;input&gt;에 type="checkbox" 또는 type="radio"인 경우 적용된다.
- selected : &lt;selected&gt;와 함꼐 &lt;option&gt;을 사용할 때 적용된다.