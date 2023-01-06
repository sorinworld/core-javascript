/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';

//console.log(message);
// for(let key of message){
//   console.log(key);
// }


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength:' ,stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter:' ,extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

//message = 'more' + message[5];
//message[3] = 'i'
//console.log(message);


// 부분 문자열 추출
let slice = message.slice(8); //아무값도 안주면 다나옴
console.log('slice:',slice);


let subString = message.substring(0,3);
console.log('substring:' ,subString);

let subStr; //없어짐


// 문자열 포함 여부 확인
let indexOf = message.indexOf('i'); //없는 것을 찾으면 -1 반환, 조건문 따질때 많이쓴다.
console.log('indexOf:' ,indexOf);
//해당 문자가 여러개 들어있을 경우 가장 앞에 있는 인덱스를 반환
//내부 체이닝?


let lastIndexOf = message.lastIndexOf(); //순서는 왼->오 순이지만 뒤에서부터 찾는다.


let includes = message.includes('Less'); //조건문에서 많이쓴다
console.log('includes:', includes);


let startsWith = message.startsWith('L'); //첫글자를 뭐로 시작하는지 알기위해
console.log('startsWith:', startsWith);


let endsWith = message.endsWith('.'); //마지막 글자 확인할때
console.log('endsWith:', endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft:', trimLeft);


let trimRight;

let trim = message.trim();
console.log('trim:',trim);

// let trim = message.replace(/\s*/g,'');
// console.log('trim:',replace);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat:', repeat);


// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
console.log('toLowerCase:', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase:',toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;




function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}