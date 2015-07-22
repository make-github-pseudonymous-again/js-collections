
const compile = function ( {

	BaseSet , DLL , BaseMap

} ) {

	const Set = exports._Set( BaseSet ) ;
	const Dict = exports._Dict( BaseMap ) ;
	const OrderedDict = exports._OrderedDict( Dict , BaseMap , DLL ) ;
	const NamedTuple = exports._NamedTuple( Dict , OrderedDict ) ;
	const DefaultDict = exports._DefaultDict( Dict , BaseMap ) ;
	const ChainMap = exports._ChainMap( Dict , Set ) ;
	const Counter = exports._Counter( BaseMap , Dict ) ;
	const namedtuple = exports._namedtuple( NamedTuple ) ;

	return {
		KeyError ,
		Mapping ,
		Set ,
		set : exports._set( Set ) ,
		Dict ,
		dict : exports._dict( Dict ) ,
		OrderedDict ,
		ordereddict : exports._ordereddict( OrderedDict ) ,
		DefaultDict ,
		defaultdict : exports._defaultdict( DefaultDict ) ,
		ChainMap ,
		chainmap : exports._chainmap( ChainMap ) ,
		Counter ,
		counter : exports._counter( Counter ) ,
		NamedTuple ,
		namedtuple ,
		deque : exports._deque( UnboundedDeque , BoundedDeque , EmptyDeque )
	} ;

} ;

exports.compile = compile ;
