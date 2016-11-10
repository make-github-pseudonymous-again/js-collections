"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heapify = heapify;

/**
 * Builds a heap in O(n) operations.
 *
 * @param {function} compare the comparison function
 * @param {array} x the array where the heap is stored
 *
 */

function heapify(compare, x) {

  var n = x.length;

  for (var k = n / 2 | 0; k;) {

    siftdown(compare, x, 0, n, --k);
  }

  return new Heap(compare, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9oZWFwaWZ5LmpzIl0sIm5hbWVzIjpbImhlYXBpZnkiLCJjb21wYXJlIiwieCIsIm4iLCJsZW5ndGgiLCJrIiwic2lmdGRvd24iLCJIZWFwIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsTyxHQUFBQSxPOztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxPQUFULENBQW1CQyxPQUFuQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRXZDLE1BQU1DLElBQUlELEVBQUVFLE1BQVo7O0FBRUEsT0FBTSxJQUFJQyxJQUFJRixJQUFJLENBQUosR0FBUSxDQUF0QixFQUEwQkUsQ0FBMUIsR0FBZ0M7O0FBRS9CQyxhQUFVTCxPQUFWLEVBQW9CQyxDQUFwQixFQUF3QixDQUF4QixFQUE0QkMsQ0FBNUIsRUFBZ0MsRUFBRUUsQ0FBbEM7QUFFQTs7QUFFRCxTQUFPLElBQUlFLElBQUosQ0FBVU4sT0FBVixFQUFvQkMsQ0FBcEIsQ0FBUDtBQUVBIiwiZmlsZSI6ImhlYXBpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQnVpbGRzIGEgaGVhcCBpbiBPKG4pIG9wZXJhdGlvbnMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZSB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICogQHBhcmFtIHthcnJheX0geCB0aGUgYXJyYXkgd2hlcmUgdGhlIGhlYXAgaXMgc3RvcmVkXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFwaWZ5ICggY29tcGFyZSAsIHggKSB7XG5cblx0Y29uc3QgbiA9IHgubGVuZ3RoIDtcblxuXHRmb3IgKCBsZXQgayA9IG4gLyAyIHwgMCA7IGsgOyApIHtcblxuXHRcdHNpZnRkb3duKCBjb21wYXJlICwgeCAsIDAgLCBuICwgLS1rICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gbmV3IEhlYXAoIGNvbXBhcmUgLCB4ICkgO1xuXG59XG4iXX0=