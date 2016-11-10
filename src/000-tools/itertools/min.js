
/**
 * Returns the smallest element of an iterable according
 * to some comparison function.
 */

const min = function ( compare , iterable , dflt ) {

	const iterator = iter( iterable ) ;

	const first = next( iterator ) ;

	if ( first.done ) return dflt ;

	let smallest = first.value ;

	for ( let candidate of iterator ) {

		if ( compare( candidate , smallest ) < 0 ) {

			smallest = candidate ;

		}

	}

	return smallest ;

} ;
