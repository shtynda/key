$(document).ready(function() {

    // Слайдер отзывов
    $('.slickslider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        dotsClass: "my-dots",
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Анимация чисел
    $(window).scroll(function() {
        $('#section4').each(function(){
            if ($(this).offset().top < $(window).scrollTop()+450) {
                $('#key1').animate({ num: 2478 - 2200}, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 2200).toFixed(0);
                    }
                });
                $('#key2').animate({ num: 2456 - 2200}, {
                    duration: 5000,
                    step: function (num){
                        this.innerHTML = (num + 2200).toFixed(0);
                    }
                });
                $('#key3').animate({ num: 3125 - 3000}, {
                    duration: 6000,
                    step: function (num){
                        this.innerHTML = (num + 3000).toFixed(0);
                    }
                });
                $('#key4').animate({ num: 245 - 200}, {
                    duration: 4000,
                    step: function (num){
                        this.innerHTML = (num + 200).toFixed(0);
                    }
                });
                $('#key5').animate({ num: 10 - 1}, {
                    duration: 3000,
                    step: function (num){
                        this.innerHTML = (num + 1).toFixed(0);
                    }
                });
            }
        });
    });

    // Кнопка BackToTop
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Кнопка на хедере Scroll Down
    $("#section07").on("click","a", function (event) {
        event.preventDefault();
        $(this).css({'text-decoration': 'none'});
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 150;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    function windowSize(){
        if ($(window).width() <= '755'){
            $('.contact-map').addClass('order-2');
            $('.contact-form').addClass('order-1');
        } else {
            $('.contact-map').removeClass('order-2');
            $('.contact-form').removeClass('order-1');
        }
    }
    $(window).on('load resize',windowSize);

    $(window).scroll(function() {
    });

    $("#form-call").submit(function() {
        $.ajax({
            type: "POST",
            url: "js/send.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-call").trigger("reset");
        });
        return false;
    });

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "js/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });

});