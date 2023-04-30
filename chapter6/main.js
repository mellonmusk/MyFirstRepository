const btnLeft=document.querySelector(".btnLeft");
const btnRight=document.querySelector(".btnRight");
const box=document.querySelector("#box");
const deg=45;//증가할 각도
let num=0;

//btnLeft 클릭 시
btnLeft.addEventListener("click",e=>{
  e.preventDefault();
  num--;
  box.style.transform=`rotate(${num*deg}deg)`;//45도 각도에 감소된 num값을 deg값과 곱하여 rotate구문에 삽입
});

//btnRight 클릭 시
btnRight.addEventListener("click",e=>{
  e.preventDefault();
  num++;
  box.style.transform=`rotate(${num*deg}deg)`;//45도 각도에 감소된 num값을 deg값과 곱하여 rotate구문에 삽입
});

