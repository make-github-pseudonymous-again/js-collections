
const Deque = function ( ) { } ;

Deque.prototype.len = function ( ) {

	throw new NotImplementedError( "len" ) ;

} ;

Deque.prototype.empty = function ( ) {

	return this.len( ) === 0 ;

} ;

Deque.prototype[Symbol.iterator] = function ( ) {

	return this.values( ) ;

} ;

Deque.prototype.values = function ( ) {

	throw new NotImplementedError( "values" ) ;

} ;

Deque.prototype.append = function ( x ) {

	throw new NotImplementedError( "append" ) ;

} ;

Deque.prototype.appendleft = function ( x ) {

	throw new NotImplementedError( "appendleft" ) ;

} ;

Deque.prototype.clear = function ( ) {

	while ( !this.empty( ) ) this.pop( ) ;

	return this ;

} ;

Deque.prototype.copy = function ( ) {

	throw new NotImplementedError( "copy" ) ;

} ;


Deque.prototype.count = function ( x ) {

	let c = 0 ;

	for ( let element of this ) if ( element === x ) ++c ;

	return c ;

} ;

Deque.prototype.extend = function ( iterable ) {

	for ( let x of iterable ) this.append( x ) ;

	return this ;

} ;

Deque.prototype.extendleft = function ( iterable ) {

	for ( let x of iterable ) this.appendleft( x ) ;

	return this ;

} ;

Deque.prototype._checkbounds = function ( i ) {

	if ( i < 0 || i >= this.len( ) ) throw new IndexError( i ) ;

} ;


Deque.prototype._where = function ( i ) {

	throw new NotImplementedError( "_where" ) ;

} ;

Deque.prototype.get = function ( i ) {

	const [ container , index ] = this._where( i ) ;

	return container[index] ;

} ;

Deque.prototype.set = function ( i , value ) {

	const [ container , index ] = this._where( i ) ;

	container[index] = value ;

	return this ;

} ;

Deque.prototype._range = function* ( start = 0 , stop = this.len( ) ) {

	for ( let i = start ; i < stop ; ++i ) yield [ i , this.get( i ) ] ;

} ;

Deque.prototype.index = function ( x , start = 0 , stop = this.len( ) ) {

	for ( let [ i , element ] of this._range( start , stop ) ) {

		if ( element === x ) return i ;

	}

	throw new ValueError( "not found" ) ;

} ;

Deque.prototype.pop = function ( ) {

	throw new NotImplementedError( "pop" ) ;

} ;

Deque.prototype.popleft = function ( ) {

	throw new NotImplementedError( "popleft" ) ;

} ;

Deque.prototype.insert = function ( i , x ) {

	this._checkbounds( i ) ;

	this.append( x ) ;

	let j = this.len( ) - 1 ;

	for ( ; i < j ; --j ) {

		const a = this.get( j ) ;
		this.set( j , this.get( j - 1 ) ) ;
		this.set( j - 1 , a ) ;

	}

	return this ;

} ;

Deque.prototype.delete = function ( i ) {

	this._checkbounds( i ) ;

	const len = this.len( ) - 1 ;

	for ( ; i < len ; ++i ) this.set( i , this.get( i + 1 ) ) ;

	this.pop( ) ;

	return this ;

} ;


Deque.prototype.remove = function ( value ) {

	const i = this.index( value ) ;

	this.delete( i ) ;

	return this ;

} ;

Deque.prototype.reverse = function ( ) {

	for ( let i = 0 , j = this.len( ) ; i <-- j ; ++i ) {

		let a = this.get( i ) ;
		let b = this.get( j ) ;
		this.set( i , b ) ;
		this.set( j , a ) ;

	}

	return this ;

} ;


Deque.prototype.rotate = function ( n ) {

	if ( n > 0 ) {

		while ( n --> 0 ) this.appendleft( this.pop( ) ) ;

	}

	else if ( n < 0 ) {

		while ( n ++< 0 ) this.append( this.popleft( ) ) ;

	}

	return this ;

} ;
