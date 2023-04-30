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