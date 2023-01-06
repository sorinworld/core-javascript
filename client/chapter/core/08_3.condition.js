/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

// let thisTime = prompt("식사로 뭐를 드시나요?");
// switch (thisTime) {
//   case '아침': 
//   case '저녁':
//     alert( '간단하게 먹습니다.')  
//     break;

//   case '점심':
//     alert( '맛있는걸 먹습니다.');
//     break;

//   default:
//     alert( '알 수 없는 값을 입력하셨습니다.');
// }

// 한줄로도 쓸 수 있음

// 조건이 많아지면 switch가 편하긴 하다.

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'




/* switch문 → if문 변환 --------------------------------------------------- */

// let thisTime = prompt("식사로 뭐를 드시나요?");
// switch (thisTime) {
//   case '아침': 
//   case '저녁':
//     alert( '간단하게 먹습니다.')  
//     break;

//   case '점심':
//     alert( '맛있는걸 먹습니다.');
//     break;

//   default:
//     alert( '알 수 없는 값을 입력하셨습니다.');
// }

// if(thisTime === LUNCH) {
//   console.log('레스토랑에 갈겁니다.');
// }
// else if(thisTime === MORNING) {
//   console.log('집에서 커피마실 겁니다.');
// }
// else if(thisTime === (DINNER || NIGHT)) {
//   console.log('와인바에 갈거예요.');
// }
// else {
//   console.log('계획이 없나요?');
// }




/* switch vs. if -------------------------------------------------------- */

// 0~6까지의 값을 받는다.

// 0 = '일'
// 1 = '월'
// 2 = '화'
// 3 = '수'
// 4 = '목'
// 5 = '금'
// 6 = '토'
function getRandom(n){
  return Math.round(Math.random() * n);
}

function getDay(dayValue){
// return하면 break 필요없음
  switch(dayValue) {
    case 0: return '일'; 
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}


// let result = getDay(Math.round(Math.random() * 6));
let result = getDay(getRandom(6));
console.log(result);


// Math.random() * 6
// Math.round(0.1) 소스점을 반올림해줌
// Math.round(Math.randdom() * 6)