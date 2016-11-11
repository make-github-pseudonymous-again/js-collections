"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fromkeys;

var _marked = [fromkeys].map(regeneratorRuntime.mark);

function fromkeys(seq, value) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

	return regeneratorRuntime.wrap(function fromkeys$(_context) {
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
	}, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXBwaW5nL2Zyb21rZXlzLmpzIl0sIm5hbWVzIjpbImZyb21rZXlzIiwic2VxIiwidmFsdWUiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUN5QkEsUTs7ZUFBQUEsUTs7QUFBVixTQUFVQSxRQUFWLENBQXFCQyxHQUFyQixFQUEyQkMsS0FBM0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUdELEdBRkg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFSkUsUUFGSTtBQUFBO0FBQUEsWUFFZSxDQUFFQSxHQUFGLEVBQVFELEtBQVIsQ0FGZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImZyb21rZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZnJvbWtleXMgKCBzZXEgLCB2YWx1ZSApIHtcblxuXHRmb3IgKCBsZXQga2V5IG9mIHNlcSApIHlpZWxkIFsga2V5ICwgdmFsdWUgXSA7XG5cbn1cbiJdfQ==