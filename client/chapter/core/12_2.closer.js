//클로저 실행환경 이야기

//함수를 만들면 하나의 환경이 구성


//tiger는 도구일뿐 정보가 중요하다
//클로저에 정의된 함수는 그것이 작성된 환경을 '기억'합니다. -호랑이가 기억하고 있으니까 그걸 ufo가 쓰는거
//가비지컬렉터는 들어갈 수 없다.


function earth(){

  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone','macbook']
  }
  let o2 = 9999

  // function tiger(){

  //   console.log(water, o2);
  // }
  // return tiger

  //tiger가 중요한 것이 아닌 정보가 중요하기 때문에
  return function (){
    console.log(water, o2);
  }
}

const ufo = earth()




//클로저 예시

function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());

//this는 first가 된다
//렉시컬 인바이런먼트라는 환경이 구성된다
