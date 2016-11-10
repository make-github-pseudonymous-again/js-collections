"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.siftup = siftup;

/**
 * Sifts up a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

function siftup(compare, a, i, j, k) {

	var current = k - i;

	// while we are not the root

	while (current !== 0) {

		// address of the parent in a zero-based
		// d-ary heap

		var parent = i + (current - 1 >>> 1);

		// if current value is greater than its parent
		// then we are done

		if (compare(a[i + current], a[parent]) >= 0) return i + current;

		// otherwise
		// swap with parent

		var tmp = a[i + current];
		a[i + current] = a[parent];
		a[parent] = tmp;

		current = parent - i;
	}

	return i + current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaGVhcHEvMDAxLWNvcmUvc2lmdHVwLmpzIl0sIm5hbWVzIjpbInNpZnR1cCIsImNvbXBhcmUiLCJhIiwiaSIsImoiLCJrIiwiY3VycmVudCIsInBhcmVudCIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLE0sR0FBQUEsTTs7QUFWaEI7Ozs7Ozs7Ozs7QUFVTyxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0QkMsQ0FBNUIsRUFBZ0NDLENBQWhDLEVBQW9DQyxDQUFwQyxFQUF3Q0MsQ0FBeEMsRUFBNEM7O0FBRWxELEtBQUlDLFVBQVVELElBQUlGLENBQWxCOztBQUVBOztBQUVBLFFBQVFHLFlBQVksQ0FBcEIsRUFBd0I7O0FBRXZCO0FBQ0E7O0FBRUEsTUFBTUMsU0FBU0osS0FBUUcsVUFBVSxDQUFaLEtBQW9CLENBQTFCLENBQWY7O0FBRUE7QUFDQTs7QUFFQSxNQUFLTCxRQUFTQyxFQUFFQyxJQUFJRyxPQUFOLENBQVQsRUFBeUJKLEVBQUVLLE1BQUYsQ0FBekIsS0FBd0MsQ0FBN0MsRUFBaUQsT0FBT0osSUFBSUcsT0FBWDs7QUFFakQ7QUFDQTs7QUFFQSxNQUFNRSxNQUFNTixFQUFFQyxJQUFFRyxPQUFKLENBQVo7QUFDQUosSUFBRUMsSUFBRUcsT0FBSixJQUFlSixFQUFFSyxNQUFGLENBQWY7QUFDQUwsSUFBRUssTUFBRixJQUFZQyxHQUFaOztBQUVBRixZQUFVQyxTQUFTSixDQUFuQjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU2lmdHMgdXAgYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIHJvb3QgZWxlbWVudFxuICogQHBhcmFtIHtpbnR9IGogLSAxIGlzIHRoZSBsYXN0IGxlYWZcbiAqIEBwYXJhbSB7aW50fSBrIGlzIHRoZSB0YXJnZXQgbm9kZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzaWZ0dXAgKCBjb21wYXJlICwgYSAsIGkgLCBqICwgayApIHtcblxuXHRsZXQgY3VycmVudCA9IGsgLSBpIDtcblxuXHQvLyB3aGlsZSB3ZSBhcmUgbm90IHRoZSByb290XG5cblx0d2hpbGUgKCBjdXJyZW50ICE9PSAwICkge1xuXG5cdFx0Ly8gYWRkcmVzcyBvZiB0aGUgcGFyZW50IGluIGEgemVyby1iYXNlZFxuXHRcdC8vIGQtYXJ5IGhlYXBcblxuXHRcdGNvbnN0IHBhcmVudCA9IGkgKyAoICggY3VycmVudCAtIDEgKSA+Pj4gMSApIDtcblxuXHRcdC8vIGlmIGN1cnJlbnQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIGl0cyBwYXJlbnRcblx0XHQvLyB0aGVuIHdlIGFyZSBkb25lXG5cblx0XHRpZiAoIGNvbXBhcmUoIGFbaSArIGN1cnJlbnRdLCBhW3BhcmVudF0gKSA+PSAwICkgcmV0dXJuIGkgKyBjdXJyZW50IDtcblxuXHRcdC8vIG90aGVyd2lzZVxuXHRcdC8vIHN3YXAgd2l0aCBwYXJlbnRcblxuXHRcdGNvbnN0IHRtcCA9IGFbaStjdXJyZW50XSA7XG5cdFx0YVtpK2N1cnJlbnRdID0gYVtwYXJlbnRdIDtcblx0XHRhW3BhcmVudF0gPSB0bXAgO1xuXG5cdFx0Y3VycmVudCA9IHBhcmVudCAtIGkgO1xuXG5cdH1cblxuXHRyZXR1cm4gaSArIGN1cnJlbnQgO1xuXG59XG4iXX0=