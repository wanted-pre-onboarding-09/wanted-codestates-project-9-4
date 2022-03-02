# wanted-codestates-project-9-4

# Daground

## 프로젝트 소개

- 샌드뱅크 모바일 앱 내 인포탭을 참고하여 웹으로 변환 제작
- 기간: 22.02.27~22.03.02

## 배포링크

[🚀💾 Demo Link ](https://wanted-pre-onboarding-09.github.io/wanted-codestates-project-9-4/)

## 팀원 소개

|  이름  |    Role     |
| :----: | :---------: |
| 손영산 | Team Leader |
| 서한석 | Team Member |
| 유송현 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |

## 기술 스택

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

## 작업일지

## 윤솔비

### **무한 캐러셀**

![https://user-images.githubusercontent.com/97160021/156346291-7cb98384-b1b7-4499-a9c9-6f3a3cfa73f2.png](https://user-images.githubusercontent.com/97160021/156346291-7cb98384-b1b7-4499-a9c9-6f3a3cfa73f2.png)

### **구현 방식**

- 무한 캐러셀을 위해 1을 복제해 마지막에 넣어주고 3을 복제해 첫 번째에 넣어준다.
- 4번째의 3에서 다음을 클릭 시 1(다섯 번째)로 이동하고 0.5초 이후 원본인 첫 번째 1로 이동시켜 사용자가 눈치채지 못하게 바꾼다.
- SliderContainer에는 `overflow: hidden;`을 넣어 넘치는 부분은 보여주지 않는다.
- SliderBox에는 이미지 사이즈\*개수값으로 넓이를 지정해 준다.
- SliderItem에는 `float:left;`로 왼쪽에 붙여준다.
- 다음 버튼 클릭 시 `slideIndex`를 1씩 더해주고 500ms로 뒤로 한 칸 이동한다. 만약 현재 `slideIndex`가 마지막이라면 `slideIndex`를 4로 이동하고 0.5초 이후 0ms로 `slideIndex`를 1(첫 번째 이미지)로 이동한다.

### **5초 뒤 자동 슬라이드**

- `setInterval` 함수 안에 `nextSlide`를 넣어 5초마다 이동하게 한다.

### **반응형을 위해 width값 동적으로 변경**

`window.addEventListener('resize', handleResize);`

- `resize`를 통해 브라우저 사이즈 변경 시 이미지 넓이 동적으로 변경한다.

### 터치 스와이프

```
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

- 넘겨질 각 슬라이드 컴포넌트 (`SlideItem`)에 `OnTouchStart , onTouchEnd` 이벤트 핸들러를 등록하여 사용자의 터치 움직임을 감지한다.
- 터치가 시작한 지점의 X좌표(StartX)와 터치가 끝난 지점의 X좌표(endX)를 비교하여 startX 가 큰 경우 `nextSlide()` 메소드가 시행되고 EndX가 큰 경우에는 `preSlide()` 메소드가 시행된다.
- 만약 사용자가 오른쪽에서 왼쪽으로 터치하여 스와이프하는 경우 터치 시작 지점의 X좌표가 터치가 끝난 지점의 X좌표보다 크기 때문에 `nextSlide()` 가 시행되어 다음 슬라이드로 넘어간다.

**어려웠던 점**

- 무한 캐러셀을 만들기 위해 첫 번째 이미지와 마지막 이미지를 복제해서 넣어줬다. 이 복제한 데이터들과 함께 `map` 함수로 돌리니 복제한 데이터는 값이 똑같아서 unique key 값이 필요했다.

**해결 방법**

- 기존의 data를 복사하고 `index_id`의 값을 1씩 더해가며 추가해 줬다. 지금 생각해 보니 `Object.keys(sliderDatas)`로 `map` 함수를 돌려서 `key={key}` 해주었어도 되지 않았을까 싶다.

```css
cloneData = cloneData.map((data, index) => ({
      ...data,
      index_id: index + 1,
    }));
```

## 손영산

### 무엇을 구현했나

- 리덕스 스토어 전역 상태 관리
  <img width="215" alt="스크린샷 2022-03-02 오후 9 15 40" src="https://user-images.githubusercontent.com/54147313/156383071-f68e3e6b-4eec-4511-a249-7a72855ed593.png">

  - loading과 error 상태를 관리해 loading 컴포넌트와 error 핸들링 계획
    - 로딩 컴포넌트는 적용했지만, error 핸들링은 시간 문제로 적용하지 못했다.
  - sector: sector 데이터 관리를 위한 state
  - contents: 각 sector_id를 참조해 해당 sector의 컨텐츠 관리를 위한 state

- 탭 인덱스 변화에 따라 데이터 호출

  - 리듀서 함수의 동작으로 탭 변경 시 해당 탭의 dataset의 값으로 currentIdx를 초기화
  - currentIdx가 변하면 해당 sector의 컨텐츠를 호출하도록 구현

  ```jsx
  // 탭 인덱스를 변경하는 리듀서
  changeSector: (state, action) => {
    state.currentIdx = action.payload;
  };
  ```

  ```jsx
  const { currentIdx } = useSelector(({ tab }) => tab);
  const { loading, sector, contents } = useSelector(({ data }) => ({
    loading: data.loading,
    sector: data.sector,
    contents: data.contents,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataBySectorId(currentIdx));
  }, [currentIdx]);
  ```

### 무엇이 어려웠나

- 리덕스로 API 호출을 처리하는 로직을 구현하면서 proxy를 연결하는 과정이 어려웠고
- 글을 통해서 어렴풋이 이해하고 있었던 지식을 처음 적용하는 과정이 이번 과제를 진행하면서 가장 큰 도전이었고, 팀원분들과의 협업으로 혼자 고민했을 때보다 수월하게 마무리 할 수 있었다.
- 글을 통해서 어렴풋이 이해하고 있던 지식을 처음 적용하는 과정이 이번 과제를 진행하면서 가장 큰 도전이었고, 팀원분들과의 협업으로 혼자 고민했을 때보다 수월하게 마무리 할 수 있었다.

## 이지수

### 터치 스와이프

```
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

- 넘겨질 각 슬라이드 컴포넌트 (`SlideItem`)에 `OnTouchStart , onTouchEnd` 이벤트 핸들러를 등록하여 사용자의 터치 움직임을 감지한다.
- 터치가 시작한 지점의 X좌표(StartX)와 터치가 끝난 지점의 X좌표(endX)를 비교하여 startX 가 큰 경우 `nextSlide()` 메소드가 시행되고 EndX가 큰 경우에는 `preSlide()` 메소드가 시행된다.
- 만약 사용자가 오른쪽에서 왼쪽으로 터치하여 스와이프하는 경우 터치 시작 지점의 X좌표가 터치가 끝난 지점의 X좌표보다 크기 때문에 `nextSlide()` 가 시행되어 다음 슬라이드로 넘어간다.

### 어려웠던 점

- 여러 곳에서 쓰이는 Title 컴포넌트에 `props`로 전달받는 `tabName`에 따라 각각 다른 css 스타일링을 적용해야 했고, color속성은 `theme.js` 로 저장하여 `themeprovider`를 통해 전달받아야 했음

### 해결 방법

```jsx
import theme from 'theme'
function getColor(tab){
    switch (tab) {
      case 'NEW':
        return theme.colors.green;
      case 'News':
        return theme.colors.lightBlue;
      case 'Youtube':
        return theme.colors.red;
      default:
        break;
    }
  }
  return (
    <StyledTitle bgColor={getColor(tab)} /
  );
```

- 처음에는 styled-component와 themeprovider가 익숙하지 않아서 `props`로 전달받은 `tabName`의 내용을 확인하는 함수를 따로 만들고 함수의 리턴 값을 다시 css 속성으로 전달하는 방식으로 구현했음

```jsx
const StyledTitle = styled.div`
  background-color: ${(props) => {
    switch (props.tabName) {
      case 'NEW':
        return props.theme.colors.lightBlue;
      case 'Youtube':
        return props.theme.colors.red;
      case 'Report':
        return props.theme.colors.puple;
      case 'News':
        return props.theme.colors.green;
      default:
        throw new Error(`unknown :${props.tabName}`);
    }
  }};
```

- css구문에서 `tabName`과 `theme`을 동시에 `props` 객체로 전달 받아 `tabName`에 따른 color 속성을 적용하도록 구현함

# 조영제

- Header Bar Tab 구현
  - tab default 값 지정
    - 에러 : 로딩 시 default 값으로 첫번째Tab에 bold 효과를 주려고 first-child를 사용했으나
      라우터 설정 과정에서 모든 li에 bold가 적용되게 되었음
      `ul { li:first-child{ font-weight : bold; } }`
    - 해결 : useEffect를 사용해 스타일을 지정해서 해결할 수 있었음
  - tab 아래 슬라이더 애니메이션 효과
    - 어려웠던 점 styled component를 처음 사용해서 활용하는 방법을 잘 알지 못해 평소보다 더 시간을 씀
    ```jsx
    const tapChange = (event) => {
      const listArray = document.querySelectorAll('.list');
      listArray.forEach((item) => {
        item.style.fontWeight = 'normal';
        item.style.color = '#979797';
      });
      event.target.style.fontWeight = 'bold';
      event.target.style.color = '#000000';
      if (document.body.clientWidth > 768) {
        slider.current.style.transform = `translateX(${
          event.target.id * 8
        }rem)`;
      } else {
        slider.current.style.transform = `translateX(${
          event.target.id * 6
        }rem)`;
      }
      dispatch(changeSector(event.target.dataset.sectorId));
      dispatch(fetchDataBySectorId(event.target.dataset.sectorId));
    };
    ```
    - 해결 : 라이브러리를 사용하지 않는것과 크게 다르지 않다는 걸 알고 적용할 수 있게 되었음
- router, styled component 라이브러리 사용
  - 평소에 라이브러리를 사용하지 않아 이번 과제에서라도 해보고 싶었으나 예상했던대로
    활용하기 쉽지 않아 시간을 많이 허비했었습니다.
    그래도 이번 과제에서 사용하게 되면서 더 알아갈 수 있는 기회가 되었다고 생각합니다.

## 유송현

### 메인 리스트 페이지

- sector id 값의 따라 필터링되는 api가 없기 때문에 store에 currentidx 값을 사용해 contents 리스트를 filter 메소드로 필터링 하여 구현하였습니다.
- 메인 리스트 더보기 버튼 클릭시 css OverFlow 처리가 아닌 true/false 상태에 따른 배열에 slice로 첫 화면은 0 ~ 5 클릭시 contents의 길이 끝까지로 구현하였습니다

```javascript
const [range, setRange] = useState(true);
const contentsRange = contents.slice(0, range ? 6 : contents.length);
```

### 상세 페이지

- 상세페이지의 경우 알쓸B잡, 유튜브, 인사이트 데이터에 따라 보여지는 데이터들이 달랐기 때문에 컴포넌트를 다르게 구현을 해야할지 고민하다 DetailContent 컴포넌트에서 조건에 따라 처리하였습니다.

```javascript
  <div className="detail-header">
    <BackArrow />
    <ContentHeader header={content.sector_id} />
  </div>;
  {
    content.sector_id === 2 ? (
      <div className="detail-youtube">
        <ContentYoutube youtube={content.link} />
      </div>
    ) : (
      <div className="detail-img">
        <CardImg itemSrc={content.image} />
      </div>
    );
  }
  <div className="detail-title">
    <ContentTitle title={content.title} />
  </div>;
  {
    content.sector_id === 1 ? null : (
      <div className="detail-content">
        <ContentBody body={content.body} />
      </div>
    );
  }
```

### 어려웠던 점

- 어려운 기능은 없었지만, 공용으로 사용되는 컴포넌트가 많았기 때문에 컴포넌트 단위를 어떻게 나눌것인지 고민이 많았습니다. 그래서 선택한 방법은 atomic 디자인 패턴이였습니다. 기능을 atoms => molecules => organism => pages 순으로 단위를 쪼깨어 개발하려고 노력했습니다. 재사용을 하기 위해선 배치 레이아웃이나 css는 pages에서 처리하였으며, 데이터 또한 page를 기준으로 stroe에 접근하여 내려주었습니다. 개발 하면서도 컴포넌트 어떻게 구성해야 정답일지 고민이 많이 드는 프로젝트였습니다.

### 아쉬웠던 점

- 과제 제출 5시간정도는 애니메이션, 네트워크 처리, 비정상적 접근 등 UI/UX를 향상 시키려고 했지만, 배포를 하다 발생한 CORS 처리에 시간이 너무 많이 들어 계획되로 흘러가지 않은게 아쉬웠습니다.

## 동작 화면

<img width="725" src=https://user-images.githubusercontent.com/84840032/156377199-37dc67ac-3648-4d2c-b91b-8cfd2c8b56a5.gif>  
<img width="725" src=https://user-images.githubusercontent.com/84840032/156377760-c657533f-d9e4-4553-ad49-e3c77fa1ef21.gif>
<img width="725" src=https://user-images.githubusercontent.com/84840032/156378032-52c7e1d6-00b5-4cb6-9231-0cd4e12e0d5b.gif>

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

## 디렉터리 구조

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

## 실행 방법

```
npm start
```

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
