
const EmptyDeque = function ( iterable ) {

	if ( iterable !== null ) this.extend( iterable ) ;

} ;

EmptyDeque.prototype = new Deque( ) ;

EmptyDeque.prototype.len = function ( ) {

	return 0 ;

} ;

EmptyDeque.prototype.capacity = function ( ) {

	return 0 ;

} ;

EmptyDeque.prototype.values = function ( ) {

	return { next : function ( ) { return { done : true } ; } } ;

} ;

EmptyDeque.prototype.append = function ( x ) {

	return this ;

} ;

EmptyDeque.prototype.appendleft = function ( x ) {

	return this ;

} ;

EmptyDeque.prototype.clear = function ( ) {

	return this ;

} ;

EmptyDeque.prototype.copy = function ( ) {

	return new EmptyDeque( this ) ;

} ;

EmptyDeque.prototype._where = function ( i ) {

	throw new IndexError( i ) ;

} ;

EmptyDeque.prototype.pop =
EmptyDeque.prototype.popleft = function ( ) {

	throw new IndexError( "pop / popleft" ) ;

} ;

exports.EmptyDeque = EmptyDeque ;
