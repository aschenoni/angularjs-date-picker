(function() {
	'use strict';
	angular.module('ui.date.picker')
		.run(ImportTemplate)

	ImportTemplate.$inject = ['$templateCache'];
	function ImportTemplate($templateCache){
		$templateCache.put('/template/date-picker.directive.html',
			'<div class="miniCal">\n		<div class="month-container">\n			<div class="glyphicon glyphicon-menu-left btn otis-color miniCal-month-arrow miniCal-month-arrow-left no-round-bottom" ng-click="changeMonth(-1)"></div>\n			<div class="miniCal-current-month">{{moment.format(\'MMMM - YYYY\')}}</div>\n			<div class="glyphicon glyphicon-menu-right btn otis-color miniCal-month-arrow miniCal-month-arrow-right no-round-bottom" ng-click="changeMonth(1)"></div>\n		</div>\n		<table class="miniCal-table">\n			<thead class="miniCal-thead">\n			<tr class="miniCal-tr-header">\n				<td class="miniCal-td" ng-repeat="day in weekdays">\n					{{day.abbr}}\n				</td>\n			</tr>\n			</thead>\n			<tr ng-repeat="i in [0,1,2,3,4,5]">\n				<td class="miniCal-body-td" ng-repeat="j in [0,1,2,3,4,5,6]" ng-class="[arr[pos(i,j)].class]" ng-click="changeDate(pos(i, j)); passDateSelected();"><div>{{arr[pos(i, j)].moment.format(\'D\')}}</div></td>\n			</tr>\n		</table>\n</div>')
	}
}());