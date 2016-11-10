"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = siftup;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL3NpZnR1cC5qcyJdLCJuYW1lcyI6WyJzaWZ0dXAiLCJjb21wYXJlIiwiYSIsImkiLCJqIiwiayIsImN1cnJlbnQiLCJwYXJlbnQiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVd3QkEsTTs7QUFWeEI7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0QkMsQ0FBNUIsRUFBZ0NDLENBQWhDLEVBQW9DQyxDQUFwQyxFQUF3Q0MsQ0FBeEMsRUFBNEM7O0FBRTFELEtBQUlDLFVBQVVELElBQUlGLENBQWxCOztBQUVBOztBQUVBLFFBQVFHLFlBQVksQ0FBcEIsRUFBd0I7O0FBRXZCO0FBQ0E7O0FBRUEsTUFBTUMsU0FBU0osS0FBUUcsVUFBVSxDQUFaLEtBQW9CLENBQTFCLENBQWY7O0FBRUE7QUFDQTs7QUFFQSxNQUFLTCxRQUFTQyxFQUFFQyxJQUFJRyxPQUFOLENBQVQsRUFBeUJKLEVBQUVLLE1BQUYsQ0FBekIsS0FBd0MsQ0FBN0MsRUFBaUQsT0FBT0osSUFBSUcsT0FBWDs7QUFFakQ7QUFDQTs7QUFFQSxNQUFNRSxNQUFNTixFQUFFQyxJQUFFRyxPQUFKLENBQVo7QUFDQUosSUFBRUMsSUFBRUcsT0FBSixJQUFlSixFQUFFSyxNQUFGLENBQWY7QUFDQUwsSUFBRUssTUFBRixJQUFZQyxHQUFaOztBQUVBRixZQUFVQyxTQUFTSixDQUFuQjtBQUVBOztBQUVELFFBQU9BLElBQUlHLE9BQVg7QUFFQSIsImZpbGUiOiJzaWZ0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU2lmdHMgdXAgYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIHJvb3QgZWxlbWVudFxuICogQHBhcmFtIHtpbnR9IGogLSAxIGlzIHRoZSBsYXN0IGxlYWZcbiAqIEBwYXJhbSB7aW50fSBrIGlzIHRoZSB0YXJnZXQgbm9kZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZnR1cCAoIGNvbXBhcmUgLCBhICwgaSAsIGogLCBrICkge1xuXG5cdGxldCBjdXJyZW50ID0gayAtIGkgO1xuXG5cdC8vIHdoaWxlIHdlIGFyZSBub3QgdGhlIHJvb3RcblxuXHR3aGlsZSAoIGN1cnJlbnQgIT09IDAgKSB7XG5cblx0XHQvLyBhZGRyZXNzIG9mIHRoZSBwYXJlbnQgaW4gYSB6ZXJvLWJhc2VkXG5cdFx0Ly8gZC1hcnkgaGVhcFxuXG5cdFx0Y29uc3QgcGFyZW50ID0gaSArICggKCBjdXJyZW50IC0gMSApID4+PiAxICkgO1xuXG5cdFx0Ly8gaWYgY3VycmVudCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gaXRzIHBhcmVudFxuXHRcdC8vIHRoZW4gd2UgYXJlIGRvbmVcblxuXHRcdGlmICggY29tcGFyZSggYVtpICsgY3VycmVudF0sIGFbcGFyZW50XSApID49IDAgKSByZXR1cm4gaSArIGN1cnJlbnQgO1xuXG5cdFx0Ly8gb3RoZXJ3aXNlXG5cdFx0Ly8gc3dhcCB3aXRoIHBhcmVudFxuXG5cdFx0Y29uc3QgdG1wID0gYVtpK2N1cnJlbnRdIDtcblx0XHRhW2krY3VycmVudF0gPSBhW3BhcmVudF0gO1xuXHRcdGFbcGFyZW50XSA9IHRtcCA7XG5cblx0XHRjdXJyZW50ID0gcGFyZW50IC0gaSA7XG5cblx0fVxuXG5cdHJldHVybiBpICsgY3VycmVudCA7XG5cbn1cbiJdfQ==