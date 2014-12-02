angular.module("widget", [])
    .controller("rootController", ["$scope",
        function($scope) {
       	$scope.students = [];
        $scope.students.push({name:'sujit', age:25, city:'pune', marks:59});
        $scope.students.push({name:'rashmi', age:23, city:'mumbai', marks:43}); 
        $scope.students.push({name:'leena', age:0, city:'mumbai', marks:43});
        $scope.students.push({name:'rashmi', age:23, city:'mumbai', marks:98});
        $scope.students.push({name:'rashmi', age:20, city:'chennai', marks:43});
        $scope.students.push({name:'sana', age:18, city:'mumbai', marks:100});
        $scope.students.push({name:'arti', age:18, city:'lonavla', marks:0});
        $scope.students.push({name:'rashmi', age:0, city:'mumbai', marks:-10});
        $scope.students.push({name:'rashmi', age:5 , city:'mumbai', marks:50});
        $scope.students.push({name:'rashmi', age:28, city:'mumbai', marks:150});
        $scope.students.push({name:'leena', age:0, city:'lonavla', marks:43});
        $scope.students.push({name:'leena', age:0, city:'mumbai', marks:37});
        $scope.students.push({name:'rashmi', age:18, city:'mumbai', marks:54});
        $scope.students.push({name:'rashmi', age:19, city:'nagpur', marks:98});
        $scope.students.push({name:'rashmi', age:28, city:'mumbai', marks:78});
        $scope.students.push({name:'rashmi', age:23, city:'mumbai', marks:43});
        $scope.students.push({name:'rashmi', age:23, city:'saswad', marks:42});
        $scope.students.push({name:'rashmi', age:23, city:'mumbai', marks:49});
        
        }
    ])
    .directive("table", ['$compile', function($compile){
    	return{
    		restrict: 'AE',
    		scope:{
    			data:'=',
                columns:'=',
                defaultsortpredicate: '=',
    		},
    		link: function(scope, element, attr){

                    var tableElement = [];
                    console.log(scope.defaultsortpredicate);
                    scope.sortpredicate=scope.defaultsortpredicate
                    tableElement.push('<style type="text/css">span{margin:30px;}</style>');
                    tableElement.push('<span ng-repeat="head in columns">');
                    tableElement.push('<a href="" ng-click="changePredicate(head.predicate)"><strong>{{head.header}}</strong></a></span>');
                     tableElement.push('<div ng-repeat="student in data  |orderBy:sortpredicate:reverse">');
                         tableElement.push('<span ng-repeat="column in columns">');
                         tableElement.push('{{student[column.field]}}</span>');
                     tableElement.push('</div>');

                     scope.changePredicate= function(predicate){
                        console.log(scope.sortpredicate);
                        scope.sortpredicate=predicate;
                        scope.reverse=!scope.reverse;
                     }   


                    var content = $compile(tableElement.join(""))(scope);
                    element.append(content);
    		}
    	}
    }]);
