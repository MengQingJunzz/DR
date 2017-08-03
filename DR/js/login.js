/**
 * Created by Administrator on 2016/10/5.
 */


$(function(){
//1.用户名（邮箱）验证
    $('#user').bind({
        focus:function(){
            $('.message').css('visibility','hidden');
        },

        blur:function() {
            $('#user').css('border-color', 'red');
            var uName = $('input[id=user]').val();
            var res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if(uName == ''){

                $('.message').html('请输入您的邮箱地址!');
                $('.message').css('visibility','visible');

            }
            if(!res.test(uName) && uName != ''){
                $('.message').html('邮箱格式错误 请重新输入!');
                $('.message').css('visibility','visible');
            }

        }
    });



//2.密码验证

    $('#pwd').bind({
        focus:function(){

            $('#user').css('border-color', 'red');
            var uName = $('input[id=user]').val();
            var res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if(uName == ''){

                $('.message').html('请输入您的邮箱地址!');
                $('.message').css('visibility','visible');

            }
            if(!res.test(uName) && uName != ''){
                $('.message').html('邮箱格式错误 请重新输入!');
                $('.message').css('visibility','visible');
            }
        },
        blur:function(){
            $('#pwd').css('border-color','red');
            var pasWd = $('input[id=pwd]').val();
            var res2 =/^[a-z0-9_-]{6,20}$/;
            if( pasWd == ''){
                $('.message').html('请输入您的密码!');
                $('.message').css('visibility','visible');
            }
            if(!res2.test(pasWd) && pasWd != ''){
                $('.message').html('请输入长度为6-20位的密码!');
                $('.message').css('visibility','visible');
            }

        }

    });



//3.是否记住密码

    // 记住密码
    $('#check').change(function(){

        //prop判断checkbox是否被选中
        if($('#check').prop('checked') == true){

            $('.btn1').click(function(){

                var uName = $('input[id=user]').val();
                var res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

                var pasWd = $('input[id=pwd]').val();
                var res2 =/^[a-z0-9_-]{6,20}$/;

                if(res.test(uName) && uName != '' && res2.test(pasWd) && pasWd != ''){

                    //传入cookie
                    var temJson = {
                        name:$('input[id=user]').val(),
                        pwd:$('input[id=pwd]').val()
                    };

                    var strJson = JSON.stringify(temJson);        //转换为字符串
                    $.cookie($('input[id=user]').val(),strJson,{expires:7});

                    //跳转
                    window.location.href ='index.html';
                }



            })
        }

    });


    //点击跳转
    $('.btn1').click(function(){
        var uName = $('input[id=user]').val();
        var res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        var pasWd = $('input[id=pwd]').val();
        var res2 =/^[a-z0-9_-]{6,20}$/;

        if(res.test(uName) && uName != '' && res2.test(pasWd) && pasWd != ''){

            window.location.href ='index.html';
        }

    });


    //点击注册
    $('.btn2').click(function(){
        window.location.href ='register.html';
    });




});