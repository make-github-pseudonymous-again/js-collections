
const _DefaultDict = function ( Dict , Map ) {

	const DefaultDict = function ( default_factory = null , mapping = [ ] ) {

		this.container = new Map( mapping ) ;

		this.default_factory = default_factory ;

	} ;

	DefaultDict.prototype = new Dict( ) ;

	DefaultDict.prototype.get = function ( key ) {

		if ( this.container.has( key ) ) return this.container.get( key ) ;

		if ( this.default_factory === null ) throw new KeyError( ) ;

		const value = this.default_factory( ) ;

		this.set( key , value ) ;

		return value ;

	} ;

	DefaultDict.prototype.has = function ( key ) {

		if ( this.default_factory !== null ) return true ;

		return this.container.has( key ) ;

	} ;

	return DefaultDict ;

} ;

exports._DefaultDict = _DefaultDict ;
