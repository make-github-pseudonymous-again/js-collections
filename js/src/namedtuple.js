
const NamedTuple = function ( ) { } ;

NamedTuple.prototype = [ ] ;

NamedTuple.replace = function ( Constructor , tuple , dict ) {

	const values = { } ;

	const fields = tuple._fields ;

	for ( let key of fields ) values[key] = tuple[key] ;

	for ( let [ key , value ] of dict ) values[key] = value ;

	return new Constructor( ...[ for ( key of fields ) values[key] ] ) ;

} ;

NamedTuple.asdict = function ( tuple ) {

	const fields = tuple._fields ;

	return new OrderedDict( [ for ( key in fields ) [ key , tuple[key] ] ] ) ;

} ;

const namedtuple = function ( typename , field_names ) {

	const fields = [ ...field_names ] ;

	let definition = "function " ;

	definition += typename ;
	definition += " (" ;

	let fieldlist = "" ;

	if ( fields.length > 0 ) {

		const [ first , ...others ] = fields ;

		fieldlist += first ;

		for ( let field of others ) fieldlist += " , " + field ;

		definition += " " + fieldlist ;

	}

	definition += " )" ;
	definition += " {\n\n" ;

	definition += "\t" + "this._fields = [ " + fieldlist + " ] ;\n" ;

	for ( let i = 0 ; i < fields.length ; ++i ) {

		let field = fields[i] ;

		definition += "\n" ;
		definition += "\t" + "this[" + i + "] = this." + field + " = " + field + " ;" ;

	}

	definition += "\n" ;
	definition += "}" ;
	definition += "\n" ;
	definition += "\n" ;
	definition += typename + ".prototype = new NamedTuple( ) ;\n" ;
	definition += typename + "._make = function ( iterable ) {\n" ;
	definition += "\t" + "return new " + typename + "( ...iterable ) ;\n" ;
	definition += "} ;\n" ;
	definition += typename + ".prototype._replace = function ( dict ) {\n" ;
	definition += "\t" + "return NamedTuple.replace( " + typename + " , this , dict ) ;\n" ;
	definition += "} ;\n" ;
	definition += typename + ".prototype._asdict = function ( ) {\n" ;
	definition += "\t" + "return NamedTuple.asdict( this ) ;\n" ;
	definition += "} ;\n" ;

	console.log( definition ) ;

	return eval( definition ) ;

} ;

exports.namedtuple = namedtuple ;
