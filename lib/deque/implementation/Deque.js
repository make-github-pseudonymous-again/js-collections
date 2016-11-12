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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9pbXBsZW1lbnRhdGlvbi9EZXF1ZS5qcyJdLCJuYW1lcyI6WyJEZXF1ZSIsInByb3RvdHlwZSIsImxlbiIsImNhcGFjaXR5IiwiZW1wdHkiLCJTeW1ib2wiLCJpdGVyYXRvciIsInZhbHVlcyIsImFwcGVuZCIsIngiLCJhcHBlbmRsZWZ0IiwiY2xlYXIiLCJjb3B5IiwiY291bnQiLCJjIiwiZWxlbWVudCIsImV4dGVuZCIsIml0ZXJhYmxlIiwiZXh0ZW5kbGVmdCIsIl9jaGVja2JvdW5kcyIsImkiLCJfd2hlcmUiLCJnZXQiLCJjb250YWluZXIiLCJpbmRleCIsInNldCIsInZhbHVlIiwiX3JhbmdlIiwic3RhcnQiLCJzdG9wIiwicG9wIiwicG9wbGVmdCIsImluc2VydCIsImoiLCJhIiwiZGVsZXRlIiwicmVtb3ZlIiwicmV2ZXJzZSIsImIiLCJyb3RhdGUiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFd0JBLEs7O0FBRnhCOztBQUVlLFNBQVNBLEtBQVQsR0FBbUIsQ0FBRzs7QUFFckNBLE1BQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLEdBQXNCLFlBQWE7O0FBRWxDLE9BQU0sK0JBQXlCLEtBQXpCLENBQU47QUFFQSxDQUpEOztBQU1BRixNQUFNQyxTQUFOLENBQWdCRSxRQUFoQixHQUEyQixZQUFhOztBQUV2QyxPQUFNLCtCQUF5QixTQUF6QixDQUFOO0FBRUEsQ0FKRDs7QUFNQUgsTUFBTUMsU0FBTixDQUFnQkcsS0FBaEIsR0FBd0IsWUFBYTs7QUFFcEMsUUFBTyxLQUFLRixHQUFMLE9BQWdCLENBQXZCO0FBRUEsQ0FKRDs7QUFNQUYsTUFBTUMsU0FBTixDQUFnQkksT0FBT0MsUUFBdkIsSUFBbUMsWUFBYTs7QUFFL0MsUUFBTyxLQUFLQyxNQUFMLEVBQVA7QUFFQSxDQUpEOztBQU1BUCxNQUFNQyxTQUFOLENBQWdCTSxNQUFoQixHQUF5QixZQUFhOztBQUVyQyxPQUFNLCtCQUF5QixRQUF6QixDQUFOO0FBRUEs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LEVBQW9EOztBQUVuRCxNQUFJYyxJQUFJLEtBQUtaLEdBQUwsQ0FBVUYsQ0FBVixDQUFSO0FBQ0EsTUFBSWtCLElBQUksS0FBS2hCLEdBQUwsQ0FBVVcsQ0FBVixDQUFSO0FBQ0EsT0FBS1IsR0FBTCxDQUFVTCxDQUFWLEVBQWNrQixDQUFkO0FBQ0EsT0FBS2IsR0FBTCxDQUFVUSxDQUFWLEVBQWNDLENBQWQ7QUFFQTs7QUFFRCxRQUFPLElBQVA7QUFFQSxDQWJEOztBQWdCQWxDLE1BQU1DLFNBQU4sQ0FBZ0JzQyxNQUFoQixHQUF5QixVQUFXQyxDQUFYLEVBQWU7O0FBRXZDLEtBQUtBLElBQUksQ0FBVCxFQUFhOztBQUVaLFNBQVFBLE1BQU0sQ0FBZDtBQUFrQixRQUFLOUIsVUFBTCxDQUFpQixLQUFLb0IsR0FBTCxFQUFqQjtBQUFsQjtBQUVBLEVBSkQsTUFNSyxJQUFLVSxJQUFJLENBQVQsRUFBYTs7QUFFakIsU0FBUUEsTUFBTSxDQUFkO0FBQWtCLFFBQUtoQyxNQUFMLENBQWEsS0FBS3VCLE9BQUwsRUFBYjtBQUFsQjtBQUVBOztBQUVELFFBQU8sSUFBUDtBQUVBLENBaEJEIiwiZmlsZSI6IkRlcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90SW1wbGVtZW50ZWRFcnJvciAsIEluZGV4RXJyb3IgLCBWYWx1ZUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVxdWUgKCApIHsgfVxuXG5EZXF1ZS5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJsZW5cIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5jYXBhY2l0eSA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiY2FwY2l0eVwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy5sZW4oICkgPT09IDAgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoICkge1xuXG5cdHJldHVybiB0aGlzLnZhbHVlcyggKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJ2YWx1ZXNcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoIHggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiYXBwZW5kXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuYXBwZW5kbGVmdCA9IGZ1bmN0aW9uICggeCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJhcHBlbmRsZWZ0XCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImNsZWFyXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiY29weVwiICkgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoIHggKSB7XG5cblx0bGV0IGMgPSAwIDtcblxuXHRmb3IgKCBsZXQgZWxlbWVudCBvZiB0aGlzICkgaWYgKCBlbGVtZW50ID09PSB4ICkgKytjIDtcblxuXHRyZXR1cm4gYyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgeCBvZiBpdGVyYWJsZSApIHRoaXMuYXBwZW5kKCB4ICkgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5leHRlbmRsZWZ0ID0gZnVuY3Rpb24gKCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgeCBvZiBpdGVyYWJsZSApIHRoaXMuYXBwZW5kbGVmdCggeCApIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuX2NoZWNrYm91bmRzID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdGlmICggaSA8IDAgfHwgaSA+PSB0aGlzLmxlbiggKSApIHRocm93IG5ldyBJbmRleEVycm9yKCBpICkgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUuX3doZXJlID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcIl93aGVyZVwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICggaSApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggaSApIDtcblxuXHRyZXR1cm4gY29udGFpbmVyW2luZGV4XSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBpICwgdmFsdWUgKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIGkgKSA7XG5cblx0Y29udGFpbmVyW2luZGV4XSA9IHZhbHVlIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuX3JhbmdlID0gZnVuY3Rpb24qICggc3RhcnQgLCBzdG9wICkge1xuXG5cdGZvciAoIGxldCBpID0gc3RhcnQgOyBpIDwgc3RvcCA7ICsraSApIHlpZWxkIFsgaSAsIHRoaXMuZ2V0KCBpICkgXSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuaW5kZXggPSBmdW5jdGlvbiAoIHggLCBzdGFydCA9IDAgLCBzdG9wID0gdGhpcy5sZW4oICkgKSB7XG5cblx0Zm9yICggbGV0IFsgaSAsIGVsZW1lbnQgXSBvZiB0aGlzLl9yYW5nZSggc3RhcnQgLCBzdG9wICkgKSB7XG5cblx0XHRpZiAoIGVsZW1lbnQgPT09IHggKSByZXR1cm4gaSA7XG5cblx0fVxuXG5cdHRocm93IG5ldyBWYWx1ZUVycm9yKCBcIm5vdCBmb3VuZFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwicG9wXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUucG9wbGVmdCA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwicG9wbGVmdFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICggaSAsIHggKSB7XG5cblx0dGhpcy5fY2hlY2tib3VuZHMoIGkgKSA7XG5cblx0dGhpcy5hcHBlbmQoIHggKSA7XG5cblx0bGV0IGogPSB0aGlzLmxlbiggKSAtIDEgO1xuXG5cdGZvciAoIDsgaSA8IGogOyAtLWogKSB7XG5cblx0XHRjb25zdCBhID0gdGhpcy5nZXQoIGogKSA7XG5cdFx0dGhpcy5zZXQoIGogLCB0aGlzLmdldCggaiAtIDEgKSApIDtcblx0XHR0aGlzLnNldCggaiAtIDEgLCBhICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdHRoaXMuX2NoZWNrYm91bmRzKCBpICkgO1xuXG5cdGNvbnN0IGxlbiA9IHRoaXMubGVuKCApIC0gMSA7XG5cblx0Zm9yICggOyBpIDwgbGVuIDsgKytpICkgdGhpcy5zZXQoIGkgLCB0aGlzLmdldCggaSArIDEgKSApIDtcblxuXHR0aGlzLnBvcCggKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRjb25zdCBpID0gdGhpcy5pbmRleCggdmFsdWUgKSA7XG5cblx0dGhpcy5kZWxldGUoIGkgKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoICkge1xuXG5cdGZvciAoIGxldCBpID0gMCAsIGogPSB0aGlzLmxlbiggKSA7IGkgPC0tIGogOyArK2kgKSB7XG5cblx0XHRsZXQgYSA9IHRoaXMuZ2V0KCBpICkgO1xuXHRcdGxldCBiID0gdGhpcy5nZXQoIGogKSA7XG5cdFx0dGhpcy5zZXQoIGkgLCBiICkgO1xuXHRcdHRoaXMuc2V0KCBqICwgYSApIDtcblxuXHR9XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKCBuICkge1xuXG5cdGlmICggbiA+IDAgKSB7XG5cblx0XHR3aGlsZSAoIG4gLS0+IDAgKSB0aGlzLmFwcGVuZGxlZnQoIHRoaXMucG9wKCApICkgO1xuXG5cdH1cblxuXHRlbHNlIGlmICggbiA8IDAgKSB7XG5cblx0XHR3aGlsZSAoIG4gKys8IDAgKSB0aGlzLmFwcGVuZCggdGhpcy5wb3BsZWZ0KCApICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuIl19