'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = insort_left;

var _bisect_left = require('./bisect_left');

var _bisect_left2 = _interopRequireDefault(_bisect_left);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insort_left(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = (0, _bisect_left2.default)(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaXNlY3QvaW5zb3J0X2xlZnQuanMiXSwibmFtZXMiOlsiaW5zb3J0X2xlZnQiLCJhIiwieCIsImxvIiwiaGkiLCJsZW5ndGgiLCJwb3MiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsVzs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLFdBQVQsQ0FBdUJDLENBQXZCLEVBQTJCQyxDQUEzQixFQUF3RDtBQUFBLEtBQXpCQyxFQUF5Qix1RUFBcEIsQ0FBb0I7QUFBQSxLQUFoQkMsRUFBZ0IsdUVBQVhILEVBQUVJLE1BQVM7OztBQUV0RSxLQUFNQyxNQUFNLDJCQUFhTCxDQUFiLEVBQWlCQyxDQUFqQixFQUFxQkMsRUFBckIsRUFBMEJDLEVBQTFCLENBQVo7O0FBRUFILEdBQUVNLE1BQUYsQ0FBVUQsR0FBVixFQUFnQixDQUFoQixFQUFvQkosQ0FBcEI7QUFFQSIsImZpbGUiOiJpbnNvcnRfbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiaXNlY3RfbGVmdCBmcm9tICcuL2Jpc2VjdF9sZWZ0JyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc29ydF9sZWZ0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG5cdGNvbnN0IHBvcyA9IGJpc2VjdF9sZWZ0KCBhICwgeCAsIGxvICwgaGkgKSA7XG5cblx0YS5zcGxpY2UoIHBvcyAsIDAgLCB4ICkgO1xuXG59XG4iXX0=