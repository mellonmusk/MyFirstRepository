const link=document.querySelector("a")

link.addEventListener("click",()=>{
  console.log("링크를 클릭했습니다.");
})

/*
웹 브라우저에서 a요소를 클릭하면 링크로 이동하지 않고 입력한 텍스트가 콘솔로 제대로 출력되도록 하는 경우

const link=document.querySelector("a")

link.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
})
*/

const box=document.querySelector("#box");

box.addEventListener("mouseenter",()=>{
  box.stylebackgroundColor="hotpink";
});

box.addEventListener("mouseleave",()=>{
  box.style.backgroundColor="aqua";
})


const list=document.querySelectorAll(".list li");

for(let el of list){
  el.addEventListener("click",e=>{
    e.preventDefault();
    console.log(e.currentTarget.innerText)
  })
}//for of문 이용해서 list그룹을 반복하면서 이벤트를 연결

//클릭 이벤트가 발생하면 숫자 증가, 감소하기
const btnPlus= document.querySelector(".btnPlus");
const btnMinus= document.querySelector(".btnMinus");
let num=0;

btnPlus.addEventListener("click",e=>{
  e.preventDefault();
  num++;
  console.log(num);
})

btnPlus.addEventListener("click",e=>{
  e.preventDefault();
  num++;
  console.log(num);
})

//문자 안에 변수 삽입하기
const myName="홍길동";
console.log("내 이름은 myName입니다.");

console.log(`내 이름은 ${myName}입니다.`);

