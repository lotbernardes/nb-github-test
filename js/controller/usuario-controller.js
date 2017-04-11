angular.module('appConsultaGit')
    .controller('usuarioController', ['$scope', 'dataFactory', '$http', '$location', 
        function ($scope, dataFactory, $http, $location) {

	$scope.usuarioNaoEncontrado = false;
	$scope.resultado = "";
	mensagem = "";

	$scope.carregarUsuario = function(username){
    	dataFactory.getUsuarios(username)
        .then(function (response) {
            $scope.usuario = response.data;
            $scope.carregaRepositorios(username);
            $scope.retornaMensagem($scope.usuario.id);
        }, function (response) {
            var status = response.status;

            if (status == 404){
            	$location.url('/404');
            }
            console.log($scope.status);
        });

		$scope.carregaRepositorios = function(usuario){
			dataFactory.getRepositorios(usuario)
			.then(function(response){
				$scope.repositorios =  response.data;
			}, function(error){
				$scope.status = 'Repositório não encontrado: ' + error.message;

			});
		};
	};

	$scope.enviarMensagem = function(id, mensagem){
		dataFactory.setMensagem(id, mensagem);
		$scope.retornaMensagem(id);
	};

	$scope.retornaMensagem = function(id){
		$scope.resultado = dataFactory.getMensagem(id);
		console.log($scope.resultado);
	};






}]);
