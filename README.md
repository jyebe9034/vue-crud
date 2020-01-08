# SpringBoot-Vue.js

#### 연동하기
1. Spring boot 프로젝트의 루트 폴더에 Vue 템플릿을 구성할 폴더 하나를 생성한다(folder명: frontend)
2. cmd에서 해당 폴더(frontend)로 접근한 뒤 vue init webpack으로 webpack템플릿을 구성한다.
```
C:\Users\hsjang\IdeaProjects\Hello(프로젝트 명)\gradle(모듈명)\frontend> vue init webpack vue(vue프로젝트 명)
```
3. 설정해 줘야 하는 부분들을 설정해 준다.

###### 뷰로 작성한 코드들을 번들링하고 번들링된 결과를 어느 위치에 뽑아낼 것인지를 정해야 한다. Spring Boot는 자동 설정에 의해 src/main/resources/static에 index.html과 정적 파일들(css,js,img)을 인식하도록 설정되어있기 때문에 해당 위치에 번들링한 결과를 저장하도록 설정해야 한다.

4. 웹팩 템플릿을 생성한 폴더에서 config/index.js를 연다.
5. index.js를 열어 build 속성을 정의한 부분을 찾아 경로를 수정해준다.
```
  build: {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'), 기본 설정
    index: path.resolve(__dirname, '../../../src/main/resources/static/index.html'), // 추가한 부분

    // Paths
    // assetsRoot: path.resolve(__dirname, '../dist'), 기본 설정
    assetsRoot: path.resolve(__dirname, '../../../src/main/resources/static'), // 추가한 부분
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
```
