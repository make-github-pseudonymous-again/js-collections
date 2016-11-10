"use strict";

var Mapping = {};

Mapping.fromkeys = regeneratorRuntime.mark(function _callee(seq, value) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = seq[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 12;
						break;
					}

					key = _step.value;
					_context.next = 9;
					return [key, value];

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
	}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
});

exports.Mapping = Mapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDAtdG9vbHMvTWFwcGluZy5qcyJdLCJuYW1lcyI6WyJNYXBwaW5nIiwiZnJvbWtleXMiLCJzZXEiLCJ2YWx1ZSIsImtleSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsVUFBVSxFQUFoQjs7QUFFQUEsUUFBUUMsUUFBUiwyQkFBbUIsaUJBQVlDLEdBQVosRUFBa0JDLEtBQWxCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVERCxHQUZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRVJFLFFBRlE7QUFBQTtBQUFBLFlBRVcsQ0FBRUEsR0FBRixFQUFRRCxLQUFSLENBRlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQjs7QUFNQUUsUUFBUUwsT0FBUixHQUFrQkEsT0FBbEIiLCJmaWxlIjoiTWFwcGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgTWFwcGluZyA9IHsgfSA7XG5cbk1hcHBpbmcuZnJvbWtleXMgPSBmdW5jdGlvbiogKCBzZXEgLCB2YWx1ZSApIHtcblxuXHRmb3IgKCBsZXQga2V5IG9mIHNlcSApIHlpZWxkIFsga2V5ICwgdmFsdWUgXSA7XG5cbn0gO1xuXG5leHBvcnRzLk1hcHBpbmcgPSBNYXBwaW5nIDtcbiJdfQ==