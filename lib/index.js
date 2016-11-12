'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UnboundedDeque = exports.SingleElementDeque = exports.EmptyDeque = exports.Deque = exports.BoundedDeque = exports.ArbitrarySizeDeque = exports.set = exports.namedtuple = exports.Mapping = exports.heapq = exports.defaultdict = exports.ordereddict = exports.dict = exports.deque = exports.counter = exports.chainmap = exports.bisect = undefined;

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
    UnboundedDeque = collections.UnboundedDeque;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9ucyIsIlNldCIsIk1hcCIsImJpc2VjdCIsImNoYWlubWFwIiwiY291bnRlciIsImRlcXVlIiwiZGljdCIsIm9yZGVyZWRkaWN0IiwiZGVmYXVsdGRpY3QiLCJoZWFwcSIsIk1hcHBpbmciLCJuYW1lZHR1cGxlIiwic2V0IiwiQXJiaXRyYXJ5U2l6ZURlcXVlIiwiQm91bmRlZERlcXVlIiwiRGVxdWUiLCJFbXB0eURlcXVlIiwiU2luZ2xlRWxlbWVudERlcXVlIiwiVW5ib3VuZGVkRGVxdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLHVCQUFTQyxHQUFULEVBQWVDLEdBQWYsa0RBQXBCOztrQkFFZUYsVztJQUdkRyxNLEdBbUJHSCxXLENBbkJIRyxNO0lBQ0FDLFEsR0FrQkdKLFcsQ0FsQkhJLFE7SUFDQUMsTyxHQWlCR0wsVyxDQWpCSEssTztJQUNBQyxLLEdBZ0JHTixXLENBaEJITSxLO0lBQ0FDLEksR0FlR1AsVyxDQWZITyxJO0lBQ0FDLFcsR0FjR1IsVyxDQWRIUSxXO0lBQ0FDLFcsR0FhR1QsVyxDQWJIUyxXO0lBQ0FDLEssR0FZR1YsVyxDQVpIVSxLO0lBQ0FDLE8sR0FXR1gsVyxDQVhIVyxPO0lBQ0FDLFUsR0FVR1osVyxDQVZIWSxVO0lBQ0FDLEcsR0FTR2IsVyxDQVRIYSxHO0lBRUFDLGtCLEdBT0dkLFcsQ0FQSGMsa0I7SUFDQUMsWSxHQU1HZixXLENBTkhlLFk7SUFDQUMsSyxHQUtHaEIsVyxDQUxIZ0IsSztJQUNBQyxVLEdBSUdqQixXLENBSkhpQixVO0lBQ0FDLGtCLEdBR0dsQixXLENBSEhrQixrQjtJQUNBQyxjLEdBRUduQixXLENBRkhtQixjO1FBS0FoQixNLEdBQUFBLE07UUFDQUMsUSxHQUFBQSxRO1FBQ0FDLE8sR0FBQUEsTztRQUNBQyxLLEdBQUFBLEs7UUFDQUMsSSxHQUFBQSxJO1FBQ0FDLFcsR0FBQUEsVztRQUNBQyxXLEdBQUFBLFc7UUFDQUMsSyxHQUFBQSxLO1FBQ0FDLE8sR0FBQUEsTztRQUNBQyxVLEdBQUFBLFU7UUFDQUMsRyxHQUFBQSxHO1FBRUFDLGtCLEdBQUFBLGtCO1FBQ0FDLFksR0FBQUEsWTtRQUNBQyxLLEdBQUFBLEs7UUFDQUMsVSxHQUFBQSxVO1FBQ0FDLGtCLEdBQUFBLGtCO1FBQ0FDLGMsR0FBQUEsYyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdWJseUxpbmtlZExpc3QgfSBmcm9tICdhdXJlb29tcy1qcy1kbGwnIDtcbmltcG9ydCBjb21waWxlIGZyb20gJy4vY29tcGlsZScgO1xuaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJyA7XG5cbmNvbnN0IGNvbGxlY3Rpb25zID0gY29tcGlsZSggU2V0ICwgTWFwICwgRG91Ymx5TGlua2VkTGlzdCAsIGNvcmUgKSA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxlY3Rpb25zIDtcblxuY29uc3Qge1xuXHRiaXNlY3QgLFxuXHRjaGFpbm1hcCAsXG5cdGNvdW50ZXIgLFxuXHRkZXF1ZSAsXG5cdGRpY3QgLFxuXHRvcmRlcmVkZGljdCAsXG5cdGRlZmF1bHRkaWN0ICxcblx0aGVhcHEgLFxuXHRNYXBwaW5nICxcblx0bmFtZWR0dXBsZSAsXG5cdHNldCAsXG5cblx0QXJiaXRyYXJ5U2l6ZURlcXVlICxcblx0Qm91bmRlZERlcXVlICxcblx0RGVxdWUgLFxuXHRFbXB0eURlcXVlICxcblx0U2luZ2xlRWxlbWVudERlcXVlICxcblx0VW5ib3VuZGVkRGVxdWUgLFxuXG59ID0gY29sbGVjdGlvbnMgO1xuXG5leHBvcnQge1xuXHRiaXNlY3QgLFxuXHRjaGFpbm1hcCAsXG5cdGNvdW50ZXIgLFxuXHRkZXF1ZSAsXG5cdGRpY3QgLFxuXHRvcmRlcmVkZGljdCAsXG5cdGRlZmF1bHRkaWN0ICxcblx0aGVhcHEgLFxuXHRNYXBwaW5nICxcblx0bmFtZWR0dXBsZSAsXG5cdHNldCAsXG5cblx0QXJiaXRyYXJ5U2l6ZURlcXVlICxcblx0Qm91bmRlZERlcXVlICxcblx0RGVxdWUgLFxuXHRFbXB0eURlcXVlICxcblx0U2luZ2xlRWxlbWVudERlcXVlICxcblx0VW5ib3VuZGVkRGVxdWUgLFxuXG59IDtcbiJdfQ==