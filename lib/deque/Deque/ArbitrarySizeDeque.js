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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXF1ZS9EZXF1ZS9BcmJpdHJhcnlTaXplRGVxdWUuanMiXSwibmFtZXMiOlsiQXJiaXRyYXJ5U2l6ZURlcXVlIiwicHJvdG90eXBlIiwiRGVxdWUiLCJ2YWx1ZXMiLCJpIiwiY2VudGVyIiwiX20iLCJsZW5ndGgiLCJtIiwiTWF0aCIsIm1pbiIsImNhcGFjaXR5IiwiY29udGFpbmVyIiwibiIsInBvcCIsIl93aGVyZSIsImluZGV4IiwiX3BvcGluZGV4IiwicG9wbGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxJQUFNQSxrREFBcUIsU0FBckJBLGtCQUFxQixHQUFhLENBQUcsQ0FBM0M7O0FBRVBBLG1CQUFtQkMsU0FBbkIsR0FBK0IsSUFBSUMsS0FBSixFQUEvQjs7QUFFQUYsbUJBQW1CQyxTQUFuQixDQUE2QkUsTUFBN0IsMkJBQXNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFakNDLE1BRmlDLEdBRTdCLEtBQUtDLE1BRndCO0FBRy9CQyxPQUgrQixHQUd4QkYsSUFBSSxLQUFLRyxNQUhlO0FBSS9CQyxNQUorQixHQUkzQkMsS0FBS0MsR0FBTCxDQUFVLEtBQUtDLFFBQUwsRUFBVixFQUE2QkwsRUFBN0IsQ0FKMkI7O0FBQUE7QUFBQSxXQU03QkYsSUFBSUksQ0FOeUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQU1ULEtBQUtJLFNBQUwsQ0FBZVIsQ0FBZixDQU5TOztBQUFBO0FBTXJCLE9BQUVBLENBTm1CO0FBQUE7QUFBQTs7QUFBQTtBQVEvQlMsTUFSK0IsR0FRM0JQLEtBQUssS0FBS0ssUUFBTCxFQVJzQjs7QUFBQSxXQVVoQ0UsSUFBSVAsRUFWNEI7QUFBQTtBQUFBO0FBQUE7O0FBVWpCRixTQUFJLENBVmE7O0FBQUE7QUFBQSxXQVVUQSxJQUFJUyxDQVZLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUFVVyxLQUFLRCxTQUFMLENBQWVSLENBQWYsQ0FWWDs7QUFBQTtBQVVELE9BQUVBLENBVkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRDOztBQWNBSixtQkFBbUJDLFNBQW5CLENBQTZCYSxHQUE3QixHQUFtQyxZQUFhO0FBQUEsY0FFakIsS0FBS0MsTUFBTCxDQUFhLEtBQUtSLE1BQUwsR0FBYyxDQUEzQixDQUZpQjtBQUFBO0FBQUEsS0FFdkNLLFNBRnVDO0FBQUEsS0FFM0JJLEtBRjJCOztBQUkvQyxRQUFPLEtBQUtDLFNBQUwsQ0FBZ0JMLFNBQWhCLEVBQTRCSSxLQUE1QixDQUFQO0FBRUEsQ0FORDs7QUFRQWhCLG1CQUFtQkMsU0FBbkIsQ0FBNkJpQixPQUE3QixHQUF1QyxZQUFhO0FBQUEsZUFFckIsS0FBS0gsTUFBTCxDQUFhLENBQWIsQ0FGcUI7QUFBQTtBQUFBLEtBRTNDSCxTQUYyQztBQUFBLEtBRS9CSSxLQUYrQjs7QUFJbkQsR0FBRSxLQUFLWCxNQUFQO0FBQ0EsTUFBS0EsTUFBTCxJQUFlLEtBQUtNLFFBQUwsRUFBZjs7QUFFQSxRQUFPLEtBQUtNLFNBQUwsQ0FBZ0JMLFNBQWhCLEVBQTRCSSxLQUE1QixDQUFQO0FBRUEsQ0FURCIsImZpbGUiOiJBcmJpdHJhcnlTaXplRGVxdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBBcmJpdHJhcnlTaXplRGVxdWUgPSBmdW5jdGlvbiAoICkgeyB9IDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZSA9IG5ldyBEZXF1ZSggKSA7XG5cbkFyYml0cmFyeVNpemVEZXF1ZS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24qICggKSB7XG5cblx0bGV0IGkgPSB0aGlzLmNlbnRlciA7XG5cdGNvbnN0IF9tID0gKCBpICsgdGhpcy5sZW5ndGggKSA7XG5cdGNvbnN0IG0gPSBNYXRoLm1pbiggdGhpcy5jYXBhY2l0eSggKSAsIF9tICkgO1xuXG5cdGZvciAoIDsgaSA8IG0gOyArK2kgKSB5aWVsZCB0aGlzLmNvbnRhaW5lcltpXSA7XG5cblx0Y29uc3QgbiA9IF9tICUgdGhpcy5jYXBhY2l0eSggKSA7XG5cblx0aWYgKCBuIDwgX20gKSBmb3IgKCBpID0gMCA7IGkgPCBuIDsgKytpICkgeWllbGQgdGhpcy5jb250YWluZXJbaV0gO1xuXG59IDtcblxuQXJiaXRyYXJ5U2l6ZURlcXVlLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoICkge1xuXG5cdGNvbnN0IFsgY29udGFpbmVyICwgaW5kZXggXSA9IHRoaXMuX3doZXJlKCB0aGlzLmxlbmd0aCAtIDEgKSA7XG5cblx0cmV0dXJuIHRoaXMuX3BvcGluZGV4KCBjb250YWluZXIgLCBpbmRleCApIDtcblxufSA7XG5cbkFyYml0cmFyeVNpemVEZXF1ZS5wcm90b3R5cGUucG9wbGVmdCA9IGZ1bmN0aW9uICggKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIDAgKSA7XG5cblx0Kyt0aGlzLmNlbnRlciA7XG5cdHRoaXMuY2VudGVyICU9IHRoaXMuY2FwYWNpdHkoICkgO1xuXG5cdHJldHVybiB0aGlzLl9wb3BpbmRleCggY29udGFpbmVyICwgaW5kZXggKSA7XG5cbn0gO1xuIl19