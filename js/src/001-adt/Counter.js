
const _Counter = function ( Map , Dict ) {

	const Counter = function ( iterable = null ) {

		this.container = new Map( ) ;

		if ( iterable !== null ) this.update( iterable ) ;

	} ;

	Counter.prototype = new Dict( ) ;

	Counter.prototype.get = function ( key ) {

		if ( this.has( key ) ) return this.container.get( key ) ;

		return 0 ;

	} ;

	Counter.prototype.elements = function* ( ) {

		for ( let [ key , count ] of this ) {

			while ( count --> 0 ) yield key ;

		}

	} ;

	Counter.prototype.increment = function ( key , amount = 1 ) {

		this.set( key , this.get( key ) + amount ) ;

	} ;

	Counter.prototype.decrement = function ( key , amount = 1 ) {

		this.increment( key , -amount ) ;

	} ;

	Counter.prototype.update = function ( iterable ) {

		for ( let key of iterable ) this.increment( key ) ;

	} ;

	Counter.prototype.add = function ( other ) {

		for ( let [ key , count ] of other ) this.increment( key , count ) ;

	} ;

	Counter.prototype.subtract = function ( other ) {

		for ( let [ key , count ] of other ) this.decrement( key , count ) ;

	} ;

	return Counter ;

} ;

exports._Counter = _Counter ;
