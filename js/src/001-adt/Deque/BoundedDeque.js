
const BoundedDeque = function ( iterable , maxlen ) {

	this.maxlen = maxlen ;

	this.container = new Array( maxlen ) ;

	this.center = 0 ;

	this.length = 0 ;

	if ( iterable !== null ) this.extend( iterable ) ;


} ;

BoundedDeque.prototype = new Deque( ) ;

BoundedDeque.prototype.len = function ( ) {

	return this.length ;

} ;

BoundedDeque.prototype.values = function* ( ) {

	let i = this.center ;
	const _m = ( i + this.length ) ;
	const m = Math.min( this.maxlen , _m ) ;

	for ( ; i < m ; ++i ) yield this.container[i] ;

	const n = _m % this.maxlen ;

	if ( n < _m ) for ( i = 0 ; i < n ; ++i ) yield this.container[i] ;

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
	container[index] = 0 ;

	--this.length ;

	return value ;

} ;

BoundedDeque.prototype.pop = function ( ) {

	const [ container , index ] = this._where( this.length - 1 ) ;

	return this._popindex( container , index ) ;

} ;

BoundedDeque.prototype.popleft = function ( ) {

	const [ container , index ] = this._where( 0 ) ;

	++this.center ;
	this.center %= this.maxlen ;

	return this._popindex( container , index ) ;

} ;

exports.BoundedDeque = BoundedDeque ;
