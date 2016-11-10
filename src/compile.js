
export default function compile ( BaseSet , BaseMap , DLL , exports = { } ) {

	const Set = exports._Set( BaseSet ) ;
	const Dict = exports._Dict( BaseMap ) ;
	const OrderedDict = exports._OrderedDict( Dict , BaseMap , DLL ) ;
	const NamedTuple = exports._NamedTuple( Dict , OrderedDict ) ;
	const DefaultDict = exports._DefaultDict( Dict , BaseMap ) ;
	const ChainMap = exports._ChainMap( Dict , Set ) ;
	const Counter = exports._Counter( BaseMap , Dict ) ;
	const namedtuple = exports._namedtuple( NamedTuple ) ;

	exports.bisect = bisect ;

	exports.heapq = heapq ;

	exports.Set = Set ;
	exports.set = exports._set( Set ) ;

	exports.Mapping = Mapping ;

	exports.Dict = Dict ;
	exports.dict = exports._dict( Dict ) ;

	exports.OrderedDict = OrderedDict ;
	exports.ordereddict = exports._ordereddict( OrderedDict ) ;

	exports.DefaultDict = DefaultDict ;
	exports.defaultdict = exports._defaultdict( DefaultDict ) ;

	exports.ChainMap = ChainMap ;
	exports.chainmap = exports._chainmap( ChainMap ) ;

	exports.Counter = Counter ;
	exports.counter = exports._counter( Counter ) ;
	exports.NamedTuple = NamedTuple ;
	exports.namedtuple = namedtuple ;

	exports.deque = exports._deque( UnboundedDeque , BoundedDeque , SingleElementDeque , EmptyDeque ) ;
	exports.Deque = Deque ;
	exports.UnboundedDeque = UnboundedDeque ;
	exports.BoundedDeque = BoundedDeque ;
	exports.SingleElementDeque = SingleElementDeque ;
	exports.EmptyDeque = EmptyDeque ;

	exports.IndexError = IndexError ;
	exports.KeyError = KeyError ;
	exports.NotImplementedError = NotImplementedError ;
	exports.TypeError = exports.TypeError ;
	exports.ValueError = ValueError ;

	return exports ;

}
