"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.merge = merge;

var _marked = [merge].map(regeneratorRuntime.mark);

function merge(compare) {
	for (var _len = arguments.length, iterables = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		iterables[_key - 1] = arguments[_key];
	}

	var x, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, _order, _it, _rv, h, s, _s, value, order, it, rv, _x$;

	return regeneratorRuntime.wrap(function merge$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					x = [];
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = enumerate(map(iter, iterables))[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 15;
						break;
					}

					_step$value = _slicedToArray(_step.value, 2), _order = _step$value[0], _it = _step$value[1];
					_rv = next(_it);

					if (!_rv.done) {
						_context.next = 11;
						break;
					}

					return _context.abrupt("continue", 12);

				case 11:

					x.push([_rv.value, _order, _it]);

				case 12:
					_iteratorNormalCompletion = true;
					_context.next = 6;
					break;

				case 15:
					_context.next = 21;
					break;

				case 17:
					_context.prev = 17;
					_context.t0 = _context["catch"](4);
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
					h = heapify(keeporder(compare), x);

				case 30:
					if (!(x.length > 1)) {
						_context.next = 46;
						break;
					}

				case 31:
					if (!true) {
						_context.next = 44;
						break;
					}

					s = x[0];
					_s = _slicedToArray(s, 3), value = _s[0], order = _s[1], it = _s[2];
					_context.next = 36;
					return value;

				case 36:
					rv = next(it);

					if (!rv.done) {
						_context.next = 40;
						break;
					}

					heappop(h);
					return _context.abrupt("break", 44);

				case 40:

					s[0] = rv.value;

					heapreplace(h, s);

					_context.next = 31;
					break;

				case 44:
					_context.next = 30;
					break;

				case 46:
					if (!(x.length > 0)) {
						_context.next = 51;
						break;
					}

					_x$ = _slicedToArray(x[0], 3), value = _x$[0], order = _x$[1], it = _x$[2];
					_context.next = 50;
					return value;

				case 50:
					return _context.delegateYield(it, "t1", 51);

				case 51:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaGVhcHEvMDAyLWFwaS9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImNvbXBhcmUiLCJpdGVyYWJsZXMiLCJ4IiwiZW51bWVyYXRlIiwibWFwIiwiaXRlciIsIm9yZGVyIiwiaXQiLCJydiIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwiaCIsImhlYXBpZnkiLCJrZWVwb3JkZXIiLCJsZW5ndGgiLCJzIiwiaGVhcHBvcCIsImhlYXByZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUNpQkEsSyxHQUFBQSxLOztlQUFBQSxLOztBQUFWLFNBQVVBLEtBQVYsQ0FBa0JDLE9BQWxCO0FBQUEsbUNBQStCQyxTQUEvQjtBQUErQkEsV0FBL0I7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQyxNQUZBLEdBRUksRUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSXNCQyxVQUFXQyxJQUFLQyxJQUFMLEVBQVlKLFNBQVosQ0FBWCxDQUp0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1EQUlNSyxNQUpOLG1CQUljQyxHQUpkO0FBTUNDLFFBTkQsR0FNTUMsS0FBTUYsR0FBTixDQU5OOztBQUFBLFVBUUFDLElBQUdFLElBUkg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBVUxSLE9BQUVTLElBQUYsQ0FBUSxDQUFFSCxJQUFHSSxLQUFMLEVBQWFOLE1BQWIsRUFBcUJDLEdBQXJCLENBQVI7O0FBVks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQWNBTSxNQWRBLEdBY0lDLFFBQVNDLFVBQVdmLE9BQVgsQ0FBVCxFQUFnQ0UsQ0FBaEMsQ0FkSjs7QUFBQTtBQUFBLFdBZ0JFQSxFQUFFYyxNQUFGLEdBQVcsQ0FoQmI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxVQWtCRyxJQWxCSDtBQUFBO0FBQUE7QUFBQTs7QUFvQkVDLE1BcEJGLEdBb0JNZixFQUFFLENBQUYsQ0FwQk47QUFBQSx5QkFzQjJCZSxDQXRCM0IsTUFzQklMLEtBdEJKLFVBc0JZTixLQXRCWixVQXNCb0JDLEVBdEJwQjtBQUFBO0FBQUEsWUF3QkVLLEtBeEJGOztBQUFBO0FBMEJFSixPQTFCRixHQTBCT0MsS0FBTUYsRUFBTixDQTFCUDs7QUFBQSxVQTRCQ0MsR0FBR0UsSUE1Qko7QUFBQTtBQUFBO0FBQUE7O0FBOEJIUSxhQUFTTCxDQUFUO0FBOUJHOztBQUFBOztBQW1DSkksT0FBRSxDQUFGLElBQU9ULEdBQUdJLEtBQVY7O0FBRUFPLGlCQUFhTixDQUFiLEVBQWlCSSxDQUFqQjs7QUFyQ0k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQTJDRGYsRUFBRWMsTUFBRixHQUFXLENBM0NWO0FBQUE7QUFBQTtBQUFBOztBQUFBLDBCQTZDMEJkLEVBQUUsQ0FBRixDQTdDMUIsTUE2Q0dVLEtBN0NILFdBNkNXTixLQTdDWCxXQTZDbUJDLEVBN0NuQjtBQUFBO0FBQUEsWUErQ0NLLEtBL0NEOztBQUFBO0FBQUEsbUNBaURFTCxFQWpERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uKiBtZXJnZSAoIGNvbXBhcmUgLCAuLi5pdGVyYWJsZXMgKSB7XG5cblx0Y29uc3QgeCA9IFsgXSA7XG5cblx0Zm9yICggbGV0IFsgb3JkZXIgLCBpdCBdIG9mIGVudW1lcmF0ZSggbWFwKCBpdGVyICwgaXRlcmFibGVzICkgKSApIHtcblxuXHRcdGNvbnN0IHJ2ID0gbmV4dCggaXQgKSA7XG5cblx0XHRpZiAoIHJ2LmRvbmUgKSBjb250aW51ZSA7XG5cblx0XHR4LnB1c2goIFsgcnYudmFsdWUgLCBvcmRlciAsIGl0IF0gKSA7XG5cblx0fVxuXG5cdGNvbnN0IGggPSBoZWFwaWZ5KCBrZWVwb3JkZXIoIGNvbXBhcmUgKSAsIHggKSA7XG5cblx0d2hpbGUgKCB4Lmxlbmd0aCA+IDEgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGNvbnN0IHMgPSB4WzBdIDtcblxuXHRcdFx0Y29uc3QgWyB2YWx1ZSAsIG9yZGVyICwgaXQgXSA9IHMgO1xuXG5cdFx0XHR5aWVsZCB2YWx1ZSA7XG5cblx0XHRcdGNvbnN0IHJ2ID0gbmV4dCggaXQgKSA7XG5cblx0XHRcdGlmICggcnYuZG9uZSApIHtcblxuXHRcdFx0XHRoZWFwcG9wKCBoICkgO1xuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdFx0c1swXSA9IHJ2LnZhbHVlIDtcblxuXHRcdFx0aGVhcHJlcGxhY2UoIGggLCBzICkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRpZiAoIHgubGVuZ3RoID4gMCApIHtcblxuXHRcdGNvbnN0IFsgdmFsdWUgLCBvcmRlciAsIGl0IF0gPSB4WzBdIDtcblxuXHRcdHlpZWxkIHZhbHVlIDtcblxuXHRcdHlpZWxkICppdCA7XG5cblx0fVxuXG59XG4iXX0=