"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bisect_left = bisect_left;
function bisect_left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x > a[mid]) lo = mid + 1;else hi = mid;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvYmlzZWN0LzAwMS1hcGkvYmlzZWN0X2xlZnQuanMiXSwibmFtZXMiOlsiYmlzZWN0X2xlZnQiLCJhIiwieCIsImxvIiwiaGkiLCJsZW5ndGgiLCJWYWx1ZUVycm9yIiwibWlkIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsVyxHQUFBQSxXO0FBQVQsU0FBU0EsV0FBVCxDQUF1QkMsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQXdEO0FBQUEsUUFBekJDLEVBQXlCLHVFQUFwQixDQUFvQjtBQUFBLFFBQWhCQyxFQUFnQix1RUFBWEgsRUFBRUksTUFBUzs7O0FBRTNELFFBQUtGLEtBQUssQ0FBVixFQUFjLE1BQU0sSUFBSUcsVUFBSixDQUFnQix5QkFBaEIsQ0FBTjs7QUFFZCxXQUFRSCxLQUFLQyxFQUFiLEVBQWtCOztBQUVkLFlBQU1HLE1BQU0sQ0FBRUosS0FBS0MsRUFBUCxJQUFjLENBQWQsR0FBa0IsQ0FBOUI7O0FBRUEsWUFBS0YsSUFBSUQsRUFBRU0sR0FBRixDQUFULEVBQWtCSixLQUFLSSxNQUFNLENBQVgsQ0FBbEIsS0FFS0gsS0FBS0csR0FBTDtBQUVSOztBQUVELFdBQU9KLEVBQVA7QUFFSCIsImZpbGUiOiJiaXNlY3RfbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGJpc2VjdF9sZWZ0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG4gICAgaWYgKCBsbyA8IDAgKSB0aHJvdyBuZXcgVmFsdWVFcnJvciggXCJsbyBtdXN0IGJlIG5vbi1uZWdhdGl2ZVwiICkgO1xuXG4gICAgd2hpbGUgKCBsbyA8IGhpICkge1xuXG4gICAgICAgIGNvbnN0IG1pZCA9ICggbG8gKyBoaSApIC8gMiB8IDAgO1xuXG4gICAgICAgIGlmICggeCA+IGFbbWlkXSApIGxvID0gbWlkICsgMSA7XG5cbiAgICAgICAgZWxzZSBoaSA9IG1pZCA7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbG8gO1xuXG59XG4iXX0=