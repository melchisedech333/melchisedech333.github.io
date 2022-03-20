
/*
** Script principal de controle das áreas do portfólio.
**
** Jesus, minha suave briga de puro amor ^_^
*/

$(document).ready(function(){

    console.log('Verbum stared!')

    // Avança para div de conteúdo (usado na versão mobile para descer o scroll).
    $('.btn-arrow-mobile').on('click', function(){
        $('html, body').animate({
            scrollTop: $(".area-port-content").offset().top
        }, 500);
    });

    // Scroll to Top. 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('.scroll-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.scroll-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('.scroll-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                        // Scroll to top of body
        }, 500);
    });
});


