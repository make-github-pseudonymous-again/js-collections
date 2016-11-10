'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = merge;

var _aureoomsJsItertools = require('aureooms-js-itertools');

var _core = require('./core');

var _heapify = require('./heapify');

var _heapify2 = _interopRequireDefault(_heapify);

var _heappop = require('./heappop');

var _heappop2 = _interopRequireDefault(_heappop);

var _heapreplace = require('./heapreplace');

var _heapreplace2 = _interopRequireDefault(_heapreplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
					_iterator = (0, _aureoomsJsItertools.enumerate)((0, _aureoomsJsItertools.map)(_aureoomsJsItertools.iter, iterables))[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 15;
						break;
					}

					_step$value = _slicedToArray(_step.value, 2), _order = _step$value[0], _it = _step$value[1];
					_rv = _it.next();

					if (!_rv.done) {
						_context.next = 11;
						break;
					}

					return _context.abrupt('continue', 12);

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
					_context.t0 = _context['catch'](4);
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
					h = (0, _heapify2.default)((0, _core.keeporder)(compare), x);

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
					rv = it.next();

					if (!rv.done) {
						_context.next = 40;
						break;
					}

					(0, _heappop2.default)(h);
					return _context.abrupt('break', 44);

				case 40:

					s[0] = rv.value;

					(0, _heapreplace2.default)(h, s);

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
					return _context.delegateYield(it, 't1', 51);

				case 51:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImNvbXBhcmUiLCJpdGVyYWJsZXMiLCJ4Iiwib3JkZXIiLCJpdCIsInJ2IiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJoIiwibGVuZ3RoIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBUXlCQSxLOztBQVJ6Qjs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztlQUV5QkEsSzs7QUFBVixTQUFVQSxLQUFWLENBQWtCQyxPQUFsQjtBQUFBLG1DQUErQkMsU0FBL0I7QUFBK0JBLFdBQS9CO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUkMsTUFGUSxHQUVKLEVBRkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUljLG9DQUFXLHlEQUFZRCxTQUFaLENBQVgsQ0FKZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1EQUlGRSxNQUpFLG1CQUlNQyxHQUpOO0FBTVBDLFFBTk8sR0FNRkQsSUFBR0UsSUFBSCxFQU5FOztBQUFBLFVBUVJELElBQUdFLElBUks7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBVWJMLE9BQUVNLElBQUYsQ0FBUSxDQUFFSCxJQUFHSSxLQUFMLEVBQWFOLE1BQWIsRUFBcUJDLEdBQXJCLENBQVI7O0FBVmE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQWNSTSxNQWRRLEdBY0osdUJBQVMscUJBQVdWLE9BQVgsQ0FBVCxFQUFnQ0UsQ0FBaEMsQ0FkSTs7QUFBQTtBQUFBLFdBZ0JOQSxFQUFFUyxNQUFGLEdBQVcsQ0FoQkw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxVQWtCTCxJQWxCSztBQUFBO0FBQUE7QUFBQTs7QUFvQk5DLE1BcEJNLEdBb0JGVixFQUFFLENBQUYsQ0FwQkU7QUFBQSx5QkFzQm1CVSxDQXRCbkIsTUFzQkpILEtBdEJJLFVBc0JJTixLQXRCSixVQXNCWUMsRUF0Qlo7QUFBQTtBQUFBLFlBd0JOSyxLQXhCTTs7QUFBQTtBQTBCTkosT0ExQk0sR0EwQkRELEdBQUdFLElBQUgsRUExQkM7O0FBQUEsVUE0QlBELEdBQUdFLElBNUJJO0FBQUE7QUFBQTtBQUFBOztBQThCWCw0QkFBU0csQ0FBVDtBQTlCVzs7QUFBQTs7QUFtQ1pFLE9BQUUsQ0FBRixJQUFPUCxHQUFHSSxLQUFWOztBQUVBLGdDQUFhQyxDQUFiLEVBQWlCRSxDQUFqQjs7QUFyQ1k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQTJDVFYsRUFBRVMsTUFBRixHQUFXLENBM0NGO0FBQUE7QUFBQTtBQUFBOztBQUFBLDBCQTZDa0JULEVBQUUsQ0FBRixDQTdDbEIsTUE2Q0xPLEtBN0NLLFdBNkNHTixLQTdDSCxXQTZDV0MsRUE3Q1g7QUFBQTtBQUFBLFlBK0NQSyxLQS9DTzs7QUFBQTtBQUFBLG1DQWlETkwsRUFqRE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnVtZXJhdGUgLCBtYXAgLCBpdGVyIH0gZnJvbSAnYXVyZW9vbXMtanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IGtlZXBvcmRlciB9IGZyb20gJy4vY29yZScgO1xuXG5pbXBvcnQgaGVhcGlmeSBmcm9tICcuL2hlYXBpZnknIDtcbmltcG9ydCBoZWFwcG9wIGZyb20gJy4vaGVhcHBvcCcgO1xuaW1wb3J0IGhlYXByZXBsYWNlIGZyb20gJy4vaGVhcHJlcGxhY2UnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1lcmdlICggY29tcGFyZSAsIC4uLml0ZXJhYmxlcyApIHtcblxuXHRjb25zdCB4ID0gWyBdIDtcblxuXHRmb3IgKCBsZXQgWyBvcmRlciAsIGl0IF0gb2YgZW51bWVyYXRlKCBtYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSApICkge1xuXG5cdFx0Y29uc3QgcnYgPSBpdC5uZXh0KCkgO1xuXG5cdFx0aWYgKCBydi5kb25lICkgY29udGludWUgO1xuXG5cdFx0eC5wdXNoKCBbIHJ2LnZhbHVlICwgb3JkZXIgLCBpdCBdICkgO1xuXG5cdH1cblxuXHRjb25zdCBoID0gaGVhcGlmeSgga2VlcG9yZGVyKCBjb21wYXJlICkgLCB4ICkgO1xuXG5cdHdoaWxlICggeC5sZW5ndGggPiAxICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHRjb25zdCBzID0geFswXSA7XG5cblx0XHRcdGNvbnN0IFsgdmFsdWUgLCBvcmRlciAsIGl0IF0gPSBzIDtcblxuXHRcdFx0eWllbGQgdmFsdWUgO1xuXG5cdFx0XHRjb25zdCBydiA9IGl0Lm5leHQoKSA7XG5cblx0XHRcdGlmICggcnYuZG9uZSApIHtcblxuXHRcdFx0XHRoZWFwcG9wKCBoICkgO1xuXHRcdFx0XHRicmVhayA7XG5cblx0XHRcdH1cblxuXHRcdFx0c1swXSA9IHJ2LnZhbHVlIDtcblxuXHRcdFx0aGVhcHJlcGxhY2UoIGggLCBzICkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRpZiAoIHgubGVuZ3RoID4gMCApIHtcblxuXHRcdGNvbnN0IFsgdmFsdWUgLCBvcmRlciAsIGl0IF0gPSB4WzBdIDtcblxuXHRcdHlpZWxkIHZhbHVlIDtcblxuXHRcdHlpZWxkICppdCA7XG5cblx0fVxuXG59XG4iXX0=