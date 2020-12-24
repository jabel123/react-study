# 확장성을 고려한 React컴포넌트

다른 개발자가 만든 컴포넌트를 사용할 떄 속성을 제대로 전달했는지 어떻게 알 수 있을까? 다른 컴포넌트에서도 공통적으로 사용할 약간의 기능을 기존 컴포넌트에도 적용하려면 어떻게 해야 할까? 이는 개발 확장성의 문제다. React에는 확장성을 고려할 떄 도움이 되는 기능과 패턴이 있다.

--- 
## 컴포넌트의 기본 속성

예를 들어 행의 수, 언어, 현재날짜를 필수 속성으로 하는 Datepicker 컴포넌트를 개발한다고 가정해본다.
```
<Datepicker currentDate={Date()} localse="US" rows={4}/>
```
만약 새로운 동료가 이 컴포넌트를 사용하면서 필수 속성인 currentDate를 누락한다면 어떻게 해야 할까? 달력이 몇 행인지 지정하면서 숫자 4대신 문자열 "4"를 입력했다면???

자바스크립트가 느슨한 타입 언어이므로 이러한 광경은 자주 볼 수 있따. 다행히 React는 속성의 기본값을 설정할 수 있는 기능으로 defaultProps를 정적 클래스 속성으로 추가할 수 있다.  예를들어 앞서 이예기한 Datepicker 컴포넌트 정의에서도 defaultProps를 정적 클래스 속성으로 추가할 수 있다.

```
class Datepicker extends React.Component { 
    ...
}
Datepicker.defaultProps = {
    currentDate: Date(), 
    rows: 4,
    locale: 'US'
}
````

---
## React 속성 타입과 유효성 검사

React컴포넌트 클래스에 propsType 정적 속성을 이용하면 속성 타입을 설정할 수 있다. 속성 타입 기능은 자료형을 강제하는 대신 경고를 보여준다. 개발 모드에서는 속성 타입이 일치하지 않으면 콘솔에서 경고 메시지를 확인할 수 있다. 

prop-types를 HTML파일에 추가해야 한다. 
```
<!-- development version -->
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
 
<!-- production version -->
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
```
리액트 버전 15.4또는 이전 버전을 사용하는 경우에는 React.PropTypes로 React에 포함되어 있으므로 prop-types를 추가할 필요가 없다. 

---
## 자식 엘리먼트 렌더링

가상의 React 프로젝트를 다시 진행해보자. Datepicker 컴포넌트는 훌륭하게 개선되어 누락되거나 잘못된 속성이 있으면 경고를 보여주는 수준이 되었으므로, 이번에는 자식 컴포넌트를 얼마든지 추가할 수 있는 범용 컴포넌트를 생성하는 경우를 살펴보자. 다음은 블로그 글에서 사용되는 Content 컴포넌트로 제목과 단락을 포함할 수 있다.
```
<Content>
    <h1>React.js</h1>
    <p>Rocks</p>
</Content>
```
다음은 이미지를 사용하는 경우이다.
```
<Content>
    <img src="fdfa.jpg"/>
</Content>
```
제시한 두 가지 글은 모두 Content를 사용하지만 서로 다른 자식을 전달한다. 자식으로 전달하면 무엇이든 렌더링할 수 있는 훌륭한 기능이 있다면 어떨까?? 
```
class Content extends React.Component { 
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}
```
this.props.children을 사용하면 유연하고 강력하며 범용적인 컴포넌트를 생성하여 얼마든지 자식을 추가할 수 있다.

children 속성의 흥미로운 점은 자식 엘리먼트가 하나이상 있는 경우에 배열이 된다는 것이다. 다음과 같이 개별 엘리먼트에 접근할 수 있따.
```
{this.props.children[0]}
{this.props.children[1]}
```

이와 같은 방법으로 자식에 접근할 때는 주의가 필요하다. 자식 엘리먼트가 하나뿐이면 this.props.children은 배열이 아니다. 문자열인 자식 엘리먼트가 하남나 있을때 this.props.children.length를 사용하면 문자열의 수를 반환하므로 버그로 이어질 수 있다. 대신에 React.Children.count(this.props.children)을 사용하면 자식 엘리먼트의 수를 정확하게 확인할 수 있다. 
다음과 같은 기능도 있으니 참고를 한다.
- React.Children.map()
- React.Children.forEach()
- React.Children.toArray()
