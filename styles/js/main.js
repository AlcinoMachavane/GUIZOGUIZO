$(function () {
    $('.menu-mobile-limit').on('click', function(){
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });
});

window.addEventListener("scroll", function (){
    let header = document.querySelector('.header-top')
    header.classList.toggle('rolagem', window.scrollY > 0)
})