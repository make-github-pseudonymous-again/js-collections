'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = heappop;

var _error = require('../error');

var _core = require('./core');

function heappop(heap) {

	var x = heap.data;
	var n = x.length;

	if (n === 0) throw new _error.IndexError("heappop");

	var last = n - 1;

	// swap last leaf and root

	var tmp = x[0];
	x[0] = x[last];
	x[last] = tmp;

	// sift down the new root

	(0, _core.siftdown)(heap.compare, x, 0, last, 0);

	// return old root

	return x.pop();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9oZWFwcG9wLmpzIl0sIm5hbWVzIjpbImhlYXBwb3AiLCJoZWFwIiwieCIsImRhdGEiLCJuIiwibGVuZ3RoIiwibGFzdCIsInRtcCIsImNvbXBhcmUiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsTzs7QUFIeEI7O0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxDQUFtQkMsSUFBbkIsRUFBMEI7O0FBRXhDLEtBQU1DLElBQUlELEtBQUtFLElBQWY7QUFDQSxLQUFNQyxJQUFJRixFQUFFRyxNQUFaOztBQUVBLEtBQUtELE1BQU0sQ0FBWCxFQUFlLE1BQU0sc0JBQWdCLFNBQWhCLENBQU47O0FBRWYsS0FBTUUsT0FBT0YsSUFBSSxDQUFqQjs7QUFFQTs7QUFFQSxLQUFNRyxNQUFNTCxFQUFFLENBQUYsQ0FBWjtBQUNBQSxHQUFFLENBQUYsSUFBT0EsRUFBRUksSUFBRixDQUFQO0FBQ0FKLEdBQUVJLElBQUYsSUFBVUMsR0FBVjs7QUFFQTs7QUFFQSxxQkFBVU4sS0FBS08sT0FBZixFQUF5Qk4sQ0FBekIsRUFBNkIsQ0FBN0IsRUFBaUNJLElBQWpDLEVBQXdDLENBQXhDOztBQUVBOztBQUVBLFFBQU9KLEVBQUVPLEdBQUYsRUFBUDtBQUVBIiwiZmlsZSI6ImhlYXBwb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmRleEVycm9yIH0gZnJvbSAnLi4vZXJyb3InIDtcbmltcG9ydCB7IHNpZnRkb3duIH0gZnJvbSAnLi9jb3JlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYXBwb3AgKCBoZWFwICkge1xuXG5cdGNvbnN0IHggPSBoZWFwLmRhdGEgO1xuXHRjb25zdCBuID0geC5sZW5ndGggO1xuXG5cdGlmICggbiA9PT0gMCApIHRocm93IG5ldyBJbmRleEVycm9yKCBcImhlYXBwb3BcIiApIDtcblxuXHRjb25zdCBsYXN0ID0gbiAtIDEgO1xuXG5cdC8vIHN3YXAgbGFzdCBsZWFmIGFuZCByb290XG5cblx0Y29uc3QgdG1wID0geFswXSA7XG5cdHhbMF0gPSB4W2xhc3RdIDtcblx0eFtsYXN0XSA9IHRtcCA7XG5cblx0Ly8gc2lmdCBkb3duIHRoZSBuZXcgcm9vdFxuXG5cdHNpZnRkb3duKCBoZWFwLmNvbXBhcmUgLCB4ICwgMCAsIGxhc3QgLCAwICkgO1xuXG5cdC8vIHJldHVybiBvbGQgcm9vdFxuXG5cdHJldHVybiB4LnBvcCggKSA7XG5cbn1cbiJdfQ==