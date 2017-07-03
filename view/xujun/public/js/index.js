$(function(){
    var mySwiper = new Swiper('.swiper-container', {
    	autoplay: 3000,//可选选项，自动滑动
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    $(".nav-item").on("mouseenter",function(){
        var _navChild = $(this).find("li");
        for(var i =0;i<_navChild.length;i++){
            $(this).find("li").eq(i).css({"animation":"fadeInLeft 0.5s","animation-delay":0.5*i+"s","animation-fill-mode":"forwards"});
        }
        var _navChildH = $(this).find(".nav-item-list").height();
        $(".nav-child-bg").css({"height":_navChildH});
    });
    $(".nav-item").on("mouseleave",function(){
        $(this).find(".nav-item-list li").css({"animation":"fadeOutRight 0.5s","animation-fill-mode":"forwards"});
        $(".nav-child-bg").css({"height":0});
    });
})
