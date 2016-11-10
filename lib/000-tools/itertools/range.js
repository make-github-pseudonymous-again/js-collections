"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var range = exports.range = regeneratorRuntime.mark(function range(start, stop, step) {
	return regeneratorRuntime.wrap(function range$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(start < stop)) {
						_context.next = 6;
						break;
					}

					_context.next = 3;
					return start;

				case 3:
					start += step;
					_context.next = 0;
					break;

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, range, this);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMDAtdG9vbHMvaXRlcnRvb2xzL3JhbmdlLmpzIl0sIm5hbWVzIjpbInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxJQUFNQSxnREFBUSxTQUFSQSxLQUFRLENBQVlDLEtBQVosRUFBb0JDLElBQXBCLEVBQTJCQyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFWkYsUUFBUUMsSUFGSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBRXlCRCxLQUZ6Qjs7QUFBQTtBQUVHQSxjQUFTRSxJQUZaO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUkgsS0FBUTtBQUFBLENBQVIsQ0FBTiIsImZpbGUiOiJyYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IHJhbmdlID0gZnVuY3Rpb24qICggc3RhcnQgLCBzdG9wICwgc3RlcCApIHtcblxuXHRmb3IgKCA7IHN0YXJ0IDwgc3RvcCA7IHN0YXJ0ICs9IHN0ZXAgKSB5aWVsZCBzdGFydCA7XG5cbn0gO1xuIl19