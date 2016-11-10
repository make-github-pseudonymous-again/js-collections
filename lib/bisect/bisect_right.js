"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_right;

var _error = require("../error");

function bisect_right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _error.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x < a[mid]) hi = mid;else lo = mid + 1;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaXNlY3QvYmlzZWN0X3JpZ2h0LmpzIl0sIm5hbWVzIjpbImJpc2VjdF9yaWdodCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsIm1pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxZOztBQUZ4Qjs7QUFFZSxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0QkMsQ0FBNUIsRUFBeUQ7QUFBQSxRQUF6QkMsRUFBeUIsdUVBQXBCLENBQW9CO0FBQUEsUUFBaEJDLEVBQWdCLHVFQUFYSCxFQUFFSSxNQUFTOzs7QUFFcEUsUUFBS0YsS0FBSyxDQUFWLEVBQWMsTUFBTSxzQkFBZ0IseUJBQWhCLENBQU47O0FBRWQsV0FBUUEsS0FBS0MsRUFBYixFQUFrQjs7QUFFZCxZQUFNRSxNQUFNLENBQUVILEtBQUtDLEVBQVAsSUFBYyxDQUFkLEdBQWtCLENBQTlCOztBQUVBLFlBQUtGLElBQUlELEVBQUVLLEdBQUYsQ0FBVCxFQUFrQkYsS0FBS0UsR0FBTCxDQUFsQixLQUVLSCxLQUFLRyxNQUFNLENBQVg7QUFFUjs7QUFFRCxXQUFPSCxFQUFQO0FBRUgiLCJmaWxlIjoiYmlzZWN0X3JpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJy4uL2Vycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdF9yaWdodCAoIGEgLCB4ICwgbG8gPSAwICwgaGkgPSBhLmxlbmd0aCApIHtcblxuICAgIGlmICggbG8gPCAwICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoIFwibG8gbXVzdCBiZSBub24tbmVnYXRpdmVcIiApIDtcblxuICAgIHdoaWxlICggbG8gPCBoaSApIHtcblxuICAgICAgICBjb25zdCBtaWQgPSAoIGxvICsgaGkgKSAvIDIgfCAwIDtcblxuICAgICAgICBpZiAoIHggPCBhW21pZF0gKSBoaSA9IG1pZCA7XG5cbiAgICAgICAgZWxzZSBsbyA9IG1pZCArIDEgO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvIDtcblxufVxuIl19