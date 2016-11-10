import ArbitrarySizeDeque from './ArbitrarySizeDeque' ;

export default function BoundedDeque ( iterable , maxlen ) {

	this.maxlen = maxlen ;

	this.container = new Array( maxlen ) ;

	this.center = 0 ;

	this.length = 0 ;

	if ( iterable !== null ) this.extend( iterable ) ;


}

BoundedDeque.prototype = new ArbitrarySizeDeque( ) ;

BoundedDeque.prototype.len = function ( ) {

	return this.length ;

} ;

BoundedDeque.prototype.capacity = function ( ) {

	return this.maxlen ;

} ;

BoundedDeque.prototype.append = function ( x ) {


	if ( this.length === this.maxlen ) {

		this.container[this.center] = x ;
		++this.center ;
		this.center %= this.maxlen ;

	}

	else {

		const i = ( this.center + this.length ) % this.maxlen ;
		this.container[i] = x ;
		++this.length ;

	}

	return this ;

} ;

BoundedDeque.prototype.appendleft = function ( x ) {

	--this.center ;
	this.center += this.maxlen ;
	this.center %= this.maxlen ;
	this.container[this.center] = x ;

	if ( this.length < this.maxlen ) ++this.length ;

	return this ;

} ;

BoundedDeque.prototype.clear = function ( ) {

	this.center = 0 ;

	this.length = 0 ;

	this.container = new Array( this.maxlen ) ;

	return this ;

} ;

BoundedDeque.prototype.copy = function ( ) {

	return new BoundedDeque( this , this.maxlen ) ;

} ;



BoundedDeque.prototype._where = function ( i ) {

	this._checkbounds( i ) ;

	return [ this.container , ( this.center + i ) % this.maxlen ] ;

} ;


BoundedDeque.prototype._popindex = function ( container , index ) {

	const value = container[index] ;

	// GC
	// TODO use null instead of 0 for non-Number deques
	container[index] = 0 ;

	--this.length ;

	return value ;

} ;
