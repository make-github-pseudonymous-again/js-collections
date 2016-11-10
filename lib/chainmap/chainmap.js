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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbm1hcC9jaGFpbm1hcC5qcyJdLCJuYW1lcyI6WyJfY2hhaW5tYXAiLCJDaGFpbk1hcCIsImNoYWlubWFwIiwibWFwcyIsImZyb21rZXlzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVksQ0FBV0MsUUFBWCxFQUFzQjs7QUFFOUMsS0FBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQXFCO0FBQUEsb0NBQVBDLElBQU87QUFBUEEsT0FBTztBQUFBOztBQUVyQyw0Q0FBV0YsUUFBWCxnQkFBd0JFLElBQXhCO0FBRUEsRUFKRDs7QUFNQUQsVUFBU0UsUUFBVCxHQUFvQkgsU0FBU0csUUFBN0I7O0FBRUEsUUFBT0YsUUFBUDtBQUVBLENBWk0iLCJmaWxlIjoiY2hhaW5tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBfY2hhaW5tYXAgPSBmdW5jdGlvbiAoIENoYWluTWFwICkge1xuXG5cdGNvbnN0IGNoYWlubWFwID0gZnVuY3Rpb24gKCAuLi5tYXBzICkge1xuXG5cdFx0cmV0dXJuIG5ldyBDaGFpbk1hcCggLi4ubWFwcyApIDtcblxuXHR9IDtcblxuXHRjaGFpbm1hcC5mcm9ta2V5cyA9IENoYWluTWFwLmZyb21rZXlzIDtcblxuXHRyZXR1cm4gY2hhaW5tYXAgO1xuXG59IDtcbiJdfQ==