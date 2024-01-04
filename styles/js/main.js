$(function () {
    $('.menu-mobile-limit').on('click', function () {
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });
});

// window.addEventListener("scroll", function () {
//     let header = document.querySelector('.header-top, .menu-mobile-list')
//     header.classList.toggle('rolagem', window.scrollY > 0);
// })
window.addEventListener("touchstart", function () {
    let header = document.querySelector('.header-top, .menu-mobile-list')
    header.classList.toggle('rolagem', window.scrollY > 0)

})