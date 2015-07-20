
const Dict = function ( mapping ) {

	this.container = new Map( mapping ) ;

} ;

Dict.prototype.len = function ( ) {

	return this.container.size ;

} ;

Dict.prototype.get = function ( key ) {

	return this.container.get( key ) ;

} ;

Dict.prototype.set = function ( key ) {

	return this.container.set( key ) ;

} ;

Dict.prototype.delete = function ( key ) {

	return this.container.delete( key ) ;

} ;

Dict.prototype.has = function ( key ) {

	return this.container.has( key ) ;

} ;

Dict.prototype.clear = function ( ) {

	this.container.clear( ) ;

} ;

Dict.prototype.copy = function ( ) {

	return new Dict( this.items( ) ) ;

} ;

Dict.fromkeys = function ( seq , value = null ) {

	for ( let key of seq ) this.set( key , value ) ;

} ;

Dict.prototype.getdefault = function ( key , dflt = null ) {

	if ( this.has( key ) ) return this.get( key ) ;

	return dflt ;

} ;

Dict.prototype.setdefault = function ( key , dflt = null ) {

	if ( this.has( key ) ) return this.get( key ) ;

	this.set( key , dflt ) ;

	return dflt ;

} ;

Dict.prototype.pop = function ( key , dflt = null ) {

	if ( this.has( key ) ) {

		const value = this.get( key ) ;

		this.delete( key ) ;

		return value ;

	}

	if ( arguments.length < 2 ) throw new KeyError( ) ;

	return dflt ;

} ;

Dict.prototype.popitem = function ( ) {

	if ( this.len( ) === 0 ) throw new KeyError( ) ;

	const key = this.keys( ).next( ).value ;

	return [ key , this.pop( key ) ] ;

} ;

Dict.prototype.keys = function* ( ) {

	for ( let key in this.container ) yield key ;

} ;

Dict.prototype.values = function* ( ) {

	for ( let [ key , value ] of this.container ) yield value ;

} ;

Dict.prototype.items = function* ( ) {

	yield* this.container ;

} ;

Dict.prototype.update = function ( mapping ) {

	for ( let [ key , value ] of mapping ) this.set( key , value ) ;

} ;

Dict.prototype[Symbol.iterator] = Dict.prototype.keys ;

exports.Dict = Dict ;
