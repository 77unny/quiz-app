# 클래스팅 프론트엔드 과제 

- 과제 제출 기간 2021.11.19 ~11.25
- 과제 완성도 위주



### 기술 스택 

- React 
- Typescript
- TailwindcCSS
- Styled-components
- Twin.macro



### 요구 사항

##### [필수 구현]

- [ ] `퀴즈 풀기` 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [ ] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다. (불리언인건???)
- [ ] 답안을 선택하면 다음 문항을 볼 수 있다.
  - [ ] 답안 선택 후 `다음 문항` 버튼을 볼 수 있다.
  - [ ] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [ ] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [ ] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [ ] 소요된 시간
  - [ ] 정답 개수
  - [ ] 오답 수

##### [추가 구현]

- [ ] 정 오답에 대한 비율을 차트로 표기
- [ ] 다시 풀기
- [ ] 오답 노트
- [ ] 정 오답 기록 저장 (localstorage)
- [ ] 테스트 코드 작성



### 결과물

- github 
- 실행 URL 



-----

### 요구사항 분석

##### [Quiz App Flow]

1. 퀴즈 풀기를 눌러야 게임을 시작할 수 있다.

   - 첫 화면은 `퀴즈 풀기` 라는 버튼이 보이도록 한다.

   - `퀴즈 풀기` 버튼을 누르면 ?

     - 상태로 관리해야 할 부분

       - 시작 시간, 종료시간을 저장한다.

       - 정답 및 오답 수를 저장한다.

     - 퀴즈 API 를 호출 한다.
       - 패치는 SWR 을 이용해볼까..?

2. 문항이 렌더링 된다.

   - 답안을 선택하면 ?
     - `다음 문항` / `정답 확인` 버튼이 보이도록 하자
   - 현재 문항이 맨 마지막인지 체크하자 (맨마지막이라면 3번)

3. 모든 문항을 다풀면?

   - 다음 문항 버튼이 아닌 `다시 풀기` 버튼이 보이도록 하자

   - 소요된 시간 / 정답 갯수 / 오답 수 표기 한다.



##### [Clinet 설계]

한 화면에 표현이 가능하니 page 단위를 생각하지 말자.

**컴포넌트 단위**

- 버튼 컴포넌트 (props : name / callback function)
- 문항 컴포넌트 (props :  respons data{} )
  - 다음 문항 / 정답 확인
- 인트로 컴포넌트 
  - 퀴즈 풀기
- 아웃트로 컴포넌트 
  - 소요된시간 (시작시간/종료시간)
  - 정답갯수
  - 오답수
  - 다시 풀기

**상태 관리 - Redux**

- 시작 시간 : 기록 저장할때 시작시간을 key 로 가지고 저장 해보자.
- 소요된 시간 : 시작시간 ~ 종료시간
- 정답 수 
- 오답 수 
- 문제리스트? : 추후 다시풀기 라는 기능 만들어 볼때 사용할 수 있을듯..?!



##### [고민]

- Test & UI Test

  - CRA test  사용
  - 어디까지 테스트 할 것인가?
  - Storybook 을 사용할까...? 

  

- 문항이 몇번째인지 ?

  - 문항 컴포넌트에 Props `step` 이라는 상태를 전달해볼까?
  - rudux -  `step` 

- API 에서 `correct_answer` / `incorrect_answers` 구분되어있음
  - 랜덤하게 섞기
  - correct_answer === 선택된 답안



-----

### Task

##### 11.19 Task

- [x] React + TS + TailwindcCSS + styled-component + Twin.macro 환경 세팅
- [x] 요구사항 분석 - 전체적인 흐름 분석
- [x] 인트로 컴포넌트 만들기
  - [x] 버튼 컴포넌트만들기
  - [x] 스토리북 세팅 및 적용
  - [x] 테스트코드 세팅 및 적용