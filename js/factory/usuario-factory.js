angular.module('appConsultaGit', [])
    .factory('dataFactory', ['$http',
    	function($http) {

	var urlBase = 'https://api.github.com/users/';
    var dataFactory = {};
    var mensagens = {};

    dataFactory.getUsuarios = function (username){
        var user = $http.get(urlBase + username);
        return user;
    };

    dataFactory.getRepositorios = function (username){
    	return $http.get(urlBase + username + '/repos');
    };

    dataFactory.setMensagem = function (id, mensagem){
      mensagens[id] = mensagem;
      return localStorage.setItem('usuarioMensagem', JSON.stringify(mensagens));
    };

    dataFactory.getMensagem = function (id){
      mensagem = JSON.parse(localStorage.getItem('usuarioMensagem'));
      return mensagem[id];
    };

    return dataFactory;

}]);