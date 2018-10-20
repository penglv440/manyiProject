/**
 * Created by Administrator on 2018/8/19 0019.
 * 1.初始化
 * 2.加载提示框
 * 3.登录时的业务逻辑
 * 4.注册时的业务逻辑
 * 2018年8月26日修改
 *********************************************************************************************************************/
$(document).ready(function() {
    //初始化函数：
    function init(){
    //1.登录注册文字切换时，border底部下划线的变化以及tooltip的显示与隐藏
        $("#login_text ul li").click(function () {
            $("#login_text ul li").removeClass("text-active");
            $(this).addClass("text-active");
        //2.加载提示框
            $("#login_form_first .login_tooltip").tooltip();
            $("#login_shadow .login_input_password_tooltip").tooltip();
            $("#register_form_first .register_input_tooltip").tooltip();
    });
    /**********************************************************************************************************************/
    //   初始化：提示图片隐藏  所有alert_text 的span标签以及tooltip标题框全部隐藏
    //  1.初始化登录
        $("#login_form_first .login_tooltip").tooltip('hide');
         $("#login_form_first  div .login_text_alert").css("visibility", "hidden");
        $(".register_img_alert").css("visibility", "hidden");
    //2.初始化注册
         $("#register_form_first  div .register_text_alert").css("visibility", "hidden");

//    3.加载提示框
        $("#login_form_first .login_tooltip").tooltip();
        $("#login_shadow .login_input_password_tooltip").tooltip();
        $("#register_form_first .register_input_tooltip").tooltip();
     // 4.加载用户注册协议和隐私协议模态框
        $('[data-toggle="popover"]').popover();
    }
    init()
    //**********************************************************************************************************************
    //登录注册函数
    function  login() {

//    登录验证：
//        登录区账户输入框获得焦点
        $("#input_phone_or_email").focus(function () {
            $(".text_alert_phone").css('visibility', 'visible');
            $(this).attr('placeholder', '');
            $(".login_input_phone").css("borderBottom", "1px solid #24C78B");
            // $(".login_tooltip_phone").attr('data-original-title', '').tooltip('hide');
        });
        //2.失去焦点
        var reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        var reg_phone = /^1\d{10}$/;
        $("#input_phone_or_email").blur(function () {
            if ($(this).val().length == 0) {
                $(".login_img_alert_phone").css('visibility', 'visible');
                $(".login_tooltip_phone").attr('data-original-title', '您输入的账户为空').tooltip('show');
            }
            else if (reg_email.test($(this).val()) || reg_phone.test($(this).val())) {
                $(".login_img_alert_phone").css('visibility', 'hidden');
                // $(".login_tooltip_phone").attr('data-original-title', '').tooltip('hide');//2018年8月26日改
            } else {
                $(".login_tooltip_phone").attr('data-original-title', '您的输入有误').tooltip('show');
                $(".login_img_alert_phone").css('visibility', 'visible');
            }
        });

//        密码输入验证
//        密码输入框获得焦点
        $("#input_password").focus(function () {
            // $(".login_tooltip_pwd").attr('data-original-title', '').tooltip('hide');
            $(this).attr('placeholder', '');
            $(".text_alert_pwd").css('visibility', 'visible');
            $(".login_input_pwd").css("borderBottom", "1px solid #24C78B");

        });
//        密码输入框失去焦点
        $("#input_password").blur(function () {
            if ($(this).val().length == 0) {
                $(".login_tooltip_pwd").attr('data-original-title', '您输入的密码为空').tooltip('show');
                $(".login_img_alert_pwd").css('visibility', 'visible');

            } else if ($(this).val().length > 0 && $(this).val().length < 6) { //此处需要获取服务器数据，进行判断
                $(".login_tooltip_pwd").attr('data-original-title', '您输入的密码不正确').tooltip('show');
                $(".login_img_alert_pwd").css('visibility', 'visible');
            } else {
                $(".login_img_alert_pwd").css('visibility', 'hidden');
                $(".login_tooltip_pwd").attr('data-original-title', '').tooltip('hide');
            }

        });

        //点击登录按钮
        $(".login_button").click(function (e) {
            e.preventDefault();
            for (var j = 0; j < 2; j++) {
                if ($('#login_form_first input').eq(j).val().length == 0) {
                    $('#login_form_first input').eq(j).focus();
                    if (j == 1) {
                        $('#login_form_first input .login_img_alert').css('visibility', 'show');
                        return;
                    }
                    e.preventDefault();
                    return;
                }
            }
        })
        //***********************************************************************************************************************
        // 注册验证
        //1注册手机号码和邮箱验证
        // var stuList = getStuList();
        // 1).获得焦点
        $("#phone_text").focus(function () {
            $(".register_text_alert_phone").css('visibility', 'visible')
            $(".register_input_phone").css('borderBottom', '1px solid #24C78B');
            $("#phone_text").attr('placeholder', '')

        });
        //2).失去焦点
        var reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        var reg_phone = /^1\d{10}$/;
        $("#phone_text").blur(function () {
            if ($(this).val().length == 0) {
                $("#register_form_first .img_alert_phone").css("visibility", 'visible');
                $(".register_input_phone").attr('data-original-title', '您的输入为空').tooltip('show');
            }
            else if (reg_email.test($(this).val()) || reg_phone.test($(this).val())) {
                $("#register_form_first .img_alert_phone").css("visibility", 'hidden');
            } else {
                $(".register_input_phone").attr('data-original-title', '您的输入有误').tooltip('show');
                $("#register_form_first .img_alert_phone").css("visibility", 'visible');
            }
        });
        //******************************************************************************************************************************
        //2.验证码功能
        function code() {
            var str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
            var str1 = 0;
            for (var i = 0; i < 4; i++) {
                str1 += str.charAt(Math.floor(Math.random() * 62))
            }
            str1 = str1.substring(1)
            $("#code").text(str1);
        }

        code();
        $("#code").click(code);
//  1)验证码框获得焦点：
        $("#input_code").focus(function () {
            $(this).attr('placeholder', '')
            $("#register_form_first .register_input_check").css('borderBottom', '1px solid #24C78B');
            $("#register_form_first  div .text_alert_check").css("visibility", "visible");
            $("#register_form_first  div .text_alert_check").text("请输入验证码");
        });
        //2)验证码框失去焦点
        $('#input_code').blur(function () {
            if ($(this).val().length == 0) {
                $(".img_alert_check").css("visibility", 'visible');
                $(".register_tooltip_check").attr('data-original-title',
                    '您还没有输入验证码').tooltip('show');

            } else if ($(this).val().toUpperCase() != $("#code").text().toUpperCase()) {
                $(".img_alert_check").css("visibility", 'visible');
                $(".register_tooltip_check").attr('data-original-title', '您输入的验证码有误').tooltip("show")
            } else {
                $(" .img_alert_check").css("visibility", 'hidden');
                $(".register_tooltip_check").attr('data-original-title',
                    '').tooltip('hide');
            }
        });
        //*****************************************************************************************************************************
        // 3.设置密码：
        // 1)输入框聚焦：
        $("#set_pwd").focus(function () {
            $(".text_alert_password").css('visibility', 'visible');
            $(".register_input_password").css('borderBottom', '1px solid #24C78B');
            $(this).attr('placeholder', '')
        });
        // 2) 失去焦点：
        $("#set_pwd").blur(function () {
            if ($(this).val().length == 0) {
                $(".register_input_password").attr('data-original-title', '您的输入为空').tooltip('show');
                $(".img_alert_password").css('visibility', 'visible');
            } else if ($(this).val().length > 0 && $(this).val().length < 6) {
                $(".register_input_password").attr('data-original-title', '密码长度需大于6位').tooltip('show');
                $(".img_alert_password").css('visibility', 'visible');
            } else if ($(this).val().length >= 6 && !isNaN($(this).val())) {
                $(".register_input_password").attr('data-original-title', '密码不能为纯数字，需包含英文字符').tooltip('show');
                $(".img_alert_password").css('visibility', 'visible');
            } else {
                $(".register_input_password").attr('data-original-title', '').tooltip('hide');
                $(".img_alert_password").css('visibility', 'hidden');

            }
        });
        //*****************************************************************************************************************************
        //4.确认密码：
        //获得焦点：
        $("#confirm_pwd").focus(function () {
            $(this).attr('placeholder', '');
            $('.text_alert_confirm_pwd').css('visibility', 'visible');
            $(".register_confirm_pwd").css("borderBottom", '1px solid #24C78B ');
        });
        //失去焦点：
        $("#confirm_pwd").blur(function () {
            if ($(this).val().length == 0) {
                $(".register_tooltip_confirm_pwd").attr('data-original-title', '您的输入为空').tooltip("show");
                $('.img_alert_confirm_pwd').css('visibility', 'visible');
            } else if ($(this).val() != $("#set_pwd").val()) {
                $(".register_tooltip_confirm_pwd").attr('data-original-title', '您两次输入的密码不一致').tooltip("show")
                $('.img_alert_confirm_pwd').css('visibility', 'visible');
            } else {
                $('.img_alert_confirm_pwd').css('visibility', 'hidden');
                $(".register_tooltip_confirm_pwd").attr('data-original-title', '').tooltip("hide")
            }
        });

        // **************************************************************************************************************************

//    ****************************************************************************************************************************
        //6.用户协议
        var onOff = false
        $("#check").click(function () {
            onOff = !onOff
            if (onOff) {
                // 5.提交按钮：
                $(".register_btn").click(function (e) {
                    e.preventDefault();
                    for (var j = 0; j < 5; j++) {
                        if ($('#register_form_first input').eq(j).val().length == 0) {
                            $('#register_form_first input').eq(j).focus();
                            if (j == 4) {
                                $('#register_form_first input .register_img_alert').css('visibility', 'show');
                                return;
                            }
                            e.preventDefault();
                            return;
                        }
                    }
                })

                $('.register_btn').css('background', '#24C78B');
            } else {
                $(".register_btn").css('background', 'lightgray');
            }


            //     if ($("#check")) {
            //
            //         // $('.register_btn').css('background','#24C78B');
            //
            //         //向变量stuList数组添加一个数值，数值内部格式Student(name,password,tel,id)
            //         //发送用户信息
            //         stuList.push(new Student($('input').eq(0).val(), $('input').eq(1).val(), $('input').eq(3).val(), stuList.length + 1));
            //         localStorage.setItem('stuList', JSON.stringify(stuList));
            //         alert("注册成功");
            //         window.open("userlist.html", "_blank");
            //     } else {
            //         $("#xieyi").next().next().next(".tips").text("请勾选协议");
            //         $("#xieyi").next().next().next(".tips").css("color", 'red');
            //         e.preventDefault();
            //         return;
            //     }
            // })
        })
    }
        login()

    // ***************************************************************************************************************
        //    其他登录方式是鼠标悬浮变化背景
        $("#login_qq").mouseenter(function(){
            $(this).attr('src','image/2.登陆注册/dl_qq_click.png')
        });
    $("#login_qq").mouseleave(function(e){
        e.stopPropagation();
        $(this).attr('src','image/2.登陆注册/dl_qq.png')
    });
    $("#login_weixin").mouseenter(function(){
        $(this).attr('src','image/2.登陆注册/dl_weixin_click.png')
    });
    $("#login_weixin").mouseleave(function(){
        $(this).attr('src','image/2.登陆注册/dl_weixin.png')
    });
    $("#login_weibo").mouseenter(function(){
        $(this).attr('src','image/2.登陆注册/dl_weibo_click.png')
    });
    $("#login_weibo").mouseleave(function(){
        $(this).attr('src','image/2.登陆注册/dl_weibo.png')
    });
    //消除切换按钮时tooltip不消除的bug
    $("#login_button").click(function() {
        $(".register_input_tooltip").attr('data-toggle-title', '').tooltip('hide');
    });
    $("#register_button").click(function(){
        $(".login_tooltip").attr('data-toggle-title','').tooltip('hide')
    });
    $("#data_agent").click(function(){
        $(".register_input_tooltip").attr('data-toggle-title', '').tooltip('hide');
//       $(".login_tooltip").attr('data-original-title','').tooltip("hide");
    });
    $("#data_private").click(function(){
        $(".register_input_tooltip").attr('data-toggle-title', '').tooltip('hide');
//           $(".login_tooltip").attr('data-original-title','').tooltip("hide");
    });
})

    //*****************************************************************************************************************************
// //  建立构造函数，构造学生信息模板
//     function Student(name,password,tel,id){
//         this.name = name;
//         this.password = password;
//         this.tel = tel;
//         this.id = id;
//     }
// //	获取之前所有已经注册的用户集合
//     function getStuList(){
//         var list = localStorage.getItem('stuList');
//         if(list != null){
//             return JSON.parse(list);
//         }else{
//             return new Array();
//         }
//     }