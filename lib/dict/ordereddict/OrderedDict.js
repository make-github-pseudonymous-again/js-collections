"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._OrderedDict = _OrderedDict;
function _OrderedDict(Dict, Map, DLL) {

	var OrderedDict = function OrderedDict(mapping) {

		this.container = new Map();

		this.map = new Map();

		this.list = new DLL();

		if (mapping !== null) this.update(mapping);
	};

	OrderedDict.prototype = new Dict();

	OrderedDict.prototype.isequal = function (other) {

		if (!(other instanceof OrderedDict)) return false;

		if (!Dict.prototype.isequal.call(this, other)) return false;

		var keys = this.keys();

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = other.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;


				if (keys.next().value !== key) return false;
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

	OrderedDict.prototype.set = function (key, value) {

		if (!this.has(key)) {

			this.map.set(key, this.list.push(key));
		}

		this.container.set(key, value);

		return this;
	};

	OrderedDict.prototype.delete = function (key) {

		if (!this.container.delete(key)) throw new KeyError();

		this.list.erase(this.map.get(key));
		this.map.delete(key);

		return this;
	};

	OrderedDict.prototype.clear = function () {

		this.container.clear();

		this.map.clear();

		this.list.clear();

		return this;
	};

	OrderedDict.prototype.copy = function () {

		return new OrderedDict(this.items());
	};

	OrderedDict.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		return new OrderedDict(Mapping.fromkeys(seq, value));
	};

	OrderedDict.prototype.popitem = function () {
		var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


		if (this.len() === 0) throw new KeyError();

		var key = last ? this.list.end().prev().value : this.list.begin().next().value;

		return [key, this.pop(key)];
	};

	OrderedDict.prototype.move_to_end = function (key) {
		var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


		if (!this.container.has(key)) throw new KeyError();

		this.list.erase(this.map.get(key));

		var iterator = last ? this.list.push(key) : this.list.unshift(key);

		this.map.set(key, iterator);

		return this;
	};

	OrderedDict.prototype.keys = regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context.prev = 3;
						_iterator2 = this.list[Symbol.iterator]();

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

	OrderedDict.prototype.values = regeneratorRuntime.mark(function _callee2() {
		var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 3;
						_iterator3 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 12;
							break;
						}

						key = _step3.value;
						_context2.next = 9;
						return this.container.get(key);

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

	OrderedDict.prototype.items = regeneratorRuntime.mark(function _callee3() {
		var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, key;

		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						_context3.prev = 3;
						_iterator4 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							_context3.next = 12;
							break;
						}

						key = _step4.value;
						_context3.next = 9;
						return [key, this.container.get(key)];

					case 9:
						_iteratorNormalCompletion4 = true;
						_context3.next = 5;
						break;

					case 12:
						_context3.next = 18;
						break;

					case 14:
						_context3.prev = 14;
						_context3.t0 = _context3["catch"](3);
						_didIteratorError4 = true;
						_iteratorError4 = _context3.t0;

					case 18:
						_context3.prev = 18;
						_context3.prev = 19;

						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}

					case 21:
						_context3.prev = 21;

						if (!_didIteratorError4) {
							_context3.next = 24;
							break;
						}

						throw _iteratorError4;

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

	OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items;

	return OrderedDict;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWN0L29yZGVyZWRkaWN0L09yZGVyZWREaWN0LmpzIl0sIm5hbWVzIjpbIl9PcmRlcmVkRGljdCIsIkRpY3QiLCJNYXAiLCJETEwiLCJPcmRlcmVkRGljdCIsIm1hcHBpbmciLCJjb250YWluZXIiLCJtYXAiLCJsaXN0IiwidXBkYXRlIiwicHJvdG90eXBlIiwiaXNlcXVhbCIsIm90aGVyIiwiY2FsbCIsImtleXMiLCJrZXkiLCJuZXh0IiwidmFsdWUiLCJzZXQiLCJoYXMiLCJwdXNoIiwiZGVsZXRlIiwiS2V5RXJyb3IiLCJlcmFzZSIsImdldCIsImNsZWFyIiwiY29weSIsIml0ZW1zIiwiZnJvbWtleXMiLCJzZXEiLCJNYXBwaW5nIiwicG9waXRlbSIsImxhc3QiLCJsZW4iLCJlbmQiLCJwcmV2IiwiYmVnaW4iLCJwb3AiLCJtb3ZlX3RvX2VuZCIsIml0ZXJhdG9yIiwidW5zaGlmdCIsInZhbHVlcyIsIlN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLFksR0FBQUEsWTtBQUFULFNBQVNBLFlBQVQsQ0FBd0JDLElBQXhCLEVBQStCQyxHQUEvQixFQUFxQ0MsR0FBckMsRUFBMkM7O0FBRWpELEtBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFXQyxPQUFYLEVBQXFCOztBQUV4QyxPQUFLQyxTQUFMLEdBQWlCLElBQUlKLEdBQUosRUFBakI7O0FBRUEsT0FBS0ssR0FBTCxHQUFXLElBQUlMLEdBQUosRUFBWDs7QUFFQSxPQUFLTSxJQUFMLEdBQVksSUFBSUwsR0FBSixFQUFaOztBQUVBLE1BQUtFLFlBQVksSUFBakIsRUFBd0IsS0FBS0ksTUFBTCxDQUFhSixPQUFiO0FBRXhCLEVBVkQ7O0FBWUFELGFBQVlNLFNBQVosR0FBd0IsSUFBSVQsSUFBSixFQUF4Qjs7QUFFQUcsYUFBWU0sU0FBWixDQUFzQkMsT0FBdEIsR0FBZ0MsVUFBV0MsS0FBWCxFQUFtQjs7QUFFbEQsTUFBSyxFQUFJQSxpQkFBaUJSLFdBQXJCLENBQUwsRUFB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QUtULFNBQUwsQ0FBZWtCLEdBQWYsQ0FBb0JULEdBQXBCLENBRlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUEvQjs7QUFNQVgsYUFBWU0sU0FBWixDQUFzQmlCLEtBQXRCLDJCQUE4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFWixLQUFLYixJQUFMLEVBRlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFbkJDLFNBRm1CO0FBQUE7QUFBQSxhQUVTLENBQUVBLEdBQUYsRUFBUSxLQUFLVCxTQUFMLENBQWVrQixHQUFmLENBQW9CVCxHQUFwQixDQUFSLENBRlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUE5Qjs7QUFNQVgsYUFBWU0sU0FBWixDQUFzQmdDLE9BQU9ILFFBQTdCLElBQXlDbkMsWUFBWU0sU0FBWixDQUFzQmlCLEtBQS9EOztBQUVBLFFBQU92QixXQUFQO0FBRUEiLCJmaWxlIjoiT3JkZXJlZERpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBfT3JkZXJlZERpY3QgKCBEaWN0ICwgTWFwICwgRExMICkge1xuXG5cdGNvbnN0IE9yZGVyZWREaWN0ID0gZnVuY3Rpb24gKCBtYXBwaW5nICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCApIDtcblxuXHRcdHRoaXMubWFwID0gbmV3IE1hcCggKSA7XG5cblx0XHR0aGlzLmxpc3QgPSBuZXcgRExMKCApIDtcblxuXHRcdGlmICggbWFwcGluZyAhPT0gbnVsbCApIHRoaXMudXBkYXRlKCBtYXBwaW5nICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZSA9IG5ldyBEaWN0KCApIDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuaXNlcXVhbCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRpZiAoICEgKCBvdGhlciBpbnN0YW5jZW9mIE9yZGVyZWREaWN0ICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0aWYgKCAhRGljdC5wcm90b3R5cGUuaXNlcXVhbC5jYWxsKCB0aGlzICwgb3RoZXIgKSApIHJldHVybiBmYWxzZSA7XG5cblx0XHRsZXQga2V5cyA9IHRoaXMua2V5cyggKSA7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIG90aGVyLmtleXMoICkgKSB7XG5cblx0XHRcdGlmICgga2V5cy5uZXh0KCApLnZhbHVlICE9PSBrZXkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoIGtleSAsIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhdGhpcy5oYXMoIGtleSApICkge1xuXG5cdFx0XHR0aGlzLm1hcC5zZXQoIGtleSAsIHRoaXMubGlzdC5wdXNoKCBrZXkgKSApIDtcblxuXHRcdH1cblxuXHRcdHRoaXMuY29udGFpbmVyLnNldCgga2V5ICwgdmFsdWUgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0aWYgKCAhdGhpcy5jb250YWluZXIuZGVsZXRlKCBrZXkgKSApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHR0aGlzLmxpc3QuZXJhc2UoIHRoaXMubWFwLmdldCgga2V5ICkgKSA7XG5cdFx0dGhpcy5tYXAuZGVsZXRlKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNsZWFyKCApIDtcblxuXHRcdHRoaXMubWFwLmNsZWFyKCApIDtcblxuXHRcdHRoaXMubGlzdC5jbGVhciggKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIG5ldyBPcmRlcmVkRGljdCggdGhpcy5pdGVtcyggKSApIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5mcm9ta2V5cyA9IGZ1bmN0aW9uICggc2VxICwgdmFsdWUgPSBudWxsICkge1xuXG5cdFx0cmV0dXJuIG5ldyBPcmRlcmVkRGljdCggTWFwcGluZy5mcm9ta2V5cyggc2VxICwgdmFsdWUgKSApIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUucG9waXRlbSA9IGZ1bmN0aW9uICggbGFzdCA9IHRydWUgKSB7XG5cblx0XHRpZiAoIHRoaXMubGVuKCApID09PSAwICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdGNvbnN0IGtleSA9IGxhc3QgP1xuXHRcdHRoaXMubGlzdC5lbmQoICkucHJldiggKS52YWx1ZSA6XG5cdFx0dGhpcy5saXN0LmJlZ2luKCApLm5leHQoICkudmFsdWUgO1xuXG5cdFx0cmV0dXJuIFsga2V5ICwgdGhpcy5wb3AoIGtleSApIF0gO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5tb3ZlX3RvX2VuZCA9IGZ1bmN0aW9uICgga2V5ICwgbGFzdCA9IHRydWUgKSB7XG5cblx0XHRpZiAoICF0aGlzLmNvbnRhaW5lci5oYXMoIGtleSApICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHRoaXMubGlzdC5lcmFzZSggdGhpcy5tYXAuZ2V0KCBrZXkgKSApIDtcblxuXHRcdGNvbnN0IGl0ZXJhdG9yID0gbGFzdCA/IHRoaXMubGlzdC5wdXNoKCBrZXkgKSA6IHRoaXMubGlzdC51bnNoaWZ0KCBrZXkgKSA7XG5cblx0XHR0aGlzLm1hcC5zZXQoIGtleSAsIGl0ZXJhdG9yICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIHRoaXMubGlzdCApIHlpZWxkIGtleSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmtleXMoICkgKSB5aWVsZCB0aGlzLmNvbnRhaW5lci5nZXQoIGtleSApIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5rZXlzKCApICkgeWllbGQgWyBrZXkgLCB0aGlzLmNvbnRhaW5lci5nZXQoIGtleSApIF0gO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gT3JkZXJlZERpY3QucHJvdG90eXBlLml0ZW1zIDtcblxuXHRyZXR1cm4gT3JkZXJlZERpY3QgO1xuXG59XG4iXX0=