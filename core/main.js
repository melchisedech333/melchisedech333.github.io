
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

/*
** Controle do carregamento do JSON dos posts.
*/

var globalMaxArticlesPerPage = 10; // Máximo de posts por página.
var globalCurrentPage = 1;
var globalArticles = [];

$(document).ready(function(){
    var jsonArticles = '../'+ g_environment +'/'+ g_area +'.json?rand='+ Math.floor(Math.random() * 31337);

    // Carrega posts do blog e lista artigos da primeira página.
    $.get(jsonArticles, function(articles){
        globalArticles = articles;

        for (var a=0; a<articles.length; a++) {
            if (a >= globalMaxArticlesPerPage)
                break;

            var article = articles[a];
            
            var htmlArticle = `
                <a class="post-link post-item" href="`+ article.link +`" >
                    <div class="row" >
                        <div class="col-md-8" >
                            <div class=" post-title" >
                                `+ article.title +`
                            </div>

                            <div class="post-description" >
                                `+ article.description +`
                            </div>
                        </div>

                        <div class="col-md-4" >
                            <div class="post-image" >
                                <img src="`+ article.image +`" />
                            </div>
                        </div>
                    </div>
                </a>
            `;

            $('.posts').append(htmlArticle);
        }

        // Verifica se já chegou na última página.
        if ((globalMaxArticlesPerPage * globalCurrentPage) >= globalArticles.length)
            $('.btn-load-articles').css('display', 'none');

        // Verifica se não existe artigos publicados.
        if (articles.length <= 0) {
            $('.posts').html(`
                <center>
                    <br><br>
                    <span style='font-size:20px;' >
                        Nenhum item publicado.
                    </span>
                    <br><br><br>
                </center>
            `);
        }
    });

    // Carrega mais posts.
    $('.btn-load-articles').on('click', function(){
        var articleIndex = globalMaxArticlesPerPage * globalCurrentPage;

        for (var a=articleIndex, b=0; a<globalArticles.length; a++, b++) {
            if (b >= globalMaxArticlesPerPage)
                break;

            var article = globalArticles[a];
            
            var htmlArticle = `
                <a class="post-link post-item" href="`+ article.link +`" >
                    <div class="row" >
                        <div class="col-md-8" >
                            <div class=" post-title" >
                                `+ article.title +`
                            </div>

                            <div class="post-description" >
                                `+ article.description +`
                            </div>
                        </div>

                        <div class="col-md-4" >
                            <div class="post-image" >
                                <img src="`+ article.image +`" />
                            </div>
                        </div>
                    </div>
                </a>
            `;

            $('.posts').append(htmlArticle);
        }

        globalCurrentPage++;

        // Verifica se já chegou na última página.
        if ((globalMaxArticlesPerPage * globalCurrentPage) >= globalArticles.length)
            $('.btn-load-articles').css('display', 'none');
    });
});


