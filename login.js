// 로고 클릭시 메인 화면으로 이동
//  = div 클릭시 다른 화면으로 이동
var myDiv = document.querySelector(".top1");
var linkToGo = "main.html";

window.open(linkToGo, "_blank");

myDiv.addEventListener("click", function () {
  // 새창에 뜨게 하기
  window.open(linkToGo, "_blank");

  // 기존 창에 뜨게하기
  // window.location.href = linkToGo;
});
