# 4장 React 컴포넌트의 상태 객체

React 컴포넌트의 상태 객체를 이용하면 가치 있고 상호작용이 뛰어난 React 애플리케이션을 만들 수 있다. **상태**는 React 컴포넌트에 데이터를 저장하고, 데이터의 변경에 따라 자동으로 뷰를 갱신하도록 하는 개념이다.

## 4.1 React 컴포넌트의 상태란?

React의 상태는 컴포넌트의 변경 가능한 저장소다. 독립적이면서 기능 중심인 UI와 논리의 블록이다. 변경가능하다는 것은 상태 값을 변경할 수 있다는 것이다. 뷰(render())에서 상태를 이용하고, 이 값을 나중에 변경하면 뷰의 표현에 영향을 줄 수 있다. 

React 개발자는 상태 객체를 이용해서 새로운 UI를 생성한다. 컴포넌트 속성이나, 일반적인 변수, 클래스 속성으로는 처리할 수 없는데, 이것들을 현재 컴포넌트 내부에서 변경하더라도 뷰를 자동으로 변경할 수 없기 때문이다. 

## 4.2 상태 객체 다루기 

### 4.2.1 상태 객체에 접근하기

상태 객체는 컴포넌트의 멤버 변수로 this를 통해 접근할 수 있다. 예를 들어 this.state.anem 같은 방식으로 접근한다. 

```
JSX를 사용하기 위해 babel cli를 사용하게 되는데 이에 대한 사용 순서
1. npm init -y
2. npm install @babel/core @babel/cli  @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react
3. npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions
```
