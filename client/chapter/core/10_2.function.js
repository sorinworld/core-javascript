/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

//선언문
function calcAllmoney(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */


// 함수 선언 → 일반 함수 (표현)식
let calcAllMoney = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let calculateTotal = function(moneyA, moneyB, moneyC, moneyD){

  console.log(arguments); //배열아님 배열유사 ->Array like 유사배열 (인수로 받은 모든 값을 가지고있다.)

    for(let i = 0;)

//정리 - 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 타입으로 불리는 변수 : argument
// argument 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.
//유사배열은 배열이 아님. 고로 배열의 능력을 사용하려면 진짜 배열로 만들어야 한다.
//배열의 능력 : forEach-값만 받으려면, reduce-새로운거 만들려면 편함




 //Array.from() = 진짜 배열로 만들어준다  ->static method 객체 

 //Array.prototype.slice.call() = slice는 배열만 쓸 수 있는 메소드 (진짜 Array의 능력을 빌려쓰는거 -call을 통해 빌림) ->instance method

//arr.forEach 는 반복 (item, index)를 받을 수 있음. 이 안에 함수를 전달할 수 있음 forEach->함수 순 callback
//forEach의 콜백 함수는 아이템(or value) 인덱스(매개변수 순서중요)를 받을 수 있음

//reduce - 코드를 줄여쓸 수 있는 arry의 능력 / 누적값..? total + () 기능 -> return forEach와 똑같은 능력



  //return moneyA + moneyB + moneyC + moneyD;
};


//익명(이름이 없는) 함수 (표현)식
let annonymousFunctionExpression = function (){};

//유명(이름을 가진) 함수 표현식

//콜백 함수 표현식
//ajax 통신에 사용
let callbackFunctionExpression = function(url,resolve,reject){

  //if(typeof url === 'string' && url.includes('http') && url.includes('www')){
  if(typeof url === 'string' && url.match(/http.+www/)){  
    resolve();
  }else {
    reject();
  }

};

callbackFunctionExpression(
  'http://naver.com',
  function (){
    console.log('해당 페이지로 이동합니다.');
  },
  function (){
    throw new Error('url 입력 정보가 올바르지 않습니다.');
  }
  )


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression (pattern 중 하나 - 전역보호를 위해 사용 / 최근엔 사용 별로 안함=>모듈 프로그래밍이있으니까)
//



let IIFE;

//익명함수
(function(){

  console.log('hi');

})

//incapsulation : 외부의 접근을 차단
//일부 정보만 노출 - 보여주고싶은거만 보여줌, 내가 내보내고 싶은 항목들만 내보낼거야
//모듈로서의 활용



const MASTER = (function ($) {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  return {
    getKey: function () {
      return KEY;
    },
  };
})(getNode); // arguments




console.log(MASTER.getKey());



// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 