"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.nsmallest = nsmallest;
function nsmallest(compare, n, iterable) {

	if (n === 1) {

		var sentinel = {};

		var _result = min(compare, iterable, sentinel);

		return _result === sentinel ? [] : [_result];
	}

	if (iterable.length !== undefined) {

		if (n >= iterable.length) return sorted(compare, iterable);
	}

	var it = iter(iterable);

	var result = Array.from(zip([range(0, n, 1), it]), function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    i = _ref2[0],
		    elem = _ref2[1];

		return [elem, i];
	});

	if (result.length === 0) return result;

	var h = heapify(keeporder(reverse(compare)), result);

	var top = result[0][0];

	var order = n;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var elem = _step.value;


			if (compare(elem, top) < 0) {

				heapreplace(h, [elem, order]);

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

	return sorted(compare, Array.from(result, function (r) {
		return r[0];
	}));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaGVhcHEvMDAyLWFwaS9uc21hbGxlc3QuanMiXSwibmFtZXMiOlsibnNtYWxsZXN0IiwiY29tcGFyZSIsIm4iLCJpdGVyYWJsZSIsInNlbnRpbmVsIiwicmVzdWx0IiwibWluIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic29ydGVkIiwiaXQiLCJpdGVyIiwiQXJyYXkiLCJmcm9tIiwiemlwIiwicmFuZ2UiLCJpIiwiZWxlbSIsImgiLCJoZWFwaWZ5Iiwia2VlcG9yZGVyIiwicmV2ZXJzZSIsInRvcCIsIm9yZGVyIiwiaGVhcHJlcGxhY2UiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUNnQkEsUyxHQUFBQSxTO0FBQVQsU0FBU0EsU0FBVCxDQUFxQkMsT0FBckIsRUFBK0JDLENBQS9CLEVBQW1DQyxRQUFuQyxFQUE4Qzs7QUFFcEQsS0FBS0QsTUFBTSxDQUFYLEVBQWU7O0FBRWQsTUFBTUUsV0FBVyxFQUFqQjs7QUFFQSxNQUFNQyxVQUFTQyxJQUFLTCxPQUFMLEVBQWVFLFFBQWYsRUFBMEJDLFFBQTFCLENBQWY7O0FBRUEsU0FBT0MsWUFBV0QsUUFBWCxHQUFzQixFQUF0QixHQUE0QixDQUFFQyxPQUFGLENBQW5DO0FBRUE7O0FBRUQsS0FBS0YsU0FBU0ksTUFBVCxLQUFvQkMsU0FBekIsRUFBcUM7O0FBRXBDLE1BQUtOLEtBQUtDLFNBQVNJLE1BQW5CLEVBQTRCLE9BQU9FLE9BQVFSLE9BQVIsRUFBa0JFLFFBQWxCLENBQVA7QUFFNUI7O0FBRUQsS0FBTU8sS0FBS0MsS0FBTVIsUUFBTixDQUFYOztBQUVBLEtBQU1FLFNBQVNPLE1BQU1DLElBQU4sQ0FBWUMsSUFBSyxDQUFFQyxNQUFPLENBQVAsRUFBV2IsQ0FBWCxFQUFlLENBQWYsQ0FBRixFQUF1QlEsRUFBdkIsQ0FBTCxDQUFaLEVBQWlEO0FBQUE7QUFBQSxNQUFJTSxDQUFKO0FBQUEsTUFBUUMsSUFBUjs7QUFBQSxTQUFvQixDQUFFQSxJQUFGLEVBQVNELENBQVQsQ0FBcEI7QUFBQSxFQUFqRCxDQUFmOztBQUVBLEtBQUtYLE9BQU9FLE1BQVAsS0FBa0IsQ0FBdkIsRUFBMkIsT0FBT0YsTUFBUDs7QUFFM0IsS0FBTWEsSUFBSUMsUUFBU0MsVUFBV0MsUUFBU3BCLE9BQVQsQ0FBWCxDQUFULEVBQTJDSSxNQUEzQyxDQUFWOztBQUVBLEtBQUlpQixNQUFNakIsT0FBTyxDQUFQLEVBQVUsQ0FBVixDQUFWOztBQUVBLEtBQUlrQixRQUFRckIsQ0FBWjs7QUE1Qm9EO0FBQUE7QUFBQTs7QUFBQTtBQThCcEQsdUJBQW9CUSxFQUFwQiw4SEFBeUI7QUFBQSxPQUFiTyxJQUFhOzs7QUFFeEIsT0FBS2hCLFFBQVNnQixJQUFULEVBQWdCSyxHQUFoQixJQUF3QixDQUE3QixFQUFpQzs7QUFFaENFLGdCQUFhTixDQUFiLEVBQWlCLENBQUVELElBQUYsRUFBU00sS0FBVCxDQUFqQjs7QUFFQUQsVUFBTWpCLE9BQU8sQ0FBUCxFQUFVLENBQVYsQ0FBTjs7QUFFQSxNQUFFa0IsS0FBRjtBQUVBO0FBRUQ7QUExQ21EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNENwRCxRQUFPZCxPQUFRUixPQUFSLEVBQWtCVyxNQUFNQyxJQUFOLENBQVlSLE1BQVosRUFBcUI7QUFBQSxTQUFLb0IsRUFBRSxDQUFGLENBQUw7QUFBQSxFQUFyQixDQUFsQixDQUFQO0FBRUEiLCJmaWxlIjoibnNtYWxsZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gbnNtYWxsZXN0ICggY29tcGFyZSAsIG4gLCBpdGVyYWJsZSApIHtcblxuXHRpZiAoIG4gPT09IDEgKSB7XG5cblx0XHRjb25zdCBzZW50aW5lbCA9IHsgfSA7XG5cblx0XHRjb25zdCByZXN1bHQgPSBtaW4oIGNvbXBhcmUgLCBpdGVyYWJsZSAsIHNlbnRpbmVsICkgO1xuXG5cdFx0cmV0dXJuIHJlc3VsdCA9PT0gc2VudGluZWwgPyBbIF0gOiBbIHJlc3VsdCBdIDtcblxuXHR9XG5cblx0aWYgKCBpdGVyYWJsZS5sZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggbiA+PSBpdGVyYWJsZS5sZW5ndGggKSByZXR1cm4gc29ydGVkKCBjb21wYXJlICwgaXRlcmFibGUgKSA7XG5cblx0fVxuXG5cdGNvbnN0IGl0ID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Y29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbSggemlwKCBbIHJhbmdlKCAwICwgbiAsIDEgKSAsIGl0IF0gKSAsICggWyBpICwgZWxlbSBdICkgPT4gWyBlbGVtICwgaSBdICkgO1xuXG5cdGlmICggcmVzdWx0Lmxlbmd0aCA9PT0gMCApIHJldHVybiByZXN1bHQgO1xuXG5cdGNvbnN0IGggPSBoZWFwaWZ5KCBrZWVwb3JkZXIoIHJldmVyc2UoIGNvbXBhcmUgKSApICwgcmVzdWx0ICkgO1xuXG5cdGxldCB0b3AgPSByZXN1bHRbMF1bMF0gO1xuXG5cdGxldCBvcmRlciA9IG4gO1xuXG5cdGZvciAoIGNvbnN0IGVsZW0gb2YgaXQgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGVsZW0gLCB0b3AgKSA8IDAgKSB7XG5cblx0XHRcdGhlYXByZXBsYWNlKCBoICwgWyBlbGVtICwgb3JkZXIgXSApIDtcblxuXHRcdFx0dG9wID0gcmVzdWx0WzBdWzBdIDtcblxuXHRcdFx0KytvcmRlciA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBzb3J0ZWQoIGNvbXBhcmUgLCBBcnJheS5mcm9tKCByZXN1bHQgLCByID0+IHJbMF0gKSApIDtcblxufVxuIl19