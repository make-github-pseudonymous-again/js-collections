'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = nsmallest;

var _aureoomsJsItertools = require('aureooms-js-itertools');

var _aureoomsJsCompare = require('aureooms-js-compare');

var _core = require('./core');

var _heapify = require('./heapify');

var _heapify2 = _interopRequireDefault(_heapify);

var _heapreplace = require('./heapreplace');

var _heapreplace2 = _interopRequireDefault(_heapreplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nsmallest(compare, n, iterable) {

	if (n === 1) {

		var sentinel = {};

		var _result = (0, _aureoomsJsItertools.min)(compare, iterable, sentinel);

		return _result === sentinel ? [] : [_result];
	}

	if (iterable.length !== undefined) {

		if (n >= iterable.length) return (0, _aureoomsJsItertools.sorted)(compare, iterable);
	}

	var it = iter(iterable);

	var result = Array.from((0, _aureoomsJsItertools._zip2)((0, _aureoomsJsItertools._range)(0, n, 1), it), function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    i = _ref2[0],
		    elem = _ref2[1];

		return [elem, i];
	});

	if (result.length === 0) return result;

	var h = (0, _heapify2.default)((0, _core.keeporder)((0, _aureoomsJsCompare.reverse)(compare)), result);

	var top = result[0][0];

	var order = n;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var elem = _step.value;


			if (compare(elem, top) < 0) {

				(0, _heapreplace2.default)(h, [elem, order]);

				top = result[0][0];

				++order;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return (0, _aureoomsJsItertools.sorted)(compare, Array.from(result, function (r) {
		return r[0];
	}));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9uc21hbGxlc3QuanMiXSwibmFtZXMiOlsibnNtYWxsZXN0IiwiY29tcGFyZSIsIm4iLCJpdGVyYWJsZSIsInNlbnRpbmVsIiwicmVzdWx0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXQiLCJpdGVyIiwiQXJyYXkiLCJmcm9tIiwiaSIsImVsZW0iLCJoIiwidG9wIiwib3JkZXIiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFRd0JBLFM7O0FBUnhCOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFNBQVQsQ0FBcUJDLE9BQXJCLEVBQStCQyxDQUEvQixFQUFtQ0MsUUFBbkMsRUFBOEM7O0FBRTVELEtBQUtELE1BQU0sQ0FBWCxFQUFlOztBQUVkLE1BQU1FLFdBQVcsRUFBakI7O0FBRUEsTUFBTUMsVUFBUyw4QkFBS0osT0FBTCxFQUFlRSxRQUFmLEVBQTBCQyxRQUExQixDQUFmOztBQUVBLFNBQU9DLFlBQVdELFFBQVgsR0FBc0IsRUFBdEIsR0FBNEIsQ0FBRUMsT0FBRixDQUFuQztBQUVBOztBQUVELEtBQUtGLFNBQVNHLE1BQVQsS0FBb0JDLFNBQXpCLEVBQXFDOztBQUVwQyxNQUFLTCxLQUFLQyxTQUFTRyxNQUFuQixFQUE0QixPQUFPLGlDQUFRTCxPQUFSLEVBQWtCRSxRQUFsQixDQUFQO0FBRTVCOztBQUVELEtBQU1LLEtBQUtDLEtBQU1OLFFBQU4sQ0FBWDs7QUFFQSxLQUFNRSxTQUFTSyxNQUFNQyxJQUFOLENBQVksZ0NBQU8saUNBQVEsQ0FBUixFQUFZVCxDQUFaLEVBQWdCLENBQWhCLENBQVAsRUFBNkJNLEVBQTdCLENBQVosRUFBZ0Q7QUFBQTtBQUFBLE1BQUlJLENBQUo7QUFBQSxNQUFRQyxJQUFSOztBQUFBLFNBQW9CLENBQUVBLElBQUYsRUFBU0QsQ0FBVCxDQUFwQjtBQUFBLEVBQWhELENBQWY7O0FBRUEsS0FBS1AsT0FBT0MsTUFBUCxLQUFrQixDQUF2QixFQUEyQixPQUFPRCxNQUFQOztBQUUzQixLQUFNUyxJQUFJLHVCQUFTLHFCQUFXLGdDQUFTYixPQUFULENBQVgsQ0FBVCxFQUEyQ0ksTUFBM0MsQ0FBVjs7QUFFQSxLQUFJVSxNQUFNVixPQUFPLENBQVAsRUFBVSxDQUFWLENBQVY7O0FBRUEsS0FBSVcsUUFBUWQsQ0FBWjs7QUE1QjREO0FBQUE7QUFBQTs7QUFBQTtBQThCNUQsdUJBQW9CTSxFQUFwQiw4SEFBeUI7QUFBQSxPQUFiSyxJQUFhOzs7QUFFeEIsT0FBS1osUUFBU1ksSUFBVCxFQUFnQkUsR0FBaEIsSUFBd0IsQ0FBN0IsRUFBaUM7O0FBRWhDLCtCQUFhRCxDQUFiLEVBQWlCLENBQUVELElBQUYsRUFBU0csS0FBVCxDQUFqQjs7QUFFQUQsVUFBTVYsT0FBTyxDQUFQLEVBQVUsQ0FBVixDQUFOOztBQUVBLE1BQUVXLEtBQUY7QUFFQTtBQUVEO0FBMUMyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTRDNUQsUUFBTyxpQ0FBUWYsT0FBUixFQUFrQlMsTUFBTUMsSUFBTixDQUFZTixNQUFaLEVBQXFCO0FBQUEsU0FBS1ksRUFBRSxDQUFGLENBQUw7QUFBQSxFQUFyQixDQUFsQixDQUFQO0FBRUEiLCJmaWxlIjoibnNtYWxsZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWluICwgc29ydGVkICwgX3ppcDIgLCBfcmFuZ2UgfSBmcm9tICdhdXJlb29tcy1qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdhdXJlb29tcy1qcy1jb21wYXJlJyA7XG5cbmltcG9ydCB7IGtlZXBvcmRlciB9IGZyb20gJy4vY29yZScgO1xuXG5pbXBvcnQgaGVhcGlmeSBmcm9tICcuL2hlYXBpZnknIDtcbmltcG9ydCBoZWFwcmVwbGFjZSBmcm9tICcuL2hlYXByZXBsYWNlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5zbWFsbGVzdCAoIGNvbXBhcmUgLCBuICwgaXRlcmFibGUgKSB7XG5cblx0aWYgKCBuID09PSAxICkge1xuXG5cdFx0Y29uc3Qgc2VudGluZWwgPSB7IH0gO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gbWluKCBjb21wYXJlICwgaXRlcmFibGUgLCBzZW50aW5lbCApIDtcblxuXHRcdHJldHVybiByZXN1bHQgPT09IHNlbnRpbmVsID8gWyBdIDogWyByZXN1bHQgXSA7XG5cblx0fVxuXG5cdGlmICggaXRlcmFibGUubGVuZ3RoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIG4gPj0gaXRlcmFibGUubGVuZ3RoICkgcmV0dXJuIHNvcnRlZCggY29tcGFyZSAsIGl0ZXJhYmxlICkgO1xuXG5cdH1cblxuXHRjb25zdCBpdCA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oIF96aXAyKCBfcmFuZ2UoIDAgLCBuICwgMSApICwgaXQgKSAsICggWyBpICwgZWxlbSBdICkgPT4gWyBlbGVtICwgaSBdICkgO1xuXG5cdGlmICggcmVzdWx0Lmxlbmd0aCA9PT0gMCApIHJldHVybiByZXN1bHQgO1xuXG5cdGNvbnN0IGggPSBoZWFwaWZ5KCBrZWVwb3JkZXIoIHJldmVyc2UoIGNvbXBhcmUgKSApICwgcmVzdWx0ICkgO1xuXG5cdGxldCB0b3AgPSByZXN1bHRbMF1bMF0gO1xuXG5cdGxldCBvcmRlciA9IG4gO1xuXG5cdGZvciAoIGNvbnN0IGVsZW0gb2YgaXQgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGVsZW0gLCB0b3AgKSA8IDAgKSB7XG5cblx0XHRcdGhlYXByZXBsYWNlKCBoICwgWyBlbGVtICwgb3JkZXIgXSApIDtcblxuXHRcdFx0dG9wID0gcmVzdWx0WzBdWzBdIDtcblxuXHRcdFx0KytvcmRlciA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBzb3J0ZWQoIGNvbXBhcmUgLCBBcnJheS5mcm9tKCByZXN1bHQgLCByID0+IHJbMF0gKSApIDtcblxufVxuIl19