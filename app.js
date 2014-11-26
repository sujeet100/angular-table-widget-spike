angular.module("widget", [])
    .controller("rootController", ["$scope",
        function($scope) {
       	$scope.students = [];
        $scope.students.push({name:'sujit', age:24, city:'pune', marks:59});
        $scope.students.push({name:'rashmi', age:28, city:'mumbai', marks:43});
        }
    ])
    .directive("table", function(){
    	return{
    		restrict: 'AE',
    		scope:{
    			data:'=',
                columns:'=',
                headers:'='
    		},
    		link: function(scope, element, attr){
    			var tableElement = [];
                tableElement.push('<table>');

                var columns = scope.columns.split(",");
                var headers = scope.headers.split(",");

                    for(k=0;k<headers.length;k++){
                        tableElement.push('<th>'+headers[k].trim()+'</th>');
                    }

                for(i=0; i<scope.data.length; i++){ 
                    tableElement.push('<tr>');
                    for(j=0;j<columns.length;j++){
                        tableElement.push('<td>'+scope.data[i][columns[j].trim()]+'</td>');
                    }
                    tableElement.push('</tr>');
                }
                tableElement.push("</table>");
    			element.append(tableElement.join(""));
    		}
    	}
    });
