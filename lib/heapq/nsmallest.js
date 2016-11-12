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

	var it = (0, _aureoomsJsItertools.iter)(iterable);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9uc21hbGxlc3QuanMiXSwibmFtZXMiOlsibnNtYWxsZXN0IiwiY29tcGFyZSIsIm4iLCJpdGVyYWJsZSIsInNlbnRpbmVsIiwicmVzdWx0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXQiLCJBcnJheSIsImZyb20iLCJpIiwiZWxlbSIsImgiLCJ0b3AiLCJvcmRlciIsInIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQVF3QkEsUzs7QUFSeEI7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsU0FBVCxDQUFxQkMsT0FBckIsRUFBK0JDLENBQS9CLEVBQW1DQyxRQUFuQyxFQUE4Qzs7QUFFNUQsS0FBS0QsTUFBTSxDQUFYLEVBQWU7O0FBRWQsTUFBTUUsV0FBVyxFQUFqQjs7QUFFQSxNQUFNQyxVQUFTLDhCQUFLSixPQUFMLEVBQWVFLFFBQWYsRUFBMEJDLFFBQTFCLENBQWY7O0FBRUEsU0FBT0MsWUFBV0QsUUFBWCxHQUFzQixFQUF0QixHQUE0QixDQUFFQyxPQUFGLENBQW5DO0FBRUE7O0FBRUQsS0FBS0YsU0FBU0csTUFBVCxLQUFvQkMsU0FBekIsRUFBcUM7O0FBRXBDLE1BQUtMLEtBQUtDLFNBQVNHLE1BQW5CLEVBQTRCLE9BQU8saUNBQVFMLE9BQVIsRUFBa0JFLFFBQWxCLENBQVA7QUFFNUI7O0FBRUQsS0FBTUssS0FBSywrQkFBTUwsUUFBTixDQUFYOztBQUVBLEtBQU1FLFNBQVNJLE1BQU1DLElBQU4sQ0FBWSxnQ0FBTyxpQ0FBUSxDQUFSLEVBQVlSLENBQVosRUFBZ0IsQ0FBaEIsQ0FBUCxFQUE2Qk0sRUFBN0IsQ0FBWixFQUFnRDtBQUFBO0FBQUEsTUFBSUcsQ0FBSjtBQUFBLE1BQVFDLElBQVI7O0FBQUEsU0FBb0IsQ0FBRUEsSUFBRixFQUFTRCxDQUFULENBQXBCO0FBQUEsRUFBaEQsQ0FBZjs7QUFFQSxLQUFLTixPQUFPQyxNQUFQLEtBQWtCLENBQXZCLEVBQTJCLE9BQU9ELE1BQVA7O0FBRTNCLEtBQU1RLElBQUksdUJBQVMscUJBQVcsZ0NBQVNaLE9BQVQsQ0FBWCxDQUFULEVBQTJDSSxNQUEzQyxDQUFWOztBQUVBLEtBQUlTLE1BQU1ULE9BQU8sQ0FBUCxFQUFVLENBQVYsQ0FBVjs7QUFFQSxLQUFJVSxRQUFRYixDQUFaOztBQTVCNEQ7QUFBQTtBQUFBOztBQUFBO0FBOEI1RCx1QkFBb0JNLEVBQXBCLDhIQUF5QjtBQUFBLE9BQWJJLElBQWE7OztBQUV4QixPQUFLWCxRQUFTVyxJQUFULEVBQWdCRSxHQUFoQixJQUF3QixDQUE3QixFQUFpQzs7QUFFaEMsK0JBQWFELENBQWIsRUFBaUIsQ0FBRUQsSUFBRixFQUFTRyxLQUFULENBQWpCOztBQUVBRCxVQUFNVCxPQUFPLENBQVAsRUFBVSxDQUFWLENBQU47O0FBRUEsTUFBRVUsS0FBRjtBQUVBO0FBRUQ7QUExQzJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNEM1RCxRQUFPLGlDQUFRZCxPQUFSLEVBQWtCUSxNQUFNQyxJQUFOLENBQVlMLE1BQVosRUFBcUI7QUFBQSxTQUFLVyxFQUFFLENBQUYsQ0FBTDtBQUFBLEVBQXJCLENBQWxCLENBQVA7QUFFQSIsImZpbGUiOiJuc21hbGxlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaW4gLCBzb3J0ZWQgLCBfemlwMiAsIF9yYW5nZSAsIGl0ZXIgfSBmcm9tICdhdXJlb29tcy1qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdhdXJlb29tcy1qcy1jb21wYXJlJyA7XG5cbmltcG9ydCB7IGtlZXBvcmRlciB9IGZyb20gJy4vY29yZScgO1xuXG5pbXBvcnQgaGVhcGlmeSBmcm9tICcuL2hlYXBpZnknIDtcbmltcG9ydCBoZWFwcmVwbGFjZSBmcm9tICcuL2hlYXByZXBsYWNlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5zbWFsbGVzdCAoIGNvbXBhcmUgLCBuICwgaXRlcmFibGUgKSB7XG5cblx0aWYgKCBuID09PSAxICkge1xuXG5cdFx0Y29uc3Qgc2VudGluZWwgPSB7IH0gO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gbWluKCBjb21wYXJlICwgaXRlcmFibGUgLCBzZW50aW5lbCApIDtcblxuXHRcdHJldHVybiByZXN1bHQgPT09IHNlbnRpbmVsID8gWyBdIDogWyByZXN1bHQgXSA7XG5cblx0fVxuXG5cdGlmICggaXRlcmFibGUubGVuZ3RoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIG4gPj0gaXRlcmFibGUubGVuZ3RoICkgcmV0dXJuIHNvcnRlZCggY29tcGFyZSAsIGl0ZXJhYmxlICkgO1xuXG5cdH1cblxuXHRjb25zdCBpdCA9IGl0ZXIoIGl0ZXJhYmxlICkgO1xuXG5cdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oIF96aXAyKCBfcmFuZ2UoIDAgLCBuICwgMSApICwgaXQgKSAsICggWyBpICwgZWxlbSBdICkgPT4gWyBlbGVtICwgaSBdICkgO1xuXG5cdGlmICggcmVzdWx0Lmxlbmd0aCA9PT0gMCApIHJldHVybiByZXN1bHQgO1xuXG5cdGNvbnN0IGggPSBoZWFwaWZ5KCBrZWVwb3JkZXIoIHJldmVyc2UoIGNvbXBhcmUgKSApICwgcmVzdWx0ICkgO1xuXG5cdGxldCB0b3AgPSByZXN1bHRbMF1bMF0gO1xuXG5cdGxldCBvcmRlciA9IG4gO1xuXG5cdGZvciAoIGNvbnN0IGVsZW0gb2YgaXQgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGVsZW0gLCB0b3AgKSA8IDAgKSB7XG5cblx0XHRcdGhlYXByZXBsYWNlKCBoICwgWyBlbGVtICwgb3JkZXIgXSApIDtcblxuXHRcdFx0dG9wID0gcmVzdWx0WzBdWzBdIDtcblxuXHRcdFx0KytvcmRlciA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBzb3J0ZWQoIGNvbXBhcmUgLCBBcnJheS5mcm9tKCByZXN1bHQgLCByID0+IHJbMF0gKSApIDtcblxufVxuIl19