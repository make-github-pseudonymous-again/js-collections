
const _NamedTuple = function ( OrderedDict ) {

	const NamedTuple = function ( ) { } ;

	NamedTuple.prototype = [ ] ;

	NamedTuple.make = function ( Constructor , iterable ) {

		return new Constructor( ...iterable ) ;

	} ;

	NamedTuple.replace = function ( Constructor , tuple , dict ) {

		const values = { } ;

		const fields = tuple._fields ;

		for ( let key of fields ) values[key] = tuple[key] ;

		for ( let [ key , value ] of dict ) values[key] = value ;

		return new Constructor( ...[ for ( key of fields ) values[key] ] ) ;

	} ;

	NamedTuple.asdict = function ( tuple ) {

		const fields = tuple._fields ;

		return new OrderedDict( [ for ( key of fields ) [ key , tuple[key] ] ] ) ;

	} ;

	return NamedTuple ;

} ;

exports._NamedTuple = _NamedTuple ;
