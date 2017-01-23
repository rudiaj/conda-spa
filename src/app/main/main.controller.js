(function() {
	'use strict';

	angular
	.module('condaSpa')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $scope, Restangular) {

    $scope.asset=[];

    Restangular.setBaseUrl('https://dev-api.conda.online/assets/');

    Restangular.one('v1/de/','3790da38-6ff9-4749-b7a4-c42625bbcef3')
    .get()
    .then(function(result){
        $scope.asset = result.asset_data;
        console.dir($scope.asset);
    });



    



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
