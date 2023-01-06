/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
      console.log(typeof null);
// 2. 값이 할당되지 않은 상태
      console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
      let message1 = "hello";
      let message2 = 'hello';
      let nickName = 'sorinworld';
      let message3 = `${message1} 내이름은 ${nickName}야`;
      // temperlate literal 은 선언과 값을 같이 할당해줘야함.
      console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
      let number = 100.123

      console.log('number : ', typeof number);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용) Biglint
      console.log(typeof 12913n);  
      console.log(12913n);
// 6. 참(true, yes) 또는 거짓(false, no) Boolean
      console.log(typeof true);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
      console.log(typeof {});
// 8. 고유한 식별자(unique identifier)
      console.log(typeof Symbol('uid'));

      console.log(typeof Math);

      const fuc = function (){

      };

      console.log(typeof fuc);



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object   생성자 함수는 모두 첫글자 대문자로 / 중괄호 열고 닫고는 객체
// key value
// name, age = property
// const user = new object()
const user = {
  name: 'tiger',
  age: 32,
  fish: function (){
    return '뻐끔뻐끔'
  },
  alert: function () {

  }
};
// 객체 리터럴 :중괄호 열어서 간편하게 만드는것


// Array 어떤 요소들의 집합 / value만 존재 (key는 없음)
// collection
let list = [10,100,1000,1,2,3]
// list.length = list가 담고있는 갯수가 나옴
// let list = [] =>배열 리터럴 :대괄호 열어서 간편하게 만드는거


// function 함수 (상자함의 샘수(?)) 어떤 값을 넣고 상자안에서 일을하고(1+2=3) 가지고만 있음
// 그래서 나가라는 설정(return이라는 키워드)을 해줘야함. 만든다고 바로 실행되지않음. 결과를 내보낼지는 내가 선택하는 것. 
// 함수를 사용하는 이유는 재사용성을 위해 사용. 주기적으로 만들어놓은것을 빠르게 처리하기 위해. =>재사용성 고려해서 만들어야.
// 함수에 직접 재료를 넣어  /sum(10,30): argument(인자)/ 재료를 넣는공간으로 가는 것 parameter(매개변수) sum(a,b)
// 함수는 밖에도, 객체안에도 만들 수 있다.
// function 붕어빵틀(data) {return `${data} 맛 붕어빵입니다.`} 
// 붕어빵틀('팥')
function sum(a,b){

  return a + b
}

console.log( sum(10,30) );



// this


