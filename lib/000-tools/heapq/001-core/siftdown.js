"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.siftdown = siftdown;


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

		var candidate = nextchild(compare, a, i + firstchild, j);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaGVhcHEvMDAxLWNvcmUvc2lmdGRvd24uanMiXSwibmFtZXMiOlsic2lmdGRvd24iLCJjb21wYXJlIiwiYSIsImkiLCJqIiwiayIsImN1cnJlbnQiLCJmaXJzdGNoaWxkIiwiY2FuZGlkYXRlIiwibmV4dGNoaWxkIiwidG1wIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsUSxHQUFBQSxROzs7QUFWaEI7Ozs7Ozs7Ozs7QUFVTyxTQUFTQSxRQUFULENBQW9CQyxPQUFwQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLENBQWhDLEVBQW1DQyxDQUFuQyxFQUFzQ0MsQ0FBdEMsRUFBMEM7O0FBRWhELEtBQUlDLFVBQVVELElBQUlGLENBQWxCOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkO0FBQ0E7O0FBRUEsTUFBTUksYUFBYSxJQUFJRCxPQUFKLEdBQWMsQ0FBakM7O0FBRUE7QUFDQTs7QUFFQSxNQUFLQyxjQUFjSCxJQUFJRCxDQUF2QixFQUEyQjs7QUFFM0I7QUFDQTs7QUFFQSxNQUFNSyxZQUFZQyxVQUFXUixPQUFYLEVBQW9CQyxDQUFwQixFQUF1QkMsSUFBSUksVUFBM0IsRUFBdUNILENBQXZDLENBQWxCOztBQUVBLE1BQUtILFFBQVNDLEVBQUVDLElBQUlHLE9BQU4sQ0FBVCxFQUF5QkosRUFBRU0sU0FBRixDQUF6QixLQUEyQyxDQUFoRCxFQUFvRDs7QUFFcEQ7QUFDQTs7QUFFQSxNQUFNRSxNQUFNUixFQUFFQyxJQUFFRyxPQUFKLENBQVo7QUFDQUosSUFBRUMsSUFBRUcsT0FBSixJQUFlSixFQUFFTSxTQUFGLENBQWY7QUFDQU4sSUFBRU0sU0FBRixJQUFlRSxHQUFmOztBQUVBSixZQUFVRSxZQUFZTCxDQUF0QjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIFNpZnRzIGRvd24gYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIHJvb3QgZWxlbWVudFxuICogQHBhcmFtIHtpbnR9IGogLSAxIGlzIHRoZSBsYXN0IGxlYWZcbiAqIEBwYXJhbSB7aW50fSBrIGlzIHRoZSB0YXJnZXQgbm9kZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzaWZ0ZG93biAoIGNvbXBhcmUsIGEsIGksIGosIGsgKSB7XG5cblx0bGV0IGN1cnJlbnQgPSBrIC0gaTtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHQvLyBhZGRyZXNzIG9mIHRoZSBmaXJzdCBjaGlsZCBpbiBhIHplcm8tYmFzZWRcblx0XHQvLyBiaW5hcnkgaGVhcFxuXG5cdFx0Y29uc3QgZmlyc3RjaGlsZCA9IDIgKiBjdXJyZW50ICsgMTtcblxuXHRcdC8vIGlmIGN1cnJlbnQgbm9kZSBoYXMgbm8gY2hpbGRyZW5cblx0XHQvLyB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRpZiAoIGZpcnN0Y2hpbGQgPj0gaiAtIGkgKSBicmVhayA7XG5cblx0XHQvLyBpZiBjdXJyZW50IHZhbHVlIGlzIHNtYWxsZXIgdGhhbiBpdHMgc21hbGxlc3Rcblx0XHQvLyBjaGlsZCB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRjb25zdCBjYW5kaWRhdGUgPSBuZXh0Y2hpbGQoIGNvbXBhcmUsIGEsIGkgKyBmaXJzdGNoaWxkLCBqICk7XG5cblx0XHRpZiAoIGNvbXBhcmUoIGFbaSArIGN1cnJlbnRdLCBhW2NhbmRpZGF0ZV0gKSA8PSAwICkgYnJlYWsgO1xuXG5cdFx0Ly8gb3RoZXJ3aXNlXG5cdFx0Ly8gc3dhcCB3aXRoIHNtYWxsZXN0IGNoaWxkXG5cblx0XHRjb25zdCB0bXAgPSBhW2krY3VycmVudF0gO1xuXHRcdGFbaStjdXJyZW50XSA9IGFbY2FuZGlkYXRlXSA7XG5cdFx0YVtjYW5kaWRhdGVdID0gdG1wIDtcblxuXHRcdGN1cnJlbnQgPSBjYW5kaWRhdGUgLSBpO1xuXG5cdH1cblxuXHRyZXR1cm4gaSArIGN1cnJlbnQ7XG5cbn1cbiJdfQ==