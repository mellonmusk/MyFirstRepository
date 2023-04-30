/*function plus(num1,num2)
{
  console.log(num1+num2);
}
plus(2,3);
*/
const btns=document.querySelectorAll(".btns li");
const boxs=document.querySelectorAll("section article");

//버튼의 개수만큼 반복하며 클릭 이벤트 연결
for(let i=0;i<btns.length;i++)
{
  btns[i].addEventListener("click",e=>{
    activation(i,btns);
    activation(i,boxs);
  })
}

function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}