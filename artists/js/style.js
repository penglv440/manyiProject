//样式动态属性
//nav_items 类型鼠标悬浮事件
$(".type_ul li").click(function(e){
          e.preventDefault();

        $(".type_ul li").removeClass('nav_items_active_li');
        $(this).addClass('nav_items_active_li');
        $(".type_li").removeClass("nav_items_active_li");

})
//题材鼠标悬浮事件
$(".matter_ul li").click(function(e){
    e.preventDefault();
    $(".matter_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".matter_li").removeClass("nav_items_active_li");

})
//标签鼠标悬浮事件
$(".tag_ul li").click(function(e){
    e.preventDefault();
    $(".tag_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".tag_li").removeClass("nav_items_active_li");

})
//心情鼠标悬浮事件
$(".emotion_ul li").click(function(e){
    e.preventDefault();
    $(".emotion_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".emotion_li").removeClass("nav_items_active_li");
})
//心情鼠标悬浮事件
$(".scene_ul li").click(function(e){
    e.preventDefault();
    $(".scene_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".scene_li").removeClass("nav_items_active_li");
})
//选项卡按钮
$(" .nav_tab_li").click(function(){
    $(".nav_tab_li").removeClass('nav_tab_li');
    $(this).addClass('nav_tab_li')
})

$(".border").html("<img src='image/picture.jpg' style='width:100%;height:1.3rem' alt=''>" +
    "<h6 style='font-size:0.11rem;margin-top:0.06rem;text-indent:0.05rem'>梁子:劳动者</h6>" +
    "<p style='text-indent:0.05rem;margin-top:0.06rem'><img src='image/icon_views.png' alt=''>浏览量:100</p>")


