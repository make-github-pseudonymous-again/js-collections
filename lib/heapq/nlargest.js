'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = nlargest;

var _aureoomsJsCompare = require('aureooms-js-compare');

var _nsmallest = require('./nsmallest');

var _nsmallest2 = _interopRequireDefault(_nsmallest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nlargest(compare, n, iterable) {

	return (0, _nsmallest2.default)((0, _aureoomsJsCompare.reverse)(compare), n, iterable);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9ubGFyZ2VzdC5qcyJdLCJuYW1lcyI6WyJubGFyZ2VzdCIsImNvbXBhcmUiLCJuIiwiaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl3QkEsUTs7QUFKeEI7O0FBRUE7Ozs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBb0JDLE9BQXBCLEVBQThCQyxDQUE5QixFQUFrQ0MsUUFBbEMsRUFBNkM7O0FBRTNELFFBQU8seUJBQVcsZ0NBQVNGLE9BQVQsQ0FBWCxFQUFnQ0MsQ0FBaEMsRUFBb0NDLFFBQXBDLENBQVA7QUFFQSIsImZpbGUiOiJubGFyZ2VzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdhdXJlb29tcy1qcy1jb21wYXJlJyA7XG5cbmltcG9ydCBuc21hbGxlc3QgZnJvbSAnLi9uc21hbGxlc3QnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmxhcmdlc3QgKCBjb21wYXJlICwgbiAsIGl0ZXJhYmxlICkge1xuXG5cdHJldHVybiBuc21hbGxlc3QoIHJldmVyc2UoIGNvbXBhcmUgKSAsIG4gLCBpdGVyYWJsZSApIDtcblxufVxuIl19