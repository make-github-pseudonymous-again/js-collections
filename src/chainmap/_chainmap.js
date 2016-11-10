export default function _chainmap ( ChainMap ) {

	const chainmap = function ( ...maps ) {

		return new ChainMap( ...maps ) ;

	} ;

	chainmap.fromkeys = ChainMap.fromkeys ;

	return chainmap ;

}
