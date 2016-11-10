
export const _ordereddict = function ( OrderedDict ) {

	const ordereddict = function ( mapping = null ) {

		return new OrderedDict( mapping ) ;

	} ;

	ordereddict.fromkeys = OrderedDict.fromkeys ;

	return ordereddict ;

} ;

