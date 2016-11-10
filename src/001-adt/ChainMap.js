
export function _ChainMap ( Dict , Set ) {

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

	ChainMap.prototype[Symbol.iterator] =
	ChainMap.prototype.items = function* ( ) {

		for ( let key of this.keys( ) ) yield [ key , this.get( key ) ] ;

	} ;

	ChainMap.prototype.has = function ( key ) {

		for ( let map of this.maps ) {

			if ( map.has( key ) ) return true ;

		}

		return false ;

	} ;

	ChainMap.fromkeys = function ( seq , value = null ) {

		return new ChainMap( Dict.fromkeys( seq , value ) ) ;

	} ;

	ChainMap.prototype.copy = function ( ) {

		const [ child , ...parents ] = this.maps ;

		return new ChainMap( child.copy( ) , ...parents ) ;

	} ;

	ChainMap.prototype.new_child = function ( map = null ) {

		if ( map === null ) map = new Dict( ) ;

		return new ChainMap( map , ...this.maps ) ;

	} ;

	ChainMap.prototype.parents = function ( ) {

		const [ child , ...parents ] = this.maps ;

		return new ChainMap( ...parents ) ;

	} ;

	ChainMap.prototype.set = function ( key , value ) {

		return this.maps[0].set( key , value ) ;

	} ;

	ChainMap.prototype.delete = function ( key ) {

		try {

			this.maps[0].delete( key ) ;

		}

		catch ( e ) {

			if ( !( e instanceof KeyError ) ) throw e ;

			throw new KeyError( "Key not found in the first mapping: " + key ) ;

		}

		return this ;

	} ;

	ChainMap.prototype.popitem = function ( ) {

		try {

			return this.maps[0].popitem( ) ;

		}

		catch ( e ) {

			if ( !( e instanceof KeyError ) ) throw e ;

			throw new KeyError( "No keys found in the first mapping." ) ;

		}

	} ;

	ChainMap.prototype.pop = function ( key , dflt = null ) {

		try {

			if ( arguments.length <= 1 ) return this.maps[0].pop( key ) ;

			return this.maps[0].pop( key , dflt ) ;

		}

		catch ( e ) {

			if ( !( e instanceof KeyError ) ) throw e ;

			throw new KeyError( "Key not found in the first mapping: " + key ) ;

		}

	} ;

	ChainMap.prototype.clear = function ( ) {

		this.maps[0].clear( ) ;

		return this ;

	} ;

	ChainMap.prototype.keys = function* ( ) {

		yield* this._keys( ) ;

	} ;


	ChainMap.prototype.values = function* ( ) {

		for ( let key of this.keys( ) ) yield this.get( key ) ;

	} ;

	return ChainMap ;

}
