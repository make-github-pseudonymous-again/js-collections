"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextchild;


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL25leHRjaGlsZC5qcyJdLCJuYW1lcyI6WyJuZXh0Y2hpbGQiLCJjb21wYXJlIiwiYSIsImkiLCJqIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFjd0JBLFM7OztBQVp4Qjs7Ozs7Ozs7Ozs7O0FBWWUsU0FBU0EsU0FBVCxDQUFxQkMsT0FBckIsRUFBK0JDLENBQS9CLEVBQW1DQyxDQUFuQyxFQUF1Q0MsQ0FBdkMsRUFBMkM7O0FBRXpELE1BQUtBLElBQUlELENBQUosR0FBUSxDQUFiLEVBQWlCLE9BQU9BLENBQVA7O0FBRWpCLE1BQUtGLFFBQVNDLEVBQUVDLENBQUYsQ0FBVCxFQUFnQkQsRUFBRUMsSUFBRSxDQUFKLENBQWhCLEtBQTRCLENBQWpDLEVBQXFDLE9BQU9BLENBQVA7O0FBRXJDLFNBQU9BLElBQUksQ0FBWDtBQUVBIiwiZmlsZSI6Im5leHRjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIENvbXB1dGVzIHdoaWNoIGNoaWxkIGlzIHRoZSBzbWFsbGVzdCBhY2NvcmRpbmdcbiAqIHRvIGEgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqXG4gKiBIeXBvdGhlc2lzIDogaSA8IGogaS5lLiB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGNoaWxkXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgZmlyc3QgY2hpbGRcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV4dGNoaWxkICggY29tcGFyZSAsIGEgLCBpICwgaiApIHtcblxuXHRpZiAoIGogLSBpIDwgMiApIHJldHVybiBpIDtcblxuXHRpZiAoIGNvbXBhcmUoIGFbaV0gLCBhW2krMV0gKSA8PSAwICkgcmV0dXJuIGkgO1xuXG5cdHJldHVybiBpICsgMSA7XG5cbn1cbiJdfQ==