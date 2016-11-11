
export default function _NamedTuple ( Dict , OrderedDict ) {

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

		return new Constructor( ...fields.map( key => values.get( key ) ) ) ;

	} ;

	NamedTuple.asdict = function ( tuple ) {

		const fields = tuple._fields ;

		return new OrderedDict( fields.map( key => [ key , tuple[key] ] ) ) ;

	} ;

	return NamedTuple ;

}
