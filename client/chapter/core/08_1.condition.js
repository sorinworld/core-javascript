/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */


let number = prompt('숫자를 입력해주세요',0)

let message =
(number > 0) ? '1':
(number < 0) ? '-1':
'아무것도 아닙니다.';

console.log(message);



if (number > 0) { 
  console.log('1');
} else if(number < 0) { 
  console.log('-1');} 
else (number = 0) { 
  console.log('0');}





// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)
// else 절(caluse)
if (didWatchMovie.includes('yes')) { //if 문 (statement)
  console.log("It was fun.");
} else if (goingToWatchMovie === 'yes') {
  console.log("I like that."); // else if 복수처리
} else {
  console.log("Umm...I dont think so."); //else 절 (cause)
}

//삼항 연산자로 변경
let movieMessage = (didWatchMovie.includes('yes')) ? "It was fun." :
  (goingToWatchMovie === 'yes') ? "I like that." : "Umm...I dont think so."



// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식



