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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL3NpZnR1cC5qcyJdLCJuYW1lcyI6WyJzaWZ0dXAiLCJjb21wYXJlIiwiYSIsImkiLCJqIiwiayIsImN1cnJlbnQiLCJwYXJlbnQiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCQSxNLEdBQUFBLE07O0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBNEJDLENBQTVCLEVBQWdDQyxDQUFoQyxFQUFvQ0MsQ0FBcEMsRUFBd0NDLENBQXhDLEVBQTRDOztBQUVsRCxLQUFJQyxVQUFVRCxJQUFJRixDQUFsQjs7QUFFQTs7QUFFQSxRQUFRRyxZQUFZLENBQXBCLEVBQXdCOztBQUV2QjtBQUNBOztBQUVBLE1BQU1DLFNBQVNKLEtBQVFHLFVBQVUsQ0FBWixLQUFvQixDQUExQixDQUFmOztBQUVBO0FBQ0E7O0FBRUEsTUFBS0wsUUFBU0MsRUFBRUMsSUFBSUcsT0FBTixDQUFULEVBQXlCSixFQUFFSyxNQUFGLENBQXpCLEtBQXdDLENBQTdDLEVBQWlELE9BQU9KLElBQUlHLE9BQVg7O0FBRWpEO0FBQ0E7O0FBRUEsTUFBTUUsTUFBTU4sRUFBRUMsSUFBRUcsT0FBSixDQUFaO0FBQ0FKLElBQUVDLElBQUVHLE9BQUosSUFBZUosRUFBRUssTUFBRixDQUFmO0FBQ0FMLElBQUVLLE1BQUYsSUFBWUMsR0FBWjs7QUFFQUYsWUFBVUMsU0FBU0osQ0FBbkI7QUFFQTs7QUFFRCxRQUFPQSxJQUFJRyxPQUFYO0FBRUEiLCJmaWxlIjoic2lmdHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFNpZnRzIHVwIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSBhIHRoZSBhcnJheSB3aGVyZSB0aGUgaGVhcCBpcyBzdG9yZWRcbiAqIEBwYXJhbSB7aW50fSBpIGlzIHRoZSByb290IGVsZW1lbnRcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmXG4gKiBAcGFyYW0ge2ludH0gayBpcyB0aGUgdGFyZ2V0IG5vZGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2lmdHVwICggY29tcGFyZSAsIGEgLCBpICwgaiAsIGsgKSB7XG5cblx0bGV0IGN1cnJlbnQgPSBrIC0gaSA7XG5cblx0Ly8gd2hpbGUgd2UgYXJlIG5vdCB0aGUgcm9vdFxuXG5cdHdoaWxlICggY3VycmVudCAhPT0gMCApIHtcblxuXHRcdC8vIGFkZHJlc3Mgb2YgdGhlIHBhcmVudCBpbiBhIHplcm8tYmFzZWRcblx0XHQvLyBkLWFyeSBoZWFwXG5cblx0XHRjb25zdCBwYXJlbnQgPSBpICsgKCAoIGN1cnJlbnQgLSAxICkgPj4+IDEgKSA7XG5cblx0XHQvLyBpZiBjdXJyZW50IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBpdHMgcGFyZW50XG5cdFx0Ly8gdGhlbiB3ZSBhcmUgZG9uZVxuXG5cdFx0aWYgKCBjb21wYXJlKCBhW2kgKyBjdXJyZW50XSwgYVtwYXJlbnRdICkgPj0gMCApIHJldHVybiBpICsgY3VycmVudCA7XG5cblx0XHQvLyBvdGhlcndpc2Vcblx0XHQvLyBzd2FwIHdpdGggcGFyZW50XG5cblx0XHRjb25zdCB0bXAgPSBhW2krY3VycmVudF0gO1xuXHRcdGFbaStjdXJyZW50XSA9IGFbcGFyZW50XSA7XG5cdFx0YVtwYXJlbnRdID0gdG1wIDtcblxuXHRcdGN1cnJlbnQgPSBwYXJlbnQgLSBpIDtcblxuXHR9XG5cblx0cmV0dXJuIGkgKyBjdXJyZW50IDtcblxufVxuIl19