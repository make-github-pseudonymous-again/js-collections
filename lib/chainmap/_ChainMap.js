"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _ChainMap;

var _error = require("../error");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _ChainMap(Dict, Set) {

	var ChainMap = function ChainMap() {
		for (var _len = arguments.length, maps = Array(_len), _key = 0; _key < _len; _key++) {
			maps[_key] = arguments[_key];
		}

		this.maps = maps;

		if (this.maps.length === 0) this.maps.push(new Dict());
	};

	ChainMap.prototype.__missing__ = function (key) {

		throw new _error.KeyError(key);
	};

	ChainMap.prototype.get = function (key) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {

			for (var _iterator = this.maps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var map = _step.value;


				try {

					return map.get(key);
				} catch (e) {

					if (!(e instanceof _error.KeyError)) throw e;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return this.__missing__(key);
	};

	ChainMap.prototype.getdefault = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		return this.has(key) ? this.get(key) : dflt;
	};

	ChainMap.prototype._keys = function () {

		var keys = new Set();

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = this.maps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var map = _step2.value;
				keys.update(map.keys());
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return keys;
	};

	ChainMap.prototype.len = function () {

		return this._keys().len();
	};

	ChainMap.prototype[Symbol.iterator] = ChainMap.prototype.items = regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context.prev = 3;
						_iterator3 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context.next = 12;
							break;
						}

						key = _step3.value;
						_context.next = 9;
						return [key, this.get(key)];

					case 9:
						_iteratorNormalCompletion3 = true;
						_context.next = 5;
						break;

					case 12:
						_context.next = 18;
						break;

					case 14:
						_context.prev = 14;
						_context.t0 = _context["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = _context.t0;

					case 18:
						_context.prev = 18;
						_context.prev = 19;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 21:
						_context.prev = 21;

						if (!_didIteratorError3) {
							_context.next = 24;
							break;
						}

						throw _iteratorError3;

					case 24:
						return _context.finish(21);

					case 25:
						return _context.finish(18);

					case 26:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	ChainMap.prototype.has = function (key) {
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = this.maps[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var map = _step4.value;


				if (map.has(key)) return true;
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return false;
	};

	ChainMap.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		return new ChainMap(Dict.fromkeys(seq, value));
	};

	ChainMap.prototype.copy = function () {
		var _maps = _toArray(this.maps),
		    child = _maps[0],
		    parents = _maps.slice(1);

		return new (Function.prototype.bind.apply(ChainMap, [null].concat([child.copy()], _toConsumableArray(parents))))();
	};

	ChainMap.prototype.new_child = function () {
		var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		if (map === null) map = new Dict();

		return new (Function.prototype.bind.apply(ChainMap, [null].concat([map], _toConsumableArray(this.maps))))();
	};

	ChainMap.prototype.parents = function () {
		var _maps2 = _toArray(this.maps),
		    child = _maps2[0],
		    parents = _maps2.slice(1);

		return new (Function.prototype.bind.apply(ChainMap, [null].concat(_toConsumableArray(parents))))();
	};

	ChainMap.prototype.set = function (key, value) {

		return this.maps[0].set(key, value);
	};

	ChainMap.prototype.delete = function (key) {

		try {

			this.maps[0].delete(key);
		} catch (e) {

			if (!(e instanceof _error.KeyError)) throw e;

			throw new _error.KeyError("Key not found in the first mapping: " + key);
		}

		return this;
	};

	ChainMap.prototype.popitem = function () {

		try {

			return this.maps[0].popitem();
		} catch (e) {

			if (!(e instanceof _error.KeyError)) throw e;

			throw new _error.KeyError("No keys found in the first mapping.");
		}
	};

	ChainMap.prototype.pop = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		try {

			if (arguments.length <= 1) return this.maps[0].pop(key);

			return this.maps[0].pop(key, dflt);
		} catch (e) {

			if (!(e instanceof _error.KeyError)) throw e;

			throw new _error.KeyError("Key not found in the first mapping: " + key);
		}
	};

	ChainMap.prototype.clear = function () {

		this.maps[0].clear();

		return this;
	};

	ChainMap.prototype.keys = regeneratorRuntime.mark(function _callee2() {
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						return _context2.delegateYield(this._keys(), "t0", 1);

					case 1:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this);
	});

	ChainMap.prototype.values = regeneratorRuntime.mark(function _callee3() {
		var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, key;

		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_iteratorNormalCompletion5 = true;
						_didIteratorError5 = false;
						_iteratorError5 = undefined;
						_context3.prev = 3;
						_iterator5 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
							_context3.next = 12;
							break;
						}

						key = _step5.value;
						_context3.next = 9;
						return this.get(key);

					case 9:
						_iteratorNormalCompletion5 = true;
						_context3.next = 5;
						break;

					case 12:
						_context3.next = 18;
						break;

					case 14:
						_context3.prev = 14;
						_context3.t0 = _context3["catch"](3);
						_didIteratorError5 = true;
						_iteratorError5 = _context3.t0;

					case 18:
						_context3.prev = 18;
						_context3.prev = 19;

						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}

					case 21:
						_context3.prev = 21;

						if (!_didIteratorError5) {
							_context3.next = 24;
							break;
						}

						throw _iteratorError5;

					case 24:
						return _context3.finish(21);

					case 25:
						return _context3.finish(18);

					case 26:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	return ChainMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbm1hcC9fQ2hhaW5NYXAuanMiXSwibmFtZXMiOlsiX0NoYWluTWFwIiwiRGljdCIsIlNldCIsIkNoYWluTWFwIiwibWFwcyIsImxlbmd0aCIsInB1c2giLCJwcm90b3R5cGUiLCJfX21pc3NpbmdfXyIsImtleSIsImdldCIsIm1hcCIsImUiLCJnZXRkZWZhdWx0IiwiZGZsdCIsImhhcyIsIl9rZXlzIiwia2V5cyIsInVwZGF0ZSIsImxlbiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaXRlbXMiLCJmcm9ta2V5cyIsInNlcSIsInZhbHVlIiwiY29weSIsImNoaWxkIiwicGFyZW50cyIsIm5ld19jaGlsZCIsInNldCIsImRlbGV0ZSIsInBvcGl0ZW0iLCJwb3AiLCJhcmd1bWVudHMiLCJjbGVhciIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxTOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsU0FBVCxDQUFxQkMsSUFBckIsRUFBNEJDLEdBQTVCLEVBQWtDOztBQUVoRCxLQUFNQyxXQUFXLFNBQVhBLFFBQVcsR0FBcUI7QUFBQSxvQ0FBUEMsSUFBTztBQUFQQSxPQUFPO0FBQUE7O0FBRXJDLE9BQUtBLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxNQUFLLEtBQUtBLElBQUwsQ0FBVUMsTUFBVixLQUFxQixDQUExQixFQUE4QixLQUFLRCxJQUFMLENBQVVFLElBQVYsQ0FBZ0IsSUFBSUwsSUFBSixFQUFoQjtBQUU5QixFQU5EOztBQVFBRSxVQUFTSSxTQUFULENBQW1CQyxXQUFuQixHQUFpQyxVQUFXQyxHQUFYLEVBQWlCOztBQUVqRCxRQUFNLG9CQUFjQSxHQUFkLENBQU47QUFFQSxFQUpEOztBQU1BTixVQUFTSSxTQUFULENBQW1CRyxHQUFuQixHQUF5QixVQUFXRCxHQUFYLEVBQWlCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUV6Qyx3QkFBaUIsS0FBS0wsSUFBdEIsOEhBQTZCO0FBQUEsUUFBbkJPLEdBQW1COzs7QUFFNUIs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LG1CQUVWLEtBQUtuQixJQUFMLEVBRlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFakJSLFNBRmlCO0FBQUE7QUFBQSxhQUVXLEtBQUtDLEdBQUwsQ0FBVUQsR0FBVixDQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBNUI7O0FBTUEsUUFBT04sUUFBUDtBQUVBIiwiZmlsZSI6Il9DaGFpbk1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleUVycm9yIH0gZnJvbSAnLi4vZXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0NoYWluTWFwICggRGljdCAsIFNldCApIHtcblxuXHRjb25zdCBDaGFpbk1hcCA9IGZ1bmN0aW9uICggLi4ubWFwcyApIHtcblxuXHRcdHRoaXMubWFwcyA9IG1hcHMgO1xuXG5cdFx0aWYgKCB0aGlzLm1hcHMubGVuZ3RoID09PSAwICkgdGhpcy5tYXBzLnB1c2goIG5ldyBEaWN0KCApICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5fX21pc3NpbmdfXyA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0dGhyb3cgbmV3IEtleUVycm9yKCBrZXkgKSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0Zm9yICggbGV0IG1hcCBvZiB0aGlzLm1hcHMgKSB7XG5cblx0XHRcdHRyeSB7XG5cblx0XHRcdFx0cmV0dXJuIG1hcC5nZXQoIGtleSApIDtcblxuXHRcdFx0fVxuXG5cdFx0XHRjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0aWYgKCAhKCBlIGluc3RhbmNlb2YgS2V5RXJyb3IgKSApIHRocm93IGUgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fX21pc3NpbmdfXygga2V5ICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5nZXRkZWZhdWx0ID0gZnVuY3Rpb24gKCBrZXkgLCBkZmx0ID0gbnVsbCApIHtcblxuXHRcdHJldHVybiB0aGlzLmhhcygga2V5ICkgPyB0aGlzLmdldCgga2V5ICkgOiBkZmx0IDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuX2tleXMgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0bGV0IGtleXMgPSBuZXcgU2V0KCApIDtcblxuXHRcdGZvciAoIGxldCBtYXAgb2YgdGhpcy5tYXBzICkga2V5cy51cGRhdGUoIG1hcC5rZXlzKCApICkgO1xuXG5cdFx0cmV0dXJuIGtleXMgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5sZW4gPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuX2tleXMoICkubGVuKCApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9XG5cdENoYWluTWFwLnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmtleXMoICkgKSB5aWVsZCBbIGtleSAsIHRoaXMuZ2V0KCBrZXkgKSBdIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRmb3IgKCBsZXQgbWFwIG9mIHRoaXMubWFwcyApIHtcblxuXHRcdFx0aWYgKCBtYXAuaGFzKCBrZXkgKSApIHJldHVybiB0cnVlIDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAuZnJvbWtleXMgPSBmdW5jdGlvbiAoIHNlcSAsIHZhbHVlID0gbnVsbCApIHtcblxuXHRcdHJldHVybiBuZXcgQ2hhaW5NYXAoIERpY3QuZnJvbWtleXMoIHNlcSAsIHZhbHVlICkgKSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0Y29uc3QgWyBjaGlsZCAsIC4uLnBhcmVudHMgXSA9IHRoaXMubWFwcyA7XG5cblx0XHRyZXR1cm4gbmV3IENoYWluTWFwKCBjaGlsZC5jb3B5KCApICwgLi4ucGFyZW50cyApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUubmV3X2NoaWxkID0gZnVuY3Rpb24gKCBtYXAgPSBudWxsICkge1xuXG5cdFx0aWYgKCBtYXAgPT09IG51bGwgKSBtYXAgPSBuZXcgRGljdCggKSA7XG5cblx0XHRyZXR1cm4gbmV3IENoYWluTWFwKCBtYXAgLCAuLi50aGlzLm1hcHMgKSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0Y29uc3QgWyBjaGlsZCAsIC4uLnBhcmVudHMgXSA9IHRoaXMubWFwcyA7XG5cblx0XHRyZXR1cm4gbmV3IENoYWluTWFwKCAuLi5wYXJlbnRzICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoIGtleSAsIHZhbHVlICkge1xuXG5cdFx0cmV0dXJuIHRoaXMubWFwc1swXS5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRyeSB7XG5cblx0XHRcdHRoaXMubWFwc1swXS5kZWxldGUoIGtleSApIDtcblxuXHRcdH1cblxuXHRcdGNhdGNoICggZSApIHtcblxuXHRcdFx0aWYgKCAhKCBlIGluc3RhbmNlb2YgS2V5RXJyb3IgKSApIHRocm93IGUgO1xuXG5cdFx0XHR0aHJvdyBuZXcgS2V5RXJyb3IoIFwiS2V5IG5vdCBmb3VuZCBpbiB0aGUgZmlyc3QgbWFwcGluZzogXCIgKyBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLnBvcGl0ZW0gPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0dHJ5IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMubWFwc1swXS5wb3BpdGVtKCApIDtcblxuXHRcdH1cblxuXHRcdGNhdGNoICggZSApIHtcblxuXHRcdFx0aWYgKCAhKCBlIGluc3RhbmNlb2YgS2V5RXJyb3IgKSApIHRocm93IGUgO1xuXG5cdFx0XHR0aHJvdyBuZXcgS2V5RXJyb3IoIFwiTm8ga2V5cyBmb3VuZCBpbiB0aGUgZmlyc3QgbWFwcGluZy5cIiApIDtcblxuXHRcdH1cblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCBrZXkgLCBkZmx0ID0gbnVsbCApIHtcblxuXHRcdHRyeSB7XG5cblx0XHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8PSAxICkgcmV0dXJuIHRoaXMubWFwc1swXS5wb3AoIGtleSApIDtcblxuXHRcdFx0cmV0dXJuIHRoaXMubWFwc1swXS5wb3AoIGtleSAsIGRmbHQgKSA7XG5cblx0XHR9XG5cblx0XHRjYXRjaCAoIGUgKSB7XG5cblx0XHRcdGlmICggISggZSBpbnN0YW5jZW9mIEtleUVycm9yICkgKSB0aHJvdyBlIDtcblxuXHRcdFx0dGhyb3cgbmV3IEtleUVycm9yKCBcIktleSBub3QgZm91bmQgaW4gdGhlIGZpcnN0IG1hcHBpbmc6IFwiICsga2V5ICkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHR0aGlzLm1hcHNbMF0uY2xlYXIoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHR5aWVsZCogdGhpcy5fa2V5cyggKSA7XG5cblx0fSA7XG5cblxuXHRDaGFpbk1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIHRoaXMua2V5cyggKSApIHlpZWxkIHRoaXMuZ2V0KCBrZXkgKSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIENoYWluTWFwIDtcblxufVxuIl19