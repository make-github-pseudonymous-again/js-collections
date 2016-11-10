
export default function _dict ( Dict ) {

	const dict = function ( mapping = null ) {

		return new Dict( mapping ) ;

	} ;

	dict.fromkeys = Dict.fromkeys ;

	return dict ;

}
