'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.nsmallest = exports.nlargest = exports.merge = exports.heapreplace = exports.heappushpop = exports.heappush = exports.heappop = exports.heapify = exports.core = undefined;

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _heapify = require('./heapify');

var _heapify2 = _interopRequireDefault(_heapify);

var _heappop = require('./heappop');

var _heappop2 = _interopRequireDefault(_heappop);

var _heappush = require('./heappush');

var _heappush2 = _interopRequireDefault(_heappush);

var _heappushpop = require('./heappushpop');

var _heappushpop2 = _interopRequireDefault(_heappushpop);

var _heapreplace = require('./heapreplace');

var _heapreplace2 = _interopRequireDefault(_heapreplace);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _nlargest = require('./nlargest');

var _nlargest2 = _interopRequireDefault(_nlargest);

var _nsmallest = require('./nsmallest');

var _nsmallest2 = _interopRequireDefault(_nsmallest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	core: _core2.default,
	heapify: _heapify2.default,
	heappop: _heappop2.default,
	heappush: _heappush2.default,
	heappushpop: _heappushpop2.default,
	heapreplace: _heapreplace2.default,
	merge: _merge2.default,
	nlargest: _nlargest2.default,
	nsmallest: _nsmallest2.default
};
exports.core = _core2.default;
exports.heapify = _heapify2.default;
exports.heappop = _heappop2.default;
exports.heappush = _heappush2.default;
exports.heappushpop = _heappushpop2.default;
exports.heapreplace = _heapreplace2.default;
exports.merge = _merge2.default;
exports.nlargest = _nlargest2.default;
exports.nsmallest = _nsmallest2.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb3JlIiwiaGVhcGlmeSIsImhlYXBwb3AiLCJoZWFwcHVzaCIsImhlYXBwdXNocG9wIiwiaGVhcHJlcGxhY2UiLCJtZXJnZSIsIm5sYXJnZXN0IiwibnNtYWxsZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDZEEscUJBRGM7QUFFZEMsMkJBRmM7QUFHZEMsMkJBSGM7QUFJZEMsNkJBSmM7QUFLZEMsbUNBTGM7QUFNZEMsbUNBTmM7QUFPZEMsdUJBUGM7QUFRZEMsNkJBUmM7QUFTZEM7QUFUYyxDO1FBYWRSLEk7UUFDQUMsTztRQUNBQyxPO1FBQ0FDLFE7UUFDQUMsVztRQUNBQyxXO1FBQ0FDLEs7UUFDQUMsUTtRQUNBQyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJyA7XG5pbXBvcnQgaGVhcGlmeSBmcm9tICcuL2hlYXBpZnknIDtcbmltcG9ydCBoZWFwcG9wIGZyb20gJy4vaGVhcHBvcCcgO1xuaW1wb3J0IGhlYXBwdXNoIGZyb20gJy4vaGVhcHB1c2gnIDtcbmltcG9ydCBoZWFwcHVzaHBvcCBmcm9tICcuL2hlYXBwdXNocG9wJyA7XG5pbXBvcnQgaGVhcHJlcGxhY2UgZnJvbSAnLi9oZWFwcmVwbGFjZScgO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnIDtcbmltcG9ydCBubGFyZ2VzdCBmcm9tICcuL25sYXJnZXN0JyA7XG5pbXBvcnQgbnNtYWxsZXN0IGZyb20gJy4vbnNtYWxsZXN0JyA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29yZSAsXG5cdGhlYXBpZnkgLFxuXHRoZWFwcG9wICxcblx0aGVhcHB1c2ggLFxuXHRoZWFwcHVzaHBvcCAsXG5cdGhlYXByZXBsYWNlICxcblx0bWVyZ2UgLFxuXHRubGFyZ2VzdCAsXG5cdG5zbWFsbGVzdCAsXG59IDtcblxuZXhwb3J0IHtcblx0Y29yZSAsXG5cdGhlYXBpZnkgLFxuXHRoZWFwcG9wICxcblx0aGVhcHB1c2ggLFxuXHRoZWFwcHVzaHBvcCAsXG5cdGhlYXByZXBsYWNlICxcblx0bWVyZ2UgLFxuXHRubGFyZ2VzdCAsXG5cdG5zbWFsbGVzdCAsXG59IDtcbiJdfQ==