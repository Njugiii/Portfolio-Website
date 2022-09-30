
// PANEL
$(document).ready(function(){
     $("#bn").click(function(){
         $("#panel").slideToggle(270);
     });
});

$(document).ready(function(){
     $(".ppl").click(function(){
         $("#panel").slideToggle(470);
     });
});

$(document).ready(function(){
     $(".bdy, #bz").click(function(){
         $("#panel").slideUp(570);
     });
});

// END


// HERO-HEAD
$(document).ready(function(){
     $(".side").scrollTop(function(){
          $('.hero-text').animate({
               fontSize : '167%'
          },2000);
     });
});

$(document).ready(function(){
     $(".side").scrollTop(function(){
          $('.hero-text').animate({
               fontSize : '107%'
          },2700);
     });
});

$(document).ready(function(){
     $(".side").scrollTop(function(){
          $('.hero-text').animate({
               textShadow : "5px 5px 6px red"
          });
     });
});

// END


// PANEL TOGGLE
$(document).ready(function(){
     $("#ho").click(function(){
         $(".hero-text").animate({
               fontSize : "142%"
         },900);
     });
});

$(document).ready(function(){
     $("#ho").click(function(){
         $(".hero-text").animate({
               fontSize : "107%"
         },1000);
     });
});

$(document).ready(function(){
     $("#sy").click(function(){
         $("#sidea").animate({
               fontSize : "147%"
         },1600);
     });
});


$(document).ready(function(){
     $("#foot, #bz, #sd, #album, #sideb, #sidec, #gr, #hdd, #hi").click(function(){
         $("#sidea").animate({
              fontSize : "100%"
         }, 1200);
     });
});

$(document).ready(function(){
     $("#pe").click(function(){
         $("#grr").animate({
               fontSize : "120%"
         },2300);
     });
});

$(document).ready(function(){
     $("#foot, #bz, #sd, #grtd, #album, #sp, #dp, #hdd, #hi").click(function(){
         $("#grr").animate({
               fontSize : "100%"
         },2300);
     });
});


$(document).ready(function(){
     $("#ps").click(function(){
         $(".pj").animate({
               height : "147px",
               width : "147px",
         },2300);
     });
});


$(document).ready(function(){
     $("#pe").click(function(){
         $(".pj").animate({
          fontSize : "120%"  
         },2300);
     });
});


$(document).ready(function(){
     $("#ps").click(function(){
          $(".pj").animate({
               height : "147px",
               width : "137px",
          }, 1500);
     });
});

$(document).ready(function(){
     $("#ps").click(function(){
         $(".pi").animate({
               fontSize : "157%"
         }, 2200);
     });
});


$(document).ready(function(){
     $("#cc").click(function(){
         $(".ftt").animate({
               height : "137px",
               width : "137px",  
         },2000);
     });
});

// END


// SPECIALITIES
$(document).ready(function(){
     $("#sidea").mouseenter(function(){
         $("#sidea").animate({
               fontSize : "147%"
         },1000);
     });
});

$(document).ready(function(){
     $("#sidea").mouseleave(function(){
         $("#sidea").animate({
               fontSize : "107%"
         },1300);
     });
});

// END


// PROFFESIONAL PROFILE/GRAD
$(document).ready(function(){
     $(".grad").mouseenter(function(){
         $("#grr").animate({
               fontSize : "122%"
         }, 1000);
     });
});


$(document).ready(function(){
     $(".grad").mouseleave(function(){
         $("#grr").animate({
               fontSize : "100%"
         }, 1000);
     });
});


// END



// PORTFOLIO
$(document).ready(function(){
     $(".dp").mouseenter(function(){
         $(".pj").animate({
               height : "157px",
               width : "157px",
         }, 1300);
     });
});


$(document).ready(function(){
     $('#jt, #jttt').click(function () {
          if ($(window).width() < 767) {
                    $(".pj").animate({
                         height : "87px",
                         width : "87px",
                    }, 1300);
               };
     });
});

$(document).ready(function(){
     $('.pj').click(function () {
          if ($(window).width() < 767) {
                    $(".pj").animate({
                         height : "147px",
                         width : "147px",
                    }, 1300);
               };
     });
});

$(document).ready(function(){
     $(".dp").mouseleave(function(){
         $(".pj").animate({
               height: "87px",
               width: "87px"
         }, 2300);
     });
});



// PERCENTILES
$(document).ready(function(){
     $(".dp").mouseenter(function(){
         $(".pi").animate({
               fontSize : "157%"
         }, 1700);
     });
});

$(document).ready(function(){
     $(".dp").mouseleave(function(){
         $(".pi").animate({
               fontSize : "110%"
         }, 1500);
     });
});

// END


// HOME BUTTONS
$(document).ready(function(){
     $("#bt").click(function(){
         $(".pj").animate({
               height : "137px",
               width : "137px",
         }, 1700);
     });
});

$(document).ready(function(){
     $("#foot, #sd, #album, #gr, #hdd, #sp").click(function(){
         $(".pj").animate({
               height : "87px",
               width : "87px",
         }, 870);
     });
});

$(document).ready(function(){
     $("#pe").click(function(){
         $(".pi").animate({
               fontSize : "157%"
         }, 2000);
     });
});

$(document).ready(function(){
     $("#foot, #sd, #album, #gr, #hdd, #sp").click(function(){
         $(".pi").animate({
              fontSize : "100%"
         }, 870);
     });
});

$(document).ready(function(){
     $("#by").click(function(){
         $(".ftt").animate({
               margin : "127px 0 0 0"
         },1700);
     });
});

$(document).ready(function(){
     $("#by").click(function(){
         $(".ftt").animate({
               height : "157px",
               width : "157px"
         }, 1600);
     });
});

$(document).ready(function(){
     $("#dp, #sd, #album, #gr, #hdd, #sp").click(function(){
         $(".ftt").animate({
               height : "87px",
               width : "87px",
         }, 870);
     });
});

// END


// FOOT
$(document).ready(function(){
     $(".ft").mouseenter(function(){
         $(".ftt").animate({
               margin : "127px 0 0 0"
         },870);
     });
});

$(document).ready(function(){
     $(".ft").mouseenter(function(){
         $(".ftt").animate({
          height : "147px",
          width : "147px"
         }, 1000);
     });
});

$(document).ready(function(){
     $(".ft").mouseleave(function(){
         $(".ftt").animate({
          height: "97px",
          width: "97px",
          margin : "0"
         }, 2500);
     });
});

// END

// SOCIAL MEDIA LINKS
$(document).ready(function(){
     $("#ig").mouseenter(function(){
         $("#ig").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

$(document).ready(function(){
     $("#ig").mouseleave(function(){
         $("#ig").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

$(document).ready(function(){
     $("#tw").mouseenter(function(){
         $("#tw").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

$(document).ready(function(){
     $("#tw").mouseleave(function(){
         $("#tw").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

$(document).ready(function(){
     $("#em").mouseenter(function(){
         $("#em").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

$(document).ready(function(){
     $("#em").mouseleave(function(){
         $("#em").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

$(document).ready(function(){
     $("#lo").mouseenter(function(){
         $("#lo").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

$(document).ready(function(){
     $("#lo").mouseleave(function(){
         $("#lo").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

$(document).ready(function(){
     $("#rd").mouseenter(function(){
         $("#rd").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

// END

$(document).ready(function(){
     $("#rd").mouseleave(function(){
         $("#rd").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

$(document).ready(function(){
     $("#spo").mouseenter(function(){
         $("#spo").animate({
          height : "177px",
          width : "177px"
         },770);
     });
});

$(document).ready(function(){
     $("#spo").mouseleave(function(){
         $("#spo").animate({
          height : "147px",
          width : "147px"
         },870);
     });
});

// END

