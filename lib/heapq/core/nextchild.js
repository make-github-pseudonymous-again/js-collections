"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextchild = nextchild;


/**
 * Computes which child is the smallest according
 * to a comparison function.
 *
 * Hypothesis : i < j i.e. there should be at least one child
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the first child
 * @param {int} j - 1 is the last leaf
 */

function nextchild(compare, a, i, j) {

  if (j - i < 2) return i;

  if (compare(a[i], a[i + 1]) <= 0) return i;

  return i + 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL25leHRjaGlsZC5qcyJdLCJuYW1lcyI6WyJuZXh0Y2hpbGQiLCJjb21wYXJlIiwiYSIsImkiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWNnQkEsUyxHQUFBQSxTOzs7QUFaaEI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLFNBQVQsQ0FBcUJDLE9BQXJCLEVBQStCQyxDQUEvQixFQUFtQ0MsQ0FBbkMsRUFBdUNDLENBQXZDLEVBQTJDOztBQUVqRCxNQUFLQSxJQUFJRCxDQUFKLEdBQVEsQ0FBYixFQUFpQixPQUFPQSxDQUFQOztBQUVqQixNQUFLRixRQUFTQyxFQUFFQyxDQUFGLENBQVQsRUFBZ0JELEVBQUVDLElBQUUsQ0FBSixDQUFoQixLQUE0QixDQUFqQyxFQUFxQyxPQUFPQSxDQUFQOztBQUVyQyxTQUFPQSxJQUFJLENBQVg7QUFFQSIsImZpbGUiOiJuZXh0Y2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBDb21wdXRlcyB3aGljaCBjaGlsZCBpcyB0aGUgc21hbGxlc3QgYWNjb3JkaW5nXG4gKiB0byBhIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gKlxuICogSHlwb3RoZXNpcyA6IGkgPCBqIGkuZS4gdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IG9uZSBjaGlsZFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmUgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGEgdGhlIGFycmF5IHdoZXJlIHRoZSBoZWFwIGlzIHN0b3JlZFxuICogQHBhcmFtIHtpbnR9IGkgaXMgdGhlIGZpcnN0IGNoaWxkXG4gKiBAcGFyYW0ge2ludH0gaiAtIDEgaXMgdGhlIGxhc3QgbGVhZlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Y2hpbGQgKCBjb21wYXJlICwgYSAsIGkgLCBqICkge1xuXG5cdGlmICggaiAtIGkgPCAyICkgcmV0dXJuIGkgO1xuXG5cdGlmICggY29tcGFyZSggYVtpXSAsIGFbaSsxXSApIDw9IDAgKSByZXR1cm4gaSA7XG5cblx0cmV0dXJuIGkgKyAxIDtcblxufVxuIl19