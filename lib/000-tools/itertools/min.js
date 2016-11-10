"use strict";

/**
 * Returns the smallest element of an iterable according
 * to some comparison function.
 */

var min = function min(compare, iterable, dflt) {

	var iterator = iter(iterable);

	var first = next(iterator);

	if (first.done) return dflt;

	var smallest = first.value;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var candidate = _step.value;


			if (compare(candidate, smallest) < 0) {

				smallest = candidate;
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

	return smallest;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaXRlcnRvb2xzL21pbi5qcyJdLCJuYW1lcyI6WyJtaW4iLCJjb21wYXJlIiwiaXRlcmFibGUiLCJkZmx0IiwiaXRlcmF0b3IiLCJpdGVyIiwiZmlyc3QiLCJuZXh0IiwiZG9uZSIsInNtYWxsZXN0IiwidmFsdWUiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7O0FBS0EsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQVdDLE9BQVgsRUFBcUJDLFFBQXJCLEVBQWdDQyxJQUFoQyxFQUF1Qzs7QUFFbEQsS0FBTUMsV0FBV0MsS0FBTUgsUUFBTixDQUFqQjs7QUFFQSxLQUFNSSxRQUFRQyxLQUFNSCxRQUFOLENBQWQ7O0FBRUEsS0FBS0UsTUFBTUUsSUFBWCxFQUFrQixPQUFPTCxJQUFQOztBQUVsQixLQUFJTSxXQUFXSCxNQUFNSSxLQUFyQjs7QUFSa0Q7QUFBQTtBQUFBOztBQUFBO0FBVWxELHVCQUF1Qk4sUUFBdkIsOEhBQWtDO0FBQUEsT0FBeEJPLFNBQXdCOzs7QUFFakMsT0FBS1YsUUFBU1UsU0FBVCxFQUFxQkYsUUFBckIsSUFBa0MsQ0FBdkMsRUFBMkM7O0FBRTFDQSxlQUFXRSxTQUFYO0FBRUE7QUFFRDtBQWxCaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQmxELFFBQU9GLFFBQVA7QUFFQSxDQXRCRCIsImZpbGUiOiJtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlc3QgZWxlbWVudCBvZiBhbiBpdGVyYWJsZSBhY2NvcmRpbmdcbiAqIHRvIHNvbWUgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqL1xuXG5jb25zdCBtaW4gPSBmdW5jdGlvbiAoIGNvbXBhcmUgLCBpdGVyYWJsZSAsIGRmbHQgKSB7XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyKCBpdGVyYWJsZSApIDtcblxuXHRjb25zdCBmaXJzdCA9IG5leHQoIGl0ZXJhdG9yICkgO1xuXG5cdGlmICggZmlyc3QuZG9uZSApIHJldHVybiBkZmx0IDtcblxuXHRsZXQgc21hbGxlc3QgPSBmaXJzdC52YWx1ZSA7XG5cblx0Zm9yICggbGV0IGNhbmRpZGF0ZSBvZiBpdGVyYXRvciApIHtcblxuXHRcdGlmICggY29tcGFyZSggY2FuZGlkYXRlICwgc21hbGxlc3QgKSA8IDAgKSB7XG5cblx0XHRcdHNtYWxsZXN0ID0gY2FuZGlkYXRlIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHNtYWxsZXN0IDtcblxufSA7XG4iXX0=