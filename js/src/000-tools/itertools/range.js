
const range = function* ( start , stop , step ) {

	for ( ; start < stop ; start += step ) yield start ;

} ;
