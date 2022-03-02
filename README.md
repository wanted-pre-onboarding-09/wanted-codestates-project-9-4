# wanted-codestates-project-9-4

# Daground

## 1. 프로젝트 소개
- 샌드뱅크 모바일 앱 내 인포탭을 참고하여 웹으로 변환 제작
- 기간: 22.02.27~22.03.02

## 2. 팀원 소개
|  이름  |    Role     |
| :----: | :---------: |
| 손영산 | Team Leader |
| 서한석 | Team Member |
| 유송현 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |

## 3. 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

<br/>

## 요구사항

- [상단 Tab bar]는 Click을 통해 각각의 Tab으로 이동할 수 있도록 구현합니다. Tab 간 이동 시 슬라이딩 애니메이션을 넣어주세요.
- [공유하기] 기능은 해당 컨텐츠 링크를 새 창으로 띄우는 것으로 대체합니다.
- [좋아요] 기능은 API가 따로 제공되지 않으므로 local storage 등을 통해 브라우저 refresh 전까지 count가 관리될 수 있도록 구현합니다. (최초 조회 시에는 API 내 like_cnt 만큼 좋아요 숫자가 보여져야 합니다)
- [새로 올라왔어요] 의 Carousel View 는 5초에 한번씩 바로 다음 컨텐츠로 슬라이딩 애니메이션 처리가 되면서 이동하도록 구현하며, 마지막 컨텐츠일 경우 가장 처음 컨텐츠가 보여지도록 구현합니다.
- [새로 올라왔어요] 의 컨텐츠는 API 내 like_top = 1 인 컨텐츠만 보여져야 합니다.
- [더보기] 버튼을 눌렀을 때 모든 컨텐츠가 각 sector에 맞게 조회되어야 합니다.
- [구독하기] 버튼을 눌렀을 때 [https://sandbank.io](https://sandbank.io) 로 새 창을 띄우는 것으로 대체합니다.
- 전역 데이터 관리(redux, mobx, anyting else..) 를 도입하여 구현해야 합니다.
- 버튼 등 컴포넌트에 대한 액션 수행 시 앱에 구현되어있는 reaction을 참고하여 구현해주시기 바랍니다. (Click 시 Animated한 백그라운드 색상 변경 등)
- 앱을 실제로 받아 분석을 진행해야만 정확한 UI를 구현할 수 있습니다. [둘러보기] 로그인이 가능하니 참고해주세요.
- 프론트엔드 서버는 localhost:8888 으로 설정해주시기 바랍니다.

## 기능 구현

   ### 무한 캐러셀

<img width="725" alt="스크린샷 2022-03-02 오후 6 43 18" src="https://user-images.githubusercontent.com/97160021/156346291-7cb98384-b1b7-4499-a9c9-6f3a3cfa73f2.png">


#### 구현 방식

- 무한 캐러셀을 위해 1을 복제해 마지막에 넣어주고 3을 복제해 첫 번째에 넣어준다.
- 4번째의 3에서 다음을 클릭 시 1(다섯 번쨰)로 이동하고 0.5초 이후 원본인 첫 번째 1로 이동시켜 사용자가 눈치채지 못하게 바꾼다.
- SliderContainer에는 overflow: hidden;을 넣어 넘치는 부분은 보여주지 않는다.
- SliderBox에는 이미지 사이즈*개수값으로 넓이를 지정해 준다.
- SliderItem에는 float:left;로 왼쪽에 붙여준다.
- 다음 버튼 클릭 시 slideIndex를 1씩 더해주고 500ms로 뒤로 한 칸 이동한다. 만약 현재 slideIndex가 마지막이라면 slideIndex를 4로 이동하고 0.5초 이후 0ms로 slideIndex를 1(첫 번째 이미지)로 이동한다.

#### 5초 뒤 자동 슬라이드

- setInterval 함수 안에 nextSlide를 넣어 5초마다 이동하게 한다.

#### 반응형을 위해 width값 동적으로 변경

window.addEventListener('resize', handleResize); 

- resize를 통해 브라우저 사이즈 변경 시 이미지 넓이 동적으로 변경한다.

## 터치 스와이프
```bash
let startX;
  let endX;

  const onTouchStart = (event) => {
    startX = event.touches[0].pageX;
  };
  const onTouchEnd = (event) => {
    endX = event.changedTouches[0].pageX;
    if (startX > endX) {
      nextSlide();
    } else {
      prevSlide();
    }
  };
```
- 넘겨질 각 슬라이드 컴포넌트 (SlideItem )에 OnTouchStart , onTouchEnd 이벤트 핸들러를 등록하여 사용자의 터치 움직임을 감지한다.
- 터치가 시작한 지점의 X좌표(StartX)와 터치가 끝난 지점의 X좌표(endX)를 비교하여 startX 가 큰 경우 nextSlide() 메소드가 시행되고 EndX가 큰 경우에는 preSlide() 메소드가 시행된다.
- 만약 사용자가 오른쪽에서 왼쪽으로 터치하여 스와이프하는 경우 터치 시작 지점의 X좌표가 터치가 끝난 지점의 X좌표보다 크기 때문에 nextSlide() 가 시행되어 다음 슬라이드로 넘어간다.


                                                               
## 관심사 분리

### UI

- Card (컨텐츠를 나타내는 컴포넌트)
- Title (새로올라왔어요)
- Slide (주요 컨텐츠 보여주는 슬라이드 컴포넌트)
- Container (카드를 담는 컴포넌트)

### DATA

- selector
- content

## PORT 번호 변경

- Mac/Linux: `package.json`파일에 scripts 부분에 `"start": "export PORT=8888 && react-scripts start",` 추가
- Windows: `package.json`파일에 scripts 부분에 `"start": "set PORT=8888 && react-scripts start",` 추가

## 4. 디렉터리 구조
```bash
─src
    │  App.js
    │  index.js
    │  setupProxy.js
    │
    ├─assets
    │      logo.svg
    │
    ├─components
    │  │  ReduxTest.js
    │  │
    │  ├─atoms
    │  │      BackArrow.js
    │  │      CardDate.js
    │  │      CardImg.js
    │  │      CardTitle.js
    │  │      Container.js
    │  │      ContentBody.js
    │  │      ContentHeader.js
    │  │      ContentMove.js
    │  │      ContentTitle.js
    │  │      ContentYoutube.js
    │  │      Likes.js
    │  │      Loading.js
    │  │      Main.js
    │  │      MoreButton.js
    │  │      Share.js
    │  │      SliderButton.js
    │  │      SliderDots.js
    │  │      SliderInfo.js
    │  │
    │  ├─molecules
    │  │      CardList.js
    │  │      ScrollTop.js
    │  │      Slider.js
    │  │      Subscribe.js
    │  │      Title.js
    │  │
    │  ├─organisms
    │  │      DetailContent.js
    │  │      header.js
    │  │      MainList.js
    │  │      MainSlider.js
    │  │
    │  └─pages
    │          Detail.js
    │          Home.js
    │
    ├─services
    │      dataServices.js
    │      defaultClient.js
    │
    ├─static
    │      dummyContent.js
    │      dummySector.js
    │
    ├─store
    │  │  index.js
    │  │
    │  ├─data
    │  │      dataAsyncThunk.js
    │  │      dataSlice.js
    │  │
    │  └─tab
    │          tabIndexSlice.js
    │
    └─styles
            globalStyle.js
            theme.js
```
## 5. 실행 방법
```
npm start
```
## 6. 커밋 컨벤션
|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
