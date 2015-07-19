
const Counter = function ( container , mapping , iterable ) {

	this.container = container ;

	for ( let [ key , value ] of mapping ) this.container.set( key , value ) ;

	for ( let key of iterable ) {

		if ( !this.container.has( key ) ) this.container.set( key , 1 ) ;
		else  this.container.set( key , this.container.get( key ) + 1 ) ;

	}

} ;

Counter.prototype[Symbol.iterator] = function* ( ) {

	yield* this.container ;

} ;

Counter.prototype.get = function ( key ) {

	if ( !this.container.has( key ) ) return 0 ;

	return this.container.get( key ) ;

} ;

Counter.prototype.elements = function* ( ) {

	for ( let [ key , count ] of this.container ) {

		while ( count-- ) yield key ;

	}

} ;












