describe('Conjunto de Testes', function(){

	var buscaTeste;
	var usuarioTeste = "nilerbarcelos";

	var retornoGetUsuarioTeste = [{
  "login": "nilerbarcelos",
  "id": 36220,
  "avatar_url": "https://avatars1.githubusercontent.com/u/36220?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/nilerbarcelos",
  "html_url": "https://github.com/nilerbarcelos",
  "followers_url": "https://api.github.com/users/nilerbarcelos/followers",
  "following_url": "https://api.github.com/users/nilerbarcelos/following{/other_user}",
  "gists_url": "https://api.github.com/users/nilerbarcelos/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/nilerbarcelos/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/nilerbarcelos/subscriptions",
  "organizations_url": "https://api.github.com/users/nilerbarcelos/orgs",
  "repos_url": "https://api.github.com/users/nilerbarcelos/repos",
  "events_url": "https://api.github.com/users/nilerbarcelos/events{/privacy}",
  "received_events_url": "https://api.github.com/users/nilerbarcelos/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Niler Barcelos",
  "company": "Trier Sistemas",
  "blog": "http://nilerbarcelos.com",
  "location": "Santa Catarina, Brasil",
  "email": "contato@nilerbarcelos.com",
  "hireable": true,
  "bio": null,
  "public_repos": 13,
  "public_gists": 1,
  "followers": 10,
  "following": 15,
  "created_at": "2008-11-24T00:08:36Z",
  "updated_at": "2017-04-06T18:50:31Z"
}];


	var retornoMensagem = {36220: "Teste Mensagem"};

	var mensagensTeste = {};
	var idUsuarioTeste = 36220;
	var mensagemTeste = "Teste Mensagem";

    mensagensTeste[idUsuarioTeste] = mensagemTeste;
    var mensagemEnviada = localStorage.setItem('usuarioMensagem', JSON.stringify(mensagensTeste));


	beforeEach(angular.mock.module('appConsultaGit'));


	beforeEach(inject(function(dataFactory){
		BuscaTeste = dataFactory;
	}))

	it('Serviço Existe?', function(){
		expect(BuscaTeste).toBeDefined();
	});

	describe('Métodos Existem?', function(){

		it('Método getUsuarios Existe?', function(){
			expect(BuscaTeste.getUsuarios).toBeDefined();
		});

		it('Método getRepositorios Existe?', function(){
			expect(BuscaTeste.getRepositorios).toBeDefined();
		});

		it('Método setMensagem Existe?', function(){
			expect(BuscaTeste.setMensagem).toBeDefined();
		});

		it('Método getMensagem Existe?', function(){
			expect(BuscaTeste.getMensagem).toBeDefined();
		});



		it('Deveria retornar o usuario buscado', function($http){
			
			var nock = require('nock');

			$scope.retorno = nock('https://api.github.com')
			  .get('/users')
			  .query({username: 'nilerbarcelos', surname: 'teixeira'})
			  .reply(200, {results: retornoGetUsuarioTeste});




			expect(BuscaTeste.getUsuarios($scope.retorno)).toEqual(retornoGetUsuarioTeste);
		});



		it('Deveria enviar a mensagem?', function(){
			expect(BuscaTeste.setMensagem(idUsuarioTeste, mensagemTeste)).toEqual(mensagemEnviada);
		});

		it('Deveria retornar a mensagem enviada?', function(){
			expect(BuscaTeste.getMensagem(idUsuarioTeste)).toEqual(retornoMensagem[idUsuarioTeste]);
		});



	});


















});