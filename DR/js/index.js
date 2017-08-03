/**
 * Created by Administrator on 2016/10/6.
 */
function btm () {
    $(".contact_us ul li").eq(0).mousemove(function () {
        $(".contact_us ul li .share").css("display", "block");
    });
    $(".contact_us ul li").eq(0).mouseleave(function () {
        $(".contact_us ul li .share").css("display", "none");
    });
    $(".contact_us ul li .share").mouseenter(function () {
        $(this).css("display", "block");
    });
    $(".contact_us ul li .share").mouseleave(function () {
        $(this).css("display", "none");
    });


    /**
     *对右边fixed的div进行一系列的操作.fixed_bottom ul li p
     */
    var count = 0;
    $(".fixed_bottom ul li").mouseenter(function () {
        console.log($(this).children("p").css("opacity"));
        $(this).children("p").css("display", "block").stop().animate({
            opacity: 1,
            right: "50px"
        }).siblings("a").css("background", "#fff").children("span").css("background-position-x", "-41px");
        $(".fixed_bottom ul .li_7").children("a").css("background", "#fff").children("span").css("background-position-x", "-50px");

    });

    $(".fixed_bottom ul li").mouseleave(function () {
        $(".fixed_bottom ul li").children("p").stop().css({
            opacity: 0,
            right: "0px",
            display: "none"
        }).siblings("a").css("background", "none").children("span").css("background-position-x", "0");
        $(".fixed_bottom ul .li_5").children("p").stop().css("right", "180px");
    });

    $(".fixed_bottom ul .li_5").mouseenter(function () {
        $(this).children("p").css("display", "block").stop().animate({
            opacity: 1,
            right: "235px"
        });
    });

    //返回顶部.fixed_bottom ul .li_7
    $(".fixed_bottom ul .li_7").click(function () {
        //console.log($(document).scrollTop());
        var timer = setInterval(function () {
            var speed = $(document).scrollTop() / 6;
            if (speed <= 0.5) {
                clearInterval(timer);
                $(document).scrollTop("0px");
            }
            $(document).scrollTop($(document).scrollTop() - speed);
        }, 30);

    });
}
