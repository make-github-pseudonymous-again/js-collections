'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.nsmallest = nsmallest;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9uc21hbGxlc3QuanMiXSwibmFtZXMiOlsibnNtYWxsZXN0IiwiY29tcGFyZSIsIm4iLCJpdGVyYWJsZSIsInNlbnRpbmVsIiwicmVzdWx0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXQiLCJpdGVyIiwiQXJyYXkiLCJmcm9tIiwiaSIsImVsZW0iLCJoIiwidG9wIiwib3JkZXIiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVFnQkEsUyxHQUFBQSxTOztBQVJoQjs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFTyxTQUFTQSxTQUFULENBQXFCQyxPQUFyQixFQUErQkMsQ0FBL0IsRUFBbUNDLFFBQW5DLEVBQThDOztBQUVwRCxLQUFLRCxNQUFNLENBQVgsRUFBZTs7QUFFZCxNQUFNRSxXQUFXLEVBQWpCOztBQUVBLE1BQU1DLFVBQVMsOEJBQUtKLE9BQUwsRUFBZUUsUUFBZixFQUEwQkMsUUFBMUIsQ0FBZjs7QUFFQSxTQUFPQyxZQUFXRCxRQUFYLEdBQXNCLEVBQXRCLEdBQTRCLENBQUVDLE9BQUYsQ0FBbkM7QUFFQTs7QUFFRCxLQUFLRixTQUFTRyxNQUFULEtBQW9CQyxTQUF6QixFQUFxQzs7QUFFcEMsTUFBS0wsS0FBS0MsU0FBU0csTUFBbkIsRUFBNEIsT0FBTyxpQ0FBUUwsT0FBUixFQUFrQkUsUUFBbEIsQ0FBUDtBQUU1Qjs7QUFFRCxLQUFNSyxLQUFLQyxLQUFNTixRQUFOLENBQVg7O0FBRUEsS0FBTUUsU0FBU0ssTUFBTUMsSUFBTixDQUFZLGdDQUFPLGlDQUFRLENBQVIsRUFBWVQsQ0FBWixFQUFnQixDQUFoQixDQUFQLEVBQTZCTSxFQUE3QixDQUFaLEVBQWdEO0FBQUE7QUFBQSxNQUFJSSxDQUFKO0FBQUEsTUFBUUMsSUFBUjs7QUFBQSxTQUFvQixDQUFFQSxJQUFGLEVBQVNELENBQVQsQ0FBcEI7QUFBQSxFQUFoRCxDQUFmOztBQUVBLEtBQUtQLE9BQU9DLE1BQVAsS0FBa0IsQ0FBdkIsRUFBMkIsT0FBT0QsTUFBUDs7QUFFM0IsS0FBTVMsSUFBSSx1QkFBUyxxQkFBVyxnQ0FBU2IsT0FBVCxDQUFYLENBQVQsRUFBMkNJLE1BQTNDLENBQVY7O0FBRUEsS0FBSVUsTUFBTVYsT0FBTyxDQUFQLEVBQVUsQ0FBVixDQUFWOztBQUVBLEtBQUlXLFFBQVFkLENBQVo7O0FBNUJvRDtBQUFBO0FBQUE7O0FBQUE7QUE4QnBELHVCQUFvQk0sRUFBcEIsOEhBQXlCO0FBQUEsT0FBYkssSUFBYTs7O0FBRXhCLE9BQUtaLFFBQVNZLElBQVQsRUFBZ0JFLEdBQWhCLElBQXdCLENBQTdCLEVBQWlDOztBQUVoQywrQkFBYUQsQ0FBYixFQUFpQixDQUFFRCxJQUFGLEVBQVNHLEtBQVQsQ0FBakI7O0FBRUFELFVBQU1WLE9BQU8sQ0FBUCxFQUFVLENBQVYsQ0FBTjs7QUFFQSxNQUFFVyxLQUFGO0FBRUE7QUFFRDtBQTFDbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE0Q3BELFFBQU8saUNBQVFmLE9BQVIsRUFBa0JTLE1BQU1DLElBQU4sQ0FBWU4sTUFBWixFQUFxQjtBQUFBLFNBQUtZLEVBQUUsQ0FBRixDQUFMO0FBQUEsRUFBckIsQ0FBbEIsQ0FBUDtBQUVBIiwiZmlsZSI6Im5zbWFsbGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pbiAsIHNvcnRlZCAsIF96aXAyICwgX3JhbmdlIH0gZnJvbSAnYXVyZW9vbXMtanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnYXVyZW9vbXMtanMtY29tcGFyZScgO1xuXG5pbXBvcnQgeyBrZWVwb3JkZXIgfSBmcm9tICcuL2NvcmUnIDtcblxuaW1wb3J0IGhlYXBpZnkgZnJvbSAnLi9oZWFwaWZ5JyA7XG5pbXBvcnQgaGVhcHJlcGxhY2UgZnJvbSAnLi9oZWFwcmVwbGFjZScgO1xuXG5leHBvcnQgZnVuY3Rpb24gbnNtYWxsZXN0ICggY29tcGFyZSAsIG4gLCBpdGVyYWJsZSApIHtcblxuXHRpZiAoIG4gPT09IDEgKSB7XG5cblx0XHRjb25zdCBzZW50aW5lbCA9IHsgfSA7XG5cblx0XHRjb25zdCByZXN1bHQgPSBtaW4oIGNvbXBhcmUgLCBpdGVyYWJsZSAsIHNlbnRpbmVsICkgO1xuXG5cdFx0cmV0dXJuIHJlc3VsdCA9PT0gc2VudGluZWwgPyBbIF0gOiBbIHJlc3VsdCBdIDtcblxuXHR9XG5cblx0aWYgKCBpdGVyYWJsZS5sZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggbiA+PSBpdGVyYWJsZS5sZW5ndGggKSByZXR1cm4gc29ydGVkKCBjb21wYXJlICwgaXRlcmFibGUgKSA7XG5cblx0fVxuXG5cdGNvbnN0IGl0ID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Y29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbSggX3ppcDIoIF9yYW5nZSggMCAsIG4gLCAxICkgLCBpdCApICwgKCBbIGkgLCBlbGVtIF0gKSA9PiBbIGVsZW0gLCBpIF0gKSA7XG5cblx0aWYgKCByZXN1bHQubGVuZ3RoID09PSAwICkgcmV0dXJuIHJlc3VsdCA7XG5cblx0Y29uc3QgaCA9IGhlYXBpZnkoIGtlZXBvcmRlciggcmV2ZXJzZSggY29tcGFyZSApICkgLCByZXN1bHQgKSA7XG5cblx0bGV0IHRvcCA9IHJlc3VsdFswXVswXSA7XG5cblx0bGV0IG9yZGVyID0gbiA7XG5cblx0Zm9yICggY29uc3QgZWxlbSBvZiBpdCApIHtcblxuXHRcdGlmICggY29tcGFyZSggZWxlbSAsIHRvcCApIDwgMCApIHtcblxuXHRcdFx0aGVhcHJlcGxhY2UoIGggLCBbIGVsZW0gLCBvcmRlciBdICkgO1xuXG5cdFx0XHR0b3AgPSByZXN1bHRbMF1bMF0gO1xuXG5cdFx0XHQrK29yZGVyIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHNvcnRlZCggY29tcGFyZSAsIEFycmF5LmZyb20oIHJlc3VsdCAsIHIgPT4gclswXSApICkgO1xuXG59XG4iXX0=