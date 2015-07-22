
const Mapping = { } ;

Mapping.fromkeys = function* ( seq , value ) {

	for ( let key of seq ) yield [ key , value ] ;

} ;

exports.Mapping = Mapping ;
