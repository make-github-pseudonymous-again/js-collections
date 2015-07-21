
const Mapping = { } ;

Mapping.fromkeys = function* ( seq , value = null ) {

	for ( let key of seq ) yield [ key , value ] ;

} ;

exports.Mapping = Mapping ;
