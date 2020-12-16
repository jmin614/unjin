//메인배너 함수
$(document).ready(function() { //시작하자마자
$("#img1").show(); //이미지가 보이고
imgslide(); //이미지사이드 함수 실행
});
function imgslide(){
  var $val = $("#mainbanner").attr("val");
  var $mx = $("#mainbanner").attr("mx");

  $("#img"+$val).hide();
  if( $val == $mx ){ $val = 1; } //마지막번호면 되돌리기
  else{ $val++; } //아니면 카운트 증가시키기
  $("#img"+$val).fadeIn(1500); //이미지 나타냄, 페이드인
  $("#mainbanner").attr('val',$val); //번호부여
  setTimeout('imgslide()',3000); //호출
  }


//룩북 클릭함수
$(function(){
  $(".look_list a").click(function(){ //a를 클릭했을 때 실행
    $("a").removeClass("on");
    $(this).addClass("on"); //선택하기!!!
    $(".img_box img").attr("src",$(this).attr("href")); //클릭 시 이미지 바꾸기!
    return false;
  });
});
