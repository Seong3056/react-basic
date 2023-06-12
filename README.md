# 리액트 프로젝트 시작하기
1. node.js 설치 (LTS버전)
2. create-react-app 설치(최초 1번만 진행) 
```
$ npm install -g create-react-app
```
3. react 프로젝트 생성
```
$ npx create-react-app 프로젝트 이름
``` 
4. react 프로젝트 실행
```
$ cd 프로젝트 폴드
$ npm start
```

- http://localhost:3000 에서 프론트엔드 서버 실행


<details open>
  <summary>23-06-12 React init</summary>
  - 리액트는 Component로 기본구성된다. 
  - Component는 페이지설계에서 기본단위이며 .js 또는 .jsx와 같은 확장자를 가진다.
  - Component내 다른 Component를 불러올땐 <OtherComponent /> 이와같이 입력하면 자동으로 import한다.
  - 불러온 Component는 <> <OtherComponent /> </> 와 같이 입력하며
    <> </>안에 다른 태그이름을 넣을 수도 있다.
  ```
import React from 'react'

const ClickEvent = () => {
  const greeting = e =>{
    alert('안녕안녕');
  }
  const changeBox = e => {
    const $box = document.querySelector('.box');
    $box.style.backgroundColor = 'skyblue';
    $box.style.width = '200px';
    $box.style.height = '200px';
  }
    return (
     {/*return( ) 괄호안은 jsx영역이며 js를 적용 시킬땐 '{ }' 를 사용하여 작성한다. 
     변수를 입력하고자 할땐 마찬가지로 '{ }' 안에 넣는다.*/}
    <>
        <button id='btn1' onClick={ () => alert('클릭잘했어')}>클릭해봐</button>
        <button id='btn2' onClick={ greeting }>클릭2</button>
        <button id='btn3' onMouseOver={ changeBox }>클릭3</button>
        
        <div className='box'></div>
    </>
  )
}

export default ClickEvent //ClickEvent를 리턴
  ```
  - props는 부모에서 자식으로 값을 객체형태로 전달한다.
  - Const function(pros) 와 같이 작성하면
    props.var1, props.var2로 변수를 불러올수 있다.
</details>