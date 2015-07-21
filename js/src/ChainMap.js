
const _ChainMap = function ( Dict , Set ) {

	const ChainMap = function ( ...maps ) {

		this.maps = maps ;

		if ( this.maps.length === 0 ) this.maps.push( new Dict( ) ) ;

	} ;

	ChainMap.prototype.__missing__ = function ( key ) {

		throw new KeyError( key ) ;

	} ;

	ChainMap.prototype.get = function ( key ) {

		for ( let map of this.maps ) {

			try {

				return map.get( key ) ;

			}

			catch ( e ) {

				if ( !( e instanceof KeyError ) ) throw e ;

			}

		}

		return this.__missing__( key ) ;

	} ;

	ChainMap.prototype.getdefault = function ( key , dflt = null ) {

		return this.has( key ) ? this.get( key ) : dflt ;

	} ;

	ChainMap.prototype._keys = function ( ) {

		let keys = new Set( ) ;

		for ( let map of this.maps ) keys.update( map.keys( ) ) ;

		return keys ;

	} ;

	ChainMap.prototype.len = function ( ) {

		return this._keys( ).len( ) ;

	} ;

	ChainMap.prototype.set = function ( key , value ) {

		return this.maps[0].set( key , value ) ;

	} ;

	ChainMap.prototype.delete = function ( key ) {

		this.maps[0].delete( key ) ;

		return this ;

	} ;

	ChainMap.prototype.has = function ( key ) {

		for ( let map of this.maps ) {

			if ( map.has( key ) ) return true ;

		}

		return false ;

	} ;

	ChainMap.prototype.clear = function ( ) {

		this.maps[0].clear( ) ;

		return this ;

	} ;

	ChainMap.prototype.copy = function ( ) {

		const [ child , parents ] = this.maps ;

		return new ChainMap( child.copy( ) , ...parents ) ;

	} ;

	ChainMap.fromkeys = function ( seq , value = null ) {

		return new ChainMap( Dict.fromkeys( seq , value ) ) ;

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

		yield* this._keys( ) ;

	} ;

	ChainMap.prototype.update = function ( mapping ) {

		for ( let [ key , value ] of mapping ) this.set( key , value ) ;

	} ;

	ChainMap.prototype.new_child = function ( map = null ) {

		if ( map === null ) map = new Dict( ) ;

		return new ChainMap( map , ...this.maps ) ;

	} ;

	ChainMap.prototype.parents = function ( ) {

		const [ child , ...parents ] = this.maps ;

		return new ChainMap( ...parents ) ;

	} ;

	ChainMap.prototype[Symbol.iterator] = ChainMap.prototype.items ;

	return ChainMap ;

} ;

exports._ChainMap = _ChainMap ;
