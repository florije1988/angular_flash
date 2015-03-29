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
            .when('/page', {
                templateUrl: '/static/page.html',
                controller: 'PageController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    app.controller('MainController', function ($scope, flash) {
    });

    app.controller('HomeController', function ($scope, $location, flash) {
        $scope.info = function () {
            flash.info = 'info message';
            //$location.path("/page");
        };

        $scope.info1 = function () {
            flash.to('alert-1').info = 'info message';
        };
    });

    app.controller('PageController', function ($scope, flash) {
        //$scope.submitInfo = function () {
        //    flash.info = 'page message'
        //}
    })
}());

