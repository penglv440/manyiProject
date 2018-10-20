$(document).ready(function(){
//    时间
    formatTime = function (time){
        return time<9 ? "0"+ time : time
    }
    time = function (){
        var date=new Date()
        var year=date.getFullYear()
        var month=date.getMonth()+1
        var day=date.getDate()
        var hour=date.getHours()
        var minute=date.getMinutes()
		var second=date.getSeconds()
        dates=year+"-"+formatTime(month)+"-"+formatTime(day)+" "+formatTime(hour)+":"+formatTime(minute)+":"+formatTime(second)
        $(".time").html(year+"-"+month)
        return dates

    }
    //初始化时间
    $(".time").html("2018-10-01 00:00:00")

    //阻止a标签的点击事件
    $(".share_and_comment a").click(function(e){
        e.preventDefault()
    })
    // **********************************************************************************************

    //一级评论：
    $("#com").focus(function(){
        $(this).attr('placeholder','')
    })
    $("#com").blur(function(){
        $(this).attr('placeholder','发表评论')
    })
/*    $(".btn_ideas").click(function(){
        if($("#com").val().length > 140){
            console.log("请您重新输入")
        } else{
            $("#list").prepend($(".box").html())
    
        }
    }) 
	*/
    //*********************************************************************************************8**
    // 二级评论
    //点击评论按钮让评论框显示出来
    $(".comment_btn").click(function(e){
        e.preventDefault()
        console.log(this)
        $(".comment").css('display','block')
    })
//    回复评论
    $(".btn").click(function(){
        var comments=$(".comment").val()
        var len=comments.length
        // console.log(len)
        $(".user_comments").html(comments)
        // console.log(comments)
        if(len<0 || len >140 ){
            console.log("请你重新输入合适的字符")
        }else
        {
            $(".comment_time").html(time())
            $(".user_com").css('display','block')
            $(this).parent().append($('.user_com'))
        }
    })
//    鼠标离开评论框，让其隐藏
//     $(".comment").blur(function(){
//         $(this).css('display','none')
//     })
//    删除评论按钮：
    $(".remove_comment").click(function(e){
        e.preventDefault()
        $(".user_com").css('display','none')
    })





})