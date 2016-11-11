
export default function compile ( BaseSet , BaseMap , DoublyLinkedList , core ) {

	const Set = core._Set( BaseSet ) ;
	const Dict = core._Dict( BaseMap ) ;
	const OrderedDict = core._OrderedDict( Dict , BaseMap , DoublyLinkedList ) ;
	const NamedTuple = core._NamedTuple( Dict , OrderedDict ) ;
	const DefaultDict = core._DefaultDict( Dict , BaseMap ) ;
	const ChainMap = core._ChainMap( Dict , Set ) ;
	const Counter = core._Counter( BaseMap , Dict ) ;
	const namedtuple = core._namedtuple( NamedTuple ) ;

	const all = { } ;

	all.bisect = bisect ;

	all.heapq = heapq ;

	all.Set = Set ;
	all.set = core._set( Set ) ;

	all.Mapping = Mapping ;

	all.Dict = Dict ;
	all.dict = core._dict( Dict ) ;

	all.OrderedDict = OrderedDict ;
	all.ordereddict = core._ordereddict( OrderedDict ) ;

	all.DefaultDict = DefaultDict ;
	all.defaultdict = core._defaultdict( DefaultDict ) ;

	all.ChainMap = ChainMap ;
	all.chainmap = core._chainmap( ChainMap ) ;

	all.Counter = Counter ;
	all.counter = core._counter( Counter ) ;
	all.NamedTuple = NamedTuple ;
	all.namedtuple = namedtuple ;

	all.deque = core._deque( UnboundedDeque , BoundedDeque , SingleElementDeque , EmptyDeque ) ;
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
