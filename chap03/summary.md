# JSX

## 1. JSX의 정의와 장점
JSX는 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 자바 스크립트의 확장으로, 특히 React.createElement() 호출을 반복해야 하는 불편을 해소한다. 

JSX의 장점을 정리해 보면 다음과 같다.
- 개발자 경험 개선
- 팀의 생산성 향상
- 문법 오류와 코드량 감소

JSX 를 자바스크립트로 변환하여 사용하는 과정 

JSX -> 트랜스파일러 -> 자바스크립트 -> 브라우저
JSX를 사용해야 하는 주된 이유는 대부분의 사람들이 React.createElement()가 많은 코드보다 화살괄호(<>)가 있는 코드를 더 편하게 읽기 떄문이다. 

## 2. JSX의 이해

### JSX로 React 엘리먼트 생성하기
```
React.createElement(
    name,
    {key1: value1, key2: value2, ...},
    child1, child2, child3, ..., childN
)
```
이것을 JSX 로 옮기면 다음과 같다.
```
<name key1=value1 key2=value2>
    <child1/>
    <child2/>
    <child3/>
    <child4/>
    <child5/>
    <child6/>
</name>
```


## 3. JSX에서 속성 사용하기

DOM 요소에 속성으로 정보를 넣는 것은 흔히 사용하는 방식이다. 다음 예제 코드는 react-is-awesome과 id속성을 사용하고 있다.
```
<li react-is-awesome="true" id="320"> React is awesome! </li>
```
DOM의 HTML 비표준 속성에 데이터를 저장하는 것은 일반적으로 안티패턴으로 여겨진다. DOM에서 데이터를 가져오는 것은 메모리상의 가상 저장소에서 데이터를 가져오는 것보다 느리다. 

JSX를 사용할 때 데이터를 반드시 HTML 요소의 속성으로 저장해야 하는 경우에는 data-* 속성을 사용한다. 
```
<li data-react-is-awesome="true">React is awesome!</li>
```

확실히, 사용자 지정 컴포넌트 클래스에는 내장 렌더러가 없고, 표준 HTML 요소나 다른 사용자 지정 엘리먼트에 의존하므로 데이터를 다루기 위해 data-* 속성을 사용할 필요는 없다. this.props를 통해서 입력한 모든 속성에 접근할 수 있기 때문이다.

```
class HelloWord extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello ' + this.props.frameworkName + ' world!'
        )
    }
}
```
만약 위의 코드를 jsx로 구현하여 속성을 전달하려면 어떻게 해야할까?  
JSX에서는 이에대한 해결책으로 생략 부호(...)처럼 생긴 펼침 연산자를 사용할 수 있다.

```
class HelloWorld extends React.Component {
    render() {
        
        return <h1> {...this.props}>Hello {this.props.frameworkName} world!!! </h1>
    }
}

ReactDOM.render(
    <div>
        <HelloWorld
            id='emeber'
            frameworkName='Ember.js'
            title='Aframework for creating ambitious web applications.'/>,
        <HelloWorld
            id='backbone'
            frameworkName='backbone.js'
            title='Aframework for creating ambitious web applications.'/>,
        <HelloWorld
            id='emeber'
            frameworkName='angular.js'
            title='Aframework for creating ambitious web applications.'/>
    </div>
    , document.getElementById('content')
```

## 4 React 컴포넌트 메서드 생성하기

React 컴포넌트에 애플리케이션을 위한 메서드를 자유롭게 추가할 수 있다. React 컴포넌트가 클래스이기 때문이다. 

```
class Content extends React.Component
{
    getUrl() {
        return 'http://webapplog.com'
    }
    render() {
        ...
    }
}
```

## 5 JSX의 if/else 처리
동적 변수를 렌더링했던 것과 유사하게, 개발자는 if/else 조건의 결과에 따라 컴포넌트가 뷰를 변경할 수 있도록 작성해야 하는 경우도 있따. 먼저 컴포넌트 클래스에 조건에 따라 다른 링크 엘리멘트를 렌더링 하는 간닪나 예제를 본다.

```
render() {
    if (user.session)
        return React.createElement('a', {href: '/logout'}, 'Logout')
    else
        return React.createElement('a', {href: '/login'}, 'Login')
}
```

이와 비슷한 방법으로 JSX를 사용하면 다ㅡㅇㅁ과 같다.
```
render() {
    if (this.props.user.session)
        return <a href="/logout">Logout</a>
    else
        return <a href="/login">Login</a>
}
```

선호하는 방식
```
render(){
    let sessionFlag = this.props.user.session
    return <div>
        <a href={(sessionFlag) ? '/logout' : '/login'}>
            {(sessionFlag) ? 'Logout' : 'Login'}
        </a>
    </div>
}

```

## 6 JSX의 주석 작성방법

```
let content = (
    <div>
        {/* 표준 자바스크립트의 주석과 같으나 {} 감싸주는게 다르다*/}
    </div>
)
