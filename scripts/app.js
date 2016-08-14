(function()
{
	"use strict";

	var app = angular.module("nserc", ["ngRoute"]);

	app.run(function($rootScope, $route)
	{
		$rootScope.$on("$locationChangeSuccess", function()
		{
			$rootScope.navigationLink = $route.current.$$route.navigationLocation;
		});
	});

	app.config(function($locationProvider, $routeProvider)
	{
		//$locationProvider.html5Mode(true).hashPrefix('!');
		
		$routeProvider.when("/",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "home"
		}).when("/home",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "home"
		}).when("/newsAndEvents",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "newsAndEvents"
		}).when("/newsAndEvents/:articleID",
		{
			templateUrl: "views/news.html",
			navigationLocation: "newsAndEvents"
		}).when("/program",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "program"
		}).when("/people",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "people"
		}).when("/people/team",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "peopleTeam"
		}).when("/people/trainees",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "peopleTrainees"
		}).when("/training",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "training"
			
		}).when("/publications",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "publications"
		}).when("/partners",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "partners"
		}).when("/contact",
		{
			templateUrl: "views/singlePage.html",
			navigationLocation: "contact"
		});
	});

	app.controller('CarouselDemoCtrl', function($scope) {
	  $scope.myInterval = 3000;
	  $scope.slides = [
	    {
	      image: 'images/yorklogoTall.jpg'
	    },
	    {
	      image: 'images/calgary.jpg'
	    },
	    {
	      image: 'images/mcmaster.jpg'
	    },
	    {
	      image: 'images/montreal.jpg'
	    }
	  ];
	});



})();