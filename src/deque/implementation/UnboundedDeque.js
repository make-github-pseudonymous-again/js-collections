import ArbitrarySizeDeque from './ArbitrarySizeDeque' ;

export default function UnboundedDeque ( iterable ) {

	this.growth = 2 ;

	this.minsize = 10 ;

	this.currentsize = this.minsize ;

	this.container = new Array( this.currentsize ) ;

	this.center = 0 ;

	this.length = 0 ;

	if ( iterable !== null ) this.extend( iterable ) ;


}

UnboundedDeque.prototype = new ArbitrarySizeDeque( ) ;

UnboundedDeque.prototype._copy = function ( container ) {

	const len = this.length ;

	for ( let i = 0 ; i < len ; ++i ) container[i] = this.get( i ) ;

} ;

UnboundedDeque.prototype._realloc = function ( newsize ) {

	const container = new Array( newsize ) ;

	this._copy( container ) ;

	this.container = container ;

	this.center = 0 ;

	this.currentsize = newsize ;

} ;


UnboundedDeque.prototype._shrink = function ( ) {

	const newsize = Math.max( this.minsize , this.length * this.growth ) ;

	if ( newsize * this.growth >= this.currentsize ) return ;

	this._realloc( newsize ) ;

} ;

UnboundedDeque.prototype._grow = function ( newlen ) {

	if ( newlen <= this.currentsize ) return ;

	this._realloc( newlen * this.growth ) ;

} ;


UnboundedDeque.prototype.len = function ( ) {

	return this.length ;

} ;

UnboundedDeque.prototype.capacity = function ( ) {

	return this.currentsize ;

} ;


UnboundedDeque.prototype.append = function ( x ) {

	this._grow( this.length + 1 ) ;

	const i = ( this.center + this.length ) % this.currentsize;
	this.container[i] = x ;
	++this.length ;

	return this ;

} ;

UnboundedDeque.prototype.appendleft = function ( x ) {

	this._grow( this.length + 1 ) ;

	--this.center ;
	this.center += this.currentsize;
	this.center %= this.currentsize;
	this.container[this.center] = x ;

	++this.length ;

	return this ;

} ;

UnboundedDeque.prototype.clear = function ( ) {

	this.currentsize = this.minsize ;

	this.container = new Array( this.currentsize ) ;

	this.center = 0 ;

	this.length = 0 ;

	return this ;

} ;

UnboundedDeque.prototype.copy = function ( ) {

	return new UnboundedDeque( this ) ;

} ;

UnboundedDeque.prototype._where = function ( i ) {

	this._checkbounds( i ) ;

	return [ this.container , ( this.center + i ) % this.currentsize] ;

} ;


UnboundedDeque.prototype._popindex = function ( container , index ) {

	const value = container[index] ;

	// GC
	// TODO use null instead of 0 for non-Number deques
	container[index] = 0 ;

	--this.length ;

	this._shrink( ) ;

	return value ;

} ;
