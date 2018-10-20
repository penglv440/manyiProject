//样式动态属性
//nav_items 专辑鼠标悬浮事件
$(".albums_ul li").click(function(e){
          e.preventDefault();
        $(".albums_ul li").removeClass('nav_items_active_li');
        $(this).addClass('nav_items_active_li');
        $(".albums_li").removeClass("nav_items_active_li");

});
//类型鼠标悬浮事件
$(".kinds_ul li").click(function(e){
    e.preventDefault();
    $(".kinds_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".kinds_li").removeClass("nav_items_active_li");

});
//年代鼠标悬浮事件
$(".years_ul li").click(function(e){
    e.preventDefault();
    $(".years_ul li").removeClass("nav_items_active_li");
    $(this).addClass("nav_items_active_li");
    $(".years_li").removeClass("nav_items_active_li");

});
//选项卡按钮


$("#menu1 .border").html("<img src='image/picture.jpg' style='width:100%;height:1.3rem;opacity:0.9' alt=''>" +
    "<h6 style='font-size:0.11rem;margin-top:0.06rem;text-indent:0.05rem'>吴亦凡：歌唱者</h6>" +
    "<p style='text-indent:0.05rem;margin-top:0.06rem'><img src='image/icon_views.png' alt=''>浏览量:1333</p>");
$("#menu2 .border").html("<img src='image/picture.jpg' style='width:100%;height:1.3rem;opacity:0.9' alt=''>" +
    "<h6 style='font-size:0.11rem;margin-top:0.06rem;text-indent:0.05rem'>梁子：劳动者</h6>" +
    "<p style='text-indent:0.05rem;margin-top:0.06rem'><img src='image/icon_views.png' alt=''>浏览量:10000</p>");

