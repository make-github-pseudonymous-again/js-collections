
const _chainmap = function ( ChainMap ) {

	const chainmap = function ( ...maps ) {

		return new ChainMap( ...maps ) ;

	} ;

	return chainmap ;

} ;

exports._chainmap = _chainmap ;
