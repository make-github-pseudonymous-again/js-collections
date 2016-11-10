"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insort_left = insort_left;
function insort_left(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = bisect_left(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvYmlzZWN0LzAwMS1hcGkvaW5zb3J0X2xlZnQuanMiXSwibmFtZXMiOlsiaW5zb3J0X2xlZnQiLCJhIiwieCIsImxvIiwiaGkiLCJsZW5ndGgiLCJwb3MiLCJiaXNlY3RfbGVmdCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLFcsR0FBQUEsVztBQUFULFNBQVNBLFdBQVQsQ0FBdUJDLENBQXZCLEVBQTJCQyxDQUEzQixFQUF3RDtBQUFBLEtBQXpCQyxFQUF5Qix1RUFBcEIsQ0FBb0I7QUFBQSxLQUFoQkMsRUFBZ0IsdUVBQVhILEVBQUVJLE1BQVM7OztBQUU5RCxLQUFNQyxNQUFNQyxZQUFhTixDQUFiLEVBQWlCQyxDQUFqQixFQUFxQkMsRUFBckIsRUFBMEJDLEVBQTFCLENBQVo7O0FBRUFILEdBQUVPLE1BQUYsQ0FBVUYsR0FBVixFQUFnQixDQUFoQixFQUFvQkosQ0FBcEI7QUFFQSIsImZpbGUiOiJpbnNvcnRfbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGluc29ydF9sZWZ0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG5cdGNvbnN0IHBvcyA9IGJpc2VjdF9sZWZ0KCBhICwgeCAsIGxvICwgaGkgKSA7XG5cblx0YS5zcGxpY2UoIHBvcyAsIDAgLCB4ICkgO1xuXG59XG4iXX0=