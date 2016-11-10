"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _chainmap = exports._chainmap = function _chainmap(ChainMap) {

	var chainmap = function chainmap() {
		for (var _len = arguments.length, maps = Array(_len), _key = 0; _key < _len; _key++) {
			maps[_key] = arguments[_key];
		}

		return new (Function.prototype.bind.apply(ChainMap, [null].concat(maps)))();
	};

	chainmap.fromkeys = ChainMap.fromkeys;

	return chainmap;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDItc3VnYXIvY2hhaW5tYXAuanMiXSwibmFtZXMiOlsiX2NoYWlubWFwIiwiQ2hhaW5NYXAiLCJjaGFpbm1hcCIsIm1hcHMiLCJmcm9ta2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZLENBQVdDLFFBQVgsRUFBc0I7O0FBRTlDLEtBQU1DLFdBQVcsU0FBWEEsUUFBVyxHQUFxQjtBQUFBLG9DQUFQQyxJQUFPO0FBQVBBLE9BQU87QUFBQTs7QUFFckMsNENBQVdGLFFBQVgsZ0JBQXdCRSxJQUF4QjtBQUVBLEVBSkQ7O0FBTUFELFVBQVNFLFFBQVQsR0FBb0JILFNBQVNHLFFBQTdCOztBQUVBLFFBQU9GLFFBQVA7QUFFQSxDQVpNIiwiZmlsZSI6ImNoYWlubWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgX2NoYWlubWFwID0gZnVuY3Rpb24gKCBDaGFpbk1hcCApIHtcblxuXHRjb25zdCBjaGFpbm1hcCA9IGZ1bmN0aW9uICggLi4ubWFwcyApIHtcblxuXHRcdHJldHVybiBuZXcgQ2hhaW5NYXAoIC4uLm1hcHMgKSA7XG5cblx0fSA7XG5cblx0Y2hhaW5tYXAuZnJvbWtleXMgPSBDaGFpbk1hcC5mcm9ta2V5cyA7XG5cblx0cmV0dXJuIGNoYWlubWFwIDtcblxufSA7XG4iXX0=