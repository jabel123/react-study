# React 컴포넌트 라이프사이클 이벤트

## React 컴포넌트 라이프사이클 이벤트 한눈에 살펴보기

React는 라이프사이클 이벤트를 기반으로 컴포넌트의 동작을 제어하고 사용자 정의를 할 수 있다. 

- 마운팅 이벤트 : React 엘리먼트(컴포넌트 클래스의 인스턴스)를 DOM 노드에 추가할 때 발생한다.
- 갱신 이벤트 : 속성이나 상태가 변경되어 React 엘리먼트를 갱신할 떄 발생한다.
- 언마운팅 이벤트 : React 엘리먼트를 DOM에서 제거할 떄 발생한다.

---
## 이벤트 분류

- 마운팅 : React가 이벤트를 한 번만 실행한다.
- 갱신 : React가 이벤트를 여러번 실행한다.
- 어나운팅 : React가 이벤트를 한 번만 실행한다.

라이프사이클 이벤트와 함꼐 constructor()도 포함시켜 컴포넌트의 전체 라이프사이클의 실행 순서를 살펴보면 다음과 같다.

- constructor() : 엘리먼트를 생성하여 기본속성과 상태를 설정할떄 실행
- 마운팅
  - componentWillMound() : DOM에 삽입하기 전에 실행된다.
  - componentDidMount() : DO에 삽입되어 렌더링이 완료된 후 실행된다.
- 갱신
  - componentWillReceiveProps(nextProps) : 컴포넌트가 속성을 받기 직전에 실행된다.
  - shouldComponentUpdate(nextProps, nextState) : 컴포넌트가 갱신되는 조건을 정의해서 재렌더링을 최적화할 수 있다. 불 값을 반환한다.
  - componentWillUpdate(nextProps, nextState) : 컴포넌트가 갱신뙤기 직전에 실행된다.
  - componentDidUpdate(prevProps, prevState) : 컴포넌트가 갱신된 후에 실행된다.
- 언마운팅
  - componentWillUnmount() : 컴포넌트를 DOM에서 제거하기 전에 실행되며, 구독한 이벤트를 제거하거나 다른 정리 작업을 수행할 수 있다. 

this.forceUpdate()를 호출하는 경우에는 컴포넌트 갱신을 강제한다. 

---
## 이벤트 구현

실습코드 참고

---
## 모든 이벤트 실행하기

실습코드 참고

--- 
## 마운트 이벤팅
