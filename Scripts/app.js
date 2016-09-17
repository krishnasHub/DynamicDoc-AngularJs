var app = angular.module('dynamicDocumentApp', ['ngRoute']);

app.config(function($routeProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $routeProvider
    	.when('/', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .when('/new_document', {
            url: '/new_document',
            templateUrl: 'new_document.html'
        })
        .when('manage_document', {
            url: '/manage_document',
            templateUrl: 'manage_document.html'
        })
        .when('new_field', {
            url: '/new_field',
            templateUrl: 'new_field.html'
        })
        .when('manage_field', {
            url: '/manage_field',
            templateUrl: 'manage_field.html'
        });
});