
const _chainmap = function ( ChainMap ) {

	const chainmap = function ( ...maps ) {

		return new ChainMap( ...maps ) ;

	} ;

	chainmap.fromkeys = ChainMap.fromkeys ;

	return chainmap ;

} ;

exports._chainmap = _chainmap ;
