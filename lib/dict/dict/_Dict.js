'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._Dict = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _error = require('../../error');

var _mapping = require('../../mapping');

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

		throw new _error.KeyError(key);
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

		if (!this.container.delete(key)) throw new _error.KeyError();

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


		return new Dict(_mapping.Mapping.fromkeys(seq, value));
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

		if (arguments.length < 2) throw new _error.KeyError();

		return dflt;
	};

	Dict.prototype.popitem = function () {

		if (this.len() === 0) throw new _error.KeyError();

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
						_context.t0 = _context['catch'](3);
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
					case 'end':
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
						_context2.t0 = _context2['catch'](3);
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
					case 'end':
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
						return _context3.delegateYield(this.container, 't0', 1);

					case 1:
					case 'end':
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWN0L2RpY3QvX0RpY3QuanMiXSwibmFtZXMiOlsiX0RpY3QiLCJNYXAiLCJEaWN0IiwibWFwcGluZyIsImNvbnRhaW5lciIsInByb3RvdHlwZSIsImxlbiIsInNpemUiLCJpc2VxdWFsIiwib3RoZXIiLCJrZXkiLCJ2YWx1ZSIsImhhcyIsImdldCIsIl9fbWlzc2luZ19fIiwic2V0IiwiZGVsZXRlIiwiY2xlYXIiLCJjb3B5IiwiaXRlbXMiLCJmcm9ta2V5cyIsInNlcSIsImdldGRlZmF1bHQiLCJkZmx0Iiwic2V0ZGVmYXVsdCIsInBvcCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInBvcGl0ZW0iLCJrZXlzIiwibmV4dCIsInZhbHVlcyIsInVwZGF0ZSIsIlN5bWJvbCIsIml0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSx3QkFBUSxTQUFSQSxLQUFRLENBQVdDLEdBQVgsRUFBaUI7O0FBRXJDLEtBQU1DLE9BQU8sU0FBUEEsSUFBTyxHQUE0QjtBQUFBLE1BQWpCQyxPQUFpQix1RUFBUCxJQUFPOzs7QUFFeEMsT0FBS0MsU0FBTCxHQUFpQixJQUFJSCxHQUFKLENBQVNFLE9BQVQsQ0FBakI7QUFFQSxFQUpEOztBQU1BRCxNQUFLRyxTQUFMLENBQWVDLEdBQWYsR0FBcUIsWUFBYTs7QUFFakMsU0FBTyxLQUFLRixTQUFMLENBQWVHLElBQXRCO0FBRUEsRUFKRDs7QUFNQUwsTUFBS0csU0FBTCxDQUFlRyxPQUFmLEdBQXlCLFVBQVdDLEtBQVgsRUFBbUI7O0FBRTNDLE1BQUssS0FBS0gsR0FBTCxPQUFnQkcsTUFBTUgsR0FBTixFQUFyQixFQUFvQyxPQUFPLEtBQVA7O0FBRk87QUFBQTtBQUFBOztBQUFBO0FBSTNDLHdCQUE2QkcsS0FBN0IsOEhBQXFDO0FBQUE7QUFBQSxRQUF6QkMsR0FBeUI7QUFBQSxRQUFuQkMsS0FBbUI7O0FBRXBDLFFBQUssQ0FBQyxLQUFLQyxHQUFMLENBQVVG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QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0RBRVhNLEdBRlcsb0JBRUxDLEtBRks7QUFBQTtBQUFBLGFBRTZCQSxLQUY3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXhCOztBQU1BVCxNQUFLRyxTQUFMLENBQWVjLEtBQWYsMkJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FFZixLQUFLZixTQUZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXZCOztBQU1BRixNQUFLRyxTQUFMLENBQWUyQixNQUFmLEdBQXdCLFVBQVc3QixPQUFYLEVBQXFCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU1Qyx5QkFBNkJBLE9BQTdCO0FBQUE7QUFBQSxRQUFZTyxHQUFaO0FBQUEsUUFBa0JDLEtBQWxCOztBQUF1QyxTQUFLSSxHQUFMLENBQVVMLEdBQVYsRUFBZ0JDLEtBQWhCO0FBQXZDO0FBRjRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJNUMsRUFKRDs7QUFNQVQsTUFBS0csU0FBTCxDQUFlNEIsT0FBT0MsUUFBdEIsSUFBa0NoQyxLQUFLRyxTQUFMLENBQWVjLEtBQWpEOztBQUVBLFFBQU9qQixJQUFQO0FBRUEsQ0FoS00iLCJmaWxlIjoiX0RpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9yJyA7XG5pbXBvcnQgeyBNYXBwaW5nIH0gZnJvbSAnLi4vLi4vbWFwcGluZycgO1xuXG5leHBvcnQgY29uc3QgX0RpY3QgPSBmdW5jdGlvbiAoIE1hcCApIHtcblxuXHRjb25zdCBEaWN0ID0gZnVuY3Rpb24gKCBtYXBwaW5nID0gbnVsbCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IE1hcCggbWFwcGluZyApIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5sZW4gPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLnNpemUgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmlzZXF1YWwgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCB0aGlzLmxlbiggKSAhPT0gb3RoZXIubGVuKCApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIHZhbHVlIF0gb2Ygb3RoZXIgKSB7XG5cblx0XHRcdGlmICggIXRoaXMuaGFzKCBrZXkgKSApIHJldHVybiBmYWxzZSA7XG5cblx0XHRcdGlmICggdGhpcy5nZXQoIGtleSApICE9PSB2YWx1ZSApIHJldHVybiBmYWxzZSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuX19taXNzaW5nX18gPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRocm93IG5ldyBLZXlFcnJvcigga2V5ICkgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0aWYgKCAhdGhpcy5jb250YWluZXIuaGFzKCBrZXkgKSApIHJldHVybiB0aGlzLl9fbWlzc2luZ19fKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0KCBrZXkgKSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBrZXkgLCB2YWx1ZSApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLnNldCgga2V5ICwgdmFsdWUgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoICF0aGlzLmNvbnRhaW5lci5kZWxldGUoIGtleSApICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5oYXMoIGtleSApIDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jbGVhciggKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHRyZXR1cm4gbmV3IERpY3QoIHRoaXMuaXRlbXMoICkgKSA7XG5cblx0fSA7XG5cblx0RGljdC5mcm9ta2V5cyA9IGZ1bmN0aW9uICggc2VxICwgdmFsdWUgPSBudWxsICkge1xuXG5cdFx0cmV0dXJuIG5ldyBEaWN0KCBNYXBwaW5nLmZyb21rZXlzKCBzZXEgLCB2YWx1ZSApICkgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLmdldGRlZmF1bHQgPSBmdW5jdGlvbiAoIGtleSAsIGRmbHQgPSBudWxsICkge1xuXG5cdFx0aWYgKCB0aGlzLmhhcygga2V5ICkgKSByZXR1cm4gdGhpcy5nZXQoIGtleSApIDtcblxuXHRcdHJldHVybiBkZmx0IDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5zZXRkZWZhdWx0ID0gZnVuY3Rpb24gKCBrZXkgLCBkZmx0ID0gbnVsbCApIHtcblxuXHRcdGlmICggdGhpcy5oYXMoIGtleSApICkgcmV0dXJuIHRoaXMuZ2V0KCBrZXkgKSA7XG5cblx0XHR0aGlzLnNldCgga2V5ICwgZGZsdCApIDtcblxuXHRcdHJldHVybiBkZmx0IDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoIGtleSAsIGRmbHQgPSBudWxsICkge1xuXG5cdFx0aWYgKCB0aGlzLmhhcygga2V5ICkgKSB7XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoIGtleSApIDtcblxuXHRcdFx0dGhpcy5kZWxldGUoIGtleSApIDtcblxuXHRcdFx0cmV0dXJuIHZhbHVlIDtcblxuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IDIgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0cmV0dXJuIGRmbHQgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlLnBvcGl0ZW0gPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0aWYgKCB0aGlzLmxlbiggKSA9PT0gMCApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLmtleXMoICkubmV4dCggKS52YWx1ZSA7XG5cblx0XHRyZXR1cm4gWyBrZXkgLCB0aGlzLnBvcCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmNvbnRhaW5lci5rZXlzKCApICkgeWllbGQga2V5IDtcblxuXHR9IDtcblxuXHREaWN0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIHZhbHVlIF0gb2YgdGhpcy5jb250YWluZXIgKSB5aWVsZCB2YWx1ZSA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdHlpZWxkKiB0aGlzLmNvbnRhaW5lciA7XG5cblx0fSA7XG5cblx0RGljdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCBtYXBwaW5nICkge1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgdmFsdWUgXSBvZiBtYXBwaW5nICkgdGhpcy5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdH0gO1xuXG5cdERpY3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBEaWN0LnByb3RvdHlwZS5pdGVtcyA7XG5cblx0cmV0dXJuIERpY3QgO1xuXG59XG4iXX0=