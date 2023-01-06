/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */


/* let i = 0;

while(i < 10){
  console.log(++i);


} */





const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */
//이건 내스스로 반복


/* let i = 0;

while(i < frontEndDev.length){

  let value = frontEndDev[i];

  // console.log(i);
  console.log(value);

  i++;
} */

/* //legth는 7이지만 7번이 없기때문에 -1
let i = frontEndDev.length-1;

while(i >= 0){

  // console.log(i);
  console.log(i, frontEndDev[i]);

  i--;
} */



//pop은 Array.pop  pop을 하게되면 배열에 남는 값이 없어짐.
//shift는 앞에서 부터 추출한다.
//전개 연산자 전개 구문 spread operator
// let copyArray = [...frontEndDev];
let copyArray = frontEndDev.slice();


while(copyArray.length){
  console.log(copyArray.pop());
}




/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환

