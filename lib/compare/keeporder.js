'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keeporder = undefined;

var _aureoomsJsCompare = require('aureooms-js-compare');

var keeporder = exports.keeporder = function keeporder(compare) {
  return function (a, b) {
    return compare(a[0], b[0]) || (0, _aureoomsJsCompare.increasing)(a[1], b[1]);
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wYXJlL2tlZXBvcmRlci5qcyJdLCJuYW1lcyI6WyJrZWVwb3JkZXIiLCJhIiwiYiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBVyxVQUFFQyxDQUFGLEVBQU1DLENBQU47QUFBQSxXQUFhQyxRQUFTRixFQUFFLENBQUYsQ0FBVCxFQUFnQkMsRUFBRSxDQUFGLENBQWhCLEtBQTBCLG1DQUFZRCxFQUFFLENBQUYsQ0FBWixFQUFtQkMsRUFBRSxDQUFGLENBQW5CLENBQXZDO0FBQUEsR0FBWDtBQUFBLENBQWxCIiwiZmlsZSI6ImtlZXBvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluY3JlYXNpbmcgfSBmcm9tICdhdXJlb29tcy1qcy1jb21wYXJlJyA7XG5cbmV4cG9ydCBjb25zdCBrZWVwb3JkZXIgPSBjb21wYXJlID0+ICggYSAsIGIgKSA9PiBjb21wYXJlKCBhWzBdICwgYlswXSApIHx8IGluY3JlYXNpbmcoIGFbMV0gLCBiWzFdICkgO1xuIl19