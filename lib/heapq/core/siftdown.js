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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL3NpZnRkb3duLmpzIl0sIm5hbWVzIjpbInNpZnRkb3duIiwiY29tcGFyZSIsImEiLCJpIiwiaiIsImsiLCJjdXJyZW50IiwiZmlyc3RjaGlsZCIsImNhbmRpZGF0ZSIsIm5leHRjaGlsZCIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLFEsR0FBQUEsUTs7O0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsUUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJDLENBQTdCLEVBQWdDQyxDQUFoQyxFQUFtQ0MsQ0FBbkMsRUFBc0NDLENBQXRDLEVBQTBDOztBQUVoRCxLQUFJQyxVQUFVRCxJQUFJRixDQUFsQjs7QUFFQSxRQUFRLElBQVIsRUFBZTs7QUFFZDtBQUNBOztBQUVBLE1BQU1JLGFBQWEsSUFBSUQsT0FBSixHQUFjLENBQWpDOztBQUVBO0FBQ0E7O0FBRUEsTUFBS0MsY0FBY0gsSUFBSUQsQ0FBdkIsRUFBMkI7O0FBRTNCO0FBQ0E7O0FBRUEsTUFBTUssWUFBWUMsVUFBV1IsT0FBWCxFQUFvQkMsQ0FBcEIsRUFBdUJDLElBQUlJLFVBQTNCLEVBQXVDSCxDQUF2QyxDQUFsQjs7QUFFQSxNQUFLSCxRQUFTQyxFQUFFQyxJQUFJRyxPQUFOLENBQVQsRUFBeUJKLEVBQUVNLFNBQUYsQ0FBekIsS0FBMkMsQ0FBaEQsRUFBb0Q7O0FBRXBEO0FBQ0E7O0FBRUEsTUFBTUUsTUFBTVIsRUFBRUMsSUFBRUcsT0FBSixDQUFaO0FBQ0FKLElBQUVDLElBQUVHLE9BQUosSUFBZUosRUFBRU0sU0FBRixDQUFmO0FBQ0FOLElBQUVNLFNBQUYsSUFBZUUsR0FBZjs7QUFFQUosWUFBVUUsWUFBWUwsQ0FBdEI7QUFFQTs7QUFFRCxRQUFPQSxJQUFJRyxPQUFYO0FBRUEiLCJmaWxlIjoic2lmdGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBTaWZ0cyBkb3duIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSBhIHRoZSBhcnJheSB3aGVyZSB0aGUgaGVhcCBpcyBzdG9yZWRcbiAqIEBwYXJhbSB7aW50fSBpIGlzIHRoZSByb290IGVsZW1lbnRcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmXG4gKiBAcGFyYW0ge2ludH0gayBpcyB0aGUgdGFyZ2V0IG5vZGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2lmdGRvd24gKCBjb21wYXJlLCBhLCBpLCBqLCBrICkge1xuXG5cdGxldCBjdXJyZW50ID0gayAtIGk7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Ly8gYWRkcmVzcyBvZiB0aGUgZmlyc3QgY2hpbGQgaW4gYSB6ZXJvLWJhc2VkXG5cdFx0Ly8gYmluYXJ5IGhlYXBcblxuXHRcdGNvbnN0IGZpcnN0Y2hpbGQgPSAyICogY3VycmVudCArIDE7XG5cblx0XHQvLyBpZiBjdXJyZW50IG5vZGUgaGFzIG5vIGNoaWxkcmVuXG5cdFx0Ly8gdGhlbiB3ZSBhcmUgZG9uZVxuXG5cdFx0aWYgKCBmaXJzdGNoaWxkID49IGogLSBpICkgYnJlYWsgO1xuXG5cdFx0Ly8gaWYgY3VycmVudCB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gaXRzIHNtYWxsZXN0XG5cdFx0Ly8gY2hpbGQgdGhlbiB3ZSBhcmUgZG9uZVxuXG5cdFx0Y29uc3QgY2FuZGlkYXRlID0gbmV4dGNoaWxkKCBjb21wYXJlLCBhLCBpICsgZmlyc3RjaGlsZCwgaiApO1xuXG5cdFx0aWYgKCBjb21wYXJlKCBhW2kgKyBjdXJyZW50XSwgYVtjYW5kaWRhdGVdICkgPD0gMCApIGJyZWFrIDtcblxuXHRcdC8vIG90aGVyd2lzZVxuXHRcdC8vIHN3YXAgd2l0aCBzbWFsbGVzdCBjaGlsZFxuXG5cdFx0Y29uc3QgdG1wID0gYVtpK2N1cnJlbnRdIDtcblx0XHRhW2krY3VycmVudF0gPSBhW2NhbmRpZGF0ZV0gO1xuXHRcdGFbY2FuZGlkYXRlXSA9IHRtcCA7XG5cblx0XHRjdXJyZW50ID0gY2FuZGlkYXRlIC0gaTtcblxuXHR9XG5cblx0cmV0dXJuIGkgKyBjdXJyZW50O1xuXG59XG4iXX0=