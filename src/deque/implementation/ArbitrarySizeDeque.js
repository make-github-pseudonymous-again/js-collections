import Deque from './Deque' ;

export default function ArbitrarySizeDeque ( ) { }

ArbitrarySizeDeque.prototype = new Deque( ) ;

ArbitrarySizeDeque.prototype.values = function* ( ) {

	let i = this.center ;
	const _m = ( i + this.length ) ;
	const m = Math.min( this.capacity( ) , _m ) ;

	for ( ; i < m ; ++i ) yield this.container[i] ;

	const n = _m % this.capacity( ) ;

	if ( n < _m ) for ( i = 0 ; i < n ; ++i ) yield this.container[i] ;

} ;

ArbitrarySizeDeque.prototype.pop = function ( ) {

	const [ container , index ] = this._where( this.length - 1 ) ;

	return this._popindex( container , index ) ;

} ;

ArbitrarySizeDeque.prototype.popleft = function ( ) {

	const [ container , index ] = this._where( 0 ) ;

	++this.center ;
	this.center %= this.capacity( ) ;

	return this._popindex( container , index ) ;

} ;
