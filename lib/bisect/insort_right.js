'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = insort_right;

var _bisect_right = require('./bisect_right');

var _bisect_right2 = _interopRequireDefault(_bisect_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insort_right(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = (0, _bisect_right2.default)(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaXNlY3QvaW5zb3J0X3JpZ2h0LmpzIl0sIm5hbWVzIjpbImluc29ydF9yaWdodCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsInBvcyIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxZOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsWUFBVCxDQUF3QkMsQ0FBeEIsRUFBNEJDLENBQTVCLEVBQXlEO0FBQUEsS0FBekJDLEVBQXlCLHVFQUFwQixDQUFvQjtBQUFBLEtBQWhCQyxFQUFnQix1RUFBWEgsRUFBRUksTUFBUzs7O0FBRXZFLEtBQU1DLE1BQU0sNEJBQWNMLENBQWQsRUFBa0JDLENBQWxCLEVBQXNCQyxFQUF0QixFQUEyQkMsRUFBM0IsQ0FBWjs7QUFFQUgsR0FBRU0sTUFBRixDQUFVRCxHQUFWLEVBQWdCLENBQWhCLEVBQW9CSixDQUFwQjtBQUVBIiwiZmlsZSI6Imluc29ydF9yaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiaXNlY3RfcmlnaHQgZnJvbSAnLi9iaXNlY3RfcmlnaHQnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zb3J0X3JpZ2h0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG5cdGNvbnN0IHBvcyA9IGJpc2VjdF9yaWdodCggYSAsIHggLCBsbyAsIGhpICkgO1xuXG5cdGEuc3BsaWNlKCBwb3MgLCAwICwgeCApIDtcblxufVxuIl19