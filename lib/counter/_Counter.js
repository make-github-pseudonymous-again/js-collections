'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _Counter;

var _error = require('../error');

var _heapq = require('../heapq');

var _counts = require('./counts');

var _counts2 = _interopRequireDefault(_counts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _Counter(Map, Dict) {

	var Counter = function Counter(iterable) {

		this.container = new Map();

		if (iterable !== null) this.update(iterable);
	};

	Counter.prototype = new Dict();

	Counter.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		throw new _error.NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.");
	};

	Counter.prototype.get = function (key) {

		if (this.has(key)) return this.container.get(key);

		return 0;
	};

	Counter.prototype.elements = regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, key, count;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 3;
						_iterator = this[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context.next = 15;
							break;
						}

						_step$value = _slicedToArray(_step.value, 2), key = _step$value[0], count = _step$value[1];

					case 7:
						if (!(count-- > 0)) {
							_context.next = 12;
							break;
						}

						_context.next = 10;
						return key;

					case 10:
						_context.next = 7;
						break;

					case 12:
						_iteratorNormalCompletion = true;
						_context.next = 5;
						break;

					case 15:
						_context.next = 21;
						break;

					case 17:
						_context.prev = 17;
						_context.t0 = _context['catch'](3);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 21:
						_context.prev = 21;
						_context.prev = 22;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 24:
						_context.prev = 24;

						if (!_didIteratorError) {
							_context.next = 27;
							break;
						}

						throw _iteratorError;

					case 27:
						return _context.finish(24);

					case 28:
						return _context.finish(21);

					case 29:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 17, 21, 29], [22,, 24, 28]]);
	});

	Counter.prototype.increment = function (key) {
		var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


		this.set(key, this.get(key) + amount);
	};

	Counter.prototype.decrement = function (key) {
		var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


		this.increment(key, -amount);
	};

	Counter.prototype.update = function (iterable) {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {

			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var key = _step2.value;
				this.increment(key);
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
	};

	Counter.prototype.add = function (other) {
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {

			for (var _iterator3 = other[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _step3$value = _slicedToArray(_step3.value, 2),
				    key = _step3$value[0],
				    count = _step3$value[1];

				this.increment(key, count);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	};

	Counter.prototype.subtract = function (other) {
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = other[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _step4$value = _slicedToArray(_step4.value, 2),
				    key = _step4$value[0],
				    count = _step4$value[1];

				this.decrement(key, count);
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

	Counter.prototype.most_common = function () {
		var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.len();


		return (0, _heapq.nlargest)(_counts2.default, n, this);
	};

	return Counter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3VudGVyL19Db3VudGVyLmpzIl0sIm5hbWVzIjpbIl9Db3VudGVyIiwiTWFwIiwiRGljdCIsIkNvdW50ZXIiLCJpdGVyYWJsZSIsImNvbnRhaW5lciIsInVwZGF0ZSIsInByb3RvdHlwZSIsImZyb21rZXlzIiwic2VxIiwidmFsdWUiLCJnZXQiLCJrZXkiLCJoYXMiLCJlbGVtZW50cyIsImNvdW50IiwiaW5jcmVtZW50IiwiYW1vdW50Iiwic2V0IiwiZGVjcmVtZW50IiwiYWRkIiwib3RoZXIiLCJzdWJ0cmFjdCIsIm1vc3RfY29tbW9uIiwibiIsImxlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBS3dCQSxROztBQUx4Qjs7QUFDQTs7QUFFQTs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFvQkMsR0FBcEIsRUFBMEJDLElBQTFCLEVBQWlDOztBQUUvQyxLQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBV0MsUUFBWCxFQUFzQjs7QUFFckMsT0FBS0MsU0FBTCxHQUFpQixJQUFJSixHQUFKLEVBQWpCOztBQUVBLE1BQUtHLGFBQWEsSUFBbEIsRUFBeUIsS0FBS0UsTUFBTCxDQUFhRixRQUFiO0FBRXpCLEVBTkQ7O0FBUUFELFNBQVFJLFNBQVIsR0FBb0IsSUFBSUwsSUFBSixFQUFwQjs7QUFFQUMsU0FBUUssUUFBUixHQUFtQixVQUFXQyxHQUFYLEVBQWdDO0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxJQUFPOzs7QUFFbEQsUUFBTSwrQkFBeUIsa0VBQXpCLENBQU47QUFFQSxFQUpEOztBQU1BUCxTQUFRSSxTQUFSLENBQWtCSSxHQUFsQixHQUF3QixVQUFXQyxHQUFYLEVBQWlCOztBQUV4QyxNQUFLLEtBQUtDLEdBQUwsQ0FBVUQsR0FBVixDQUFMLEVBQXVCLE9BQU8sS0FBS1AsU0FBTCxDQUFlTSxHQUFmLENBQW9CQyxHQUFwQixDQUFQOztBQUV2QixTQUFPLENBQVA7QUFFQSxFQU5EOztBQVFBVCxTQUFRSSxTQUFSLENBQWtCTyxRQUFsQiwyQkFBNkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUMsSUFGRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9EQUVoQkYsR0FGZ0IsbUJBRVZHLEtBRlU7O0FBQUE7QUFBQSxZQUluQkEsVUFBVSxDQUpTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsYUFJQ0gsR0FKRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUE3Qjs7QUFVQVQsU0FBUUksU0FBUixDQUFrQlMsU0FBbEIsR0FBOEIsVUFBV0osR0FBWCxFQUE4QjtBQUFBLE1BQWJLLE1BQWEsdUVBQUosQ0FBSTs7O0FBRTNELE9BQUtDLEdBQUwsQ0FBVU4sR0FBVixFQUFnQixLQUFLRCxHQUFMLENBQVVDLEdBQVYsSUFBa0JLLE1BQWxDO0FBRUEsRUFKRDs7QUFNQWQsU0FBUUksU0FBUixDQUFrQlksU0FBbEIsR0FBOEIsVUFBV1AsR0FBWCxFQUE4QjtBQUFBLE1BQWJLLE1BQWEsdUVBQUosQ0FBSTs7O0FBRTNELE9BQUtELFNBQUwsQ0FBZ0JKLEdBQWhCLEVBQXNCLENBQUNLLE1BQXZCO0FBRUEsRUFKRDs7QUFNQWQsU0FBUUksU0FBUixDQUFrQkQsTUFBbEIsR0FBMkIsVUFBV0YsUUFBWCxFQUFzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFaEQseUJBQWlCQSxRQUFqQjtBQUFBLFFBQVVRLEdBQVY7QUFBNEIsU0FBS0ksU0FBTCxDQUFnQkosR0FBaEI7QUFBNUI7QUFGZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUloRCxFQUpEOztBQU1BVCxTQUFRSSxTQUFSLENBQWtCYSxHQUFsQixHQUF3QixVQUFXQyxLQUFYLEVBQW1CO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUUxQyx5QkFBNkJBLEtBQTdCO0FBQUE7QUFBQSxRQUFZVCxHQUFaO0FBQUEsUUFBa0JHLEtBQWxCOztBQUFxQyxTQUFLQyxTQUFMLENBQWdCSixHQUFoQixFQUFzQkcsS0FBdEI7QUFBckM7QUFGMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUkxQyxFQUpEOztBQU1BWixTQUFRSSxTQUFSLENBQWtCZSxRQUFsQixHQUE2QixVQUFXRCxLQUFYLEVBQW1CO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUUvQyx5QkFBNkJBLEtBQTdCO0FBQUE7QUFBQSxRQUFZVCxHQUFaO0FBQUEsUUFBa0JHLEtBQWxCOztBQUFxQyxTQUFLSSxTQUFMLENBQWdCUCxHQUFoQixFQUFzQkcsS0FBdEI7QUFBckM7QUFGK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUkvQyxFQUpEOztBQU1BWixTQUFRSSxTQUFSLENBQWtCZ0IsV0FBbEIsR0FBZ0MsWUFBNkI7QUFBQSxNQUFsQkMsQ0FBa0IsdUVBQWQsS0FBS0MsR0FBTCxFQUFjOzs7QUFFNUQsU0FBTyx1Q0FBbUJELENBQW5CLEVBQXVCLElBQXZCLENBQVA7QUFFQSxFQUpEOztBQU1BLFFBQU9yQixPQUFQO0FBRUEiLCJmaWxlIjoiX0NvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnLi4vZXJyb3InIDtcbmltcG9ydCB7IG5sYXJnZXN0IH0gZnJvbSAnLi4vaGVhcHEnIDtcblxuaW1wb3J0IGNvdW50cyBmcm9tICcuL2NvdW50cycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQ291bnRlciAoIE1hcCAsIERpY3QgKSB7XG5cblx0Y29uc3QgQ291bnRlciA9IGZ1bmN0aW9uICggaXRlcmFibGUgKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBNYXAoICkgO1xuXG5cdFx0aWYgKCBpdGVyYWJsZSAhPT0gbnVsbCApIHRoaXMudXBkYXRlKCBpdGVyYWJsZSApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZSA9IG5ldyBEaWN0KCApIDtcblxuXHRDb3VudGVyLmZyb21rZXlzID0gZnVuY3Rpb24gKCBzZXEgLCB2YWx1ZSA9IG51bGwgKSB7XG5cblx0XHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJDb3VudGVyLmZyb21rZXlzKCkgaXMgdW5kZWZpbmVkLiAgVXNlIENvdW50ZXIoaXRlcmFibGUpIGluc3RlYWQuXCIgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRpZiAoIHRoaXMuaGFzKCBrZXkgKSApIHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXQoIGtleSApIDtcblxuXHRcdHJldHVybiAwIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5lbGVtZW50cyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgY291bnQgXSBvZiB0aGlzICkge1xuXG5cdFx0XHR3aGlsZSAoIGNvdW50IC0tPiAwICkgeWllbGQga2V5IDtcblxuXHRcdH1cblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5pbmNyZW1lbnQgPSBmdW5jdGlvbiAoIGtleSAsIGFtb3VudCA9IDEgKSB7XG5cblx0XHR0aGlzLnNldCgga2V5ICwgdGhpcy5nZXQoIGtleSApICsgYW1vdW50ICkgO1xuXG5cdH0gO1xuXG5cdENvdW50ZXIucHJvdG90eXBlLmRlY3JlbWVudCA9IGZ1bmN0aW9uICgga2V5ICwgYW1vdW50ID0gMSApIHtcblxuXHRcdHRoaXMuaW5jcmVtZW50KCBrZXkgLCAtYW1vdW50ICkgO1xuXG5cdH0gO1xuXG5cdENvdW50ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICggaXRlcmFibGUgKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIGl0ZXJhYmxlICkgdGhpcy5pbmNyZW1lbnQoIGtleSApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgY291bnQgXSBvZiBvdGhlciApIHRoaXMuaW5jcmVtZW50KCBrZXkgLCBjb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRmb3IgKCBsZXQgWyBrZXkgLCBjb3VudCBdIG9mIG90aGVyICkgdGhpcy5kZWNyZW1lbnQoIGtleSAsIGNvdW50ICkgO1xuXG5cdH0gO1xuXG5cdENvdW50ZXIucHJvdG90eXBlLm1vc3RfY29tbW9uID0gZnVuY3Rpb24gKCBuID0gdGhpcy5sZW4oICkgKSB7XG5cblx0XHRyZXR1cm4gbmxhcmdlc3QoIGNvdW50cyAsIG4gLCB0aGlzICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBDb3VudGVyIDtcblxufVxuIl19