
const _ChainMap = function ( Set ) {

	const ChainMap = function ( ...maps ) {

		this.maps = maps ;

		if ( this.maps.length === 0 ) this.maps.push( { } ) ;

	} ;

	ChainMap.prototype.len = function ( ) {

		return this.maps.length ;

	} ;

	ChainMap.prototype.get = function ( key ) {

		for ( let map of this.maps ) {

			if ( map.has( key ) ) return map.get( key ) ;

		}

	} ;

	ChainMap.prototype.set = function ( key ) {

		return this.maps[0].set( key ) ;

	} ;

	ChainMap.prototype.delete = function ( key ) {

		return this.maps[0].delete( key ) ;

	} ;

	ChainMap.prototype.has = function ( key ) {

		for ( let map of this.maps ) {

			if ( map.has( key ) ) return true ;

		}

		return false ;

	} ;

	ChainMap.prototype.clear = function ( ) {

		this.container.clear( ) ;

	} ;

	ChainMap.prototype.copy = function ( ) {

		return new ChainMap( this.items( ) ) ;

	} ;

	ChainMap.fromkeys = function ( seq , value = null ) {

		for ( let key of seq ) this.set( key , value ) ;

	} ;

	ChainMap.prototype.getdefault = function ( key , dflt = null ) {

		if ( this.has( key ) ) return this.get( key ) ;

		return dflt ;

	} ;

	ChainMap.prototype.setdefault = function ( key , dflt = null ) {

		if ( this.has( key ) ) return this.get( key ) ;

		this.set( key , dflt ) ;

		return dflt ;

	} ;

	ChainMap.prototype.pop = function ( key , dflt = null ) {

		if ( this.has( key ) ) {

			const value = this.get( key ) ;

			this.delete( key ) ;

			return value ;

		}

		if ( arguments.length < 2 ) throw new KeyError( ) ;

		return dflt ;

	} ;

	ChainMap.prototype.popitem = function ( ) {

		if ( this.len( ) === 0 ) throw new KeyError( ) ;

		const key = this.keys( ).next( ).value ;

		return [ key , this.pop( key ) ] ;

	} ;

	ChainMap.prototype.keys = function* ( ) {

		for ( let key in this.container ) yield key ;

	} ;

	ChainMap.prototype.values = function* ( ) {

		for ( let [ key , value ] of this.container ) yield value ;

	} ;

	ChainMap.prototype.items = function* ( ) {

		yield* this.container ;

	} ;

	ChainMap.prototype.update = function ( mapping ) {

		for ( let [ key , value ] of mapping ) this.set( key , value ) ;

	} ;

	ChainMap.prototype[Symbol.iterator] = ChainMap.prototype.items ;

	return ChainMap ;


	ChainMap.prototype.new_child = function ( map = null ) {

		if ( map === null ) map = { } ;

		return new ChainMap( map , ...this.maps ) ;

	} ;

	ChainMap.prototype.parents = function ( ) {

		const [ child , ...parents ] = this.maps ;

		return new ChainMap( ...parents ) ;

	} ;

	return ChainMap ;

} ;

exports._ChainMap = _ChainMap ;
