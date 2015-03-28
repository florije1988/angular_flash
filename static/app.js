/**
 * Created by florije on 2015/3/28.
 */
(function () {
    'use strict';

    var app = angular.module('MyApp', ['ngRoute', 'angular-flash.service', 'angular-flash.flash-alert-directive']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    app.controller('MainController', function ($scope, flash) {

    });

    app.controller('HomeController', function ($scope, flash) {
        $scope.info = function () {
            flash.info = 'info message';
        };
    });
}());

