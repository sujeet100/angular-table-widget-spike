angular.module("widget", [])
    .controller("rootController", ["$scope",
        function($scope) {
       	$scope.students = [];
        $scope.students.push({name:'sujit', age:24});
        $scope.students.push({name:'rashmi', age:28});
        }
    ])
    .directive("table", function(){
    	return{
    		restrict: 'AE',
    		scope:{
    			data:'='
    		},
    		link: function(scope, element, attr){
    			console.log(scope.data);
    			var tableElement = '<table><th>name</th><th>age</th><tr><td>'+scope.data[0].name+'</td><td> '+scope.data[0].age+'</td></tr></table>';
    			element.append(tableElement);
    		}
    	}
    });
