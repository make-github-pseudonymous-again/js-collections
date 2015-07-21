
const _dict = function ( Dict ) {

	const dict = function ( mapping = null ) {

		return new Dict( mapping ) ;

	} ;

	return dict ;

} ;

exports._dict = _dict ;
