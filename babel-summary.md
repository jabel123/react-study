## 프로젝트 생성

```
$ mkdir test-babel
$ cd test-babel
$ npm init -y
```

## 패키지 설치
```
$ npm install @babel/core @babel/cli @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react
```
- 바벨을 실행하기 위해서는 @babel/core 패키지를 필수로 설치
- @babel/cli는 커맨드 인터페이스로 바벨을 실행하도록 도와줌
- ES6의 화살표 함수와 템플릿 리터럴을 변환해주는 플러그인 및 JSX 문법 변환 프리셋 패키지 설치

## @babel/cli로 실행
```
$ npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions
```

## 결과 
```
const element = /*#__PURE__*/React.createElement("div", null, "babel test");
const text = "element type is ".concat(element.type);

const add = function (a, b) {
  return a + b;
};
```
- JSX 문법은 createElement 함수 호출로 변환
- 템플릿 리터럴은 문자열의 concat 메서드 호출로 변환
- 화살표 함수는 일반 함수로 변환됨
--- 
## 설정 파일 관리
@babel/cli로도 거의 모든 값을 변환할 수 있지만 변화해야 하는 양이 많은 경우 설정 파일을 따로 만드는 것이 좋음. 바벨 6까지는 .babelrc파일로 설정값을 관리했지만, 바벨7부터는 babel.config.js 파일로 관리하는 것이 추천됨.

## 설정 파일 작성
루트 폴더에 babel.config.js 파일을 만들고 아래와 같이 코드 작성
```
const presets = [`@babel/preset-react`];
const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
];

module.exports = { presets, plugins };
```
## 실행
```
npx babel src/code.js
```
## 파일로 저장
콘솔창에 출력된 결과를 JS 파일로 저장
```
# 파일 단위로 저장
$ npx babel src/code.js --out-file dist.js

# 폴더 단위로 저장
$ npx babel src --out-dir dist
```
---
# Webpack babel-loader로 실행하기
## 설치
웹팩을 이용하기 위한 추가적인 패키지 설치 필요
```
npm install webpack webpack-cli babel-loader
```

## 설정 파일 만들기
루트 폴더에 webpack.config.js 파일 작성
```
const path = require('path')
module.exports = {
    entry: './src/code.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'code.bundle.js',
    },
    module: {
        rules: [{ test: /\.js$/, use: 'babel-loader' }],
    },
    optimization: { minimizer: [] },
};
```
- entry : 웹팩으로 번들링할 파일 지정
- output : 번들링 결과를 dist/code.bundle.js 파일로 저장
- module_rules : 자바스크립트 파일을 babel-loader가 처리하도록 설정 babel-loader는 바벨 설정 파일을 이용하므로 babel.config.js 파일의 내용이 설정값으로 사용됨
- optimization: 웹팩은 기본적으로 자바스크립트 파일을 압축하지만 바벨이 제대로 실행됐는지 확인하기 위해 압축 기능을 잠시 끔

## 실행
```
npx webpack
```
---
# Babel/core
@babel/cli, @babel-loader 모두 @babel/core를 이용해서 바벨 실행

## @babel/core 실행 파일 직접 작성하기
루트 폴더에 runBabel.js 파일생성 후 아래 코드 작성
```
const babel = require("@babel/core");
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf8");

const presets = ["@babel/preset-react"];

const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
];

const { code } = babel.transformSync(source, {
  filename,
  presets,
  plugins,
  configFile: false,
});

console.log(code);
```
- 맨 위에서 @babel/core 모듈을 가져옴
- source: 컴파일할 파일의 내용을 가져옴
- presets, plugins: 바벨 플러그인과 프리셋 설정
- code: transformSync함수를 호출해서 바벨 실행
- configFile: babel.config.js 설정 파일을 사용하지 않도록 함
- console.log(code): 변환된 코드를 콘솔에 출력

---
# 같은 프리셋을 사용하는 두 가지 설정
같은 코드에 대해 다음과 같은 두 가지 설정을 적용한다고 할 떄,
@babel/cli, babel-loader를 이용한다면 바벨을 두 번 실행해야 함
그러나 @babel/core를 사용하면 바벨을 조금 더 효율적으로 실행 가능
```
// 설정 1
const presets = ['@babel/preset-react'];
const plugins = ['@babel/plugin-tranform-template-literals']

// 설정 2
const presets = ['@babel/preset-react'];
const plugins = ['@babel/plugin-tranform-arrow-functions']
```
## Babel 실행 당계
- 파싱(parse) 단계: 입력 코드부터 AST(abstract syntax tree) 생성
- 변환(transform) 단계 : AST를 원하는 형태로 변환
- 생성(generate) 단계 : AST를 코드로 출력

***AST란?***  
*AST는 코드의 구문이 분석된 결과를 담고있는 구조체로서 코드가 같다면 AST 역시 동일하기 때문에 같은 코드에 대한 하나의 AST를 만들어 놓고 이를 재사용 가능*

## AST를 활용해서 효율적으로 바벨 실행하기
루트 프로젝트에 runBabel2.js 파일을 만들고 다음 코드 작성
```
const babel = require("@babel/core");
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf8");

const presets = ["@babel/preset-react"];

// 공통으로 사용할 AST 생성
const { ast } = babel.transformSync(source, {
  filename,
  ast: true,
  code: false,
  presets,
  configFile: false,
});

// 각각의 plugin을 적용한 코드 생성
const { code: code1 } = babel.transformFromAstSync(ast, source, {
  filename,
  plugins: ["@babel/plugin-transform-template-literals"],
  configFile: false,
});

const { code: code2 } = babel.transformFromAstSync(ast, source, {
  filename,
  plugins: ["@babel/plugin-transform-arrow-functions"],
  configFile: false,
});

// 콘솔 출력
console.log("code1:\n", code1);
console.log("code2:\n", code2);
```
---
# 바벨 설정 방법
바벨의 다양한 속성을 사용하면 확장성과 유연성을 고려한 설정 가능

## 바벨 속성
- extends: 다른 설정 파일을 가져와서 확장 가능
- env: 환경별로 다른 설정 적용 가능
- overrides: 파일별로 다른 설정 적용 가능

## 실습 프로젝트 생성
```
$ mkdir test-babel-config
$ cd test-babel-config
$ npm init -y
$ npm install @babel/core @babel/cli @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react babel-preset-minify
```
--- 
# extends 속성으로 다른 설정 파일 가져오기
## 확장 설정 파일 작성
프로젝트 루트 폴더에 common 폴더 생성 후 .babelrc 파일 작성
```
{
  "presets": ["@babel/preset-react"],
  "plugins": [
    [
      "@babel/plugin-transform-template-literals",
      {
        "loose": true
      }
    ]
  ]
}
```
- 플러그인에 옵션을 설정할 때는 배열로 만들어서 두 번째 자리에 옵션 작성
- 템플릿 리터럴 플러그인에 loose 옵션을 주면 concat 메서드 대신 + 연산자 사용

## extens 속성으로 다른 설정을 가져오는 파일 작성
프로젝트 루트에 src 폴더를 만들고 그 아래 example-extends 폴더 생성 그 안에 .babelrc 생성후 아래 코드 작성
```
{
  "extends": "../common/.babelrc",
  "plugins": [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-template-literals"
  ]
}
```
- extends: 다른 파일에 있는 설정을 가져옴
- plugins: 가져온 설정에 플러그인 적용
- @babel/plugin-transform-template-literals 가져온 설정 파일에 같은 플러그인이 존재하는 경우 옵션은 현재 파일의 옵션으로 결정됨, 즉 loose 옵션은 사라짐

## 컴파일할 코드 작성
example-extends 폴더에 code.js파일 작성
```
const element = <div>babel test</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;
```

## 바벨 실행 및 결과
```
$ npx babel src/example-extends/code.js
```

