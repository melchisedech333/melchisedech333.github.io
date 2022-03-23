### Algumas configurações do site ^_^

<p>
  <b>Pontos importantes:</b>

  - Para cada área do site (cyber, Deus, poesia, ciencia) há seu respectivo diretório com o mesmo nome.
  
  - Dentro de cada diretório da área do site, possui arquivos de configuração, por exemplo: <b>home.json</b>, onde ficam os artigos que são listados nas suas respectivas sub-áreas, como por exemplo, a <i>home</i> da área <b>cyber</b>.

  - Os artigos mais recentes devem ficar no topo do arquivo <i>JSON</i> (home.json, projects.json, etc).

  - Nos arquivos JSON acima mencionados, há um parâmetro chamado <b>link</b>, que aponta para o arquivo HTML do artigo. O documento HTML exemplo possui o nome <b>article-example.html</b>. 

  - No arquivo <b>./core/main.js</b> há uma variável chamada <b>globalMaxArticlesPerPage</b>. A mesma trata-se do número máximo de artigos que devem ser listados por página.

</p>


