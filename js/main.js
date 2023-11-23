$("#moon").on("click",function(){
    $("main").css({
        background: "#282a2b",
        color: "white",
    },500); 
    $(".infoService h4").css({
        color: "white",
    },500);
    $(".mainService div h3:last-child").css({
        color: "#145da6",
    },500);
    $("#hidden-menu").css({
        background: "#282a2b",
        color: "white"
    })
    $("#hidden-menu ul li a").css({
        color: "white"
    })
});

$("#sun").on("click",function(){
    $("main").css({
        background: "white",
        color: "black"
    },500)
    $(".infoService h4").css({
        color: "#777777",
    },500);
    $(".mainService div h3:last-child").css({
        color: "#013161",
    },500);
});

$("#showMenu").on("click",function(){
     $("#hidden-menu").animate({
        "right": 0,
     },500);
});
$(".close").on("click",function(){
    $("#hidden-menu").animate({
        "right": -300,
     },500)
})



$(document).ready(function(){
     
       $("#slider").slick({
       dots: false,
       slidesToShow: 3,
       prevArrow: '<div class="leftArrow"><i class="fa-solid fa-arrow-left"></i></div>',
       nextArrow: '<div class="rightArrow"><i class="fa-solid fa-arrow-right"></i></div>',
      
    })
});

function slowScroll(id){
    $("html, body").animate({
        scrollTop: $(id).offset().top -30
    },500);
    return false;
};
