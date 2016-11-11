
export default function compile ( BaseSet , BaseMap , DoublyLinkedList , core ) {

	const Set = core.set._Set( BaseSet ) ;
	const Dict = core.dict.dict._Dict( BaseMap ) ;
	const OrderedDict = core.dict.ordereddict._OrderedDict( Dict , BaseMap , DoublyLinkedList ) ;
	const NamedTuple = core.namedtuple._NamedTuple( Dict , OrderedDict ) ;
	const DefaultDict = core.dict.defaultdict._DefaultDict( Dict , BaseMap ) ;
	const ChainMap = core.chainmap._ChainMap( Dict , Set ) ;
	const Counter = core.counter._Counter( BaseMap , Dict ) ;
	const namedtuple = core.namedtuple._namedtuple( NamedTuple ) ;

	const all = { } ;

	all.bisect = core.bisect ;

	all.heapq = core.heapq ;

	all.Set = Set ;
	all.set = core.set._set( Set ) ;

	all.Mapping = core.mapping ;

	all.Dict = Dict ;
	all.dict = core.dict.dict_dict( Dict ) ;
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
	all.UnboundedDeque = UnboundedDeque ;
	all.BoundedDeque = BoundedDeque ;
	all.SingleElementDeque = SingleElementDeque ;
	all.EmptyDeque = EmptyDeque ;

	all.IndexError = IndexError ;
	all.KeyError = KeyError ;
	all.NotImplementedError = NotImplementedError ;
	all.TypeError = TypeError ;
	all.ValueError = ValueError ;

	return all ;

}
