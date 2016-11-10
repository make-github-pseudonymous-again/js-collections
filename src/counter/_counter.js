
export default function _counter ( Counter ) {

	const counter = function ( iterable = null ) {

		return new Counter( iterable ) ;

	} ;

	counter.fromkeys = Counter.fromkeys ;

	return counter ;

} ;
