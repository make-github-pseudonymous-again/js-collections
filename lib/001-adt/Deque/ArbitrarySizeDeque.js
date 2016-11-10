"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ArbitrarySizeDeque = exports.ArbitrarySizeDeque = function ArbitrarySizeDeque() {};

ArbitrarySizeDeque.prototype = new Deque();

ArbitrarySizeDeque.prototype.values = regeneratorRuntime.mark(function _callee() {
	var i, _m, m, n;

	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					i = this.center;
					_m = i + this.length;
					m = Math.min(this.capacity(), _m);

				case 3:
					if (!(i < m)) {
						_context.next = 9;
						break;
					}

					_context.next = 6;
					return this.container[i];

				case 6:
					++i;
					_context.next = 3;
					break;

				case 9:
					n = _m % this.capacity();

					if (!(n < _m)) {
						_context.next = 18;
						break;
					}

					i = 0;

				case 12:
					if (!(i < n)) {
						_context.next = 18;
						break;
					}

					_context.next = 15;
					return this.container[i];

				case 15:
					++i;
					_context.next = 12;
					break;

				case 18:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, this);
});

ArbitrarySizeDeque.prototype.pop = function () {
	var _where = this._where(this.length - 1),
	    _where2 = _slicedToArray(_where, 2),
	    container = _where2[0],
	    index = _where2[1];

	return this._popindex(container, index);
};

ArbitrarySizeDeque.prototype.popleft = function () {
	var _where3 = this._where(0),
	    _where4 = _slicedToArray(_where3, 2),
	    container = _where4[0],
	    index = _where4[1];

	++this.center;
	this.center %= this.capacity();

	return this._popindex(container, index);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDEtYWR0L0RlcXVlL0FyYml0cmFyeVNpemVEZXF1ZS5qcyJdLCJuYW1lcyI6WyJBcmJpdHJhcnlTaXplRGVxdWUiLCJwcm90b3R5cGUiLCJEZXF1ZSIsInZhbHVlcyIsImkiLCJjZW50ZXIiLCJfbSIsImxlbmd0aCIsIm0iLCJNYXRoIiwibWluIiwiY2FwYWNpdHkiLCJjb250YWluZXIiLCJuIiwicG9wIiwiX3doZXJlIiwiaW5kZXgiLCJfcG9waW5kZXgiLCJwb3BsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNPLElBQU1BLGtEQUFxQixTQUFyQkEsa0JBQXFCLEdBQWEsQ0FBRyxDQUEzQzs7QUFFUEEsbUJBQW1CQyxTQUFuQixHQUErQixJQUFJQyxLQUFKLEVBQS9COztBQUVBRixtQkFBbUJDLFNBQW5CLENBQTZCRSxNQUE3QiwyQkFBc0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqQ0MsTUFGaUMsR0FFN0IsS0FBS0MsTUFGd0I7QUFHL0JDLE9BSCtCLEdBR3hCRixJQUFJLEtBQUtHLE1BSGU7QUFJL0JDLE1BSitCLEdBSTNCQyxLQUFLQyxHQUFMLENBQVUsS0FBS0MsUUFBTCxFQUFWLEVBQTZCTCxFQUE3QixDQUoyQjs7QUFBQTtBQUFBLFdBTTdCRixJQUFJSSxDQU55QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBTVQsS0FBS0ksU0FBTCxDQUFlUixDQUFmLENBTlM7O0FBQUE7QUFNckIsT0FBRUEsQ0FObUI7QUFBQTtBQUFBOztBQUFBO0FBUS9CUyxNQVIrQixHQVEzQlAsS0FBSyxLQUFLSyxRQUFMLEVBUnNCOztBQUFBLFdBVWhDRSxJQUFJUCxFQVY0QjtBQUFBO0FBQUE7QUFBQTs7QUFVakJGLFNBQUksQ0FWYTs7QUFBQTtBQUFBLFdBVVRBLElBQUlTLENBVks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQVVXLEtBQUtELFNBQUwsQ0FBZVIsQ0FBZixDQVZYOztBQUFBO0FBVUQsT0FBRUEsQ0FWRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdEM7O0FBY0FKLG1CQUFtQkMsU0FBbkIsQ0FBNkJhLEdBQTdCLEdBQW1DLFlBQWE7QUFBQSxjQUVqQixLQUFLQyxNQUFMLENBQWEsS0FBS1IsTUFBTCxHQUFjLENBQTNCLENBRmlCO0FBQUE7QUFBQSxLQUV2Q0ssU0FGdUM7QUFBQSxLQUUzQkksS0FGMkI7O0FBSS9DLFFBQU8sS0FBS0MsU0FBTCxDQUFnQkwsU0FBaEIsRUFBNEJJLEtBQTVCLENBQVA7QUFFQSxDQU5EOztBQVFBaEIsbUJBQW1CQyxTQUFuQixDQUE2QmlCLE9BQTdCLEdBQXVDLFlBQWE7QUFBQSxlQUVyQixLQUFLSCxNQUFMLENBQWEsQ0FBYixDQUZxQjtBQUFBO0FBQUEsS0FFM0NILFNBRjJDO0FBQUEsS0FFL0JJLEtBRitCOztBQUluRCxHQUFFLEtBQUtYLE1BQVA7QUFDQSxNQUFLQSxNQUFMLElBQWUsS0FBS00sUUFBTCxFQUFmOztBQUVBLFFBQU8sS0FBS00sU0FBTCxDQUFnQkwsU0FBaEIsRUFBNEJJLEtBQTVCLENBQVA7QUFFQSxDQVREIiwiZmlsZSI6IkFyYml0cmFyeVNpemVEZXF1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IEFyYml0cmFyeVNpemVEZXF1ZSA9IGZ1bmN0aW9uICggKSB7IH0gO1xuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlID0gbmV3IERlcXVlKCApIDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRsZXQgaSA9IHRoaXMuY2VudGVyIDtcblx0Y29uc3QgX20gPSAoIGkgKyB0aGlzLmxlbmd0aCApIDtcblx0Y29uc3QgbSA9IE1hdGgubWluKCB0aGlzLmNhcGFjaXR5KCApICwgX20gKSA7XG5cblx0Zm9yICggOyBpIDwgbSA7ICsraSApIHlpZWxkIHRoaXMuY29udGFpbmVyW2ldIDtcblxuXHRjb25zdCBuID0gX20gJSB0aGlzLmNhcGFjaXR5KCApIDtcblxuXHRpZiAoIG4gPCBfbSApIGZvciAoIGkgPSAwIDsgaSA8IG4gOyArK2kgKSB5aWVsZCB0aGlzLmNvbnRhaW5lcltpXSA7XG5cbn0gO1xuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICggKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIHRoaXMubGVuZ3RoIC0gMSApIDtcblxuXHRyZXR1cm4gdGhpcy5fcG9waW5kZXgoIGNvbnRhaW5lciAsIGluZGV4ICkgO1xuXG59IDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZS5wb3BsZWZ0ID0gZnVuY3Rpb24gKCApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggMCApIDtcblxuXHQrK3RoaXMuY2VudGVyIDtcblx0dGhpcy5jZW50ZXIgJT0gdGhpcy5jYXBhY2l0eSggKSA7XG5cblx0cmV0dXJuIHRoaXMuX3BvcGluZGV4KCBjb250YWluZXIgLCBpbmRleCApIDtcblxufSA7XG4iXX0=