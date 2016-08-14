(function()
{
	"use strict";
	
	var app = angular.module("nserc");

	app.controller("NewsAndEventsController", function($scope, $route, $routeParams)
	{
		$scope.initPage = function()
		{
			$("#articleContentContainer").load("pages/newsAndEvents/" + $routeParams.articleID + ".html");
		};
	});
})();