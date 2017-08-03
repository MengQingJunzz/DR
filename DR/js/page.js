/**
 * Created by Administrator on 2016/10/6.
 */

$(function(){

   // $('.foot1').load("hf.html");
     //1.移动到li出现选择城市
            //移入li
    $('.top-in .t_right .ul_rig').children('.last').mouseenter(function(){
        $('.top-in .t_right .ul_rig').children('.city').css('display','block');
        $('.top-in .t_right .ul_rig').children('.last').css({
            border:'1px solid #d9b39b',
            borderBottom:'none'
        });
    });
            //移出li
    $('.top-in .t_right .ul_rig').children('.last').mouseleave(function(){
        $('.top-in .t_right .ul_rig').children('.city').css('display','none');
        $('.top-in .t_right .ul_rig').children('.last').css({
            border:'1px solid #fff',
            borderBottom:'none'
        });
    });
            //移入城市选择框
    $('.top-in .t_right .ul_rig').children('.city').mouseenter(function(){
        $('.top-in .t_right .ul_rig').children('.city').css('display','block');
        $('.top-in .t_right .ul_rig').children('.last').css({
            border:'1px solid #d9b39b',
            borderBottom:'none'
        });
    });

            //移出城市选择框
    $('.top-in .t_right .ul_rig').children('.city').mouseleave(function(){
        $('.top-in .t_right .ul_rig').children('.city').css('display','none');
        $('.top-in .t_right .ul_rig').children('.last').css({
            border:'1px solid #fff',
            borderBottom:'none'
        });
    });



    //2.加载公共样式                （回调函数）
   $('#footer').load('html/hf.html #bottom',function(resp,status,xhr){

       //1.扫描二维码
       $('#serv .serv-in ul').children().eq(0).mouseenter(function(){
           $('#serv .serv-in ul').children().eq(0).find('.rfid').css('display','block')
       });
       $('#serv .serv-in ul').children().eq(0).mouseleave(function(){
           $('#serv .serv-in ul').children().eq(0).find('.rfid').css('display','none')
       });


       //2.聊天窗口显示、隐藏
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



       //3.聊天窗口拖动

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



   });
















});