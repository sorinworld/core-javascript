/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 10;

// do{

//   console.log(i);

//   i++;

// }while(i < 5)




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let count = prompt('몇 번 순환할까요?','');

do{
  if(count <= 0 || !count) {
  console.log('최초실행');
   break; 
  }   
  count--;

}while(count);

 */



// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


//블록 스코프  같은 블록안에 있으면 찾을 ㅅ 있는것, 밖에있으면 못찾음..
{
  let x = 1;

  console.log(x);

}


{
  let x = 1;

  }
console.log(x);




let first = document.querySelector('.first');
let second = document.querySelector('.second');


function next(node){
  
  do{
  
    node = node.nextSibling;
  
  }while(node.nodeType ===! document.ELEMENT_NODE)

  return node
}

function prev(node){

  do {
    node = node.previousSiblig;

  }while(node.nodeType ===! document.ELEMENT_NODE)

    return node

}

console.log(prev(second));

// let secod = next(first);

// console.log(first);
