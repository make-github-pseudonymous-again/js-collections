
export default function _defaultdict ( DefaultDict ) {

	const defaultdict = function ( default_factory = null , mapping = null ) {

		return new DefaultDict( default_factory , mapping ) ;

	} ;

	defaultdict.fromkeys = DefaultDict.fromkeys ;

	return defaultdict ;

}
