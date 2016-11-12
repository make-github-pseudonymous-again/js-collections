'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ValueError = exports.TypeError = exports.NotImplementedError = exports.KeyError = exports.IndexError = exports.UnboundedDeque = exports.SingleElementDeque = exports.EmptyDeque = exports.Deque = exports.BoundedDeque = exports.ArbitrarySizeDeque = exports.set = exports.namedtuple = exports.Mapping = exports.heapq = exports.defaultdict = exports.ordereddict = exports.dict = exports.deque = exports.counter = exports.chainmap = exports.bisect = undefined;

var _aureoomsJsDll = require('aureooms-js-dll');

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collections = (0, _compile2.default)(Set, Map, _aureoomsJsDll.DoublyLinkedList, _core2.default);

exports.default = collections;
var bisect = collections.bisect,
    chainmap = collections.chainmap,
    counter = collections.counter,
    deque = collections.deque,
    dict = collections.dict,
    ordereddict = collections.ordereddict,
    defaultdict = collections.defaultdict,
    heapq = collections.heapq,
    Mapping = collections.Mapping,
    namedtuple = collections.namedtuple,
    set = collections.set,
    ArbitrarySizeDeque = collections.ArbitrarySizeDeque,
    BoundedDeque = collections.BoundedDeque,
    Deque = collections.Deque,
    EmptyDeque = collections.EmptyDeque,
    SingleElementDeque = collections.SingleElementDeque,
    UnboundedDeque = collections.UnboundedDeque,
    IndexError = collections.IndexError,
    KeyError = collections.KeyError,
    NotImplementedError = collections.NotImplementedError,
    TypeError = collections.TypeError,
    ValueError = collections.ValueError;
exports.bisect = bisect;
exports.chainmap = chainmap;
exports.counter = counter;
exports.deque = deque;
exports.dict = dict;
exports.ordereddict = ordereddict;
exports.defaultdict = defaultdict;
exports.heapq = heapq;
exports.Mapping = Mapping;
exports.namedtuple = namedtuple;
exports.set = set;
exports.ArbitrarySizeDeque = ArbitrarySizeDeque;
exports.BoundedDeque = BoundedDeque;
exports.Deque = Deque;
exports.EmptyDeque = EmptyDeque;
exports.SingleElementDeque = SingleElementDeque;
exports.UnboundedDeque = UnboundedDeque;
exports.IndexError = IndexError;
exports.KeyError = KeyError;
exports.NotImplementedError = NotImplementedError;
exports.TypeError = TypeError;
exports.ValueError = ValueError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9ucyIsIlNldCIsIk1hcCIsImJpc2VjdCIsImNoYWlubWFwIiwiY291bnRlciIsImRlcXVlIiwiZGljdCIsIm9yZGVyZWRkaWN0IiwiZGVmYXVsdGRpY3QiLCJoZWFwcSIsIk1hcHBpbmciLCJuYW1lZHR1cGxlIiwic2V0IiwiQXJiaXRyYXJ5U2l6ZURlcXVlIiwiQm91bmRlZERlcXVlIiwiRGVxdWUiLCJFbXB0eURlcXVlIiwiU2luZ2xlRWxlbWVudERlcXVlIiwiVW5ib3VuZGVkRGVxdWUiLCJJbmRleEVycm9yIiwiS2V5RXJyb3IiLCJOb3RJbXBsZW1lbnRlZEVycm9yIiwiVHlwZUVycm9yIiwiVmFsdWVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsdUJBQVNDLEdBQVQsRUFBZUMsR0FBZixrREFBcEI7O2tCQUVlRixXO0lBSWRHLE0sR0F5QkdILFcsQ0F6QkhHLE07SUFDQUMsUSxHQXdCR0osVyxDQXhCSEksUTtJQUNBQyxPLEdBdUJHTCxXLENBdkJISyxPO0lBQ0FDLEssR0FzQkdOLFcsQ0F0QkhNLEs7SUFDQUMsSSxHQXFCR1AsVyxDQXJCSE8sSTtJQUNBQyxXLEdBb0JHUixXLENBcEJIUSxXO0lBQ0FDLFcsR0FtQkdULFcsQ0FuQkhTLFc7SUFDQUMsSyxHQWtCR1YsVyxDQWxCSFUsSztJQUNBQyxPLEdBaUJHWCxXLENBakJIVyxPO0lBQ0FDLFUsR0FnQkdaLFcsQ0FoQkhZLFU7SUFDQUMsRyxHQWVHYixXLENBZkhhLEc7SUFFQUMsa0IsR0FhR2QsVyxDQWJIYyxrQjtJQUNBQyxZLEdBWUdmLFcsQ0FaSGUsWTtJQUNBQyxLLEdBV0doQixXLENBWEhnQixLO0lBQ0FDLFUsR0FVR2pCLFcsQ0FWSGlCLFU7SUFDQUMsa0IsR0FTR2xCLFcsQ0FUSGtCLGtCO0lBQ0FDLGMsR0FRR25CLFcsQ0FSSG1CLGM7SUFFQUMsVSxHQU1HcEIsVyxDQU5Ib0IsVTtJQUNBQyxRLEdBS0dyQixXLENBTEhxQixRO0lBQ0FDLG1CLEdBSUd0QixXLENBSkhzQixtQjtJQUNBQyxTLEdBR0d2QixXLENBSEh1QixTO0lBQ0FDLFUsR0FFR3hCLFcsQ0FGSHdCLFU7UUFNQXJCLE0sR0FBQUEsTTtRQUNBQyxRLEdBQUFBLFE7UUFDQUMsTyxHQUFBQSxPO1FBQ0FDLEssR0FBQUEsSztRQUNBQyxJLEdBQUFBLEk7UUFDQUMsVyxHQUFBQSxXO1FBQ0FDLFcsR0FBQUEsVztRQUNBQyxLLEdBQUFBLEs7UUFDQUMsTyxHQUFBQSxPO1FBQ0FDLFUsR0FBQUEsVTtRQUNBQyxHLEdBQUFBLEc7UUFFQUMsa0IsR0FBQUEsa0I7UUFDQUMsWSxHQUFBQSxZO1FBQ0FDLEssR0FBQUEsSztRQUNBQyxVLEdBQUFBLFU7UUFDQUMsa0IsR0FBQUEsa0I7UUFDQUMsYyxHQUFBQSxjO1FBRUFDLFUsR0FBQUEsVTtRQUNBQyxRLEdBQUFBLFE7UUFDQUMsbUIsR0FBQUEsbUI7UUFDQUMsUyxHQUFBQSxTO1FBQ0FDLFUsR0FBQUEsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdWJseUxpbmtlZExpc3QgfSBmcm9tICdhdXJlb29tcy1qcy1kbGwnIDtcbmltcG9ydCBjb21waWxlIGZyb20gJy4vY29tcGlsZScgO1xuaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJyA7XG5cbmNvbnN0IGNvbGxlY3Rpb25zID0gY29tcGlsZSggU2V0ICwgTWFwICwgRG91Ymx5TGlua2VkTGlzdCAsIGNvcmUgKSA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxlY3Rpb25zIDtcblxuY29uc3Qge1xuXG5cdGJpc2VjdCAsXG5cdGNoYWlubWFwICxcblx0Y291bnRlciAsXG5cdGRlcXVlICxcblx0ZGljdCAsXG5cdG9yZGVyZWRkaWN0ICxcblx0ZGVmYXVsdGRpY3QgLFxuXHRoZWFwcSAsXG5cdE1hcHBpbmcgLFxuXHRuYW1lZHR1cGxlICxcblx0c2V0ICxcblxuXHRBcmJpdHJhcnlTaXplRGVxdWUgLFxuXHRCb3VuZGVkRGVxdWUgLFxuXHREZXF1ZSAsXG5cdEVtcHR5RGVxdWUgLFxuXHRTaW5nbGVFbGVtZW50RGVxdWUgLFxuXHRVbmJvdW5kZWREZXF1ZSAsXG5cblx0SW5kZXhFcnJvciAsXG5cdEtleUVycm9yICxcblx0Tm90SW1wbGVtZW50ZWRFcnJvciAsXG5cdFR5cGVFcnJvciAsXG5cdFZhbHVlRXJyb3IgLFxuXG59ID0gY29sbGVjdGlvbnMgO1xuXG5leHBvcnQge1xuXG5cdGJpc2VjdCAsXG5cdGNoYWlubWFwICxcblx0Y291bnRlciAsXG5cdGRlcXVlICxcblx0ZGljdCAsXG5cdG9yZGVyZWRkaWN0ICxcblx0ZGVmYXVsdGRpY3QgLFxuXHRoZWFwcSAsXG5cdE1hcHBpbmcgLFxuXHRuYW1lZHR1cGxlICxcblx0c2V0ICxcblxuXHRBcmJpdHJhcnlTaXplRGVxdWUgLFxuXHRCb3VuZGVkRGVxdWUgLFxuXHREZXF1ZSAsXG5cdEVtcHR5RGVxdWUgLFxuXHRTaW5nbGVFbGVtZW50RGVxdWUgLFxuXHRVbmJvdW5kZWREZXF1ZSAsXG5cblx0SW5kZXhFcnJvciAsXG5cdEtleUVycm9yICxcblx0Tm90SW1wbGVtZW50ZWRFcnJvciAsXG5cdFR5cGVFcnJvciAsXG5cdFZhbHVlRXJyb3IgLFxuXG59IDtcbiJdfQ==