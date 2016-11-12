'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = ArbitrarySizeDeque;

var _Deque = require('./Deque');

var _Deque2 = _interopRequireDefault(_Deque);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArbitrarySizeDeque() {}

ArbitrarySizeDeque.prototype = new _Deque2.default();

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
				case 'end':
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9pbXBsZW1lbnRhdGlvbi9BcmJpdHJhcnlTaXplRGVxdWUuanMiXSwibmFtZXMiOlsiQXJiaXRyYXJ5U2l6ZURlcXVlIiwicHJvdG90eXBlIiwidmFsdWVzIiwiaSIsImNlbnRlciIsIl9tIiwibGVuZ3RoIiwibSIsIk1hdGgiLCJtaW4iLCJjYXBhY2l0eSIsImNvbnRhaW5lciIsIm4iLCJwb3AiLCJfd2hlcmUiLCJpbmRleCIsIl9wb3BpbmRleCIsInBvcGxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUV3QkEsa0I7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxrQkFBVCxHQUFnQyxDQUFHOztBQUVsREEsbUJBQW1CQyxTQUFuQixHQUErQixxQkFBL0I7O0FBRUFELG1CQUFtQkMsU0FBbkIsQ0FBNkJDLE1BQTdCLDJCQUFzQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWpDQyxNQUZpQyxHQUU3QixLQUFLQyxNQUZ3QjtBQUcvQkMsT0FIK0IsR0FHeEJGLElBQUksS0FBS0csTUFIZTtBQUkvQkMsTUFKK0IsR0FJM0JDLEtBQUtDLEdBQUwsQ0FBVSxLQUFLQyxRQUFMLEVBQVYsRUFBNkJMLEVBQTdCLENBSjJCOztBQUFBO0FBQUEsV0FNN0JGLElBQUlJLENBTnlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUFNVCxLQUFLSSxTQUFMLENBQWVSLENBQWYsQ0FOUzs7QUFBQTtBQU1yQixPQUFFQSxDQU5tQjtBQUFBO0FBQUE7O0FBQUE7QUFRL0JTLE1BUitCLEdBUTNCUCxLQUFLLEtBQUtLLFFBQUwsRUFSc0I7O0FBQUEsV0FVaENFLElBQUlQLEVBVjRCO0FBQUE7QUFBQTtBQUFBOztBQVVqQkYsU0FBSSxDQVZhOztBQUFBO0FBQUEsV0FVVEEsSUFBSVMsQ0FWSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBVVcsS0FBS0QsU0FBTCxDQUFlUixDQUFmLENBVlg7O0FBQUE7QUFVRCxPQUFFQSxDQVZEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0Qzs7QUFjQUgsbUJBQW1CQyxTQUFuQixDQUE2QlksR0FBN0IsR0FBbUMsWUFBYTtBQUFBLGNBRWpCLEtBQUtDLE1BQUwsQ0FBYSxLQUFLUixNQUFMLEdBQWMsQ0FBM0IsQ0FGaUI7QUFBQTtBQUFBLEtBRXZDSyxTQUZ1QztBQUFBLEtBRTNCSSxLQUYyQjs7QUFJL0MsUUFBTyxLQUFLQyxTQUFMLENBQWdCTCxTQUFoQixFQUE0QkksS0FBNUIsQ0FBUDtBQUVBLENBTkQ7O0FBUUFmLG1CQUFtQkMsU0FBbkIsQ0FBNkJnQixPQUE3QixHQUF1QyxZQUFhO0FBQUEsZUFFckIsS0FBS0gsTUFBTCxDQUFhLENBQWIsQ0FGcUI7QUFBQTtBQUFBLEtBRTNDSCxTQUYyQztBQUFBLEtBRS9CSSxLQUYrQjs7QUFJbkQsR0FBRSxLQUFLWCxNQUFQO0FBQ0EsTUFBS0EsTUFBTCxJQUFlLEtBQUtNLFFBQUwsRUFBZjs7QUFFQSxRQUFPLEtBQUtNLFNBQUwsQ0FBZ0JMLFNBQWhCLEVBQTRCSSxLQUE1QixDQUFQO0FBRUEsQ0FURCIsImZpbGUiOiJBcmJpdHJhcnlTaXplRGVxdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVxdWUgZnJvbSAnLi9EZXF1ZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmJpdHJhcnlTaXplRGVxdWUgKCApIHsgfVxuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlID0gbmV3IERlcXVlKCApIDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRsZXQgaSA9IHRoaXMuY2VudGVyIDtcblx0Y29uc3QgX20gPSAoIGkgKyB0aGlzLmxlbmd0aCApIDtcblx0Y29uc3QgbSA9IE1hdGgubWluKCB0aGlzLmNhcGFjaXR5KCApICwgX20gKSA7XG5cblx0Zm9yICggOyBpIDwgbSA7ICsraSApIHlpZWxkIHRoaXMuY29udGFpbmVyW2ldIDtcblxuXHRjb25zdCBuID0gX20gJSB0aGlzLmNhcGFjaXR5KCApIDtcblxuXHRpZiAoIG4gPCBfbSApIGZvciAoIGkgPSAwIDsgaSA8IG4gOyArK2kgKSB5aWVsZCB0aGlzLmNvbnRhaW5lcltpXSA7XG5cbn0gO1xuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICggKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIHRoaXMubGVuZ3RoIC0gMSApIDtcblxuXHRyZXR1cm4gdGhpcy5fcG9waW5kZXgoIGNvbnRhaW5lciAsIGluZGV4ICkgO1xuXG59IDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZS5wb3BsZWZ0ID0gZnVuY3Rpb24gKCApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggMCApIDtcblxuXHQrK3RoaXMuY2VudGVyIDtcblx0dGhpcy5jZW50ZXIgJT0gdGhpcy5jYXBhY2l0eSggKSA7XG5cblx0cmV0dXJuIHRoaXMuX3BvcGluZGV4KCBjb250YWluZXIgLCBpbmRleCApIDtcblxufSA7XG4iXX0=