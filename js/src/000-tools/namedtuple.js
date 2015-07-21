
const _namedtuple = function ( NamedTuple ) {

	const namedtuple = function ( typename , field_names ) {

		const fields = [ ...field_names ] ;

		let definition = "( function ( ) {\n\nvar " + typename + " = function (" ;

		definition += " " + fields.join( " , " ) ;

		definition += " )" ;
		definition += " {\n\n" ;

		let fieldlist = [ for ( field of fields ) '"' + field + '" ' ] ;

		definition += "\t" + "this._fields = [ " + fieldlist.join( ", " ) + "] ;\n" ;

		for ( let i = 0 ; i < fields.length ; ++i ) {

			let field = fields[i] ;

			definition += "\n" ;
			definition += "\t" + "this[" + i + "] = this." + field + " = " + field + " ;" ;

		}

		definition += "\n} ;\n\n" ;

		definition += typename + ".prototype = new NamedTuple( ) ;\n\n" ;
		definition += typename + "._make = function ( iterable ) {\n" ;
		definition += "\t" + "return NamedTuple.make( " + typename + " , iterable ) ;\n" ;
		definition += "} ;\n\n" ;
		definition += typename + ".prototype._replace = function ( dict ) {\n" ;
		definition += "\t" + "return NamedTuple.replace( " + typename + " , this , dict ) ;\n" ;
		definition += "} ;\n\n" ;
		definition += typename + ".prototype._asdict = function ( ) {\n" ;
		definition += "\t" + "return NamedTuple.asdict( this ) ;\n" ;
		definition += "} ;\n\n" ;
		definition += typename + ".prototype[Symbol.iterator] = function ( ) {\n" ;
		definition += "\t" + "return this.slice( )[Symbol.iterator]( ) ;\n" ;
		definition += "} ;\n\n" ;

		definition += "return " + typename + " ;\n\n} )( )" ;

		console.log( definition ) ;

		return eval( definition ) ;

	} ;

	return namedtuple ;

} ;

exports._namedtuple = _namedtuple ;
