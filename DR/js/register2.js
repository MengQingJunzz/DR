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


//3.再次确认密码
    $('#repwd').bind({
        focus:function(){
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
        },
        blur:function(){
            $('#repwd').css('border-color','red');
            var pasWd = $('input[id=pwd]').val();
            var rePws = $('input[id=repwd]').val();
            if(rePws == ''){
                $('.message').html('请输入确认密码!').css('visibility','visible');

            }
            if(pasWd != rePws){
                $('.message').html('密码与确认密码不一致 请重新输入!').css('visibility','visible');
            }
        }
    });


//4.验证码
    $('#code').bind({
        focus:function(){
            $('#repwd').css('border-color','red');
            var pasWd = $('input[id=pwd]').val();
            var rePws = $('input[id=repwd]').val();
            if(rePws == ''){
                $('.message').html('请输入确认密码!').css('visibility','visible');

            }
            if(pasWd != rePws){
                $('.message').html('密码与确认密码不一致 请重新输入!').css('visibility','visible');
            }
        },
        blur:function(){
            $('#code').css('border-color','red');
            var sureInner = $('input[id=code]').val();
            var codeInner = $('#codeNum').html();

            //输入验证码不区分大小写
            var sureLow = sureInner.toLowerCase();
            var codeLow = codeInner.toLowerCase();

            if(sureInner == ''){
                $('.message').html('请输入验证码！').css('visibility','visible');
            }
            if(sureLow != codeLow){
                $('.message').html('验证码错误！').css('visibility','visible');
            }
        }
    })


//5.注册成功 （选中同意协议后点击注册才能成功）

    $('#check').change(function(){

        //prop判断checkbox是否被选中
        if($('#check').prop('checked') == true){

            $('.btn').click(function(){
                var uName = $('input[id=user]').val();
                var res = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

                var pasWd = $('input[id=pwd]').val();
                var res2 =/^[a-z0-9_-]{6,20}$/;

                var pasWd = $('input[id=pwd]').val();
                var rePws = $('input[id=repwd]').val();

                var sureInner = $('input[id=code]').val();
                var codeInner = $('#codeNum').html();
                //输入验证码不区分大小写
                var sureLow = sureInner.toLowerCase();
                var codeLow = codeInner.toLowerCase();

                if(res.test(uName) && uName != '' && res2.test(pasWd) && pasWd != '' && pasWd == rePws
                    && sureLow == codeLow){
                    window.location.href ='login.html';
                }else{

                }
            });

        }
    })






});