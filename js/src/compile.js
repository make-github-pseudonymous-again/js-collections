
const compile = function ( {

	BaseSet , DLL , Map


} ) {

	const Set = exports._Set( BaseSet ) ;
	const Dict = exports._Dict( Map ) ;
	const OrderedDict = exports._OrderedDict( Dict , Map , DLL ) ;
	const NamedTuple = exports._NamedTuple( Dict , OrderedDict ) ;

	return {
		KeyError ,
		Mapping ,
		Set ,
		Dict ,
		OrderedDict ,
		DefaultDict : exports._DefaultDict( Dict , Map ) ,
		ChainMap : exports._ChainMap( Dict , Set ) ,
		Counter : exports._Counter( Map , Dict ) ,
		NamedTuple ,
		namedtuple : exports._namedtuple( NamedTuple ) ,
	} ;

} ;

exports.compile = compile ;
