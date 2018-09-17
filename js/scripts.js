$(document).ready(() => {
    $('#mynav').css({
        opacity: 1
    })
});

$(window).on("load", function () {
    $('#pre-loader').css({
        display: 'None'
    });

});
$(document).on('scroll', function (event) {
    let dh = $(document).height();
    let wh = $(window).height();
    let scroll = $(document).scrollTop() / (dh - wh) * 10000;
    console.log(scroll);

});
