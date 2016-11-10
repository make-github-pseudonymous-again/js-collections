
export const _counter = function ( Counter ) {

	const counter = function ( iterable = null ) {

		return new Counter( iterable ) ;

	} ;

	counter.fromkeys = Counter.fromkeys ;

	return counter ;

} ;
