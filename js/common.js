$(function(){
  $(".look_list a").click(function(){ //a를 클릭했을 때 실행
    $("a").removeClass("on");
    $(this).addClass("on"); //선택하기!!!
    $(".img_box img").attr("src",$(this).attr("href")); //클릭 시 이미지 바꾸기!
    return false;
  });
});
