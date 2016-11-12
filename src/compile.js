
export default function compile ( BaseSet , BaseMap , DoublyLinkedList , core ) {

	const Set = core.set._Set( BaseSet ) ;
	const Dict = core.dict.dict._Dict( BaseMap ) ;
	const OrderedDict = core.dict.ordereddict._OrderedDict( Dict , BaseMap , DoublyLinkedList ) ;
	const NamedTuple = core.namedtuple._NamedTuple( Dict , OrderedDict ) ;
	const DefaultDict = core.dict.defaultdict._DefaultDict( Dict , BaseMap ) ;
	const ChainMap = core.chainmap._ChainMap( Dict , Set ) ;
	const Counter = core.counter._Counter( BaseMap , Dict ) ;
	const namedtuple = core.namedtuple._namedtuple( NamedTuple ) ;
	const Deque = core.deque.implementation.Deque ;
	const ArbitrarySizeDeque = core.deque.implementation.ArbitrarySizeDeque ;
	const UnboundedDeque = core.deque.implementation.UnboundedDeque ;
	const BoundedDeque = core.deque.implementation.BoundedDeque ;
	const SingleElementDeque = core.deque.implementation.SingleElementDeque ;
	const EmptyDeque = core.deque.implementation.EmptyDeque ;

	const all = { } ;

	all.bisect = core.bisect ;

	all.heapq = core.heapq ;

	all.Set = Set ;
	all.set = core.set._set( Set ) ;

	all.Mapping = core.mapping ;

	all.Dict = Dict ;
	all.dict = core.dict.dict._dict( Dict ) ;
	all.OrderedDict = OrderedDict ;
	all.ordereddict = core.dict.ordereddict._ordereddict( OrderedDict ) ;
	all.DefaultDict = DefaultDict ;
	all.defaultdict = core.dict.defaultdict._defaultdict( DefaultDict ) ;

	all.ChainMap = ChainMap ;
	all.chainmap = core.chainmap._chainmap( ChainMap ) ;

	all.Counter = Counter ;
	all.counter = core.counter._counter( Counter ) ;

	all.NamedTuple = NamedTuple ;
	all.namedtuple = namedtuple ;

	all.deque = core.deque._deque( UnboundedDeque , BoundedDeque , SingleElementDeque , EmptyDeque ) ;
	all.Deque = Deque ;
	all.ArbitrarySizeDeque = ArbitrarySizeDeque ;
	all.UnboundedDeque = UnboundedDeque ;
	all.BoundedDeque = BoundedDeque ;
	all.SingleElementDeque = SingleElementDeque ;
	all.EmptyDeque = EmptyDeque ;

	all.IndexError = core.error.IndexError ;
	all.KeyError = core.error.KeyError ;
	all.NotImplementedError = core.error.NotImplementedError ;
	all.TypeError = core.error.TypeError ;
	all.ValueError = core.error.ValueError ;

	return all ;

}
