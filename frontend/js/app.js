angular.module("app", [])
    .controller('myCntrl', ['$scope', '$http', function ($scope, $http) {
        $scope.name = "";
        $scope.displayText = "";
        $scope.click = function () {
            $http({
                method: 'POST',
                url: 'http://18.212.21.132:3001/submit',
                headers: {'Content-Type': 'application/json'},
                data: {name: $scope.name}
            }).then(function Success(response) {
                $scope.displayText = response.data.status;
            }, function Error(response) {
                $scope.displayText = response.data.statusMessage;
            });
        };
    }]);