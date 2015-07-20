
const NamedTuple = function ( ) { } ;

NamedTuple.prototype = [ ] ;

const namedtuple = function ( typename , field_names ) {

	const fields = [ ...field_names ] ;

	if ( fields.length === 0 ) return eval( "function " + typename + " ( ) { }" ) ;

	let definition = "function " ;

	definition += typename ;
	definition += " (" ;

	const [ first , ...others ] = fields ;

	definition += " " + first ;

	for ( let field of others ) definition += " , " + field ;

	definition += " )" ;
	definition += " {" ;

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

	return eval( definition ) ;

} ;

exports.namedtuple = namedtuple ;
