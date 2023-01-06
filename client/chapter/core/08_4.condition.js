/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = 
(emailAddress === undefined || emailAddress === null) ?
'user@company.io' : emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress =
emailAddress ?? 'user@company.io';

emailAddress || 'user@company.io';



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const INIT = 0;
const boolean = false;
const button = document.querySelector('.buttom');

button.style.height = INIT ?? WIDTH
// ||할 경우 10px 을 찾아주지만 ??할 경우 0(false를 찾는다)

console.log(null || WIDTH); //10px
console.log(null ?? WIDTH); //10px

console.log(undefined || WIDTH); //10px
console.log(undefined ?? WIDTH); //10px

console.log(boolean || WIDTH); //첫번째
console.log(boolean ?? WIDTH); //두번째

console.log(false ?? WIDTH); //false =정의된 값을 찾기때문에

console.log('' || WIDTH); //10px =빈문자는 false
console.log('' ?? WIDTH); //공백나옴 = 사용자가 공백으로 정의했다고 생각

