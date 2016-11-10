"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._ChainMap = _ChainMap;

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

		throw new KeyError(key);
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

					if (!(e instanceof KeyError)) throw e;
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

			if (!(e instanceof KeyError)) throw e;

			throw new KeyError("Key not found in the first mapping: " + key);
		}

		return this;
	};

	ChainMap.prototype.popitem = function () {

		try {

			return this.maps[0].popitem();
		} catch (e) {

			if (!(e instanceof KeyError)) throw e;

			throw new KeyError("No keys found in the first mapping.");
		}
	};

	ChainMap.prototype.pop = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		try {

			if (arguments.length <= 1) return this.maps[0].pop(key);

			return this.maps[0].pop(key, dflt);
		} catch (e) {

			if (!(e instanceof KeyError)) throw e;

			throw new KeyError("Key not found in the first mapping: " + key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbm1hcC9DaGFpbk1hcC5qcyJdLCJuYW1lcyI6WyJfQ2hhaW5NYXAiLCJEaWN0IiwiU2V0IiwiQ2hhaW5NYXAiLCJtYXBzIiwibGVuZ3RoIiwicHVzaCIsInByb3RvdHlwZSIsIl9fbWlzc2luZ19fIiwia2V5IiwiS2V5RXJyb3IiLCJnZXQiLCJtYXAiLCJlIiwiZ2V0ZGVmYXVsdCIsImRmbHQiLCJoYXMiLCJfa2V5cyIsImtleXMiLCJ1cGRhdGUiLCJsZW4iLCJTeW1ib2wiLCJpdGVyYXRvciIsIml0ZW1zIiwiZnJvbWtleXMiLCJzZXEiLCJ2YWx1ZSIsImNvcHkiLCJjaGlsZCIsInBhcmVudHMiLCJuZXdfY2hpbGQiLCJzZXQiLCJkZWxldGUiLCJwb3BpdGVtIiwicG9wIiwiYXJndW1lbnRzIiwiY2xlYXIiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxTLEdBQUFBLFM7Ozs7OztBQUFULFNBQVNBLFNBQVQsQ0FBcUJDLElBQXJCLEVBQTRCQyxHQUE1QixFQUFrQzs7QUFFeEMsS0FBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQXFCO0FBQUEsb0NBQVBDLElBQU87QUFBUEEsT0FBTztBQUFBOztBQUVyQyxPQUFLQSxJQUFMLEdBQVlBLElBQVo7O0FBRUEsTUFBSyxLQUFLQSxJQUFMLENBQVVDLE1BQVYsS0FBcUIsQ0FBMUIsRUFBOEIsS0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWdCLElBQUlMLElBQUosRUFBaEI7QUFFOUIsRUFORDs7QUFRQUUsVUFBU0ksU0FBVCxDQUFtQkMsV0FBbkIsR0FBaUMsVUFBV0MsR0FBWCxFQUFpQjs7QUFFakQsUUFBTSxJQUFJQyxRQUFKLENBQWNELEdBQWQsQ0FBTjtBQUVBLEVBSkQ7O0FBTUFOLFVBQVNJLFNBQVQsQ0FBbUJJLEdBQW5CLEdBQXlCLFVBQVdGLEdBQVgsRUFBaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRXpDLHdCQUFpQixLQUFLTCxJQUF0Qiw4SEFBNkI7QUFBQSxR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U0FBVCxDQUFtQjhCLE1BQW5CLDJCQUE0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVixLQUFLbkIsSUFBTCxFQUZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWpCVCxTQUZpQjtBQUFBO0FBQUEsYUFFVyxLQUFLRSxHQUFMLENBQVVGLEdBQVYsQ0FGWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTVCOztBQU1BLFFBQU9OLFFBQVA7QUFFQSIsImZpbGUiOiJDaGFpbk1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9DaGFpbk1hcCAoIERpY3QgLCBTZXQgKSB7XG5cblx0Y29uc3QgQ2hhaW5NYXAgPSBmdW5jdGlvbiAoIC4uLm1hcHMgKSB7XG5cblx0XHR0aGlzLm1hcHMgPSBtYXBzIDtcblxuXHRcdGlmICggdGhpcy5tYXBzLmxlbmd0aCA9PT0gMCApIHRoaXMubWFwcy5wdXNoKCBuZXcgRGljdCggKSApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuX19taXNzaW5nX18gPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRocm93IG5ldyBLZXlFcnJvcigga2V5ICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdGZvciAoIGxldCBtYXAgb2YgdGhpcy5tYXBzICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdHJldHVybiBtYXAuZ2V0KCBrZXkgKSA7XG5cblx0XHRcdH1cblxuXHRcdFx0Y2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdGlmICggISggZSBpbnN0YW5jZW9mIEtleUVycm9yICkgKSB0aHJvdyBlIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX19taXNzaW5nX18oIGtleSApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuZ2V0ZGVmYXVsdCA9IGZ1bmN0aW9uICgga2V5ICwgZGZsdCA9IG51bGwgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5oYXMoIGtleSApID8gdGhpcy5nZXQoIGtleSApIDogZGZsdCA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLl9rZXlzID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGxldCBrZXlzID0gbmV3IFNldCggKSA7XG5cblx0XHRmb3IgKCBsZXQgbWFwIG9mIHRoaXMubWFwcyApIGtleXMudXBkYXRlKCBtYXAua2V5cyggKSApIDtcblxuXHRcdHJldHVybiBrZXlzIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHJldHVybiB0aGlzLl9rZXlzKCApLmxlbiggKSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPVxuXHRDaGFpbk1hcC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5rZXlzKCApICkgeWllbGQgWyBrZXkgLCB0aGlzLmdldCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0Zm9yICggbGV0IG1hcCBvZiB0aGlzLm1hcHMgKSB7XG5cblx0XHRcdGlmICggbWFwLmhhcygga2V5ICkgKSByZXR1cm4gdHJ1ZSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2UgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLmZyb21rZXlzID0gZnVuY3Rpb24gKCBzZXEgLCB2YWx1ZSA9IG51bGwgKSB7XG5cblx0XHRyZXR1cm4gbmV3IENoYWluTWFwKCBEaWN0LmZyb21rZXlzKCBzZXEgLCB2YWx1ZSApICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGNvbnN0IFsgY2hpbGQgLCAuLi5wYXJlbnRzIF0gPSB0aGlzLm1hcHMgO1xuXG5cdFx0cmV0dXJuIG5ldyBDaGFpbk1hcCggY2hpbGQuY29weSggKSAsIC4uLnBhcmVudHMgKSA7XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLm5ld19jaGlsZCA9IGZ1bmN0aW9uICggbWFwID0gbnVsbCApIHtcblxuXHRcdGlmICggbWFwID09PSBudWxsICkgbWFwID0gbmV3IERpY3QoICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDaGFpbk1hcCggbWFwICwgLi4udGhpcy5tYXBzICkgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGNvbnN0IFsgY2hpbGQgLCAuLi5wYXJlbnRzIF0gPSB0aGlzLm1hcHMgO1xuXG5cdFx0cmV0dXJuIG5ldyBDaGFpbk1hcCggLi4ucGFyZW50cyApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBrZXkgLCB2YWx1ZSApIHtcblxuXHRcdHJldHVybiB0aGlzLm1hcHNbMF0uc2V0KCBrZXkgLCB2YWx1ZSApIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHR0cnkge1xuXG5cdFx0XHR0aGlzLm1hcHNbMF0uZGVsZXRlKCBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRjYXRjaCAoIGUgKSB7XG5cblx0XHRcdGlmICggISggZSBpbnN0YW5jZW9mIEtleUVycm9yICkgKSB0aHJvdyBlIDtcblxuXHRcdFx0dGhyb3cgbmV3IEtleUVycm9yKCBcIktleSBub3QgZm91bmQgaW4gdGhlIGZpcnN0IG1hcHBpbmc6IFwiICsga2V5ICkgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdENoYWluTWFwLnByb3RvdHlwZS5wb3BpdGVtID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHRyeSB7XG5cblx0XHRcdHJldHVybiB0aGlzLm1hcHNbMF0ucG9waXRlbSggKSA7XG5cblx0XHR9XG5cblx0XHRjYXRjaCAoIGUgKSB7XG5cblx0XHRcdGlmICggISggZSBpbnN0YW5jZW9mIEtleUVycm9yICkgKSB0aHJvdyBlIDtcblxuXHRcdFx0dGhyb3cgbmV3IEtleUVycm9yKCBcIk5vIGtleXMgZm91bmQgaW4gdGhlIGZpcnN0IG1hcHBpbmcuXCIgKSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgga2V5ICwgZGZsdCA9IG51bGwgKSB7XG5cblx0XHR0cnkge1xuXG5cdFx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPD0gMSApIHJldHVybiB0aGlzLm1hcHNbMF0ucG9wKCBrZXkgKSA7XG5cblx0XHRcdHJldHVybiB0aGlzLm1hcHNbMF0ucG9wKCBrZXkgLCBkZmx0ICkgO1xuXG5cdFx0fVxuXG5cdFx0Y2F0Y2ggKCBlICkge1xuXG5cdFx0XHRpZiAoICEoIGUgaW5zdGFuY2VvZiBLZXlFcnJvciApICkgdGhyb3cgZSA7XG5cblx0XHRcdHRocm93IG5ldyBLZXlFcnJvciggXCJLZXkgbm90IGZvdW5kIGluIHRoZSBmaXJzdCBtYXBwaW5nOiBcIiArIGtleSApIDtcblxuXHRcdH1cblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0dGhpcy5tYXBzWzBdLmNsZWFyKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRDaGFpbk1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0eWllbGQqIHRoaXMuX2tleXMoICkgO1xuXG5cdH0gO1xuXG5cblx0Q2hhaW5NYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmtleXMoICkgKSB5aWVsZCB0aGlzLmdldCgga2V5ICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBDaGFpbk1hcCA7XG5cbn1cbiJdfQ==