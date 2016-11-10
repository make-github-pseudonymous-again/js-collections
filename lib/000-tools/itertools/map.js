"use strict";

var map = regeneratorRuntime.mark(function map(callable, iterable) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

	return regeneratorRuntime.wrap(function map$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = iterable[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 12;
						break;
					}

					item = _step.value;
					_context.next = 9;
					return callable(item);

				case 9:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 12:
					_context.next = 18;
					break;

				case 14:
					_context.prev = 14;
					_context.t0 = _context["catch"](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 18:
					_context.prev = 18;
					_context.prev = 19;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 21:
					_context.prev = 21;

					if (!_didIteratorError) {
						_context.next = 24;
						break;
					}

					throw _iteratorError;

				case 24:
					return _context.finish(21);

				case 25:
					return _context.finish(18);

				case 26:
				case "end":
					return _context.stop();
			}
		}
	}, map, this, [[3, 14, 18, 26], [19,, 21, 25]]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaXRlcnRvb2xzL21hcC5qcyJdLCJuYW1lcyI6WyJtYXAiLCJjYWxsYWJsZSIsIml0ZXJhYmxlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNQSw4QkFBTSxTQUFOQSxHQUFNLENBQVlDLFFBQVosRUFBdUJDLFFBQXZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVPQSxRQUZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRURDLFNBRkM7QUFBQTtBQUFBLFlBRXdCRixTQUFVRSxJQUFWLENBRnhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU5ILEdBQU07QUFBQSxDQUFOLENBQU4iLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBtYXAgPSBmdW5jdGlvbiogKCBjYWxsYWJsZSAsIGl0ZXJhYmxlICkge1xuXG5cdGZvciAoIGxldCBpdGVtIG9mIGl0ZXJhYmxlICkgeWllbGQgY2FsbGFibGUoIGl0ZW0gKSA7XG5cbn0gO1xuIl19