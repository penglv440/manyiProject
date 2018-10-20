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


$(".card").html("<img src='image/picture.jpg' style='width:100%;height:1.3rem;opacity:0.9;border-radius:0.1rem 0.1rem 0rem  0rem;' alt=''>" +
    "<h6 style='font-size:0.1rem;margin-top:0.15rem;text-indent:0.05rem;color:rgba(102,102,102,1);'>吴亦凡：歌唱者</h6>" +
    "<p style='text-indent:0.05rem;margin-top:0.06rem;color:rgba(153,153,153,1);'><img src='image/icon_views.png' alt='' style='width:0.14rem;height:0.08rem;margin-right:0.06rem;'>浏览量:1333</p>");


