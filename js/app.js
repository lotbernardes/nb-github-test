var appConsultaGit = angular.module("appConsultaGit", ['ngRoute', 'angularUtils.directives.dirPagination']);

appConsultaGit.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/", {
		templateUrl : '/testeInvolves/index.html',
		controller : 'usuarioController'
	})
    .when("/404", {
        templateUrl : "/testeInvolves/404.html"
	});

	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});﻿
});