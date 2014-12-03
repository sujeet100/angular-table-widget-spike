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
                defaultSortPredicate: '=',
                rowsPerPage:'=',
                rowsShownText:'='
    		},
    		link: function(scope, element, attr){

                    var tableElement = [];
                    scope.sortpredicate=scope.defaultSortPredicate
                    scope.rowsVisible = scope.rowsPerPage;
                    tableElement.push('<style type="text/css">span{margin:30px;}</style>');
                   
                   //headers
                    tableElement.push('<span ng-repeat="column in columns">');
                        tableElement.push('<a ng-if="column.sort" href="" ng-click="changePredicate(column.predicate)"><strong>{{column.header}}</strong></a>');
                        tableElement.push('<span ng-if="!column.sort"><strong>{{column.header}}</strong></span>');
                    tableElement.push('</span>');

                    //rows
                    tableElement.push('<div ng-repeat="student in data | orderBy:sortpredicate:reverse | limitTo:rowsVisible">');
                        tableElement.push('<span ng-repeat="column in columns">');
                        tableElement.push('{{student[column.field]}}</span>');
                    tableElement.push('</div>');

                    //pagination
                    
                
                    tableElement.push('<div><span>');
                    tableElement.push(String.format(scope.rowsShownText, '{{rowsVisible >data.length ? data.length : rowsVisible}}', '{{data.length}}'));
                    tableElement.push('</span>');
                    tableElement.push('<a href="" ng-if="rowsVisible < data.length" ng-click="showMoreRows();">Show more</a></div>');



                     scope.changePredicate= function(predicate){
                        scope.sortpredicate=predicate;
                        scope.reverse=!scope.reverse;
                     } 

                    scope.showMoreRows= function(){
                        scope.rowsVisible+=scope.rowsPerPage;
                     }   


                    var content = $compile(tableElement.join(""))(scope);
                    element.append(content);
    		}
    	}
    }]);

String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];
    
    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }
    
    return theString;
}