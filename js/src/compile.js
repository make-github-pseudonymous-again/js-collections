
const compile = function ( {

	BaseSet , DLL , Map


} ) {

	const Set = exports._Set( BaseSet ) ;
	const Dict = exports._Dict( Map ) ;
	const OrderedDict = exports._OrderedDict( Dict , Map , DLL ) ;
	const NamedTuple = exports._NamedTuple( OrderedDict ) ;

	return {
		KeyError ,
		Mapping ,
		Set ,
		Dict ,
		OrderedDict ,
		ChainMap : exports._ChainMap( Set ) ,
		Counter : exports._Counter( Map , Dict ) ,
		NamedTuple ,
		namedtuple : exports._namedtuple( NamedTuple ) ,

	} ;



} ;
