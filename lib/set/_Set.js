'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _Set;

var _error = require('../error');

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
						return _context.delegateYield(this.container, 't0', 1);

					case 1:
					case 'end':
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

						return _context2.abrupt('continue', 35);

					case 16:
						_iteratorNormalCompletion3 = true;
						_context2.next = 12;
						break;

					case 19:
						_context2.next = 25;
						break;

					case 21:
						_context2.prev = 21;
						_context2.t0 = _context2['catch'](10);
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
						_context2.t1 = _context2['catch'](3);
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
					case 'end':
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

		if (!this.container.delete(key)) throw new _error.KeyError();

		return this;
	};

	Set.prototype.discard = function (key) {

		this.container.delete(key);

		return this;
	};

	Set.prototype.pop = function () {

		if (this.len() === 0) throw new _error.KeyError();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXQvX1NldC5qcyJdLCJuYW1lcyI6WyJfU2V0IiwiQmFzZVNldCIsIlNldCIsIml0ZXJhYmxlIiwiY29udGFpbmVyIiwid3JhcCIsIkEiLCJfb3BlcmF0b3IiLCJtZXRob2QiLCJhcmdzIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJfaW5jbHVzaW9uIiwiQiIsIl9pc3Byb3BlcnN1YnNldCIsImluY2x1c2lvbiIsInByb3RvdHlwZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5cyIsImxlbiIsInNpemUiLCJoYXMiLCJrZXkiLCJfaXNkaXNqb2ludCIsIm90aGVyIiwiX2NvbW1vbmtleXMiLCJuZXh0IiwiZG9uZSIsImlzZGlzam9pbnQiLCJfaXNlcXVhbCIsIl9pc3N1YnNldCIsImlzZXF1YWwiLCJpc3N1YnNldCIsIl9pc3N1cGVyc2V0IiwiaXNwcm9wZXJzdWJzZXQiLCJpc3N1cGVyc2V0IiwiX2lzcHJvcGVyc3VwZXJzZXQiLCJpc3Byb3BlcnN1cGVyc2V0IiwidW5pb24iLCJfdW5pb24iLCJjb3B5IiwiX3VwZGF0ZSIsIm90aGVycyIsIl9pbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb24iLCJkaWZmZXJlbmNlIiwiX2RpZmZlcmVuY2UiLCJfZGlmZmVyZW5jZV91cGRhdGUiLCJzeW1tZXRyaWNfZGlmZmVyZW5jZSIsIl9zeW1tZXRyaWNfZGlmZmVyZW5jZSIsIl9zeW1tZXRyaWNfZGlmZmVyZW5jZV91cGRhdGUiLCJ1cGRhdGUiLCJhZGQiLCJfaW50ZXJzZWN0aW9uX3VwZGF0ZSIsImNsZWFyIiwiaW50ZXJzZWN0aW9uX3VwZGF0ZSIsImRpZmZlcmVuY2VfdXBkYXRlIiwiZGlzY2FyZCIsInN5bW1ldHJpY19kaWZmZXJlbmNlX3VwZGF0ZSIsInJlbW92ZSIsImRlbGV0ZSIsInBvcCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLEk7O0FBRnhCOztBQUVlLFNBQVNBLElBQVQsQ0FBZ0JDLE9BQWhCLEVBQTBCOztB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L0QsU0FBTyxJQUFQO0FBRUEsRUFaRDs7QUFjQXRCLEtBQUllLFNBQUosQ0FBY3FDLEdBQWQsR0FBb0IsVUFBVzlCLEdBQVgsRUFBaUI7O0FBRXBDLE9BQUtwQixTQUFMLENBQWVrRCxHQUFmLENBQW9COUIsR0FBcEI7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQXRCLEtBQUllLFNBQUosQ0FBYzRDLE1BQWQsR0FBdUIsVUFBV3JDLEdBQVgsRUFBaUI7O0FBRXZDLE1BQUssQ0FBQyxLQUFLcEIsU0FBTCxDQUFlMEQsTUFBZixDQUF1QnRDLEdBQXZCLENBQU4sRUFBcUMsTUFBTSxxQkFBTjs7QUFFckMsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQXRCLEtBQUllLFNBQUosQ0FBYzBDLE9BQWQsR0FBd0IsVUFBV25DLEdBQVgsRUFBaUI7O0FBRXhDLE9BQUtwQixTQUFMLENBQWUwRCxNQUFmLENBQXVCdEMsR0FBdkI7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQXRCLEtBQUllLFNBQUosQ0FBYzhDLEdBQWQsR0FBb0IsWUFBYTs7QUFFaEMsTUFBSyxLQUFLMUMsR0FBTCxPQUFnQixDQUFyQixFQUF5QixNQUFNLHFCQUFOOztBQUV6QixNQUFNRyxNQUFNLEtBQUtKLElBQUwsR0FBYVEsSUFBYixHQUFxQm9DLEtBQWpDOztBQUVBLE9BQUtMLE9BQUwsQ0FBY25DLEdBQWQ7O0FBRUEsU0FBT0EsR0FBUDtBQUVBLEVBVkQ7O0FBWUF0QixLQUFJZSxTQUFKLENBQWN1QyxLQUFkLEdBQXNCLFlBQWE7O0FBRWxDLE9BQUtwRCxTQUFMLENBQWVvRCxLQUFmOztBQUVBLFNBQU8sSUFBUDtBQUVBLEVBTkQ7O0FBUUEsUUFBT3RELEdBQVA7QUFFQSIsImZpbGUiOiJfU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5RXJyb3IgfSBmcm9tICcuLi9lcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfU2V0ICggQmFzZVNldCApIHtcblxuXHRjb25zdCBTZXQgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlID0gbnVsbCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IEJhc2VTZXQoIGl0ZXJhYmxlICkgO1xuXG5cdH0gO1xuXG5cdFNldC53cmFwID0gZnVuY3Rpb24gKCBBICkge1xuXG5cdFx0aWYgKCBBIGluc3RhbmNlb2YgU2V0ICkgcmV0dXJuIEEgO1xuXG5cdFx0cmV0dXJuIG5ldyBTZXQoIEEgKSA7XG5cblx0fSA7XG5cblx0U2V0Ll9vcGVyYXRvciA9IGZ1bmN0aW9uICggbWV0aG9kICkge1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICggLi4uYXJncyApIHtcblxuXHRcdFx0cmV0dXJuIG1ldGhvZC5hcHBseSggdGhpcyAsIEFycmF5LmZyb20oIGFyZ3MgLCBTZXQud3JhcCApICkgO1xuXG5cdFx0fSA7XG5cblx0fSA7XG5cblx0U2V0Ll9pbmNsdXNpb24gPSBmdW5jdGlvbiAoIEEgLCBCICkge1xuXG5cdFx0cmV0dXJuIEEuX2lzcHJvcGVyc3Vic2V0KCBCICkgPyAtMSA6IEIuX2lzcHJvcGVyc3Vic2V0KCBBICkgPyAxIDogMCA7XG5cblx0fSA7XG5cblx0U2V0LmluY2x1c2lvbiA9IFNldC5fb3BlcmF0b3IoIFNldC5faW5jbHVzaW9uICkgO1xuXG5cdFNldC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9XG5cdFNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0eWllbGQqIHRoaXMuY29udGFpbmVyIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmxlbiA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuc2l6ZSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5oYXMoIGtleSApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLl9pc2Rpc2pvaW50ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9jb21tb25rZXlzKCBvdGhlciApLm5leHQoICkuZG9uZSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc2Rpc2pvaW50ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNkaXNqb2ludCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc2VxdWFsID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9pc3N1YnNldCggb3RoZXIgKSAmJiBvdGhlci5faXNzdWJzZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc2VxdWFsID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNlcXVhbCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3N1YnNldCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRpZiAoIHRoaXMubGVuKCApID4gb3RoZXIubGVuKCApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcyApIGlmICggIW90aGVyLmhhcygga2V5ICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuaXNzdWJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3N1YnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1YnNldCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5faXNzdWJzZXQoIG90aGVyICkgJiYgIXRoaXMuX2lzc3VwZXJzZXQoIG90aGVyICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuaXNwcm9wZXJzdWJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1YnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3N1cGVyc2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiBvdGhlci5faXNzdWJzZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3N1cGVyc2V0ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNzdXBlcnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1cGVyc2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9pc3N1cGVyc2V0KCBvdGhlciApICYmICF0aGlzLl9pc3N1YnNldCggb3RoZXIgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3Byb3BlcnN1cGVyc2V0ID0gU2V0Ll9vcGVyYXRvciggU2V0LnByb3RvdHlwZS5faXNwcm9wZXJzdXBlcnNldCApIDtcblxuXHRTZXQucHJvdG90eXBlLnVuaW9uID1cblx0U2V0LnByb3RvdHlwZS5fdW5pb24gPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvcHkoICkuX3VwZGF0ZSggLi4ub3RoZXJzICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuX2NvbW1vbmtleXMgPSBmdW5jdGlvbiogKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRrZXlzIDogZm9yICggbGV0IGtleSBvZiB0aGlzICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgb3RoZXIgb2Ygb3RoZXJzICkge1xuXG5cdFx0XHRcdGlmICggIW90aGVyLmhhcygga2V5ICkgKSBjb250aW51ZSBrZXlzIDtcblxuXHRcdFx0fVxuXG5cdFx0XHR5aWVsZCBrZXkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cblx0U2V0LnByb3RvdHlwZS5faW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRyZXR1cm4gbmV3IFNldCggdGhpcy5fY29tbW9ua2V5cyggLi4ub3RoZXJzICkgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb24gPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pbnRlcnNlY3Rpb24gKSA7XG5cblx0U2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlID1cblx0U2V0LnByb3RvdHlwZS5fZGlmZmVyZW5jZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29weSggKS5fZGlmZmVyZW5jZV91cGRhdGUoIC4uLm90aGVycyApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLnN5bW1ldHJpY19kaWZmZXJlbmNlID1cblx0U2V0LnByb3RvdHlwZS5fc3ltbWV0cmljX2RpZmZlcmVuY2UgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29weSggKS5fc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlKCBvdGhlciApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0cmV0dXJuIG5ldyBTZXQoIHRoaXMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS51cGRhdGUgPVxuXHRTZXQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdGZvciAoIGxldCBvdGhlciBvZiBvdGhlcnMgKSB7XG5cblx0XHRcdGZvciAoIGxldCBrZXkgb2Ygb3RoZXIgKSB0aGlzLmFkZCgga2V5ICkgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuX2ludGVyc2VjdGlvbl91cGRhdGUgPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHRoaXMuX2ludGVyc2VjdGlvbiggLi4ub3RoZXJzICkgO1xuXG5cdFx0dGhpcy5jbGVhciggKS51cGRhdGUoIGludGVyc2VjdGlvbiApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbl91cGRhdGUgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pbnRlcnNlY3Rpb25fdXBkYXRlICkgO1xuXG5cdFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZV91cGRhdGUgPVxuXHRTZXQucHJvdG90eXBlLl9kaWZmZXJlbmNlX3VwZGF0ZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0Zm9yICggbGV0IG90aGVyIG9mIG90aGVycyApIHtcblxuXHRcdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlciApIHRoaXMuZGlzY2FyZCgga2V5ICkgO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlID1cblx0U2V0LnByb3RvdHlwZS5fc3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2Ygb3RoZXIgKSB7XG5cblx0XHRcdGlmICggdGhpcy5oYXMoIGtleSApICkgdGhpcy5kaXNjYXJkKCBrZXkgKSA7XG5cdFx0XHRlbHNlIHRoaXMuYWRkKCBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFkZCgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoICF0aGlzLmNvbnRhaW5lci5kZWxldGUoIGtleSApICkgdGhyb3cgbmV3IEtleUVycm9yKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmRpc2NhcmQgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmRlbGV0ZSgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPT09IDAgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5rZXlzKCApLm5leHQoICkudmFsdWUgO1xuXG5cdFx0dGhpcy5kaXNjYXJkKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4ga2V5IDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHRoaXMuY29udGFpbmVyLmNsZWFyKCApIDtcblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gU2V0IDtcblxufVxuIl19