'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _OrderedDict;

var _error = require('../../error');

var _mapping = require('../../mapping');

var _mapping2 = _interopRequireDefault(_mapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _OrderedDict(Dict, Map, DoublyLinkedList) {

	var OrderedDict = function OrderedDict(mapping) {

		this.container = new Map();

		this.map = new Map();

		this.list = new DoublyLinkedList();

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

		if (!this.container.delete(key)) throw new _error.KeyError();

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


		return new OrderedDict(_mapping2.default.fromkeys(seq, value));
	};

	OrderedDict.prototype.popitem = function () {
		var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


		if (this.len() === 0) throw new _error.KeyError();

		var key = last ? this.list.end().prev().value : this.list.begin().next().value;

		return [key, this.pop(key)];
	};

	OrderedDict.prototype.move_to_end = function (key) {
		var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


		if (!this.container.has(key)) throw new _error.KeyError();

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
						_context3.t0 = _context3['catch'](3);
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
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items;

	return OrderedDict;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWN0L29yZGVyZWRkaWN0L19PcmRlcmVkRGljdC5qcyJdLCJuYW1lcyI6WyJfT3JkZXJlZERpY3QiLCJEaWN0IiwiTWFwIiwiRG91Ymx5TGlua2VkTGlzdCIsIk9yZGVyZWREaWN0IiwibWFwcGluZyIsImNvbnRhaW5lciIsIm1hcCIsImxpc3QiLCJ1cGRhdGUiLCJwcm90b3R5cGUiLCJpc2VxdWFsIiwib3RoZXIiLCJjYWxsIiwia2V5cyIsImtleSIsIm5leHQiLCJ2YWx1ZSIsInNldCIsImhhcyIsInB1c2giLCJkZWxldGUiLCJlcmFzZSIsImdldCIsImNsZWFyIiwiY29weSIsIml0ZW1zIiwiZnJvbWtleXMiLCJzZXEiLCJwb3BpdGVtIiwibGFzdCIsImxlbiIsImVuZCIsInByZXYiLCJiZWdpbiIsInBvcCIsIm1vdmVfdG9fZW5kIiwiaXRlcmF0b3IiLCJ1bnNoaWZ0IiwidmFsdWVzIiwiU3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLFk7O0FBSHhCOztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxZQUFULENBQXdCQyxJQUF4QixFQUErQkMsR0FBL0IsRUFBcUNDLGdCQUFyQyxFQUF3RDs7QUFFdEUsS0FBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLE9BQVgsRUFBcUI7O0FBRXhDLE9BQUtDLFNBQUwsR0FBaUIsSUFBSUosR0FBSixFQUFqQjs7QUFFQSxPQUFLSyxHQUFMLEdBQVcsSUFBSUwsR0FBSixFQUFYOztBQUVBLE9BQUtNLElBQUwsR0FBWSxJQUFJTCxnQkFBSixFQUFaOztBQUVBLE1BQUtFLFlBQVksSUFBakIsRUFBd0IsS0FBS0ksTUFBTCxDQUFhSixPQUFiO0FBRXhCLEVBVkQ7O0FBWUFELGFBQVlNLFNBQVosR0FBd0IsSUFBSVQsSUFBSixFQUF4Qjs7QUFFQUcsYUFBWU0sU0FBWixDQUFzQkMsT0FBdEIsR0FBZ0MsVUFBV0MsS0FBWCxFQUFtQjs7QUFFbEQsTUFBSyxFQUFJQSxpQkFBaUJSLFdBQXJCLENB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R0FBcEIsQ0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQS9COztBQU1BWCxhQUFZTSxTQUFaLENBQXNCZ0IsS0FBdEIsMkJBQThCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVaLEtBQUtaLElBQUwsRUFGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVuQkMsU0FGbUI7QUFBQTtBQUFBLGFBRVMsQ0FBRUEsR0FBRixFQUFRLEtBQUtULFNBQUwsQ0FBZWlCLEdBQWYsQ0FBb0JSLEdBQXBCLENBQVIsQ0FGVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTlCOztBQU1BWCxhQUFZTSxTQUFaLENBQXNCOEIsT0FBT0gsUUFBN0IsSUFBeUNqQyxZQUFZTSxTQUFaLENBQXNCZ0IsS0FBL0Q7O0FBRUEsUUFBT3RCLFdBQVA7QUFFQSIsImZpbGUiOiJfT3JkZXJlZERpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9yJyA7XG5pbXBvcnQgTWFwcGluZyBmcm9tICcuLi8uLi9tYXBwaW5nJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9PcmRlcmVkRGljdCAoIERpY3QgLCBNYXAgLCBEb3VibHlMaW5rZWRMaXN0ICkge1xuXG5cdGNvbnN0IE9yZGVyZWREaWN0ID0gZnVuY3Rpb24gKCBtYXBwaW5nICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCApIDtcblxuXHRcdHRoaXMubWFwID0gbmV3IE1hcCggKSA7XG5cblx0XHR0aGlzLmxpc3QgPSBuZXcgRG91Ymx5TGlua2VkTGlzdCggKSA7XG5cblx0XHRpZiAoIG1hcHBpbmcgIT09IG51bGwgKSB0aGlzLnVwZGF0ZSggbWFwcGluZyApIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUgPSBuZXcgRGljdCggKSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmlzZXF1YWwgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCAhICggb3RoZXIgaW5zdGFuY2VvZiBPcmRlcmVkRGljdCApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGlmICggIURpY3QucHJvdG90eXBlLmlzZXF1YWwuY2FsbCggdGhpcyAsIG90aGVyICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0bGV0IGtleXMgPSB0aGlzLmtleXMoICkgO1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlci5rZXlzKCApICkge1xuXG5cdFx0XHRpZiAoIGtleXMubmV4dCggKS52YWx1ZSAhPT0ga2V5ICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBrZXkgLCB2YWx1ZSApIHtcblxuXHRcdGlmICggIXRoaXMuaGFzKCBrZXkgKSApIHtcblxuXHRcdFx0dGhpcy5tYXAuc2V0KCBrZXkgLCB0aGlzLmxpc3QucHVzaCgga2V5ICkgKSA7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmRlbGV0ZSgga2V5ICkgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0dGhpcy5saXN0LmVyYXNlKCB0aGlzLm1hcC5nZXQoIGtleSApICkgO1xuXHRcdHRoaXMubWFwLmRlbGV0ZSgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jbGVhciggKSA7XG5cblx0XHR0aGlzLm1hcC5jbGVhciggKSA7XG5cblx0XHR0aGlzLmxpc3QuY2xlYXIoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHJldHVybiBuZXcgT3JkZXJlZERpY3QoIHRoaXMuaXRlbXMoICkgKSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QuZnJvbWtleXMgPSBmdW5jdGlvbiAoIHNlcSAsIHZhbHVlID0gbnVsbCApIHtcblxuXHRcdHJldHVybiBuZXcgT3JkZXJlZERpY3QoIE1hcHBpbmcuZnJvbWtleXMoIHNlcSAsIHZhbHVlICkgKSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLnBvcGl0ZW0gPSBmdW5jdGlvbiAoIGxhc3QgPSB0cnVlICkge1xuXG5cdFx0aWYgKCB0aGlzLmxlbiggKSA9PT0gMCApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHRjb25zdCBrZXkgPSBsYXN0ID9cblx0XHR0aGlzLmxpc3QuZW5kKCApLnByZXYoICkudmFsdWUgOlxuXHRcdHRoaXMubGlzdC5iZWdpbiggKS5uZXh0KCApLnZhbHVlIDtcblxuXHRcdHJldHVybiBbIGtleSAsIHRoaXMucG9wKCBrZXkgKSBdIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUubW92ZV90b19lbmQgPSBmdW5jdGlvbiAoIGtleSAsIGxhc3QgPSB0cnVlICkge1xuXG5cdFx0aWYgKCAhdGhpcy5jb250YWluZXIuaGFzKCBrZXkgKSApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHR0aGlzLmxpc3QuZXJhc2UoIHRoaXMubWFwLmdldCgga2V5ICkgKSA7XG5cblx0XHRjb25zdCBpdGVyYXRvciA9IGxhc3QgPyB0aGlzLmxpc3QucHVzaCgga2V5ICkgOiB0aGlzLmxpc3QudW5zaGlmdCgga2V5ICkgO1xuXG5cdFx0dGhpcy5tYXAuc2V0KCBrZXkgLCBpdGVyYXRvciApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmxpc3QgKSB5aWVsZCBrZXkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5rZXlzKCApICkgeWllbGQgdGhpcy5jb250YWluZXIuZ2V0KCBrZXkgKSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLml0ZW1zID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIHRoaXMua2V5cyggKSApIHlpZWxkIFsga2V5ICwgdGhpcy5jb250YWluZXIuZ2V0KCBrZXkgKSBdIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IE9yZGVyZWREaWN0LnByb3RvdHlwZS5pdGVtcyA7XG5cblx0cmV0dXJuIE9yZGVyZWREaWN0IDtcblxufVxuIl19