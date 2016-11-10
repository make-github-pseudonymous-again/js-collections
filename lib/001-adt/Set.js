"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._Set = _Set;
function _Set(BaseSet) {

	var Set = function Set() {
		var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		this.container = new BaseSet(iterable);
	};

	Set.wrap = function (A) {

		if (A instanceof Set) return A;

		return new Set(A);
	};

	Set._operator = function (method) {

		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return method.apply(this, Array.from(args, Set.wrap));
		};
	};

	Set._inclusion = function (A, B) {

		return A._ispropersubset(B) ? -1 : B._ispropersubset(A) ? 1 : 0;
	};

	Set.inclusion = Set._operator(Set._inclusion);

	Set.prototype[Symbol.iterator] = Set.prototype.keys = regeneratorRuntime.mark(function _callee() {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.delegateYield(this.container, "t0", 1);

					case 1:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	});

	Set.prototype.len = function () {

		return this.container.size;
	};

	Set.prototype.has = function (key) {

		return this.container.has(key);
	};

	Set.prototype._isdisjoint = function (other) {

		return this._commonkeys(other).next().done;
	};

	Set.prototype.isdisjoint = Set._operator(Set.prototype._isdisjoint);

	Set.prototype._isequal = function (other) {

		return this._issubset(other) && other._issubset(this);
	};

	Set.prototype.isequal = Set._operator(Set.prototype._isequal);

	Set.prototype._issubset = function (other) {

		if (this.len() > other.len()) return false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;
				if (!other.has(key)) return false;
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

	Set.prototype.issubset = Set._operator(Set.prototype._issubset);

	Set.prototype._ispropersubset = function (other) {

		return this._issubset(other) && !this._issuperset(other);
	};

	Set.prototype.ispropersubset = Set._operator(Set.prototype._ispropersubset);

	Set.prototype._issuperset = function (other) {

		return other._issubset(this);
	};

	Set.prototype.issuperset = Set._operator(Set.prototype._issuperset);

	Set.prototype._ispropersuperset = function (other) {

		return this._issuperset(other) && !this._issubset(other);
	};

	Set.prototype.ispropersuperset = Set._operator(Set.prototype._ispropersuperset);

	Set.prototype.union = Set.prototype._union = function () {
		var _copy;

		return (_copy = this.copy())._update.apply(_copy, arguments);
	};

	Set.prototype._commonkeys = regeneratorRuntime.mark(function _callee2() {
		for (var _len2 = arguments.length, others = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			others[_key2] = arguments[_key2];
		}

		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, other;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context2.prev = 3;
						_iterator2 = this[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							_context2.next = 38;
							break;
						}

						key = _step2.value;
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 10;
						_iterator3 = others[Symbol.iterator]();

					case 12:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 19;
							break;
						}

						other = _step3.value;

						if (other.has(key)) {
							_context2.next = 16;
							break;
						}

						return _context2.abrupt("continue", 35);

					case 16:
						_iteratorNormalCompletion3 = true;
						_context2.next = 12;
						break;

					case 19:
						_context2.next = 25;
						break;

					case 21:
						_context2.prev = 21;
						_context2.t0 = _context2["catch"](10);
						_didIteratorError3 = true;
						_iteratorError3 = _context2.t0;

					case 25:
						_context2.prev = 25;
						_context2.prev = 26;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 28:
						_context2.prev = 28;

						if (!_didIteratorError3) {
							_context2.next = 31;
							break;
						}

						throw _iteratorError3;

					case 31:
						return _context2.finish(28);

					case 32:
						return _context2.finish(25);

					case 33:
						_context2.next = 35;
						return key;

					case 35:
						_iteratorNormalCompletion2 = true;
						_context2.next = 5;
						break;

					case 38:
						_context2.next = 44;
						break;

					case 40:
						_context2.prev = 40;
						_context2.t1 = _context2["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context2.t1;

					case 44:
						_context2.prev = 44;
						_context2.prev = 45;

						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}

					case 47:
						_context2.prev = 47;

						if (!_didIteratorError2) {
							_context2.next = 50;
							break;
						}

						throw _iteratorError2;

					case 50:
						return _context2.finish(47);

					case 51:
						return _context2.finish(44);

					case 52:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 40, 44, 52], [10, 21, 25, 33], [26,, 28, 32], [45,, 47, 51]]);
	});

	Set.prototype._intersection = function () {

		return new Set(this._commonkeys.apply(this, arguments));
	};

	Set.prototype.intersection = Set._operator(Set.prototype._intersection);

	Set.prototype.difference = Set.prototype._difference = function () {
		var _copy2;

		return (_copy2 = this.copy())._difference_update.apply(_copy2, arguments);
	};

	Set.prototype.symmetric_difference = Set.prototype._symmetric_difference = function (other) {

		return this.copy()._symmetric_difference_update(other);
	};

	Set.prototype.copy = function () {

		return new Set(this);
	};

	Set.prototype.update = Set.prototype._update = function () {
		for (var _len3 = arguments.length, others = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			others[_key3] = arguments[_key3];
		}

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = others[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var other = _step4.value;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {

					for (var _iterator5 = other[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var key = _step5.value;
						this.add(key);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
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

		return this;
	};

	Set.prototype._intersection_update = function () {

		var intersection = this._intersection.apply(this, arguments);

		this.clear().update(intersection);

		return this;
	};

	Set.prototype.intersection_update = Set._operator(Set.prototype._intersection_update);

	Set.prototype.difference_update = Set.prototype._difference_update = function () {
		for (var _len4 = arguments.length, others = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			others[_key4] = arguments[_key4];
		}

		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {

			for (var _iterator6 = others[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var other = _step6.value;
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {

					for (var _iterator7 = other[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var key = _step7.value;
						this.discard(key);
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		return this;
	};

	Set.prototype.symmetric_difference_update = Set.prototype._symmetric_difference_update = function (other) {
		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {

			for (var _iterator8 = other[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var key = _step8.value;


				if (this.has(key)) this.discard(key);else this.add(key);
			}
		} catch (err) {
			_didIteratorError8 = true;
			_iteratorError8 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion8 && _iterator8.return) {
					_iterator8.return();
				}
			} finally {
				if (_didIteratorError8) {
					throw _iteratorError8;
				}
			}
		}

		return this;
	};

	Set.prototype.add = function (key) {

		this.container.add(key);

		return this;
	};

	Set.prototype.remove = function (key) {

		if (!this.container.delete(key)) throw new KeyError();

		return this;
	};

	Set.prototype.discard = function (key) {

		this.container.delete(key);

		return this;
	};

	Set.prototype.pop = function () {

		if (this.len() === 0) throw new KeyError();

		var key = this.keys().next().value;

		this.discard(key);

		return key;
	};

	Set.prototype.clear = function () {

		this.container.clear();

		return this;
	};

	return Set;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDEtYWR0L1NldC5qcyJdLCJuYW1lcyI6WyJfU2V0IiwiQmFzZVNldCIsIlNldCIsIml0ZXJhYmxlIiwiY29udGFpbmVyIiwid3JhcCIsIkEiLCJfb3BlcmF0b3IiLCJtZXRob2QiLCJhcmdzIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJfaW5jbHVzaW9uIiwiQiIsIl9pc3Byb3BlcnN1YnNldCIsImluY2x1c2lvbiIsInByb3RvdHlwZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5cyIsImxlbiIsInNpemUiLCJoYXMiLCJrZXkiLCJfaXNkaXNqb2ludCIsIm90aGVyIiwiX2NvbW1vbmtleXMiLCJuZXh0IiwiZG9uZSIsImlzZGlzam9pbnQiLCJfaXNlcXVhbCIsIl9pc3N1YnNldCIsImlzZXF1YWwiLCJpc3N1YnNldCIsIl9pc3N1cGVyc2V0IiwiaXNwcm9wZXJzdWJzZXQiLCJpc3N1cGVyc2V0IiwiX2lzcHJvcGVyc3VwZXJzZXQiLCJpc3Byb3BlcnN1cGVyc2V0IiwidW5pb24iLCJfdW5pb24iLCJjb3B5IiwiX3VwZGF0ZSIsIm90aGVycyIsIl9pbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb24iLCJkaWZmZXJlbmNlIiwiX2RpZmZlcmVuY2UiLCJfZGlmZmVyZW5jZV91cGRhdGUiLCJzeW1tZXRyaWNfZGlmZmVyZW5jZSIsIl9zeW1tZXRyaWNfZGlmZmVyZW5jZSIsIl9zeW1tZXRyaWNfZGlmZmVyZW5jZV91cGRhdGUiLCJ1cGRhdGUiLCJhZGQiLCJfaW50ZXJzZWN0aW9uX3VwZGF0ZSIsImNsZWFyIiwiaW50ZXJzZWN0aW9uX3VwZGF0ZSIsImRpZmZlcmVuY2VfdXBkYXRlIiwiZGlzY2FyZCIsInN5bW1ldHJpY19kaWZmZXJlbmNlX3VwZGF0ZSIsInJlbW92ZSIsImRlbGV0ZSIsIktleUVycm9yIiwicG9wIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxJLEdBQUFBLEk7QUFBVCxTQUFTQSxJQUFULENBQWdCQyxP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QUFBO0FBQUE7O0FBUy9ELFNBQU8sSUFBUDtBQUVBLEVBWkQ7O0FBY0F0QixLQUFJZSxTQUFKLENBQWNxQyxHQUFkLEdBQW9CLFVBQVc5QixHQUFYLEVBQWlCOztBQUVwQyxPQUFLcEIsU0FBTCxDQUFla0QsR0FBZixDQUFvQjlCLEdBQXBCOztBQUVBLFNBQU8sSUFBUDtBQUVBLEVBTkQ7O0FBUUF0QixLQUFJZSxTQUFKLENBQWM0QyxNQUFkLEdBQXVCLFVBQVdyQyxHQUFYLEVBQWlCOztBQUV2QyxNQUFLLENBQUMsS0FBS3BCLFNBQUwsQ0FBZTBELE1BQWYsQ0FBdUJ0QyxHQUF2QixDQUFOLEVBQXFDLE1BQU0sSUFBSXVDLFFBQUosRUFBTjs7QUFFckMsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQTdELEtBQUllLFNBQUosQ0FBYzBDLE9BQWQsR0FBd0IsVUFBV25DLEdBQVgsRUFBaUI7O0FBRXhDLE9BQUtwQixTQUFMLENBQWUwRCxNQUFmLENBQXVCdEMsR0FBdkI7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQXRCLEtBQUllLFNBQUosQ0FBYytDLEdBQWQsR0FBb0IsWUFBYTs7QUFFaEMsTUFBSyxLQUFLM0MsR0FBTCxPQUFnQixDQUFyQixFQUF5QixNQUFNLElBQUkwQyxRQUFKLEVBQU47O0FBRXpCLE1BQU12QyxNQUFNLEtBQUtKLElBQUwsR0FBYVEsSUFBYixHQUFxQnFDLEtBQWpDOztBQUVBLE9BQUtOLE9BQUwsQ0FBY25DLEdBQWQ7O0FBRUEsU0FBT0EsR0FBUDtBQUVBLEVBVkQ7O0FBWUF0QixLQUFJZSxTQUFKLENBQWN1QyxLQUFkLEdBQXNCLFlBQWE7O0FBRWxDLE9BQUtwRCxTQUFMLENBQWVvRCxLQUFmOztBQUVBLFNBQU8sSUFBUDtBQUVBLEVBTkQ7O0FBUUEsUUFBT3RELEdBQVA7QUFFQSIsImZpbGUiOiJTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBfU2V0ICggQmFzZVNldCApIHtcblxuXHRjb25zdCBTZXQgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlID0gbnVsbCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IEJhc2VTZXQoIGl0ZXJhYmxlICkgO1xuXG5cdH0gO1xuXG5cdFNldC53cmFwID0gZnVuY3Rpb24gKCBBICkge1xuXG5cdFx0aWYgKCBBIGluc3RhbmNlb2YgU2V0ICkgcmV0dXJuIEEgO1xuXG5cdFx0cmV0dXJuIG5ldyBTZXQoIEEgKSA7XG5cblx0fSA7XG5cblx0U2V0Ll9vcGVyYXRvciA9IGZ1bmN0aW9uICggbWV0aG9kICkge1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICggLi4uYXJncyApIHtcblxuXHRcdFx0cmV0dXJuIG1ldGhvZC5hcHBseSggdGhpcyAsIEFycmF5LmZyb20oIGFyZ3MgLCBTZXQud3JhcCApICkgO1xuXG5cdFx0fSA7XG5cblx0fSA7XG5cblx0U2V0Ll9pbmNsdXNpb24gPSBmdW5jdGlvbiAoIEEgLCBCICkge1xuXG5cdFx0cmV0dXJuIEEuX2lzcHJvcGVyc3Vic2V0KCBCICkgPyAtMSA6IEIuX2lzcHJvcGVyc3Vic2V0KCBBICkgPyAxIDogMCA7XG5cblx0fSA7XG5cblx0U2V0LmluY2x1c2lvbiA9IFNldC5fb3BlcmF0b3IoIFNldC5faW5jbHVzaW9uICkgO1xuXG5cdFNldC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9XG5cdFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0eWllbGQqIHRoaXMuY29udGFpbmVyIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmxlbiA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuc2l6ZSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5oYXMoIGtleSApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLl9pc2Rpc2pvaW50ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9jb21tb25rZXlzKCBvdGhlciApLm5leHQoICkuZG9uZSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc2Rpc2pvaW50ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNkaXNqb2ludCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc2VxdWFsID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9pc3N1YnNldCggb3RoZXIgKSAmJiBvdGhlci5faXNzdWJzZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc2VxdWFsID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNlcXVhbCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3N1YnNldCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRpZiAoIHRoaXMubGVuKCApID4gb3RoZXIubGVuKCApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcyApIGlmICggIW90aGVyLmhhcygga2V5ICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuaXNzdWJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3N1YnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1YnNldCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5faXNzdWJzZXQoIG90aGVyICkgJiYgIXRoaXMuX2lzc3VwZXJzZXQoIG90aGVyICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuaXNwcm9wZXJzdWJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1YnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3N1cGVyc2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiBvdGhlci5faXNzdWJzZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3N1cGVyc2V0ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNzdXBlcnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1cGVyc2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9pc3N1cGVyc2V0KCBvdGhlciApICYmICF0aGlzLl9pc3N1YnNldCggb3RoZXIgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3Byb3BlcnN1cGVyc2V0ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNwcm9wZXJzdXBlcnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLnVuaW9uID1cblx0U2V0LnByb3RvdHlwZS5fdW5pb24gPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvcHkoICkuX3VwZGF0ZSggLi4ub3RoZXJzICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuX2NvbW1vbmtleXMgPSBmdW5jdGlvbiogKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRrZXlzIDogZm9yICggbGV0IGtleSBvZiB0aGlzICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgb3RoZXIgb2Ygb3RoZXJzICkge1xuXG5cdFx0XHRcdGlmICggIW90aGVyLmhhcygga2V5ICkgKSBjb250aW51ZSBrZXlzIDtcblxuXHRcdFx0fVxuXG5cdFx0XHR5aWVsZCBrZXkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cblx0U2V0LnByb3RvdHlwZS5faW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRyZXR1cm4gbmV3IFNldCggdGhpcy5fY29tbW9ua2V5cyggLi4ub3RoZXJzICkgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb24gPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pbnRlcnNlY3Rpb24gKSA7XG5cblx0U2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlID1cblx0U2V0LnByb3RvdHlwZS5fZGlmZmVyZW5jZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29weSggKS5fZGlmZmVyZW5jZV91cGRhdGUoIC4uLm90aGVycyApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLnN5bW1ldHJpY19kaWZmZXJlbmNlID1cblx0U2V0LnByb3RvdHlwZS5fc3ltbWV0cmljX2RpZmZlcmVuY2UgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29weSggKS5fc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlKCBvdGhlciApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIG5ldyBTZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS51cGRhdGUgPVxuXHRTZXQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdGZvciAoIGxldCBvdGhlciBvZiBvdGhlcnMgKSB7XG5cblx0XHRcdGZvciAoIGxldCBrZXkgb2Ygb3RoZXIgKSB0aGlzLmFkZCgga2V5ICkgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuX2ludGVyc2VjdGlvbl91cGRhdGUgPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHRoaXMuX2ludGVyc2VjdGlvbiggLi4ub3RoZXJzICkgO1xuXG5cdFx0dGhpcy5jbGVhciggKS51cGRhdGUoIGludGVyc2VjdGlvbiApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbl91cGRhdGUgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pbnRlcnNlY3Rpb25fdXBkYXRlICkgO1xuXG5cdFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZV91cGRhdGUgPVxuXHRTZXQucHJvdG90eXBlLl9kaWZmZXJlbmNlX3VwZGF0ZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0Zm9yICggbGV0IG90aGVyIG9mIG90aGVycyApIHtcblxuXHRcdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlciApIHRoaXMuZGlzY2FyZCgga2V5ICkgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlID1cblx0U2V0LnByb3RvdHlwZS5fc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2Ygb3RoZXIgKSB7XG5cblx0XHRcdGlmICggdGhpcy5oYXMoIGtleSApICkgdGhpcy5kaXNjYXJkKCBrZXkgKSA7XG5cdFx0XHRlbHNlIHRoaXMuYWRkKCBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFkZCgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoICF0aGlzLmNvbnRhaW5lci5kZWxldGUoIGtleSApICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmRpc2NhcmQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmRlbGV0ZSgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPT09IDAgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5rZXlzKCApLm5leHQoICkudmFsdWUgO1xuXG5cdFx0dGhpcy5kaXNjYXJkKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4ga2V5IDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNsZWFyKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gU2V0IDtcblxufVxuIl19