"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.zip = zip;

var _marked = [zip].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function zip(iterables) {
	var iterators, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, result;

	return regeneratorRuntime.wrap(function zip$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					iterators = [].concat(_toConsumableArray(map(iter, iterables)));

					if (!(iterators.length === 0)) {
						_context.next = 3;
						break;
					}

					return _context.abrupt("return");

				case 3:
					if (!true) {
						_context.next = 36;
						break;
					}

					buffer = [];
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 8;
					_iterator = map(next, iterators)[Symbol.iterator]();

				case 10:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 18;
						break;
					}

					result = _step.value;

					if (!result.done) {
						_context.next = 14;
						break;
					}

					return _context.abrupt("return");

				case 14:

					buffer.push(result.value);

				case 15:
					_iteratorNormalCompletion = true;
					_context.next = 10;
					break;

				case 18:
					_context.next = 24;
					break;

				case 20:
					_context.prev = 20;
					_context.t0 = _context["catch"](8);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 24:
					_context.prev = 24;
					_context.prev = 25;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 27:
					_context.prev = 27;

					if (!_didIteratorError) {
						_context.next = 30;
						break;
					}

					throw _iteratorError;

				case 30:
					return _context.finish(27);

				case 31:
					return _context.finish(24);

				case 32:
					_context.next = 34;
					return buffer;

				case 34:
					_context.next = 3;
					break;

				case 36:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this, [[8, 20, 24, 32], [25,, 27, 31]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaXRlcnRvb2xzL3ppcC5qcyJdLCJuYW1lcyI6WyJ6aXAiLCJpdGVyYWJsZXMiLCJpdGVyYXRvcnMiLCJtYXAiLCJpdGVyIiwibGVuZ3RoIiwiYnVmZmVyIiwibmV4dCIsInJlc3VsdCIsImRvbmUiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7Ozs7QUFBVixTQUFVQSxHQUFWLENBQWdCQyxTQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGNBRkUsZ0NBRWVDLElBQUtDLElBQUwsRUFBWUgsU0FBWixDQUZmOztBQUFBLFdBSURDLFVBQVVHLE1BQVYsS0FBcUIsQ0FKcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxVQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBUURDLFdBUkMsR0FRUSxFQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFVZUgsSUFBS0ksSUFBTCxFQUFZTCxTQUFaLENBVmY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVS00sV0FWTDs7QUFBQSxVQVlDQSxPQUFPQyxJQVpSO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQWNKSCxZQUFPSSxJQUFQLENBQWFGLE9BQU9HLEtBQXBCOztBQWRJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBa0JDTCxNQWxCRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiemlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24qIHppcCAoIGl0ZXJhYmxlcyApIHtcblxuXHRsZXQgaXRlcmF0b3JzID0gWyAuLi5tYXAoIGl0ZXIgLCBpdGVyYWJsZXMgKSBdIDtcblxuXHRpZiAoIGl0ZXJhdG9ycy5sZW5ndGggPT09IDAgKSByZXR1cm4gO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBidWZmZXIgPSBbIF0gO1xuXG5cdFx0Zm9yICggbGV0IHJlc3VsdCBvZiBtYXAoIG5leHQgLCBpdGVyYXRvcnMgKSApIHtcblxuXHRcdFx0aWYgKCByZXN1bHQuZG9uZSApIHJldHVybiA7XG5cblx0XHRcdGJ1ZmZlci5wdXNoKCByZXN1bHQudmFsdWUgKSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBidWZmZXIgO1xuXG5cdH1cblxufVxuIl19