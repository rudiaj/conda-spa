(function() {
	'use strict';

	angular
	.module('condaSpa')
	.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, webDevTec, toastr, $scope, Restangular) {
    // var vm = this;;
    // vm.nesto ="fjkfjtg";

    $scope.assets =[];

    Restangular.setBaseUrl('https://dev-api.conda.online/assets/v1/de/');

    $scope.baseAccounts = Restangular.one('assets');
    $scope.baseAccounts.getList().then(function(assets) {
	  $scope.assets = assets;
	});


    console.log($scope.assets[0])
    // tabs logic
    $scope.tab = 1;

    $scope.setTab = function(newTab){
    	$scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
    	return $scope.tab === tabNum;
    };

    //end of tab logic

}
})();
