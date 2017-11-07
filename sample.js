$(function(){
  //ハンバーガーメニューのアニメーション
  $("#jQueryPush").on("click",function(){
    $("#jQueryPush").toggleClass("kaiten2");
  });
  $("#jQueryPush").one("click", function(){
    $(".navbar li:nth-child(1)").delay(500).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(2)").delay(1000).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(3)").delay(1500).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(4)").delay(2000).animate({
      opacity: 1,
    },1000);  
  });
});