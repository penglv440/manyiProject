/**
 * Created by Administrator on 2018/8/26 0026
 forget password
 */
$(document).ready(function(){

    function code() {
        var str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
        var str1 = 0;
        for (var i = 0; i < 4; i++) {
            str1 += str.charAt(Math.floor(Math.random() * 62))
        }
        str1 = str1.substring(1)
        $(".code").text(str1);
    }

    code();
    $(".code").click(code);
    //1)验证码框获得焦点：
    //2)验证码框失去焦点
    $('#code').blur(function () {
        if ($(this).val().length == 0) {
               $(".code_text").text("您的输入为空");
               $(".code_text").css("color","red")

        } else if ($(this).val().toUpperCase() != $('.code').text().toUpperCase()) {
            $(".code_text").text("您的输入不正确");
            $(".code_text").css("color","red")
        } else {
            $(".code_text").text("输入成功");
        }
    });
    //点击发送验证码之后
    $("#verifyYz").click(function(){
        $("#alert_text").css("display",'block');
    })
/**************************************************************************************/
	 //第一页的确定按钮
        $("#btn_part1").click(function(){
            if($("#code").val().toUpperCase() == $('.code').text().toUpperCase()) {
                $(".part1").hide();
                $(".part2").show();
                $("#phone_number").text($("#phone").val());
                $(".step li").eq(1).addClass("on");
            }else{
                    return
            }
        });
        //第二页的确定按钮
        $("#btn_part2").click(function(){
            if(!verifyCheck._click()) return;
            $(".part2").hide();
            $(".part3").show();
        });
        //第三页的确定按钮
        $("#btn_part3").click(function(){
            if(!verifyCheck._click()) return;
            $(".part3").hide();
            $(".part4").show();
            $(".step li").eq(2).addClass("on");
            countdown({
                maxTime:10,
                ing:function(c){
                    $("#times").text(c);
                },
                after:function(){
                    window.location.href="../login.html";
                }
            });
        });


    });
    function showoutc(){$(".m-sPopBg,.m-sPopCon").show();}
    function closeClause() {
        $(".m-sPopBg,.m-sPopCon").hide();

})