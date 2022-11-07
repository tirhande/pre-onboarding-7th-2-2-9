# 광고 현황 대시보드 및 광고 관리 서비스 구현 (👨‍👩‍👧‍👦 9팀)

> pre-onboarding-7th-2-2-9

| <img src="https://avatars.githubusercontent.com/u/58911113?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/74575497?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/72599761?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           👑 권준                                           |                                           김경훈                                            |                                           김수정                                           |
|                            [@jun-05](https://github.com/jun-05)                             |                          [@tirhande](https://github.com/tirhande)                           |                        [@crystal993](https://github.com/crystal993)                        |

| <img src="https://avatars.githubusercontent.com/u/104307213?v=4" width="120" height="120"/> | <img src="https://avatars.githubusercontent.com/u/94212747?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/77476348?v=4"  width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/76990149?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           송슬기                                            |                                           오나래                                            |                                            이창훈                                            |                                           전이진                                           |
|                          [@songseul](https://github.com/songseul)                           |                            [@NR0617](https://github.com/NR0617)                             |                 [@anotheranotherhoon](https://github.com/anotheranotherhoon)                 |                          [@pongdang](https://github.com/pongdang)                          |

## **✨ 배포링크**

## [데모 페이지 바로가기](https://pre-onboarding-7th-2-2-9.vercel.app)

## 📝 목차

- [📰 프로젝트 설명](#-프로젝트-설명)
- [🛠️ Dev Tools](#-dev-tools)
- [🖥 프로젝트 실행 방법](#-프로젝트-실행-방법)

## **📰 프로젝트 설명**

광고 현황 대시보드 및 광고 관리 서비스입니다.

## **🛠 Dev Tools**

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) ![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/redux_toolkit-764ABC?style=flat-square&logo=redux&logoColor=black) ![badge](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled%20components&logoColor=white) ![badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)

## **🖥 프로젝트 실행 방법**

```sh
### Installation
# Repositorie Clone
git clone https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9.git

# npm으로 설치 진행
pre-onboarding-7th-2-2-9 %  % npm install

### Usage
# Local Dev Server 실행
pre-onboarding-7th-2-2-9 % npm start

# Build
pre-onboarding-7th-2-2-9 % npm build
```

## **✏ 토의 내용 및 선정**

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/discussions/1)

[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/discussions/2)

<!-- [🖍 3차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/8) -->

[🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/pull/15)

## **📝 디렉토리 구조**

```sh
📂 pre-onboarding-7th-2-2-9
┣ 📂 public
┣ 📂 src
┃   ┣ 📂 apis             # axios 호출 관련
┃   ┣ 📂 assets           # 파일들 (이미지 파일 등)
┃   ┣ 📂 components       # component 모음
┃   ┣   ┣ 📂 blocks         # page보단 작고 button 같은 component보단 큰 애들
┃   ┣   ┗ 📂 common         # button, input, select box와 같은 component
┃   ┣ 📂 hooks            # custom hook
┃   ┣ 📂 pages            # 페이지 단위로 구분
┃   ┣   ┣ 📂 Adsmanage      # 광고관리 페이지
┃   ┣   ┣ 📂 Main           # 대시보드 페이지
┃   ┣   ┗ 📂 Notfound       # Notfound 페이지
┃   ┣ 📂 redux            # redux/toolkit, store 디렉토리
┃   ┣   ┗ 📂 reducer      # reducer/slice 디렉토리
┃   ┣ 📂 styles           # global style
┃   ┗ 📂 utils            # 재사용성 높은 함수 모음
┗ 📄 README.md
```

## **💡 Assignment 목차**

- [1️⃣ Assignment](#1️⃣-assignment)
- [2️⃣ Assignment](#2️⃣-assignment)
- [3️⃣ Assignment](#3️⃣-assignment)
- [4️⃣ Assignment](#4️⃣-assignment-추가-구현-사항)
- [5️⃣ Assignment](#5️⃣-assignment-추가-구현-사항)

### **1️⃣ Assignment**

- 사이드바
  - 서비스 추가 버튼까지만, 실제 추가 기능은 구현 X

```diff
+ 서비스 추가 버튼 구현, 실제 기능은 구현 X,
+ 서비스 추가 클릭시 alert창 팝업
```

<img width="294" alt="스크린샷" src="https://user-images.githubusercontent.com/74575497/200193171-3c382734-f492-48cd-af81-b4dcea323e9d.png">

```js
const Sidebar = () => {
  const onSelect = e => {
    if (e.target.value === 'addservice') {
      alert('준비중입니다.');
    }
  };

return (
  <ASide>
    <Logo />
    <ServiceDiv>
      <SubTitle>
        <span>서비스</span>
      </SubTitle>
      <StyledSelect onChange={onSelect} defaultValue={'madup'}>
        <option value="madup">매드업</option>
        <option value="addservice">서비스 추가하기</option>
      </StyledSelect>
...
```

### **2️⃣ Assignment**

- 대시보드
  - 통합광고현황까지만 구현

```diff
+ 통합 광고 현황 구현
```

![main](https://user-images.githubusercontent.com/74575497/200193355-85266fca-0c90-4bf1-9948-ec6cb5f49165.gif)

```js
const Trend = () => {
  return (
    <Section>
      <SubHeader>
        <h2>통합 광고 현황</h2>
      </SubHeader>
      <Contents>
        <Status />
        <Chart />
      </Contents>
    </Section>
  );
};
```

- 매체현황은 구현 X

```diff
+ 날짜 선택에 따라 데이터 변경 적용
```

<img width="1081" alt="statistics" src="https://user-images.githubusercontent.com/74575497/200299692-bcdd1d20-626a-4869-98c3-07d42dc7cae7.png">

### **3️⃣ Assignment**

- 광고관리
  - 광고 표시 및 수정하기까지만 구현 - 백엔드가 없으므로 수정한 데이터는 새로고침 시 초기화 되도 무방함

```diff
+ 표시 및 수정하기 구현
- 수정하기의 경우 광고비만 수정할수 있게 구현함
```

![ad](https://user-images.githubusercontent.com/74575497/200193510-af855b4a-4958-4a1c-a166-fcfb233a653c.gif)

- 광고만들기는 구현 X

```diff
@@ 미구현 @@
```

### **4️⃣ Assignment (추가 구현 사항)**

- 어떤 상태로 다른 페이지에 이동했다 하더라도, 다시 기존 페이지로 복귀 할 시 마지막 상태가 유지되어야 함 (필터링 상태 등)

```diff
+ redux, redux-toolkit을 사용하여 전역으로 state 관리 진행
```

<img width="496" alt="redux" src="https://user-images.githubusercontent.com/74575497/200193644-ffa6b741-a4a3-48e4-9c87-cdc6fdec1f79.png">

![transform](https://user-images.githubusercontent.com/74575497/200193599-10b3e399-1042-4224-a3cf-56e71f7c9f2d.gif)

### **5️⃣ Assignment (+추가 구현 사항)**

- 임의적으로 Fetch 타임을 만들어 로딩 시간 지연

```diff
+ 0.01 ~ 0.7초의 딜레이후 데이터 반환하도록 설정
```

```js
const delay = () => {
  const time = Math.floor(Math.random() * (700 - 10 + 1) + 10);
  return new Promise(resolve => setTimeout(resolve, time));
};

instance.interceptors.response.use(
  async response => {
    await delay();
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);
```

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor : 코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## **코딩 컨벤션**

> - 컴포넌트의 ID사용은 지양한다.
> - react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
> - 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
> - 코드를 설명하는 주석은 가급적 사용하지 않는다.
> - 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
> - 반환 값이 불린인 변수는 'is'로 시작한다
> - 반환 값의 유무를 사용하는 변수는 has로 시작한다
>   > -`예시. loading -> isLoading / Error -> hasError`
> - const와 let은 사용 시점에 선언 및 할당한다.
> - 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
> - 이벤트 핸들러는 'on'으로 시작한다.
> - 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.
>   > ` 한 줄짜리 블록일 경우 {}를 생략할 수 있지만, 이는 코드 구조를 애매하게 만든다. 당장은 두 줄을 줄일 수 있겠지만 이후 오류 발생 확률이 높아 잠재된 위험 요소가 된다.` >> `단, map과 같은 화살표 함수의 암시적 반환은 허용한다. `
> - API 인스턴스를 만드는 함수는 API/axiosInstance.js 파일내에서 axiosInstance 라는 이름으로 통일한다

</div>
</details>

<details>
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## **Prettier, ESLint 규칙**

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

 </div>
  </details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- typescript
- redux
- redux/toolkit
- victoryjs (chart)
- dayjs (날짜 라이브러리)
- air-datepicker (날짜 선택 라이브러리)
- styled-components
- axios
</div>
</details>
