 /* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

if (age <= 14 && age >= 90) {
  console.log(age);
}




let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
// ' ' => true 
// [] => true , {thisIsFalsy:false} => 키와 value가 들어있는 객체 true
// {thisIsFalsy:false} 마지막꺼 반환

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};

//toLowerCase 문자가 가진 능력

let userName = prompt('write your ID', '');

//내가 대문자를 쓰든 소문자를 쓰든 무조건 걸러주게된다.
// (?)는 옵셔널 체이닝 - 앞에가 널이나 언디파인드일때 뒤에 함수를 실행시키지 않는다.
//->null에는 toLowerCase가 없기때문에 옵셔널 체이닝을 넣어주는 것
if (userName?.toLowerCase() === 'admin') {
  let pw = prompt('password','');

  if (pw?.toLowerCase() === 'themaster'){
    console.log('Welcome');
  }
  else {
    console.log('canceled');
  }
  // replace(/\s*/g,'') 공백을 찾아서 빈문자로 바꾸겠다
}else if(userName.replace(/\s*/g,'') === '' || userName === null){
  console.log('canceled');  
}else {
  console.log('not find');
}
