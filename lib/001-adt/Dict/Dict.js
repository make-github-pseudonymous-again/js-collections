"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Dict = exports._Dict = function _Dict(Map) {

	var Dict = function Dict() {
		var mapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		this.container = new Map(mapping);
	};

	Dict.prototype.len = function () {

		return this.container.size;
	};

	Dict.prototype.isequal = function (other) {

		if (this.len() !== other.len()) return false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = other[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _step$value = _slicedToArray(_step.value, 2),
				    key = _step$value[0],
				    value = _step$value[1];

				if (!this.has(key)) return false;

				if (this.get(key) !== value) return false;
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

		return true;
	};

	Dict.prototype.__missing__ = function (key) {

		throw new KeyError(key);
	};

	Dict.prototype.get = function (key) {

		if (!this.container.has(key)) return this.__missing__(key);

		return this.container.get(key);
	};

	Dict.prototype.set = function (key, value) {

		this.container.set(key, value);

		return this;
	};

	Dict.prototype.delete = function (key) {

		if (!this.container.delete(key)) throw new KeyError();

		return this;
	};

	Dict.prototype.has = function (key) {

		return this.container.has(key);
	};

	Dict.prototype.clear = function () {

		this.container.clear();

		return this;
	};

	Dict.prototype.copy = function () {

		return new Dict(this.items());
	};

	Dict.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		return new Dict(Mapping.fromkeys(seq, value));
	};

	Dict.prototype.getdefault = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		if (this.has(key)) return this.get(key);

		return dflt;
	};

	Dict.prototype.setdefault = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		if (this.has(key)) return this.get(key);

		this.set(key, dflt);

		return dflt;
	};

	Dict.prototype.pop = function (key) {
		var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		if (this.has(key)) {

			var value = this.get(key);

			this.delete(key);

			return value;
		}

		if (arguments.length < 2) throw new KeyError();

		return dflt;
	};

	Dict.prototype.popitem = function () {

		if (this.len() === 0) throw new KeyError();

		var key = this.keys().next().value;

		return [key, this.pop(key)];
	};

	Dict.prototype.keys = regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context.prev = 3;
						_iterator2 = this.container.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							_context.next = 12;
							break;
						}

						key = _step2.value;
						_context.next = 9;
						return key;

					case 9:
						_iteratorNormalCompletion2 = true;
						_context.next = 5;
						break;

					case 12:
						_context.next = 18;
						break;

					case 14:
						_context.prev = 14;
						_context.t0 = _context["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context.t0;

					case 18:
						_context.prev = 18;
						_context.prev = 19;

						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}

					case 21:
						_context.prev = 21;

						if (!_didIteratorError2) {
							_context.next = 24;
							break;
						}

						throw _iteratorError2;

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

	Dict.prototype.values = regeneratorRuntime.mark(function _callee2() {
		var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, key, value;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 3;
						_iterator3 = this.container[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 12;
							break;
						}

						_step3$value = _slicedToArray(_step3.value, 2), key = _step3$value[0], value = _step3$value[1];
						_context2.next = 9;
						return value;

					case 9:
						_iteratorNormalCompletion3 = true;
						_context2.next = 5;
						break;

					case 12:
						_context2.next = 18;
						break;

					case 14:
						_context2.prev = 14;
						_context2.t0 = _context2["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = _context2.t0;

					case 18:
						_context2.prev = 18;
						_context2.prev = 19;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 21:
						_context2.prev = 21;

						if (!_didIteratorError3) {
							_context2.next = 24;
							break;
						}

						throw _iteratorError3;

					case 24:
						return _context2.finish(21);

					case 25:
						return _context2.finish(18);

					case 26:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	Dict.prototype.items = regeneratorRuntime.mark(function _callee3() {
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						return _context3.delegateYield(this.container, "t0", 1);

					case 1:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this);
	});

	Dict.prototype.update = function (mapping) {
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = mapping[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _step4$value = _slicedToArray(_step4.value, 2),
				    key = _step4$value[0],
				    value = _step4$value[1];

				this.set(key, value);
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
	};

	Dict.prototype[Symbol.iterator] = Dict.prototype.items;

	return Dict;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDEtYWR0L0RpY3QvRGljdC5qcyJdLCJuYW1lcyI6WyJfRGljdCIsIk1hcCIsIkRpY3QiLCJtYXBwaW5nIiwiY29udGFpbmVyIiwicHJvdG90eXBlIiwibGVuIiwic2l6ZSIsImlzZXF1YWwiLCJvdGhlciIsImtleSIsInZhbHVlIiwiaGFzIiwiZ2V0IiwiX19taXNzaW5nX18iLCJLZXlFcnJvciIsInNldCIsImRlbGV0ZSIsImNsZWFyIiwiY29weSIsIml0ZW1zIiwiZnJvbWtleXMiLCJzZXEiLCJNYXBwaW5nIiwiZ2V0ZGVmYXVsdCIsImRmbHQiLCJzZXRkZWZhdWx0IiwicG9wIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicG9waXRlbSIsImtleXMiLCJuZXh0IiwidmFsdWVzIiwidXBkYXRlIiwiU3ltYm9sIiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ08sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFXQyxHQUFYLEVBQWlCOztBQUVyQyxLQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBNEI7QUFBQSxNQUFqQkMsT0FBaUIsdUVBQVAsSUFBTzs7O0FBRXhDLE9BQUtDLFNBQUwsR0FBaUIsSUFBSUgsR0FBSixDQUFTRSxPQUFULENBQWpCO0FBRUEsRUFKRDs7QUFNQUQsTUFBS0csU0FBTCxDQUFlQyxHQUFmLEdBQXFCLFlBQWE7O0FBRWpDLFNBQU8sS0FBS0YsU0FBTCxDQUFlRyxJQUF0QjtBQUVBLEVBSkQ7O0FBTUFMLE1BQUtHLFNBQUwsQ0FBZUcsT0FBZixHQUF5QixVQUFXQyxLQUFYLEVBQW1COztBQUUzQyxNQUFLLEtBQUtILEdBQUwsT0FBZ0JHLE1BQU1ILEdBQU4sRUFBckIsRUFBb0MsT0FBTyxLQUFQOztBQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUkzQyx3QkFBNkJHLEtBQTdCLDhIQUFxQztBQUFBO0FBQUEsUUFBekJDLEdBQXlCO0FBQUEsUUFBbkJDLEtBQW1COztBQUVwQyxRQUFLLENBQUMsS0FBS0Ms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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRU0sS0FBSzdCLFNBRlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzREFFWE0sR0FGVyxvQkFFTEMsS0FGSztBQUFBO0FBQUEsYUFFNkJBLEtBRjdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBeEI7O0FBTUFULE1BQUtHLFNBQUwsQ0FBZWUsS0FBZiwyQkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUVmLEtBQUtoQixTQUZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXZCOztBQU1BRixNQUFLRyxTQUFMLENBQWU2QixNQUFmLEdBQXdCLFVBQVcvQixPQUFYLEVBQXFCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU1Qyx5QkFBNkJBLE9BQTdCO0FBQUE7QUFBQSxRQUFZTyxHQUFaO0FBQUEsUUFBa0JDLEtBQWxCOztBQUF1QyxTQUFLSyxHQUFMLENBQVVOLEdBQVYsRUFBZ0JDLEtBQWhCO0FBQXZDO0FBRjRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJNUMsRUFKRDs7QUFNQVQsTUFBS0csU0FBTCxDQUFlOEIsT0FBT0MsUUFBdEIsSUFBa0NsQyxLQUFLRyxTQUFMLENBQWVlLEtBQWpEOztBQUVBLFFBQU9sQixJQUFQO0FBRUEsQ0FoS00iLCJmaWxlIjoiRGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IF9EaWN0ID0gZnVuY3Rpb24gKCBNYXAgKSB7XG5cblx0Y29uc3QgRGljdCA9IGZ1bmN0aW9uICggbWFwcGluZyA9IG51bGwgKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBNYXAoIG1hcHBpbmcgKSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5zaXplIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5pc2VxdWFsID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgIT09IG90aGVyLmxlbiggKSApIHJldHVybiBmYWxzZSA7XG5cblx0XHRmb3IgKCBsZXQgWyBrZXkgLCB2YWx1ZSBdIG9mIG90aGVyICkge1xuXG5cdFx0XHRpZiAoICF0aGlzLmhhcygga2V5ICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0XHRpZiAoIHRoaXMuZ2V0KCBrZXkgKSAhPT0gdmFsdWUgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLl9fbWlzc2luZ19fID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHR0aHJvdyBuZXcgS2V5RXJyb3IoIGtleSApIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmhhcygga2V5ICkgKSByZXR1cm4gdGhpcy5fX21pc3NpbmdfXygga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldCgga2V5ICkgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICgga2V5ICwgdmFsdWUgKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0aWYgKCAhdGhpcy5jb250YWluZXIuZGVsZXRlKCBrZXkgKSApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuaGFzKCBrZXkgKSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIuY2xlYXIoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIG5ldyBEaWN0KCB0aGlzLml0ZW1zKCApICkgO1xuXG5cdH0gO1xuXG5cdERpY3QuZnJvbWtleXMgPSBmdW5jdGlvbiAoIHNlcSAsIHZhbHVlID0gbnVsbCApIHtcblxuXHRcdHJldHVybiBuZXcgRGljdCggTWFwcGluZy5mcm9ta2V5cyggc2VxICwgdmFsdWUgKSApIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5nZXRkZWZhdWx0ID0gZnVuY3Rpb24gKCBrZXkgLCBkZmx0ID0gbnVsbCApIHtcblxuXHRcdGlmICggdGhpcy5oYXMoIGtleSApICkgcmV0dXJuIHRoaXMuZ2V0KCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gZGZsdCA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuc2V0ZGVmYXVsdCA9IGZ1bmN0aW9uICgga2V5ICwgZGZsdCA9IG51bGwgKSB7XG5cblx0XHRpZiAoIHRoaXMuaGFzKCBrZXkgKSApIHJldHVybiB0aGlzLmdldCgga2V5ICkgO1xuXG5cdFx0dGhpcy5zZXQoIGtleSAsIGRmbHQgKSA7XG5cblx0XHRyZXR1cm4gZGZsdCA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCBrZXkgLCBkZmx0ID0gbnVsbCApIHtcblxuXHRcdGlmICggdGhpcy5oYXMoIGtleSApICkge1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KCBrZXkgKSA7XG5cblx0XHRcdHRoaXMuZGVsZXRlKCBrZXkgKSA7XG5cblx0XHRcdHJldHVybiB2YWx1ZSA7XG5cblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCAyICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHJldHVybiBkZmx0IDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5wb3BpdGVtID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPT09IDAgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5rZXlzKCApLm5leHQoICkudmFsdWUgO1xuXG5cdFx0cmV0dXJuIFsga2V5ICwgdGhpcy5wb3AoIGtleSApIF0gO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5jb250YWluZXIua2V5cyggKSApIHlpZWxkIGtleSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQgWyBrZXkgLCB2YWx1ZSBdIG9mIHRoaXMuY29udGFpbmVyICkgeWllbGQgdmFsdWUgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLml0ZW1zID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHR5aWVsZCogdGhpcy5jb250YWluZXIgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICggbWFwcGluZyApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIHZhbHVlIF0gb2YgbWFwcGluZyApIHRoaXMuc2V0KCBrZXkgLCB2YWx1ZSApIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gRGljdC5wcm90b3R5cGUuaXRlbXMgO1xuXG5cdHJldHVybiBEaWN0IDtcblxufSA7XG4iXX0=