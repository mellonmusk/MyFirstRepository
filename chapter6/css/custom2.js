const ver=navigator.userAgent;
console.log(ver);


const isIE=/trident/i.test(ver);
console.log(isIE);

if(isIE){
  alert("IE 브라우저로 접속하셨습니다. 이 웹페이지는 IE를 지원하지 않으니 다른 브라우저로 접속해 주십시오.")
}