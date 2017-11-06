# gulp-automate-front-end-tasks


*Clone repository: 
	git clone https://github.com/p8queiroz/gulp-automate-front-end-tasks.git
	git checkout develop

*Install Project Dependencies:
	npm install 

*To run a task:
	npm run gulp taskName

*To run default npm task:
    npm run gulp

*Plugin gulp-clean
    npm install gulp-clean@0.3.1 --save-dev

*Plugin gulp-concat
    npm install gulp-concat@2.6.0 --save-dev

*Plugin gulp-html-replace
    npm install gulp-html-replace@1.5.4 --save-dev

*Plugin gulp-uglify
    npm install gulp-uglify@1.4.1 --save-dev

*Plugin gulp-usemin
    npm install gulp-usemin@0.3.14 --save-dev

*Plugin gulp-cssmin
    npm install gulp-cssmin@0.1.7 --save-dev

*Plugin browser-sync
    npm install browser-sync@2.9.8 --save-dev

*Plugin gulp-jshint
    npm install gulp-jshint@1.11.2 --save-dev

*Plugin jshint-stylish
    npm install jshint-stylish@2.0.1 --save-dev    

*Plugin gulp-csslint
    npm install gulp-csslint@0.2.0 --save-dev

*Plugin gulp-autoprefixer
    npm install gulp-autoprefixer@3.0.2 --save-dev

*Plugin gulp-less
    npm install gulp-less@3.0.3 --save-dev



No HTTP 1.X, o navegador possui um n?mero m?ximo de requisi??es simult?neas para um mesmo dom?nio e como cada recurso externo (CSS, JS, imagens) ? buscado atrav?s de uma requisi??o, n?o ? raro acontecer de outros recursos terem que esperar outros terminarem antes de iniciar seu carregamento.
O problema fica ainda mais grave em redes de alta lat?ncia, como as 3G. A lat?ncia ? o tempo de demora desde o pedido do recurso at? o in?cio do seu envio. Quando maior a lat?ncia, maior o tempo para que o recurso comece a ser enviado e nesse ?nterim, caso o n?mero m?ximo de requisi??es simult?neas tenha sido atingida, haver? um tempo maior at? que o recurso seja processado e por conseguinte liberando para que o pr?ximo recurso seja baixado.

No final, o problema de lat?ncia impacta na experi?ncia do usu?rio, ou seja, na sua percep??o de um carregamento lento.

CURIOSIDADE: no HTTP 2.X, este problema ? minimizado, por que atrav?s de uma ?nica conex?o diversos recursos s?o baixados, o que ? chamado de multiplexing.









