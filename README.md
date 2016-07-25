# angularjs-date-picker
Yet another date picker for Angularjs.

## Installation

Install from npm:
	
	npm install angularjs-date-picker

## Usage

### Prerequisites
Your app must include moment, angular and bootstrap (which will also require Jquery) before the date picker will render correctly.

Add them to your index.html:
```html
  <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.css">
  
  <script src="jquery/dist/jquery.js"></script>
  <script src="bootstrap/dist/js/bootstrap.js"></script>
  <script src="angular/angular.js"></script>
  <script src="node_modules/moment/min/moment.min.js"></script>
```

Additionally, you must add the directive source files:
```html
	<script src="angularjs-date-picker/src/angularjs-date-picker.js"></script>
	<script src="angularjs-date-picker/src/angularjs-date-picker.template.js"></script>
```

### Using the directive
Include the date picker module in your controller:
```javascript
angular.module('my.module', ['ui.date.picker'])
```

Then use the tag in html controlled by that controller:
```html
<div><date-picker></div>
```

### Date Picker Attributes
The only exposed event is when a date is selected. Add the attribute `onDateSelected` to the html tag:
```html
	<div><date-picker on-date-selected="fireDateChange(date)"></div>
```

`onDateSelected` takes a function with the input parameter of a moment obj. Your outer function passed to the directive could look like this:
```javascript
	function fireDateChange(date){
		var currentDate = date.format('YYYY-MM-DD');
	}
```

## License
Licensed under the [MIT](http://opensource.org/licenses/MIT)/[BSD](http://opensource.org/licenses/BSD-3-Clause) license.