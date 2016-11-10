
export default function _ordereddict ( OrderedDict ) {

	const ordereddict = function ( mapping = null ) {

		return new OrderedDict( mapping ) ;

	} ;

	ordereddict.fromkeys = OrderedDict.fromkeys ;

	return ordereddict ;

}
