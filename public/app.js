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
            $scope.delC2 = function(c2){
                $http.delete('/api/c2/'+ c2._id).then(function(data){
                    $scope.c2s = _.without($scope.c2s, c2);
                    console.log(data.data);
                },function(data){
                    console.log(data.data);
                });
            }
            $scope.selectC2 = function(c2){
                $scope.nc2 = _.clone(c2); 
            }
            $scope.updateC2 = function(c2){
                $http.put('/api/c2/' + c2._id, c2).then(function(data){
                    $scope.c2s = data.data;
                    console.log(data.data);
                });
            }
        }]);
})();
