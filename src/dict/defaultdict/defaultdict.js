
export const _defaultdict = function ( DefaultDict ) {

	const defaultdict = function ( default_factory = null , mapping = null ) {

		return new DefaultDict( default_factory , mapping ) ;

	} ;

	defaultdict.fromkeys = DefaultDict.fromkeys ;

	return defaultdict ;

} ;

