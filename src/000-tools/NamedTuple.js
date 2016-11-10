
const _NamedTuple = function ( Dict , OrderedDict ) {

	const NamedTuple = function ( ) { } ;

	NamedTuple.prototype = [ ] ;

	NamedTuple.make = function ( Constructor , iterable ) {

		return new Constructor( ...iterable ) ;

	} ;

	NamedTuple.replace = function ( Constructor , tuple , dict ) {

		const values = new Dict( ) ;

		const fields = tuple._fields ;

		for ( let key of fields ) values.set( key , tuple[key] ) ;

		for ( let [ key , value ] of dict ) values.set( key , value ) ;

		return new Constructor( ...[ for ( key of fields ) values.get( key ) ] ) ;

	} ;

	NamedTuple.asdict = function ( tuple ) {

		const fields = tuple._fields ;

		return new OrderedDict( [ for ( key of fields ) [ key , tuple[key] ] ] ) ;

	} ;

	return NamedTuple ;

} ;

exports._NamedTuple = _NamedTuple ;
