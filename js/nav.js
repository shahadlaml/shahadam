
//navigation toggle btn
$(document).ready(function(){
    $(".button a").click(function(event){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
       event.preventDefault();
    });

$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});


//the landing page scrool


        // $(window).bind('scroll', function() {
        //     $("#navigation").removeClass("landing-page-head");
        // });

        $("#landing-logo").attr("src","../img/logo/white.svg");
$(window).bind('scroll', function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $("#navigation").addClass("landing-page-head");
        $("#landing-logo").attr("src","../img/logo/white.svg");
    } else {
        $("#navigation").removeClass("landing-page-head");
        $("#landing-logo").attr("src","../img/logo/fullcolor.svg");
    }
});





});
