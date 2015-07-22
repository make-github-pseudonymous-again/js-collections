
const SingleElementDeque = function ( iterable ) {

	this.empty = true ;

	this.value = 0 ;

	if ( iterable !== null ) this.extend( iterable ) ;

} ;

SingleElementDeque.prototype = new Deque( ) ;

SingleElementDeque.prototype.len = function ( ) {

	return this.empty ? 0 : 1 ;

} ;

SingleElementDeque.prototype.values = function* ( ) {

	if ( this.empty ) return ;

	yield this.value ;

} ;

SingleElementDeque.prototype.append =
SingleElementDeque.prototype.appendleft = function ( x ) {

	this.empty = false ;
	this.value = x ;

	return this ;

} ;

SingleElementDeque.prototype.clear = function ( ) {

	this.empty = true ;
	this.value = 0 ;

	return this ;

} ;

SingleElementDeque.prototype.copy = function ( ) {

	return new SingleElementDeque( this ) ;

} ;

SingleElementDeque.prototype.pop =
SingleElementDeque.prototype.popleft = function ( ) {

	if ( this.empty ) throw new IndexError( "pop / popleft" ) ;

	const value = this.value ;

	this.empty = true ;
	this.value = 0 ;

	return value ;

} ;

SingleElementDeque.prototype.get = function ( i ) {

	if ( this.empty || i !== 0 ) throw new IndexError( i ) ;

	return this.value ;

} ;

SingleElementDeque.prototype.set = function ( i , value ) {

	if ( this.empty || i !== 0 ) throw new IndexError( i ) ;

	this.value = value ;

	return this ;

} ;

exports.SingleElementDeque = SingleElementDeque ;
