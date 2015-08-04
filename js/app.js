angular.module('todo', [])

.controller('TodoCtrl', ['$scope', function($scope) {
    
    $scope.tasklist = []; //Holds the tasks
    
    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskName) {
            $scope.tasklist.push({"name": $scope.taskName, "completed": false});
            $scope.taskName = "";
        }
    }
    
    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    }
}]);