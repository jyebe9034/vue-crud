
# SpringBoot-Vue.js

### 연동방법1
1. Spring boot 프로젝트의 루트 폴더에 Vue 템플릿을 구성할 폴더 하나를 생성한다(folder명: frontend)

2. cmd에서 해당 폴더(frontend)로 접근한 뒤 vue init webpack으로 webpack템플릿을 구성한다.
```
C:\Users\Username\IdeaProjects\Hello(프로젝트 명)\gradle(모듈명)\frontend> vue init webpack vue(vue프로젝트 명)
```

> 뷰로 작성한 코드들을 번들링하고 번들링된 결과를 어느 위치에 뽑아낼 것인지를 정해야 한다. Spring Boot는 자동 설정에 의해 src/main/resources/static에 index.html과 정적 파일들(css,js,img)을 인식하도록 설정되어있기 때문에 해당 위치에 번들링한 결과를 저장하도록 설정해야 한다.

3. 웹팩 템플릿을 생성한 폴더에서 config/index.js를 연다.

4. index.js를 열어 build 속성을 정의한 부분을 찾아 경로를 수정해준다.
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

5. 설정이 끝나면 cmd에서 npm run build를 실행한다
```
C:\Users\Username\IdeaProjects\Hello\gradle\frontend\vue> npm run build
```

6. 빌드가 완료되면 src/main/resources/static 하위에 번들링된 정적 파일들이 생성된 것을  수 있다.

7. 이제 Spring Boot 메인 어플리케이션을 실행하고 localhost:8080에 접속하면 Vue화면이 나오는 것을 확인할 수 있다.

### 연동방법2(proxy server이용)
- 연동방법1처럼 하면 vue를 이용해 client쪽 페이지 구성을 바꿀때마다 매번 다시 build해아하고, 나온 결과물들을 resource/static으로 이동하는 번거로움이 있다. 게다가 개발 서버를 spring과 vue각각 하나씩 띄워야 하기 때문에 port번호도 2개로 나뉜다. 그러나 실제 배포 환경에서는 vue로 작성한 코드들은 빌드되어 static 자원으로 바뀌고 요청을 받는 서버는 spring 서버이다. 이런 문제점을 해결하기 위해 vue.js dev서버에 proxy설정을 해서 spring으로 오는 요청들을 모두 vue.js dev에서 proxing해서 받고, spring으로 보내주도록 설정해야 한다. 
