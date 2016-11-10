"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._Counter = _Counter;
function _Counter(Map, Dict) {

	var Counter = function Counter(iterable) {

		this.container = new Map();

		if (iterable !== null) this.update(iterable);
	};

	Counter.prototype = new Dict();

	Counter.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		throw new NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.");
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
						_context.t0 = _context["catch"](3);
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
					case "end":
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


		return heapq.nlargest(counts, n, this);
	};

	return Counter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDEtYWR0L0NvdW50ZXIuanMiXSwibmFtZXMiOlsiX0NvdW50ZXIiLCJNYXAiLCJEaWN0IiwiQ291bnRlciIsIml0ZXJhYmxlIiwiY29udGFpbmVyIiwidXBkYXRlIiwicHJvdG90eXBlIiwiZnJvbWtleXMiLCJzZXEiLCJ2YWx1ZSIsIk5vdEltcGxlbWVudGVkRXJyb3IiLCJnZXQiLCJrZXkiLCJoYXMiLCJlbGVtZW50cyIsImNvdW50IiwiaW5jcmVtZW50IiwiYW1vdW50Iiwic2V0IiwiZGVjcmVtZW50IiwiYWRkIiwib3RoZXIiLCJzdWJ0cmFjdCIsIm1vc3RfY29tbW9uIiwibiIsImxlbiIsImhlYXBxIiwibmxhcmdlc3QiLCJjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxRLEdBQUFBLFE7QUFBVCxTQUFTQSxRQUFULENBQW9CQyxHQUFwQixFQUEwQkMsSUFBMUIsRUFBaUM7O0FBRXZDLEtBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFXQyxRQUFYLEVBQXNCOztBQUVyQyxPQUFLQyxTQUFMLEdBQWlCLElBQUlKLEdBQUosRUFBakI7O0FBRUEsTUFBS0csYUFBYSxJQUFsQixFQUF5QixLQUFLRSxNQUFMLENBQWFGLFFBQWI7QUFFekIsRUFORDs7QUFRQUQsU0FBUUksU0FBUixHQUFvQixJQUFJTCxJQUFKLEVBQXBCOztBQUVBQyxTQUFRSyxRQUFSLEdBQW1CLFVBQVdDLEdBQVgsRUFBZ0M7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLElBQU87OztBQUVsRCxRQUFNLElBQUlDLG1CQUFKLENBQXlCLGtFQUF6QixDQUFOO0FBRUEsRUFKRDs7QUFNQVIsU0FBUUksU0FBUixDQUFrQkssR0FBbEIsR0FBd0IsVUFBV0MsR0FBWCxFQUFpQjs7QUFFeEMsTUFBSyxLQUFLQyxHQUFMLENBQVVELEdBQVYsQ0FBTCxFQUF1QixPQUFPLEtBQUtSLFNBQUwsQ0FBZU8sR0FBZixDQUFvQkMsR0FBcEIsQ0FBUDs7QUFFdkIsU0FBTyxDQUFQO0FBRUEsRUFORDs7QUFRQVYsU0FBUUksU0FBUixDQUFrQlEsUUFBbEIsMkJBQTZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVDLElBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvREFFaEJGLEdBRmdCLG1CQUVWRyxLQUZVOztBQUFBO0FBQUEsWUFJbkJBLFVBQVUsQ0FKUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGFBSUNILEdBSkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBN0I7O0FBVUFWLFNBQVFJLFNBQVIsQ0FBa0JVLFNBQWxCLEdBQThCLFVBQVdKLEdBQVgsRUFBOEI7QUFBQSxNQUFiSyxNQUFhLHVFQUFKLENBQUk7OztBQUUzRCxPQUFLQyxHQUFMLENBQVVOLEdBQVYsRUFBZ0IsS0FBS0QsR0FBTCxDQUFVQyxHQUFWLElBQWtCSyxNQUFsQztBQUVBLEVBSkQ7O0FBTUFmLFNBQVFJLFNBQVIsQ0FBa0JhLFNBQWxCLEdBQThCLFVBQVdQLEdBQVgsRUFBOEI7QUFBQSxNQUFiSyxNQUFhLHVFQUFKLENBQUk7OztBQUUzRCxPQUFLRCxTQUFMLENBQWdCSixHQUFoQixFQUFzQixDQUFDSyxNQUF2QjtBQUVBLEVBSkQ7O0FBTUFmLFNBQVFJLFNBQVIsQ0FBa0JELE1BQWxCLEdBQTJCLFVBQVdGLFFBQVgsRUFBc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWhELHlCQUFpQkEsUUFBakI7QUFBQSxRQUFVUyxHQUFWO0FBQTRCLFNBQUtJLFNBQUwsQ0FBZ0JKLEdBQWhCO0FBQTVCO0FBRmdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJaEQsRUFKRDs7QUFNQVYsU0FBUUksU0FBUixDQUFrQmMsR0FBbEIsR0FBd0IsVUFBV0MsS0FBWCxFQUFtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFMUMseUJBQTZCQSxLQUE3QjtBQUFBO0FBQUEsUUFBWVQsR0FBWjtBQUFBLFFBQWtCRyxLQUFsQjs7QUFBcUMsU0FBS0MsU0FBTCxDQUFnQkosR0FBaEIsRUFBc0JHLEtBQXRCO0FBQXJDO0FBRjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJMUMsRUFKRDs7QUFNQWIsU0FBUUksU0FBUixDQUFrQmdCLFFBQWxCLEdBQTZCLFVBQVdELEtBQVgsRUFBbUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRS9DLHlCQUE2QkEsS0FBN0I7QUFBQTtBQUFBLFFBQVlULEdBQVo7QUFBQSxRQUFrQkcsS0FBbEI7O0FBQXFDLFNBQUtJLFNBQUwsQ0FBZ0JQLEdBQWhCLEVBQXNCRyxLQUF0QjtBQUFyQztBQUYrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSS9DLEVBSkQ7O0FBTUFiLFNBQVFJLFNBQVIsQ0FBa0JpQixXQUFsQixHQUFnQyxZQUE2QjtBQUFBLE1BQWxCQyxDQUFrQix1RUFBZCxLQUFLQyxHQUFMLEVBQWM7OztBQUU1RCxTQUFPQyxNQUFNQyxRQUFOLENBQWdCQyxNQUFoQixFQUF5QkosQ0FBekIsRUFBNkIsSUFBN0IsQ0FBUDtBQUVBLEVBSkQ7O0FBTUEsUUFBT3RCLE9BQVA7QUFFQSIsImZpbGUiOiJDb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX0NvdW50ZXIgKCBNYXAgLCBEaWN0ICkge1xuXG5cdGNvbnN0IENvdW50ZXIgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCApIDtcblxuXHRcdGlmICggaXRlcmFibGUgIT09IG51bGwgKSB0aGlzLnVwZGF0ZSggaXRlcmFibGUgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUgPSBuZXcgRGljdCggKSA7XG5cblx0Q291bnRlci5mcm9ta2V5cyA9IGZ1bmN0aW9uICggc2VxICwgdmFsdWUgPSBudWxsICkge1xuXG5cdFx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiQ291bnRlci5mcm9ta2V5cygpIGlzIHVuZGVmaW5lZC4gIFVzZSBDb3VudGVyKGl0ZXJhYmxlKSBpbnN0ZWFkLlwiICkgO1xuXG5cdH0gO1xuXG5cdENvdW50ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0aWYgKCB0aGlzLmhhcygga2V5ICkgKSByZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0KCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gMCA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuZWxlbWVudHMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIGNvdW50IF0gb2YgdGhpcyApIHtcblxuXHRcdFx0d2hpbGUgKCBjb3VudCAtLT4gMCApIHlpZWxkIGtleSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuaW5jcmVtZW50ID0gZnVuY3Rpb24gKCBrZXkgLCBhbW91bnQgPSAxICkge1xuXG5cdFx0dGhpcy5zZXQoIGtleSAsIHRoaXMuZ2V0KCBrZXkgKSArIGFtb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5kZWNyZW1lbnQgPSBmdW5jdGlvbiAoIGtleSAsIGFtb3VudCA9IDEgKSB7XG5cblx0XHR0aGlzLmluY3JlbWVudCgga2V5ICwgLWFtb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBpdGVyYWJsZSApIHRoaXMuaW5jcmVtZW50KCBrZXkgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIGNvdW50IF0gb2Ygb3RoZXIgKSB0aGlzLmluY3JlbWVudCgga2V5ICwgY291bnQgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgY291bnQgXSBvZiBvdGhlciApIHRoaXMuZGVjcmVtZW50KCBrZXkgLCBjb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5tb3N0X2NvbW1vbiA9IGZ1bmN0aW9uICggbiA9IHRoaXMubGVuKCApICkge1xuXG5cdFx0cmV0dXJuIGhlYXBxLm5sYXJnZXN0KCBjb3VudHMgLCBuICwgdGhpcyApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gQ291bnRlciA7XG5cbn1cbiJdfQ==