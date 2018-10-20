/**
 * Created by Administrator on 2018/9/2 0002.
 */
//    获取短信验证码倒计时***************************************8***************
$(document).ready(function(){


function invokeSettime(obj){
    var countdown=60;
    settime(60);
    function settime(){
        if(countdown==0){
            clearInterval(timer);
            $(obj).removeAttr("disabled");
            $(obj).text("获取验证码");
            countdown=60
        }else{
            $(obj).attr('disabled','true');
            $(obj).text(" "+countdown+"s后重新发送");
        }
        countdown--;
    }
    var timer=setInterval(function(){
        settime(obj)
    },1000)
}
$("#message_btn").click(function(){
    new invokeSettime("#message_btn");
    $("#alert_message").css('display','block');
//        $("#message_pwd").attr('placeholder','');
});
//    ***************************************************************
//    样式动态控制：
$("#message_pwd").focus(function(){
    $(this).attr('placeholder','');
    $('.text_alert_pwd').css('visibility','visible');
});
$("#message_pwd").blur(function(){
    if($(this).val().length==0){
        $(".login_img_alert_pwd").css("visibility","visible");
//            $("#alert_message").css('display','block');
        $(".login_tooltip_pwd").attr("data-original-title","您的输入为空").tooltip("show");
    }else if($(this).val() != "123456"){//此处需配合后端进行操作，与服务器发送的验证码进行对比
        $(".login_img_alert_pwd").css("visibility","visible");
        $(".login_tooltip_pwd").attr("data-original-title","您的输入不正确").tooltip("show");
//             console.log("您的输入有误")
    }else{
        $(".login_img_alert_pwd").css("visibility","hidden");
        $(".login_tooltip_pwd").attr("data-original-title","").tooltip("hide");
        console.log("您的输入正确")
    }
})

})