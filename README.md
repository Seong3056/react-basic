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
$ cd 프로젝트 폴더
$ npm start
```

- http://localhost:3000 에서 프론트엔드 서버 실행

# git clone 시 주의사항

명령을 터미널에서 실행하여 라이브러리 설치

```
$ npm install
```

# 학습 내용

<details>
  <summary>23-06-12 React init</summary>
  
  - 리액트는 Component로 기본구성된다. <br>
  - Component는 페이지설계에서 기본단위이며 .js 또는 .jsx와 같은 확장자를 가진다. <br>
   - Component내 다른 Component를 불러올땐 입력하면 자동으로 import한다. <br>
   - 불러온 Component는 <> <<OtherComponent >/> </> 와 같이 입력하며 <br>
    <> </>안에 다른 태그이름을 넣을 수도 있다. <br>

- props는 부모에서 자식으로 값을 객체형태로 전달한다.
- Const function(pros) 와 같이 작성하면
props.var1, props.var2로 변수를 불러올수 있다.
</details>
<details>
  <summary>23-06-12 React init</summary>

- useState useEffect
</details>
