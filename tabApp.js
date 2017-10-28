var tabApp = angular.module("tabApp", []);
var id1 = 1;

tabApp.controller("myCtlr", function($scope) {
    $scope.prodList = [];
    $scope.prod = {
        id: 1,
        name: "",
        desc: "",
        ctg: "",
        prc: ""
    };
    $scope.addRow = function() {
        $scope.prod.id = id1;
        $scope.prodList.push($scope.prod);
        $scope.clearFields();
        id1 = id1 + 1;
    }
    $scope.clearFields = function(){
        $scope.prod = {
            id: 1,
            name: "",
            desc: "",
            ctg: "",
            prc: ""
        };
    }
    $scope.checkFields = function(e) {
        if($scope.prod.name=="" || $scope.prod.desc=="" || $scope.prod.ctg=="" || $scope.prod.prc=="") {
            return true;
        }
        else {
            return false;
        }
    }
    $scope.rmRow = function($index) {
        $scope.prodList.splice($index-1, 1);
    }
    $scope.checkPresent = function(e) {
        if($scope.prodList.length>0) {
            return true;
        }
        else {
            return false;
        }
    }
});
