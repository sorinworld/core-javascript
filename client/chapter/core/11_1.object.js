/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
// let cssCode = /* css */`
//   .dialog {
//     position: fixed;
//     z-index: 10000;
//     top: 50%;
//     left: 50%;
//     width: 60vw;
//     max-width: 800px;
//     height: 40vh;
//     min-height: 280px;
//     transform: translate(-50%, -50%);
//   }
// `;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
// let cssMap {
//     position: "fixed",
//     zIndex: 10000,
//     top: "50%",
//     left: "50%",
//     width: "60vw",
//     maxWidth: 800,
//     height: "40vh",
//     minHeight: 280,
//     transform: "translate(-50%, -50%)",
// };


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


//authentication = 인증
//authorization = 권한
let authUser = null;

authUser = {
  uid : 'user-id-asdA12kd',
  name : 'kindtiger',
  email : 'seonb1@gmail.com',
  isSignIn : true,
  permission : 'paid', // free / paid
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);



// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

//default parameter => computedProp = 'phone' 매개변수가 들어오지 않았을땐 기본값을 써라
function createUser(computedProp = calculateProperty) {
  return {
    name : 'unknown',
    email : 'unknown@company.io',
    [computedProp] : '010-1234-5678'
  }
}

const user = createUser('tel')


// 프로퍼티 포함 여부 확인

Object.prototype.Sign = true;

for(let key in authUser){

  if(Object.prototype.hasOwnProperty.call(authUser,key)){
    //console.log(key);
  }
}


// 프로퍼티 나열 authUser : 객체 - 배열로 만들기, value만 모아놓은 배열

// let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);

// console.log(valueArray);

function getPropertyList(object){
  
  let result = [];
  for(let key in object){
    result.push(key)
  }
}

let result = getPropertyList(authUser)


//remove or delete
// 프로퍼티 제거 or 삭제 



//1.함수이름 정하기 2.인수와 인자 정하기 3.validation확인하기(if) 4.return값(확인하기)

function removeProperty(object,key){
  object[key] = null;
}

removeProperty(authUser,'uid')



function deleteProperty(object,key) {
  delete object[key]  
}

deleteProperty(authUser,'uid')


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// const student = {
//   name : name,
//   email : email,
//   authorization : authorization,
//   isLogin : isLogin
// }


//shorthand property
const student = {name, email, authorization, isLogin}




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 배열의 갯수가 0이면 ? false : true

function isEmptyObject() {
  // return Object.keys(object).length === 0 ? true : false
  return getPropertyList(object).length === 0;
}

  const empty = {}

  console.log( isEmptyObject(empty) );
  


let salaries = {
  John: 100,
  Ann: 200,
  pete: 440
}

function salariesTotal(object,key) {
  object[key, value] 
}


//배열 구조 분해 할당 destructuring(파괴) assignment(할당) 
//객체 구조 분해 할당도 있다 /변수를 지정하지 않아도 가져다 쓸 수 있다
let total = 0;
for(let [key, value] of object.entries(salaries)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  total += value;
}


let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// const [red,blue,green] = color;

const [ , , COLOR_GREEN] = color; //green만 가져올 수 있음

console.log(COLOR_GREEN);

//발췌


//객체 구조 분해 할당
//객체 {} / 배열[]

// let salaries = {
//   John: 100,
//   Ann: 200,
//   pete: 440
// }


const {john, Ann, pete} = salaries;

console.log(Ann);