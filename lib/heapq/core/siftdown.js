'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = siftdown;

var _nextchild = require('./nextchild');

var _nextchild2 = _interopRequireDefault(_nextchild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sifts down a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function siftdown(compare, a, i, j, k) {

	var current = k - i;

	while (true) {

		// address of the first child in a zero-based
		// binary heap

		var firstchild = 2 * current + 1;

		// if current node has no children
		// then we are done

		if (firstchild >= j - i) break;

		// if current value is smaller than its smallest
		// child then we are done

		var candidate = (0, _nextchild2.default)(compare, a, i + firstchild, j);

		if (compare(a[i + current], a[candidate]) <= 0) break;

		// otherwise
		// swap with smallest child

		var tmp = a[i + current];
		a[i + current] = a[candidate];
		a[candidate] = tmp;

		current = candidate - i;
	}

	return i + current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL3NpZnRkb3duLmpzIl0sIm5hbWVzIjpbInNpZnRkb3duIiwiY29tcGFyZSIsImEiLCJpIiwiaiIsImsiLCJjdXJyZW50IiwiZmlyc3RjaGlsZCIsImNhbmRpZGF0ZSIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxROztBQVp4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxRQUFULENBQW9CQyxPQUFwQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLENBQWhDLEVBQW1DQyxDQUFuQyxFQUFzQ0MsQ0FBdEMsRUFBMEM7O0FBRXhELEtBQUlDLFVBQVVELElBQUlGLENBQWxCOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkO0FBQ0E7O0FBRUEsTUFBTUksYUFBYSxJQUFJRCxPQUFKLEdBQWMsQ0FBakM7O0FBRUE7QUFDQTs7QUFFQSxNQUFLQyxjQUFjSCxJQUFJRCxDQUF2QixFQUEyQjs7QUFFM0I7QUFDQTs7QUFFQSxNQUFNSyxZQUFZLHlCQUFXUCxPQUFYLEVBQW9CQyxDQUFwQixFQUF1QkMsSUFBSUksVUFBM0IsRUFBdUNILENBQXZDLENBQWxCOztBQUVBLE1BQUtILFFBQVNDLEVBQUVDLElBQUlHLE9BQU4sQ0FBVCxFQUF5QkosRUFBRU0sU0FBRixDQUF6QixLQUEyQyxDQUFoRCxFQUFvRDs7QUFFcEQ7QUFDQTs7QUFFQSxNQUFNQyxNQUFNUCxFQUFFQyxJQUFFRyxPQUFKLENBQVo7QUFDQUosSUFBRUMsSUFBRUcsT0FBSixJQUFlSixFQUFFTSxTQUFGLENBQWY7QUFDQU4sSUFBRU0sU0FBRixJQUFlQyxHQUFmOztBQUVBSCxZQUFVRSxZQUFZTCxDQUF0QjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Y2hpbGQgZnJvbSAnLi9uZXh0Y2hpbGQnIDtcblxuLyoqXG4gKiBTaWZ0cyBkb3duIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSBhIHRoZSBhcnJheSB3aGVyZSB0aGUgaGVhcCBpcyBzdG9yZWRcbiAqIEBwYXJhbSB7aW50fSBpIGlzIHRoZSByb290IGVsZW1lbnRcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmXG4gKiBAcGFyYW0ge2ludH0gayBpcyB0aGUgdGFyZ2V0IG5vZGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWZ0ZG93biAoIGNvbXBhcmUsIGEsIGksIGosIGsgKSB7XG5cblx0bGV0IGN1cnJlbnQgPSBrIC0gaTtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHQvLyBhZGRyZXNzIG9mIHRoZSBmaXJzdCBjaGlsZCBpbiBhIHplcm8tYmFzZWRcblx0XHQvLyBiaW5hcnkgaGVhcFxuXG5cdFx0Y29uc3QgZmlyc3RjaGlsZCA9IDIgKiBjdXJyZW50ICsgMTtcblxuXHRcdC8vIGlmIGN1cnJlbnQgbm9kZSBoYXMgbm8gY2hpbGRyZW5cblx0XHQvLyB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRpZiAoIGZpcnN0Y2hpbGQgPj0gaiAtIGkgKSBicmVhayA7XG5cblx0XHQvLyBpZiBjdXJyZW50IHZhbHVlIGlzIHNtYWxsZXIgdGhhbiBpdHMgc21hbGxlc3Rcblx0XHQvLyBjaGlsZCB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRjb25zdCBjYW5kaWRhdGUgPSBuZXh0Y2hpbGQoIGNvbXBhcmUsIGEsIGkgKyBmaXJzdGNoaWxkLCBqICk7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGFbaSArIGN1cnJlbnRdLCBhW2NhbmRpZGF0ZV0gKSA8PSAwICkgYnJlYWsgO1xuXG5cdFx0Ly8gb3RoZXJ3aXNlXG5cdFx0Ly8gc3dhcCB3aXRoIHNtYWxsZXN0IGNoaWxkXG5cblx0XHRjb25zdCB0bXAgPSBhW2krY3VycmVudF0gO1xuXHRcdGFbaStjdXJyZW50XSA9IGFbY2FuZGlkYXRlXSA7XG5cdFx0YVtjYW5kaWRhdGVdID0gdG1wIDtcblxuXHRcdGN1cnJlbnQgPSBjYW5kaWRhdGUgLSBpO1xuXG5cdH1cblxuXHRyZXR1cm4gaSArIGN1cnJlbnQ7XG5cbn1cbiJdfQ==