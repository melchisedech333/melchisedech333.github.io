
/*
** Script principal de controle das áreas do portfólio.
**
** Jesus, minha suave briga de puro amor ^_^
*/

$(document).ready(function(){

    console.log('Verbum stared!')

    // Avança para div de conteúdo (usado na versão mobile para descer o scroll).
    $('.btn-arrow-mobile').on('click', function(){
        var offset = $(".site-area-content").offset();
        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        }, 1000);
    });

});


