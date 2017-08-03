/**
 * Created by Administrator on 2016/10/4.
 */

$(function() {

    //1.轮播图
        //定时器
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index == $('._scroll').children().length) {
            index = 0;
        }

        //改变图片下标的样式
        $('.resign').children().eq(index).addClass('bg').siblings().removeClass('bg');
        //连缀 改变图片的出现顺序
        $('._scroll').children().eq(index).fadeIn(2000).siblings().fadeOut(2000);

    }, 4000);


    //2.扫描二维码
    $('#serv .serv-in ul').children().eq(0).mouseenter(function(){
        $('#serv .serv-in ul').children().eq(0).find('.rfid').css('display','block')
    });
    $('#serv .serv-in ul').children().eq(0).mouseleave(function(){
        $('#serv .serv-in ul').children().eq(0).find('.rfid').css('display','none')
    });


    //3.聊天窗口显示、隐藏
    $('#serv .serv-in ul').children().eq(3).click(function(){
        $('#serv .serv-in ul').children().eq(3).find('._chat').css('height','500px');

        $('#serv .serv-in ul').children().eq(3).find('._chat').css('display','block');
    });


       //删除
    $('#serv .serv-in ul').children().eq(3).children('._chat').children('.bor').children().eq(1).click(function(){

       $(this).parent().parent().css('display','none');

        //写在li内部，点击时需要阻止事件冒泡，否则触发点击li事件后，div仍然显示出来
        return false;
    });

       //隐藏
    $('#serv .serv-in ul').children().eq(3).children('._chat').children('.bor').children().eq(0).click(function(){

        $(this).parent().parent().css('height','0');

        //写在li内部，点击时需要阻止事件冒泡，否则触发点击li事件后，div仍然显示出来
        return false;
    });


    //4.聊天窗口拖动

    $('._chat').mousedown(function(evt){

        var x = evt.offsetX;
        var y = evt.offsetY;

        //给document绑定mousemove事件
        $(document).bind('mousemove',function (evt){
            var X = evt.clientX - x;
            var Y = evt.clientY - y;

            $('._chat').css('left', X + 'px');
            $('._chat').css('top',Y + 'px');
        });

        //mouseup时解除绑定
        $(document).bind('mouseup', function (evt) {
            $(document).unbind('mousemove');
        })
    });



    //5.验证码
    getCode();
    $('#codeNum').click(function(){
        getCode();

    });

    function  getCode(){
        var index1 = String.fromCharCode(Math.round(Math.random()*25 + 97));
        var index2 = String.fromCharCode(Math.round(Math.random()*25 + 65));
        var index3 = String.fromCharCode(Math.round(Math.random()*9 + 48));
        var index4 = String.fromCharCode(Math.round(Math.random()*9 + 48));

        $('#codeNum').html(index4 + index1 + index3 + index2);

    }





});



