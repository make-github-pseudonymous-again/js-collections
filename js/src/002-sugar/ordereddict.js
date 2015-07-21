
const _ordereddict = function ( OrderedDict ) {

	const ordereddict = function ( mapping = null ) {

		return new OrderedDict( mapping ) ;

	} ;

	return ordereddict ;

} ;

exports._ordereddict = _ordereddict ;
