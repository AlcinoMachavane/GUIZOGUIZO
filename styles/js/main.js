$(function () {
    $('.menu-mobile-limit').on('click', function(){
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });
});