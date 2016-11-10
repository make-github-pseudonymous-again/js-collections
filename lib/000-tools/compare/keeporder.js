"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keeporder = exports.keeporder = function keeporder(compare) {
  return function (a, b) {
    return compare(a[0], b[0]) || increasing(a[1], b[1]);
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvY29tcGFyZS9rZWVwb3JkZXIuanMiXSwibmFtZXMiOlsia2VlcG9yZGVyIiwiYSIsImIiLCJjb21wYXJlIiwiaW5jcmVhc2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBVyxVQUFFQyxDQUFGLEVBQU1DLENBQU47QUFBQSxXQUFhQyxRQUFTRixFQUFFLENBQUYsQ0FBVCxFQUFnQkMsRUFBRSxDQUFGLENBQWhCLEtBQTBCRSxXQUFZSCxFQUFFLENBQUYsQ0FBWixFQUFtQkMsRUFBRSxDQUFGLENBQW5CLENBQXZDO0FBQUEsR0FBWDtBQUFBLENBQWxCIiwiZmlsZSI6ImtlZXBvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGtlZXBvcmRlciA9IGNvbXBhcmUgPT4gKCBhICwgYiApID0+IGNvbXBhcmUoIGFbMF0gLCBiWzBdICkgfHwgaW5jcmVhc2luZyggYVsxXSAsIGJbMV0gKSA7XG5cbiJdfQ==