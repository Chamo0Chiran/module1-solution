(function(){
'use strict';
angular.module('lunchApp', [])
.controller('lunchController', lunchController )

lunchController.$inject = ['$scope'];
function lunchController($scope){
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkLunch = function(){
        var items = $scope.lunchMenu.split(',');
        if(items.length > 3){
            $scope.message = "Too much!";
        }else{
            $scope.message = "Enjoy!";
        }
    };
};
})();