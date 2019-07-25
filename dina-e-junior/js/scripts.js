$('nav a, #center a').click(function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
        targetOffSet = $(id).offset().top;
    $('html,body').animate({
        scrollTop: targetOffSet
    }, 2000);
})