"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bisect_right = bisect_right;
function bisect_right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x < a[mid]) hi = mid;else lo = mid + 1;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvYmlzZWN0LzAwMS1hcGkvYmlzZWN0X3JpZ2h0LmpzIl0sIm5hbWVzIjpbImJpc2VjdF9yaWdodCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsIlZhbHVlRXJyb3IiLCJtaWQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxZLEdBQUFBLFk7QUFBVCxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0QkMsQ0FBNUIsRUFBeUQ7QUFBQSxRQUF6QkMsRUFBeUIsdUVBQXBCLENBQW9CO0FBQUEsUUFBaEJDLEVBQWdCLHVFQUFYSCxFQUFFSSxNQUFTOzs7QUFFNUQsUUFBS0YsS0FBSyxDQUFWLEVBQWMsTUFBTSxJQUFJRyxVQUFKLENBQWdCLHlCQUFoQixDQUFOOztBQUVkLFdBQVFILEtBQUtDLEVBQWIsRUFBa0I7O0FBRWQsWUFBTUcsTUFBTSxDQUFFSixLQUFLQyxFQUFQLElBQWMsQ0FBZCxHQUFrQixDQUE5Qjs7QUFFQSxZQUFLRixJQUFJRCxFQUFFTSxHQUFGLENBQVQsRUFBa0JILEtBQUtHLEdBQUwsQ0FBbEIsS0FFS0osS0FBS0ksTUFBTSxDQUFYO0FBRVI7O0FBRUQsV0FBT0osRUFBUDtBQUVIIiwiZmlsZSI6ImJpc2VjdF9yaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGJpc2VjdF9yaWdodCAoIGEgLCB4ICwgbG8gPSAwICwgaGkgPSBhLmxlbmd0aCApIHtcblxuICAgIGlmICggbG8gPCAwICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoIFwibG8gbXVzdCBiZSBub24tbmVnYXRpdmVcIiApIDtcblxuICAgIHdoaWxlICggbG8gPCBoaSApIHtcblxuICAgICAgICBjb25zdCBtaWQgPSAoIGxvICsgaGkgKSAvIDIgfCAwIDtcblxuICAgICAgICBpZiAoIHggPCBhW21pZF0gKSBoaSA9IG1pZCA7XG5cbiAgICAgICAgZWxzZSBsbyA9IG1pZCArIDEgO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvIDtcblxufVxuIl19