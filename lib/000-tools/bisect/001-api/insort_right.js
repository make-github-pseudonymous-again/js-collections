"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insort_right = insort_right;
function insort_right(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = bisect_right(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvYmlzZWN0LzAwMS1hcGkvaW5zb3J0X3JpZ2h0LmpzIl0sIm5hbWVzIjpbImluc29ydF9yaWdodCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsInBvcyIsImJpc2VjdF9yaWdodCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFksR0FBQUEsWTtBQUFULFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUF5RDtBQUFBLEtBQXpCQyxFQUF5Qix1RUFBcEIsQ0FBb0I7QUFBQSxLQUFoQkMsRUFBZ0IsdUVBQVhILEVBQUVJLE1BQVM7OztBQUUvRCxLQUFNQyxNQUFNQyxhQUFjTixDQUFkLEVBQWtCQyxDQUFsQixFQUFzQkMsRUFBdEIsRUFBMkJDLEVBQTNCLENBQVo7O0FBRUFILEdBQUVPLE1BQUYsQ0FBVUYsR0FBVixFQUFnQixDQUFoQixFQUFvQkosQ0FBcEI7QUFFQSIsImZpbGUiOiJpbnNvcnRfcmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGZ1bmN0aW9uIGluc29ydF9yaWdodCAoIGEgLCB4ICwgbG8gPSAwICwgaGkgPSBhLmxlbmd0aCApIHtcblxuXHRjb25zdCBwb3MgPSBiaXNlY3RfcmlnaHQoIGEgLCB4ICwgbG8gLCBoaSApIDtcblxuXHRhLnNwbGljZSggcG9zICwgMCAsIHggKSA7XG5cbn1cbiJdfQ==