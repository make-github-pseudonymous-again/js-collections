
const _set = function ( Set ) {

	const set = function ( iterable = null ) {

		return new Set( iterable ) ;

	} ;

	set.inclusion = Set.inclusion ;

	return set ;

} ;

exports._set = _set ;
