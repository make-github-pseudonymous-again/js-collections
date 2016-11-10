"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Deque;

var _error = require("../../error");

function Deque() {}

Deque.prototype.len = function () {

	throw new _error.NotImplementedError("len");
};

Deque.prototype.capacity = function () {

	throw new _error.NotImplementedError("capcity");
};

Deque.prototype.empty = function () {

	return this.len() === 0;
};

Deque.prototype[Symbol.iterator] = function () {

	return this.values();
};

Deque.prototype.values = function () {

	throw new _error.NotImplementedError("values");
};

Deque.prototype.append = function (x) {

	throw new _error.NotImplementedError("append");
};

Deque.prototype.appendleft = function (x) {

	throw new _error.NotImplementedError("appendleft");
};

Deque.prototype.clear = function () {

	throw new _error.NotImplementedError("clear");
};

Deque.prototype.copy = function () {

	throw new _error.NotImplementedError("copy");
};

Deque.prototype.count = function (x) {

	var c = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;
			if (element === x) ++c;
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

	return c;
};

Deque.prototype.extend = function (iterable) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {

		for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var x = _step2.value;
			this.append(x);
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

	return this;
};

Deque.prototype.extendleft = function (iterable) {
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {

		for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var x = _step3.value;
			this.appendleft(x);
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

	return this;
};

Deque.prototype._checkbounds = function (i) {

	if (i < 0 || i >= this.len()) throw new _error.IndexError(i);
};

Deque.prototype._where = function (i) {

	throw new _error.NotImplementedError("_where");
};

Deque.prototype.get = function (i) {
	var _where = this._where(i),
	    _where2 = _slicedToArray(_where, 2),
	    container = _where2[0],
	    index = _where2[1];

	return container[index];
};

Deque.prototype.set = function (i, value) {
	var _where3 = this._where(i),
	    _where4 = _slicedToArray(_where3, 2),
	    container = _where4[0],
	    index = _where4[1];

	container[index] = value;

	return this;
};

Deque.prototype._range = regeneratorRuntime.mark(function _callee(start, stop) {
	var i;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					i = start;

				case 1:
					if (!(i < stop)) {
						_context.next = 7;
						break;
					}

					_context.next = 4;
					return [i, this.get(i)];

				case 4:
					++i;
					_context.next = 1;
					break;

				case 7:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, this);
});

Deque.prototype.index = function (x) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.len();
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {

		for (var _iterator4 = this._range(start, stop)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _step4$value = _slicedToArray(_step4.value, 2),
			    i = _step4$value[0],
			    element = _step4$value[1];

			if (element === x) return i;
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

	throw new _error.ValueError("not found");
};

Deque.prototype.pop = function () {

	throw new _error.NotImplementedError("pop");
};

Deque.prototype.popleft = function () {

	throw new _error.NotImplementedError("popleft");
};

Deque.prototype.insert = function (i, x) {

	this._checkbounds(i);

	this.append(x);

	var j = this.len() - 1;

	for (; i < j; --j) {

		var a = this.get(j);
		this.set(j, this.get(j - 1));
		this.set(j - 1, a);
	}

	return this;
};

Deque.prototype.delete = function (i) {

	this._checkbounds(i);

	var len = this.len() - 1;

	for (; i < len; ++i) {
		this.set(i, this.get(i + 1));
	}this.pop();

	return this;
};

Deque.prototype.remove = function (value) {

	var i = this.index(value);

	this.delete(i);

	return this;
};

Deque.prototype.reverse = function () {

	for (var i = 0, j = this.len(); i < --j; ++i) {

		var a = this.get(i);
		var b = this.get(j);
		this.set(i, b);
		this.set(j, a);
	}

	return this;
};

Deque.prototype.rotate = function (n) {

	if (n > 0) {

		while (n-- > 0) {
			this.appendleft(this.pop());
		}
	} else if (n < 0) {

		while (n++ < 0) {
			this.append(this.popleft());
		}
	}

	return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9jb3JlL0RlcXVlLmpzIl0sIm5hbWVzIjpbIkRlcXVlIiwicHJvdG90eXBlIiwibGVuIiwiY2FwYWNpdHkiLCJlbXB0eSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidmFsdWVzIiwiYXBwZW5kIiwieCIsImFwcGVuZGxlZnQiLCJjbGVhciIsImNvcHkiLCJjb3VudCIsImMiLCJlbGVtZW50IiwiZXh0ZW5kIiwiaXRlcmFibGUiLCJleHRlbmRsZWZ0IiwiX2NoZWNrYm91bmRzIiwiaSIsIl93aGVyZSIsImdldCIsImNvbnRhaW5lciIsImluZGV4Iiwic2V0IiwidmFsdWUiLCJfcmFuZ2UiLCJzdGFydCIsInN0b3AiLCJwb3AiLCJwb3BsZWZ0IiwiaW5zZXJ0IiwiaiIsImEiLCJkZWxldGUiLCJyZW1vdmUiLCJyZXZlcnNlIiwiYiIsInJvdGF0ZSIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUV3QkEsSzs7QUFGeEI7O0FBRWUsU0FBU0EsS0FBVCxHQUFtQixDQUFHOztBQUVyQ0EsTUFBTUMsU0FBTixDQUFnQkMsR0FBaEIsR0FBc0IsWUFBYTs7QUFFbEMsT0FBTSwrQkFBeUIsS0FBekIsQ0FBTjtBQUVBLENBSkQ7O0FBTUFGLE1BQU1DLFNBQU4sQ0FBZ0JFLFFBQWhCLEdBQTJCLFlBQWE7O0FBRXZDLE9BQU0sK0JBQXlCLFNBQXpCLENBQU47QUFFQSxDQUpEOztBQU1BSCxNQUFNQyxTQUFOLENBQWdCRyxLQUFoQixHQUF3QixZQUFhOztBQUVwQyxRQUFPLEtBQUtGLEdBQUwsT0FBZ0IsQ0FBdkI7QUFFQSxDQUpEOztBQU1BRixNQUFNQyxTQUFOLENBQWdCSSxPQUFPQyxRQUF2QixJQUFtQyxZQUFhOztBQUUvQyxRQUFPLEtBQUtDLE1BQUwsRUFBUDtBQUVBLENBSkQ7O0FBTUFQLE1BQU1DLFNBQU4sQ0FBZ0JNLE1BQWhCLEdBQXlCLFlBQWE7O0FBRXJDLE9BQU0sK0JBQXlCLFFBQXpCLENBQU47QUFFQSxDQUpEOztBQU1B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RW5ELE1BQUljLElBQUksS0FBS1osR0FBTCxDQUFVRixDQUFWLENBQVI7QUFDQSxNQUFJa0IsSUFBSSxLQUFLaEIsR0FBTCxDQUFVVyxDQUFWLENBQVI7QUFDQSxPQUFLUixHQUFMLENBQVVMLENBQVYsRUFBY2tCLENBQWQ7QUFDQSxPQUFLYixHQUFMLENBQVVRLENBQVYsRUFBY0MsQ0FBZDtBQUVBOztBQUVELFFBQU8sSUFBUDtBQUVBLENBYkQ7O0FBZ0JBbEMsTUFBTUMsU0FBTixDQUFnQnNDLE1BQWhCLEdBQXlCLFVBQVdDLENBQVgsRUFBZTs7QUFFdkMsS0FBS0EsSUFBSSxDQUFULEVBQWE7O0FBRVosU0FBUUEsTUFBTSxDQUFkO0FBQWtCLFFBQUs5QixVQUFMLENBQWlCLEtBQUtvQixHQUFMLEVBQWpCO0FBQWxCO0FBRUEsRUFKRCxNQU1LLElBQUtVLElBQUksQ0FBVCxFQUFhOztBQUVqQixTQUFRQSxNQUFNLENBQWQ7QUFBa0IsUUFBS2hDLE1BQUwsQ0FBYSxLQUFLdUIsT0FBTCxFQUFiO0FBQWxCO0FBRUE7O0FBRUQsUUFBTyxJQUFQO0FBRUEsQ0FoQkQiLCJmaWxlIjoiRGVxdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yICwgSW5kZXhFcnJvciAsIFZhbHVlRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXF1ZSAoICkgeyB9XG5cbkRlcXVlLnByb3RvdHlwZS5sZW4gPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImxlblwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmNhcGFjaXR5ID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJjYXBjaXR5XCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdHJldHVybiB0aGlzLmxlbiggKSA9PT0gMCA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICggKSB7XG5cblx0cmV0dXJuIHRoaXMudmFsdWVzKCApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcInZhbHVlc1wiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uICggeCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJhcHBlbmRcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5hcHBlbmRsZWZ0ID0gZnVuY3Rpb24gKCB4ICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImFwcGVuZGxlZnRcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiY2xlYXJcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJjb3B5XCIgKSA7XG5cbn0gO1xuXG5cbkRlcXVlLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uICggeCApIHtcblxuXHRsZXQgYyA9IDAgO1xuXG5cdGZvciAoIGxldCBlbGVtZW50IG9mIHRoaXMgKSBpZiAoIGVsZW1lbnQgPT09IHggKSArK2MgO1xuXG5cdHJldHVybiBjIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCB4IG9mIGl0ZXJhYmxlICkgdGhpcy5hcHBlbmQoIHggKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmV4dGVuZGxlZnQgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCB4IG9mIGl0ZXJhYmxlICkgdGhpcy5hcHBlbmRsZWZ0KCB4ICkgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5fY2hlY2tib3VuZHMgPSBmdW5jdGlvbiAoIGkgKSB7XG5cblx0aWYgKCBpIDwgMCB8fCBpID49IHRoaXMubGVuKCApICkgdGhyb3cgbmV3IEluZGV4RXJyb3IoIGkgKSA7XG5cbn0gO1xuXG5cbkRlcXVlLnByb3RvdHlwZS5fd2hlcmUgPSBmdW5jdGlvbiAoIGkgKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiX3doZXJlXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdGNvbnN0IFsgY29udGFpbmVyICwgaW5kZXggXSA9IHRoaXMuX3doZXJlKCBpICkgO1xuXG5cdHJldHVybiBjb250YWluZXJbaW5kZXhdIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoIGkgLCB2YWx1ZSApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggaSApIDtcblxuXHRjb250YWluZXJbaW5kZXhdID0gdmFsdWUgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5fcmFuZ2UgPSBmdW5jdGlvbiogKCBzdGFydCAsIHN0b3AgKSB7XG5cblx0Zm9yICggbGV0IGkgPSBzdGFydCA7IGkgPCBzdG9wIDsgKytpICkgeWllbGQgWyBpICwgdGhpcy5nZXQoIGkgKSBdIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uICggeCAsIHN0YXJ0ID0gMCAsIHN0b3AgPSB0aGlzLmxlbiggKSApIHtcblxuXHRmb3IgKCBsZXQgWyBpICwgZWxlbWVudCBdIG9mIHRoaXMuX3JhbmdlKCBzdGFydCAsIHN0b3AgKSApIHtcblxuXHRcdGlmICggZWxlbWVudCA9PT0geCApIHJldHVybiBpIDtcblxuXHR9XG5cblx0dGhyb3cgbmV3IFZhbHVlRXJyb3IoIFwibm90IGZvdW5kXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJwb3BcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5wb3BsZWZ0ID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJwb3BsZWZ0XCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKCBpICwgeCApIHtcblxuXHR0aGlzLl9jaGVja2JvdW5kcyggaSApIDtcblxuXHR0aGlzLmFwcGVuZCggeCApIDtcblxuXHRsZXQgaiA9IHRoaXMubGVuKCApIC0gMSA7XG5cblx0Zm9yICggOyBpIDwgaiA7IC0taiApIHtcblxuXHRcdGNvbnN0IGEgPSB0aGlzLmdldCggaiApIDtcblx0XHR0aGlzLnNldCggaiAsIHRoaXMuZ2V0KCBqIC0gMSApICkgO1xuXHRcdHRoaXMuc2V0KCBqIC0gMSAsIGEgKSA7XG5cblx0fVxuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoIGkgKSB7XG5cblx0dGhpcy5fY2hlY2tib3VuZHMoIGkgKSA7XG5cblx0Y29uc3QgbGVuID0gdGhpcy5sZW4oICkgLSAxIDtcblxuXHRmb3IgKCA7IGkgPCBsZW4gOyArK2kgKSB0aGlzLnNldCggaSAsIHRoaXMuZ2V0KCBpICsgMSApICkgO1xuXG5cdHRoaXMucG9wKCApIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5cbkRlcXVlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdGNvbnN0IGkgPSB0aGlzLmluZGV4KCB2YWx1ZSApIDtcblxuXHR0aGlzLmRlbGV0ZSggaSApIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICggKSB7XG5cblx0Zm9yICggbGV0IGkgPSAwICwgaiA9IHRoaXMubGVuKCApIDsgaSA8LS0gaiA7ICsraSApIHtcblxuXHRcdGxldCBhID0gdGhpcy5nZXQoIGkgKSA7XG5cdFx0bGV0IGIgPSB0aGlzLmdldCggaiApIDtcblx0XHR0aGlzLnNldCggaSAsIGIgKSA7XG5cdFx0dGhpcy5zZXQoIGogLCBhICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5cbkRlcXVlLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAoIG4gKSB7XG5cblx0aWYgKCBuID4gMCApIHtcblxuXHRcdHdoaWxlICggbiAtLT4gMCApIHRoaXMuYXBwZW5kbGVmdCggdGhpcy5wb3AoICkgKSA7XG5cblx0fVxuXG5cdGVsc2UgaWYgKCBuIDwgMCApIHtcblxuXHRcdHdoaWxlICggbiArKzwgMCApIHRoaXMuYXBwZW5kKCB0aGlzLnBvcGxlZnQoICkgKSA7XG5cblx0fVxuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG4iXX0=