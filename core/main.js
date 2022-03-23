
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

var globalMaxPostsPerPage = 10; // Máximo de posts por página.
var globalCurrentPage = 1;
var globalPosts = [];

$(document).ready(function(){
    var jsonPosts = '../'+ environment +'/posts.json?rand='+ Math.floor(Math.random() * 31337);

    // Carrega posts do blog e lista artigos da primeira página.
    $.get(jsonPosts, function(posts){
        globalPosts = posts;

        for (var a=0; a<posts.length; a++) {
            if (a >= globalMaxPostsPerPage)
                break;

            var post = posts[a];
            
            var htmlPost = `
                <a class="post-link post-item" href="`+ post.link +`" >
                    <div class="row" >
                        <div class="col-md-8" >
                            <div class=" post-title" >
                                `+ post.title +`
                            </div>

                            <div class="post-description" >
                                `+ post.description +`
                            </div>
                        </div>

                        <div class="col-md-4" >
                            <div class="post-image" >
                                <img src="`+ post.image +`" />
                            </div>
                        </div>
                    </div>
                </a>
            `;

            $('.posts').append(htmlPost);
        }

        // Verifica se já chegou na última página.
        if ((globalMaxPostsPerPage * globalCurrentPage) >= globalPosts.length)
            $('.btn-load-posts').css('display', 'none');
    });

    // Carrega mais posts.
    $('.btn-load-posts').on('click', function(){
        var postIndex = globalMaxPostsPerPage * globalCurrentPage;

        for (var a=postIndex, b=0; a<globalPosts.length; a++, b++) {
            if (b >= globalMaxPostsPerPage)
                break;

            var post = globalPosts[a];
            
            var htmlPost = `
                <a class="post-link post-item" href="`+ post.link +`" >
                    <div class="row" >
                        <div class="col-md-8" >
                            <div class=" post-title" >
                                `+ post.title +`
                            </div>

                            <div class="post-description" >
                                `+ post.description +`
                            </div>
                        </div>

                        <div class="col-md-4" >
                            <div class="post-image" >
                                <img src="`+ post.image +`" />
                            </div>
                        </div>
                    </div>
                </a>
            `;

            $('.posts').append(htmlPost);
        }

        globalCurrentPage++;

        // Verifica se já chegou na última página.
        if ((globalMaxPostsPerPage * globalCurrentPage) >= globalPosts.length)
            $('.btn-load-posts').css('display', 'none');
    });
});


