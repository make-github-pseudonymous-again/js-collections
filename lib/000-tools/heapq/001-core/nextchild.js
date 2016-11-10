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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaGVhcHEvMDAxLWNvcmUvbmV4dGNoaWxkLmpzIl0sIm5hbWVzIjpbIm5leHRjaGlsZCIsImNvbXBhcmUiLCJhIiwiaSIsImoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxTLEdBQUFBLFM7OztBQVpoQjs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsU0FBVCxDQUFxQkMsT0FBckIsRUFBK0JDLENBQS9CLEVBQW1DQyxDQUFuQyxFQUF1Q0MsQ0FBdkMsRUFBMkM7O0FBRWpELE1BQUtBLElBQUlELENBQUosR0FBUSxDQUFiLEVBQWlCLE9BQU9BLENBQVA7O0FBRWpCLE1BQUtGLFFBQVNDLEVBQUVDLENBQUYsQ0FBVCxFQUFnQkQsRUFBRUMsSUFBRSxDQUFKLENBQWhCLEtBQTRCLENBQWpDLEVBQXFDLE9BQU9BLENBQVA7O0FBRXJDLFNBQU9BLElBQUksQ0FBWDtBQUVBIiwiZmlsZSI6Im5leHRjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIENvbXB1dGVzIHdoaWNoIGNoaWxkIGlzIHRoZSBzbWFsbGVzdCBhY2NvcmRpbmdcbiAqIHRvIGEgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqXG4gKiBIeXBvdGhlc2lzIDogaSA8IGogaS5lLiB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGNoaWxkXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0gYSB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKiBAcGFyYW0ge2ludH0gaSBpcyB0aGUgZmlyc3QgY2hpbGRcbiAqIEBwYXJhbSB7aW50fSBqIC0gMSBpcyB0aGUgbGFzdCBsZWFmXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRjaGlsZCAoIGNvbXBhcmUgLCBhICwgaSAsIGogKSB7XG5cblx0aWYgKCBqIC0gaSA8IDIgKSByZXR1cm4gaSA7XG5cblx0aWYgKCBjb21wYXJlKCBhW2ldICwgYVtpKzFdICkgPD0gMCApIHJldHVybiBpIDtcblxuXHRyZXR1cm4gaSArIDEgO1xuXG59XG4iXX0=