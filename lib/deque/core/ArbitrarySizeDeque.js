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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9jb3JlL0FyYml0cmFyeVNpemVEZXF1ZS5qcyJdLCJuYW1lcyI6WyJBcmJpdHJhcnlTaXplRGVxdWUiLCJwcm90b3R5cGUiLCJ2YWx1ZXMiLCJpIiwiY2VudGVyIiwiX20iLCJsZW5ndGgiLCJtIiwiTWF0aCIsIm1pbiIsImNhcGFjaXR5IiwiY29udGFpbmVyIiwibiIsInBvcCIsIl93aGVyZSIsImluZGV4IiwiX3BvcGluZGV4IiwicG9wbGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBRXdCQSxrQjs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLGtCQUFULEdBQWdDLENBQUc7O0FBRWxEQSxtQkFBbUJDLFNBQW5CLEdBQStCLHFCQUEvQjs7QUFFQUQsbUJBQW1CQyxTQUFuQixDQUE2QkMsTUFBN0IsMkJBQXNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFakNDLE1BRmlDLEdBRTdCLEtBQUtDLE1BRndCO0FBRy9CQyxPQUgrQixHQUd4QkYsSUFBSSxLQUFLRyxNQUhlO0FBSS9CQyxNQUorQixHQUkzQkMsS0FBS0MsR0FBTCxDQUFVLEtBQUtDLFFBQUwsRUFBVixFQUE2QkwsRUFBN0IsQ0FKMkI7O0FBQUE7QUFBQSxXQU03QkYsSUFBSUksQ0FOeUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQU1ULEtBQUtJLFNBQUwsQ0FBZVIsQ0FBZixDQU5TOztBQUFBO0FBTXJCLE9BQUVBLENBTm1CO0FBQUE7QUFBQTs7QUFBQTtBQVEvQlMsTUFSK0IsR0FRM0JQLEtBQUssS0FBS0ssUUFBTCxFQVJzQjs7QUFBQSxXQVVoQ0UsSUFBSVAsRUFWNEI7QUFBQTtBQUFBO0FBQUE7O0FBVWpCRixTQUFJLENBVmE7O0FBQUE7QUFBQSxXQVVUQSxJQUFJUyxDQVZLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUFVVyxLQUFLRCxTQUFMLENBQWVSLENBQWYsQ0FWWDs7QUFBQTtBQVVELE9BQUVBLENBVkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRDOztBQWNBSCxtQkFBbUJDLFNBQW5CLENBQTZCWSxHQUE3QixHQUFtQyxZQUFhO0FBQUEsY0FFakIsS0FBS0MsTUFBTCxDQUFhLEtBQUtSLE1BQUwsR0FBYyxDQUEzQixDQUZpQjtBQUFBO0FBQUEsS0FFdkNLLFNBRnVDO0FBQUEsS0FFM0JJLEtBRjJCOztBQUkvQyxRQUFPLEtBQUtDLFNBQUwsQ0FBZ0JMLFNBQWhCLEVBQTRCSSxLQUE1QixDQUFQO0FBRUEsQ0FORDs7QUFRQWYsbUJBQW1CQyxTQUFuQixDQUE2QmdCLE9BQTdCLEdBQXVDLFlBQWE7QUFBQSxlQUVyQixLQUFLSCxNQUFMLENBQWEsQ0FBYixDQUZxQjtBQUFBO0FBQUEsS0FFM0NILFNBRjJDO0FBQUEsS0FFL0JJLEtBRitCOztBQUluRCxHQUFFLEtBQUtYLE1BQVA7QUFDQSxNQUFLQSxNQUFMLElBQWUsS0FBS00sUUFBTCxFQUFmOztBQUVBLFFBQU8sS0FBS00sU0FBTCxDQUFnQkwsU0FBaEIsRUFBNEJJLEtBQTVCLENBQVA7QUFFQSxDQVREIiwiZmlsZSI6IkFyYml0cmFyeVNpemVEZXF1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXF1ZSBmcm9tICcuL0RlcXVlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyYml0cmFyeVNpemVEZXF1ZSAoICkgeyB9XG5cbkFyYml0cmFyeVNpemVEZXF1ZS5wcm90b3R5cGUgPSBuZXcgRGVxdWUoICkgO1xuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdGxldCBpID0gdGhpcy5jZW50ZXIgO1xuXHRjb25zdCBfbSA9ICggaSArIHRoaXMubGVuZ3RoICkgO1xuXHRjb25zdCBtID0gTWF0aC5taW4oIHRoaXMuY2FwYWNpdHkoICkgLCBfbSApIDtcblxuXHRmb3IgKCA7IGkgPCBtIDsgKytpICkgeWllbGQgdGhpcy5jb250YWluZXJbaV0gO1xuXG5cdGNvbnN0IG4gPSBfbSAlIHRoaXMuY2FwYWNpdHkoICkgO1xuXG5cdGlmICggbiA8IF9tICkgZm9yICggaSA9IDAgOyBpIDwgbiA7ICsraSApIHlpZWxkIHRoaXMuY29udGFpbmVyW2ldIDtcblxufSA7XG5cbkFyYml0cmFyeVNpemVEZXF1ZS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCApIHtcblxuXHRjb25zdCBbIGNvbnRhaW5lciAsIGluZGV4IF0gPSB0aGlzLl93aGVyZSggdGhpcy5sZW5ndGggLSAxICkgO1xuXG5cdHJldHVybiB0aGlzLl9wb3BpbmRleCggY29udGFpbmVyICwgaW5kZXggKSA7XG5cbn0gO1xuXG5BcmJpdHJhcnlTaXplRGVxdWUucHJvdG90eXBlLnBvcGxlZnQgPSBmdW5jdGlvbiAoICkge1xuXG5cdGNvbnN0IFsgY29udGFpbmVyICwgaW5kZXggXSA9IHRoaXMuX3doZXJlKCAwICkgO1xuXG5cdCsrdGhpcy5jZW50ZXIgO1xuXHR0aGlzLmNlbnRlciAlPSB0aGlzLmNhcGFjaXR5KCApIDtcblxuXHRyZXR1cm4gdGhpcy5fcG9waW5kZXgoIGNvbnRhaW5lciAsIGluZGV4ICkgO1xuXG59IDtcbiJdfQ==