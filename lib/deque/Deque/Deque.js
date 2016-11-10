"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Deque = Deque;
function Deque() {};

Deque.prototype.len = function () {

	throw new NotImplementedError("len");
};

Deque.prototype.capacity = function () {

	throw new NotImplementedError("capcity");
};

Deque.prototype.empty = function () {

	return this.len() === 0;
};

Deque.prototype[Symbol.iterator] = function () {

	return this.values();
};

Deque.prototype.values = function () {

	throw new NotImplementedError("values");
};

Deque.prototype.append = function (x) {

	throw new NotImplementedError("append");
};

Deque.prototype.appendleft = function (x) {

	throw new NotImplementedError("appendleft");
};

Deque.prototype.clear = function () {

	throw new NotImplementedError("clear");
};

Deque.prototype.copy = function () {

	throw new NotImplementedError("copy");
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

	if (i < 0 || i >= this.len()) throw new IndexError(i);
};

Deque.prototype._where = function (i) {

	throw new NotImplementedError("_where");
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

	throw new ValueError("not found");
};

Deque.prototype.pop = function () {

	throw new NotImplementedError("pop");
};

Deque.prototype.popleft = function () {

	throw new NotImplementedError("popleft");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9EZXF1ZS9EZXF1ZS5qcyJdLCJuYW1lcyI6WyJEZXF1ZSIsInByb3RvdHlwZSIsImxlbiIsIk5vdEltcGxlbWVudGVkRXJyb3IiLCJjYXBhY2l0eSIsImVtcHR5IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2YWx1ZXMiLCJhcHBlbmQiLCJ4IiwiYXBwZW5kbGVmdCIsImNsZWFyIiwiY29weSIsImNvdW50IiwiYyIsImVsZW1lbnQiLCJleHRlbmQiLCJpdGVyYWJsZSIsImV4dGVuZGxlZnQiLCJfY2hlY2tib3VuZHMiLCJpIiwiSW5kZXhFcnJvciIsIl93aGVyZSIsImdldCIsImNvbnRhaW5lciIsImluZGV4Iiwic2V0IiwidmFsdWUiLCJfcmFuZ2UiLCJzdGFydCIsInN0b3AiLCJWYWx1ZUVycm9yIiwicG9wIiwicG9wbGVmdCIsImluc2VydCIsImoiLCJhIiwiZGVsZXRlIiwicmVtb3ZlIiwicmV2ZXJzZSIsImIiLCJyb3RhdGUiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUNnQkEsSyxHQUFBQSxLO0FBQVQsU0FBU0EsS0FBVCxHQUFtQixDQUFHLENBQUM7O0FBRTlCQSxNQUFNQyxTQUFOLENBQWdCQyxHQUFoQixHQUFzQixZQUFhOztBQUVsQyxPQUFNLElBQUlDLG1CQUFKLENBQXlCLEtBQXpCLENBQU47QUFFQSxDQUpEOztBQU1BSCxNQUFNQyxTQUFOLENBQWdCRyxRQUFoQixHQUEyQixZQUFhOztBQUV2QyxPQUFNLElBQUlELG1CQUFKLENBQXlCLFNBQXpCLENBQU47QUFFQSxDQUpEOztBQU1BSCxNQUFNQyxTQUFOLENBQWdCSSxLQUFoQixHQUF3QixZQUFhOztBQUVwQyxRQUFPLEtBQUtILEdBQUwsT0FBZ0IsQ0FBdkI7QUFFQSxDQUpEOztBQU1BRixNQUFNQyxTQUFOLENBQWdCSyxPQUFPQyxRQUF2QixJQUFtQyxZQUFhOztBQUUvQyxRQUFPLEtBQUtDLE1BQUwsRUFBUDtBQUVBLENBSkQ7O0FBTUFSLE1BQU1D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QixDQUFiOztBQUVBLFFBQU8sSUFBUDtBQUVBLENBUkQ7O0FBVUFyQixNQUFNQyxTQUFOLENBQWdCdUMsT0FBaEIsR0FBMEIsWUFBYTs7QUFFdEMsTUFBTSxJQUFJbkIsSUFBSSxDQUFSLEVBQVllLElBQUksS0FBS2xDLEdBQUwsRUFBdEIsRUFBb0NtQixJQUFHLEVBQUdlLENBQTFDLEVBQThDLEVBQUVmLENBQWhELEVBQW9EOztBQUVuRCxNQUFJZ0IsSUFBSSxLQUFLYixHQUFMLENBQVVILENBQVYsQ0FBUjtBQUNBLE1BQUlvQixJQUFJLEtBQUtqQixHQUFMLENBQVVZLENBQVYsQ0FBUjtBQUNBLE9BQUtULEdBQUwsQ0FBVU4sQ0FBVixFQUFjb0IsQ0FBZDtBQUNBLE9BQUtkLEdBQUwsQ0FBVVMsQ0FBVixFQUFjQyxDQUFkO0FBRUE7O0FBRUQsUUFBTyxJQUFQO0FBRUEsQ0FiRDs7QUFnQkFyQyxNQUFNQyxTQUFOLENBQWdCeUMsTUFBaEIsR0FBeUIsVUFBV0MsQ0FBWCxFQUFlOztBQUV2QyxLQUFLQSxJQUFJLENBQVQsRUFBYTs7QUFFWixTQUFRQSxNQUFNLENBQWQ7QUFBa0IsUUFBS2hDLFVBQUwsQ0FBaUIsS0FBS3NCLEdBQUwsRUFBakI7QUFBbEI7QUFFQSxFQUpELE1BTUssSUFBS1UsSUFBSSxDQUFULEVBQWE7O0FBRWpCLFNBQVFBLE1BQU0sQ0FBZDtBQUFrQixRQUFLbEMsTUFBTCxDQUFhLEtBQUt5QixPQUFMLEVBQWI7QUFBbEI7QUFFQTs7QUFFRCxRQUFPLElBQVA7QUFFQSxDQWhCRCIsImZpbGUiOiJEZXF1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIERlcXVlICggKSB7IH0gO1xuXG5EZXF1ZS5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJsZW5cIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5jYXBhY2l0eSA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiY2FwY2l0eVwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy5sZW4oICkgPT09IDAgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoICkge1xuXG5cdHJldHVybiB0aGlzLnZhbHVlcyggKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJ2YWx1ZXNcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoIHggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiYXBwZW5kXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuYXBwZW5kbGVmdCA9IGZ1bmN0aW9uICggeCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJhcHBlbmRsZWZ0XCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImNsZWFyXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiY29weVwiICkgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoIHggKSB7XG5cblx0bGV0IGMgPSAwIDtcblxuXHRmb3IgKCBsZXQgZWxlbWVudCBvZiB0aGlzICkgaWYgKCBlbGVtZW50ID09PSB4ICkgKytjIDtcblxuXHRyZXR1cm4gYyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgeCBvZiBpdGVyYWJsZSApIHRoaXMuYXBwZW5kKCB4ICkgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5leHRlbmRsZWZ0ID0gZnVuY3Rpb24gKCBpdGVyYWJsZSApIHtcblxuXHRmb3IgKCBsZXQgeCBvZiBpdGVyYWJsZSApIHRoaXMuYXBwZW5kbGVmdCggeCApIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuX2NoZWNrYm91bmRzID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdGlmICggaSA8IDAgfHwgaSA+PSB0aGlzLmxlbiggKSApIHRocm93IG5ldyBJbmRleEVycm9yKCBpICkgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUuX3doZXJlID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcIl93aGVyZVwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICggaSApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggaSApIDtcblxuXHRyZXR1cm4gY29udGFpbmVyW2luZGV4XSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBpICwgdmFsdWUgKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIGkgKSA7XG5cblx0Y29udGFpbmVyW2luZGV4XSA9IHZhbHVlIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuX3JhbmdlID0gZnVuY3Rpb24qICggc3RhcnQgLCBzdG9wICkge1xuXG5cdGZvciAoIGxldCBpID0gc3RhcnQgOyBpIDwgc3RvcCA7ICsraSApIHlpZWxkIFsgaSAsIHRoaXMuZ2V0KCBpICkgXSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuaW5kZXggPSBmdW5jdGlvbiAoIHggLCBzdGFydCA9IDAgLCBzdG9wID0gdGhpcy5sZW4oICkgKSB7XG5cblx0Zm9yICggbGV0IFsgaSAsIGVsZW1lbnQgXSBvZiB0aGlzLl9yYW5nZSggc3RhcnQgLCBzdG9wICkgKSB7XG5cblx0XHRpZiAoIGVsZW1lbnQgPT09IHggKSByZXR1cm4gaSA7XG5cblx0fVxuXG5cdHRocm93IG5ldyBWYWx1ZUVycm9yKCBcIm5vdCBmb3VuZFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwicG9wXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUucG9wbGVmdCA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwicG9wbGVmdFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICggaSAsIHggKSB7XG5cblx0dGhpcy5fY2hlY2tib3VuZHMoIGkgKSA7XG5cblx0dGhpcy5hcHBlbmQoIHggKSA7XG5cblx0bGV0IGogPSB0aGlzLmxlbiggKSAtIDEgO1xuXG5cdGZvciAoIDsgaSA8IGogOyAtLWogKSB7XG5cblx0XHRjb25zdCBhID0gdGhpcy5nZXQoIGogKSA7XG5cdFx0dGhpcy5zZXQoIGogLCB0aGlzLmdldCggaiAtIDEgKSApIDtcblx0XHR0aGlzLnNldCggaiAtIDEgLCBhICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCBpICkge1xuXG5cdHRoaXMuX2NoZWNrYm91bmRzKCBpICkgO1xuXG5cdGNvbnN0IGxlbiA9IHRoaXMubGVuKCApIC0gMSA7XG5cblx0Zm9yICggOyBpIDwgbGVuIDsgKytpICkgdGhpcy5zZXQoIGkgLCB0aGlzLmdldCggaSArIDEgKSApIDtcblxuXHR0aGlzLnBvcCggKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRjb25zdCBpID0gdGhpcy5pbmRleCggdmFsdWUgKSA7XG5cblx0dGhpcy5kZWxldGUoIGkgKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoICkge1xuXG5cdGZvciAoIGxldCBpID0gMCAsIGogPSB0aGlzLmxlbiggKSA7IGkgPC0tIGogOyArK2kgKSB7XG5cblx0XHRsZXQgYSA9IHRoaXMuZ2V0KCBpICkgO1xuXHRcdGxldCBiID0gdGhpcy5nZXQoIGogKSA7XG5cdFx0dGhpcy5zZXQoIGkgLCBiICkgO1xuXHRcdHRoaXMuc2V0KCBqICwgYSApIDtcblxuXHR9XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuXG5EZXF1ZS5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKCBuICkge1xuXG5cdGlmICggbiA+IDAgKSB7XG5cblx0XHR3aGlsZSAoIG4gLS0+IDAgKSB0aGlzLmFwcGVuZGxlZnQoIHRoaXMucG9wKCApICkgO1xuXG5cdH1cblxuXHRlbHNlIGlmICggbiA8IDAgKSB7XG5cblx0XHR3aGlsZSAoIG4gKys8IDAgKSB0aGlzLmFwcGVuZCggdGhpcy5wb3BsZWZ0KCApICkgO1xuXG5cdH1cblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuIl19