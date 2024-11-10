$(document).ready(function () {
    var owl = $('.owl-one').owlCarousel({
        loop: true,//是否无缝
        items: 3,//图片数量
        margin: 30,//margin-right
        responsive: {
            600: {
                items: 1
            },
            922: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // 控制按钮事件
    $('.prevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.nextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    
    // 人物头像
    var owl2 = $('.owl-two').owlCarousel({
        loop: true,
        items: 3,
        margin: 0,
        responsive: {
            600: { items: 1 },
            922: { items: 2 },
            1200: { items: 3 }
        }
    });
    // 控制按钮事件
    $('.prevBtn2').click(function () {
        owl2.trigger('prev.owl.carousel');
    });

    $('.nextBtn2').click(function () {
        owl2.trigger('next.owl.carousel');
    });
});