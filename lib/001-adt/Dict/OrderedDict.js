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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDEtYWR0L0RpY3QvT3JkZXJlZERpY3QuanMiXSwibmFtZXMiOlsiX09yZGVyZWREaWN0IiwiRGljdCIsIk1hcCIsIkRMTCIsIk9yZGVyZWREaWN0IiwibWFwcGluZyIsImNvbnRhaW5lciIsIm1hcCIsImxpc3QiLCJ1cGRhdGUiLCJwcm90b3R5cGUiLCJpc2VxdWFsIiwib3RoZXIiLCJjYWxsIiwia2V5cyIsImtleSIsIm5leHQiLCJ2YWx1ZSIsInNldCIsImhhcyIsInB1c2giLCJkZWxldGUiLCJLZXlFcnJvciIsImVyYXNlIiwiZ2V0IiwiY2xlYXIiLCJjb3B5IiwiaXRlbXMiLCJmcm9ta2V5cyIsInNlcSIsIk1hcHBpbmciLCJwb3BpdGVtIiwibGFzdCIsImxlbiIsImVuZCIsInByZXYiLCJiZWdpbiIsInBvcCIsIm1vdmVfdG9fZW5kIiwiaXRlcmF0b3IiLCJ1bnNoaWZ0IiwidmFsdWVzIiwiU3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsWSxHQUFBQSxZO0FBQVQsU0FBU0EsWUFBVCxDQUF3QkMsSUFBeEIsRUFBK0JDLEdBQS9CLEVBQXFDQyxHQUFyQyxFQUEyQzs7QUFFakQsS0FBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLE9BQVgsRUFBcUI7O0FBRXhDLE9BQUtDLFNBQUwsR0FBaUIsSUFBSUosR0FBSixFQUFqQjs7QUFFQSxPQUFLSyxHQUFMLEdBQVcsSUFBSUwsR0FBSixFQUFYOztBQUVBLE9BQUtNLElBQUwsR0FBWSxJQUFJTCxHQUFKLEVBQVo7O0FBRUEsTUFBS0UsWUFBWSxJQUFqQixFQUF3QixLQUFLSSxNQUFMLENBQWFKLE9BQWI7QUFFeEIsRUFWRDs7QUFZQUQsYUFBWU0sU0FBWixHQUF3QixJQUFJVCxJQUFKLEVBQXhCOztBQUVBRyxhQUFZTSxTQUFaLENBQXNCQyxPQUF0QixHQUFnQyxVQUFXQyxLQUFYLEVBQW1COztBQUVsRCxNQUFLLEVBQUlBLGlCQUFpQlIsV0FBckIsQ0FBTCxFQUEwQyxP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U0FBTCxDQUFla0IsR0FBZixDQUFvQlQsR0FBcEIsQ0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQS9COztBQU1BWCxhQUFZTSxTQUFaLENBQXNCaUIsS0FBdEIsMkJBQThCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVaLEtBQUtiLElBQUwsRUFGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVuQkMsU0FGbUI7QUFBQTtBQUFBLGFBRVMsQ0FBRUEsR0FBRixFQUFRLEtBQUtULFNBQUwsQ0FBZWtCLEdBQWYsQ0FBb0JULEdBQXBCLENBQVIsQ0FGVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTlCOztBQU1BWCxhQUFZTSxTQUFaLENBQXNCZ0MsT0FBT0gsUUFBN0IsSUFBeUNuQyxZQUFZTSxTQUFaLENBQXNCaUIsS0FBL0Q7O0FBRUEsUUFBT3ZCLFdBQVA7QUFFQSIsImZpbGUiOiJPcmRlcmVkRGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9PcmRlcmVkRGljdCAoIERpY3QgLCBNYXAgLCBETEwgKSB7XG5cblx0Y29uc3QgT3JkZXJlZERpY3QgPSBmdW5jdGlvbiAoIG1hcHBpbmcgKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBNYXAoICkgO1xuXG5cdFx0dGhpcy5tYXAgPSBuZXcgTWFwKCApIDtcblxuXHRcdHRoaXMubGlzdCA9IG5ldyBETEwoICkgO1xuXG5cdFx0aWYgKCBtYXBwaW5nICE9PSBudWxsICkgdGhpcy51cGRhdGUoIG1hcHBpbmcgKSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlID0gbmV3IERpY3QoICkgO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5pc2VxdWFsID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGlmICggISAoIG90aGVyIGluc3RhbmNlb2YgT3JkZXJlZERpY3QgKSApIHJldHVybiBmYWxzZSA7XG5cblx0XHRpZiAoICFEaWN0LnByb3RvdHlwZS5pc2VxdWFsLmNhbGwoIHRoaXMgLCBvdGhlciApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGxldCBrZXlzID0gdGhpcy5rZXlzKCApIDtcblxuXHRcdGZvciAoIGxldCBrZXkgb2Ygb3RoZXIua2V5cyggKSApIHtcblxuXHRcdFx0aWYgKCBrZXlzLm5leHQoICkudmFsdWUgIT09IGtleSApIHJldHVybiBmYWxzZSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICgga2V5ICwgdmFsdWUgKSB7XG5cblx0XHRpZiAoICF0aGlzLmhhcygga2V5ICkgKSB7XG5cblx0XHRcdHRoaXMubWFwLnNldCgga2V5ICwgdGhpcy5saXN0LnB1c2goIGtleSApICkgO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jb250YWluZXIuc2V0KCBrZXkgLCB2YWx1ZSApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoICF0aGlzLmNvbnRhaW5lci5kZWxldGUoIGtleSApICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHRoaXMubGlzdC5lcmFzZSggdGhpcy5tYXAuZ2V0KCBrZXkgKSApIDtcblx0XHR0aGlzLm1hcC5kZWxldGUoIGtleSApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIuY2xlYXIoICkgO1xuXG5cdFx0dGhpcy5tYXAuY2xlYXIoICkgO1xuXG5cdFx0dGhpcy5saXN0LmNsZWFyKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHRyZXR1cm4gbmV3IE9yZGVyZWREaWN0KCB0aGlzLml0ZW1zKCApICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LmZyb21rZXlzID0gZnVuY3Rpb24gKCBzZXEgLCB2YWx1ZSA9IG51bGwgKSB7XG5cblx0XHRyZXR1cm4gbmV3IE9yZGVyZWREaWN0KCBNYXBwaW5nLmZyb21rZXlzKCBzZXEgLCB2YWx1ZSApICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5wb3BpdGVtID0gZnVuY3Rpb24gKCBsYXN0ID0gdHJ1ZSApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPT09IDAgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0Y29uc3Qga2V5ID0gbGFzdCA/XG5cdFx0dGhpcy5saXN0LmVuZCggKS5wcmV2KCApLnZhbHVlIDpcblx0XHR0aGlzLmxpc3QuYmVnaW4oICkubmV4dCggKS52YWx1ZSA7XG5cblx0XHRyZXR1cm4gWyBrZXkgLCB0aGlzLnBvcCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLm1vdmVfdG9fZW5kID0gZnVuY3Rpb24gKCBrZXkgLCBsYXN0ID0gdHJ1ZSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmhhcygga2V5ICkgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0dGhpcy5saXN0LmVyYXNlKCB0aGlzLm1hcC5nZXQoIGtleSApICkgO1xuXG5cdFx0Y29uc3QgaXRlcmF0b3IgPSBsYXN0ID8gdGhpcy5saXN0LnB1c2goIGtleSApIDogdGhpcy5saXN0LnVuc2hpZnQoIGtleSApIDtcblxuXHRcdHRoaXMubWFwLnNldCgga2V5ICwgaXRlcmF0b3IgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5saXN0ICkgeWllbGQga2V5IDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIHRoaXMua2V5cyggKSApIHlpZWxkIHRoaXMuY29udGFpbmVyLmdldCgga2V5ICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmtleXMoICkgKSB5aWVsZCBbIGtleSAsIHRoaXMuY29udGFpbmVyLmdldCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBPcmRlcmVkRGljdC5wcm90b3R5cGUuaXRlbXMgO1xuXG5cdHJldHVybiBPcmRlcmVkRGljdCA7XG5cbn1cbiJdfQ==