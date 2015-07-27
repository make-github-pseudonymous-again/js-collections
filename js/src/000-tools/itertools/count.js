
const count = function* ( start , step ) {

	while ( true ) {

		yield start ;

		start += step ;

	}

} ;
