'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = heapify;

var _core = require('./core');

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

    (0, _core.siftdown)(compare, x, 0, n, --k);
  }

  return new _core.Heap(compare, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9oZWFwaWZ5LmpzIl0sIm5hbWVzIjpbImhlYXBpZnkiLCJjb21wYXJlIiwieCIsIm4iLCJsZW5ndGgiLCJrIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFVd0JBLE87O0FBVnhCOztBQUVBOzs7Ozs7OztBQVFlLFNBQVNBLE9BQVQsQ0FBbUJDLE9BQW5CLEVBQTZCQyxDQUE3QixFQUFpQzs7QUFFL0MsTUFBTUMsSUFBSUQsRUFBRUUsTUFBWjs7QUFFQSxPQUFNLElBQUlDLElBQUlGLElBQUksQ0FBSixHQUFRLENBQXRCLEVBQTBCRSxDQUExQixHQUFnQzs7QUFFL0Isd0JBQVVKLE9BQVYsRUFBb0JDLENBQXBCLEVBQXdCLENBQXhCLEVBQTRCQyxDQUE1QixFQUFnQyxFQUFFRSxDQUFsQztBQUVBOztBQUVELFNBQU8sZUFBVUosT0FBVixFQUFvQkMsQ0FBcEIsQ0FBUDtBQUVBIiwiZmlsZSI6ImhlYXBpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWZ0ZG93biAsIEhlYXAgfSBmcm9tICcuL2NvcmUnIDtcblxuLyoqXG4gKiBCdWlsZHMgYSBoZWFwIGluIE8obikgb3BlcmF0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2FycmF5fSB4IHRoZSBhcnJheSB3aGVyZSB0aGUgaGVhcCBpcyBzdG9yZWRcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhcGlmeSAoIGNvbXBhcmUgLCB4ICkge1xuXG5cdGNvbnN0IG4gPSB4Lmxlbmd0aCA7XG5cblx0Zm9yICggbGV0IGsgPSBuIC8gMiB8IDAgOyBrIDsgKSB7XG5cblx0XHRzaWZ0ZG93biggY29tcGFyZSAsIHggLCAwICwgbiAsIC0tayApIDtcblxuXHR9XG5cblx0cmV0dXJuIG5ldyBIZWFwKCBjb21wYXJlICwgeCApIDtcblxufVxuIl19