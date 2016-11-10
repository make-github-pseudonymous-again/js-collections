'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureoomsJsCompare = require('aureooms-js-compare');

var keeporder = function keeporder(compare) {
  return function (a, b) {
    return compare(a[0], b[0]) || (0, _aureoomsJsCompare.increasing)(a[1], b[1]);
  };
};

exports.default = keeporder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFwcS9jb3JlL2tlZXBvcmRlci5qcyJdLCJuYW1lcyI6WyJrZWVwb3JkZXIiLCJhIiwiYiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVcsVUFBRUMsQ0FBRixFQUFNQyxDQUFOO0FBQUEsV0FBYUMsUUFBU0YsRUFBRSxDQUFGLENBQVQsRUFBZ0JDLEVBQUUsQ0FBRixDQUFoQixLQUEwQixtQ0FBWUQsRUFBRSxDQUFGLENBQVosRUFBbUJDLEVBQUUsQ0FBRixDQUFuQixDQUF2QztBQUFBLEdBQVg7QUFBQSxDQUFsQjs7a0JBRWVGLFMiLCJmaWxlIjoia2VlcG9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5jcmVhc2luZyB9IGZyb20gJ2F1cmVvb21zLWpzLWNvbXBhcmUnIDtcblxuY29uc3Qga2VlcG9yZGVyID0gY29tcGFyZSA9PiAoIGEgLCBiICkgPT4gY29tcGFyZSggYVswXSAsIGJbMF0gKSB8fCBpbmNyZWFzaW5nKCBhWzFdICwgYlsxXSApIDtcblxuZXhwb3J0IGRlZmF1bHQga2VlcG9yZGVyIDtcbiJdfQ==