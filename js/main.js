$(document).ready(function(){
  // NAV
  $("#GNB-main, .sub-list").hover(function(){
    $("#GNB-sub").stop().slideDown(200);
  },function(){
    $("#GNB-sub").stop().slideUp(200);
  });

  $("#GNB-main a").removeClass('on');
  $(".sub-list .sub").hover(function(){
    let num=$(this).index();
    console.log(num);
    $("#GNB-main a").eq(num).addClass('on');
  },function(){    
    $("#GNB-main a").removeClass('on');
  });

  // slide
  function slidemv(){
    var svm=$(".slide-con").width();
    $(".slide-box2").animate({
      left:-svm
    },function(){
      $(".slide-con:first").appendTo(".slide-box2");
      $(".slide-box2").css({
        left:0
      });
    });
  }
  setInterval(slidemv, 3000);

  // pop
  $("#pop").hide();
  $(".not-box ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });
})