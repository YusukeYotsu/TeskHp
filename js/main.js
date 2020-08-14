var window_h = $(window).height();

$(window).on("scroll", function(){
    var scroll_top = $(window).scrollTop();
    $(".right").each(function() {
        var elem_pos = $(this).offset().top;
        
        if (scroll_top >= elem_pos - window_h + 200) {
            $(this).addClass("fadein");
        } else{
            $(this).removeClass("fadein");
        }
    });
});

$(window).on("scroll", function(){
    var scroll_top = $(window).scrollTop();
    $(".left").each(function() {
        var elem_pos = $(this).offset().top;
        
        if (scroll_top >= elem_pos - window_h + 200) {
            $(this).addClass("fadein");
        } else{
            $(this).removeClass("fadein");
        }
    });
});


$(window).on("scroll", function(){
    var scroll_top = $(window).scrollTop();
    $(".heart").each(function() {
        var elem_pos = $(this).offset().top;
        
        if (scroll_top >= elem_pos - window_h + 200) {
            $(this).addClass("fadein");
        } else{
            $(this).removeClass("fadein");
        }
    });
});


$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
        $('nav').css('background-color', '#ffffff'); /* htmlファイルのnavタグの背景色変更 */
        }
        else {
        $('nav').css('background', 'none'); /* htmlファイルのnavタグの背景色変更 */
        }
    });
});