
export default function _set ( Set ) {

	const set = function ( iterable = null ) {

		return new Set( iterable ) ;

	} ;

	set.inclusion = Set.inclusion ;

	return set ;

}
