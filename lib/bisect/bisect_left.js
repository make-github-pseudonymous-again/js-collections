"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_left;

var _error = require("../error");

function bisect_left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _error.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x > a[mid]) lo = mid + 1;else hi = mid;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaXNlY3QvYmlzZWN0X2xlZnQuanMiXSwibmFtZXMiOlsiYmlzZWN0X2xlZnQiLCJhIiwieCIsImxvIiwiaGkiLCJsZW5ndGgiLCJtaWQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsVzs7QUFGeEI7O0FBRWUsU0FBU0EsV0FBVCxDQUF1QkMsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQXdEO0FBQUEsUUFBekJDLEVBQXlCLHVFQUFwQixDQUFvQjtBQUFBLFFBQWhCQyxFQUFnQix1RUFBWEgsRUFBRUksTUFBUzs7O0FBRW5FLFFBQUtGLEtBQUssQ0FBVixFQUFjLE1BQU0sc0JBQWdCLHlCQUFoQixDQUFOOztBQUVkLFdBQVFBLEtBQUtDLEVBQWIsRUFBa0I7O0FBRWQsWUFBTUUsTUFBTSxDQUFFSCxLQUFLQyxFQUFQLElBQWMsQ0FBZCxHQUFrQixDQUE5Qjs7QUFFQSxZQUFLRixJQUFJRCxFQUFFSyxHQUFGLENBQVQsRUFBa0JILEtBQUtHLE1BQU0sQ0FBWCxDQUFsQixLQUVLRixLQUFLRSxHQUFMO0FBRVI7O0FBRUQsV0FBT0gsRUFBUDtBQUVIIiwiZmlsZSI6ImJpc2VjdF9sZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJy4uL2Vycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdF9sZWZ0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG4gICAgaWYgKCBsbyA8IDAgKSB0aHJvdyBuZXcgVmFsdWVFcnJvciggXCJsbyBtdXN0IGJlIG5vbi1uZWdhdGl2ZVwiICkgO1xuXG4gICAgd2hpbGUgKCBsbyA8IGhpICkge1xuXG4gICAgICAgIGNvbnN0IG1pZCA9ICggbG8gKyBoaSApIC8gMiB8IDAgO1xuXG4gICAgICAgIGlmICggeCA+IGFbbWlkXSApIGxvID0gbWlkICsgMSA7XG5cbiAgICAgICAgZWxzZSBoaSA9IG1pZCA7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbG8gO1xuXG59XG4iXX0=