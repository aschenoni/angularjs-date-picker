angular
	.module('ui.date.picker', [])
	.directive('datePicker', DatePicker)

DatePicker.$inject = ['$q'];

function DatePicker($q){
	return {
		templateUrl: '/template/date-picker.directive.html',
		link: link,
		scope: {
			onDateSelected: '&'
		}
	}

	function link(scope, eleme, attr){

		scope.weekdays = weekdays();
		scope.months = months();
		scope.moment = new moment();
		scope.changeMonth = changeMonth;
		scope.mapDays = mapDays;
		scope.changeDate = changeDate;
		scope.passDateSelected = passDateSelected;
		scope.pos = pos
		scope.arr;

		activate();
		///////////
		function activate(){
			scope.mapDays();
		}

		function weekdays(){
			return [
				{day: 'Sunday', abbr: 'Su'},
				{day: 'Monday', abbr: 'Mo'},
				{day: 'Tuesday', abbr: 'Tu'},
				{day: 'Wednesday', abbr: 'We'},
				{day: 'Thursday', abbr: 'Th'},
				{day: 'Fridayday', abbr: 'Fr'},
				{day: 'Saturday', abbr: 'Sa'}
			]
		}

		function months(){
			return [
				{name: 'January'},
				{name: 'February'},
				{name: 'March'},
				{name: 'April'},
				{name: 'May'},
				{name: 'June'},
				{name: 'July'},
				{name: 'August'},
				{name: 'September'},
				{name: 'October'},
				{name: 'November'},
				{name: 'December'}
			]
		}

		function mapDays(){
			return $q(function(fulfill, reject){
				var array = [];
				var current = moment(scope.moment).endOf('month').date();
				for(i = 1; i <= current; i++){
					array.push(
						{
							moment: moment([scope.moment.year(), scope.moment.month(), i]),
							class: i === scope.moment.date() ? 'miniCal-current-day' : 'miniCal-regular-day'
						});
				}
				var temp = moment([scope.moment.year(), scope.moment.month(), 1]);
				array = padLeft(temp, array);


				function padLeft(firstOfMonth, arr){
					var offset = firstOfMonth.day();
					while(offset > 0){
						var firstOfMonth = moment(firstOfMonth);
						arr.unshift({
							moment:	firstOfMonth.subtract(1, 'd'),
							class: 'miniCal-date-out-scope'
						});
						
						offset -= 1;
					}

					var remaining = 41 - arr.length;
					for(i = 1; i <= remaining + 1; i++){
						arr.push(
							{
								moment: moment([scope.moment.year(), 
									    scope.moment.month(), 
										i])
									.add(1, 'month'),
								class: 'miniCal-date-out-scope'
							});
					}

					fulfill(arr);
					scope.arr = arr;
				}	
			})
		}

		function changeDate(index){
			scope.moment = scope.arr[index].moment;
			mapDays();
		}

		function changeMonth(offset){
			scope.moment.add(offset, 'M');
			mapDays();
		}

		function passDateSelected(){
			scope.onDateSelected({date: scope.moment})
		}

		function pos(xPos, yPos){
			return (xPos * 7) + yPos
		}
	}
}