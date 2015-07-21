
const _counter = function ( Counter ) {

	const counter = function ( iterable = null ) {

		return new Counter( iterable ) ;

	} ;

	return counter ;

} ;

exports._counter = _counter ;
