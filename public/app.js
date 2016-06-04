(function(){
    angular.module('app', [])
        .controller('c2', ['$scope', '$http', function($scope, $http){
            $scope.getC2 = function(){
                return $http.get('/api/c2').then(function(data){
                    $scope.c2s = data.data;
                })
            }
            $scope.addC2 = function(c2){
                $http.post('/api/c2', c2).then(function(data){
                    $scope.c2s.push(data.data);
                })
            }
        }])
})();
