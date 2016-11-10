
const _OrderedDict = function ( Dict , Map , DLL ) {

	const OrderedDict = function ( mapping ) {

		this.container = new Map( ) ;

		this.map = new Map( ) ;

		this.list = new DLL( ) ;

		if ( mapping !== null ) this.update( mapping ) ;

	} ;

	OrderedDict.prototype = new Dict( ) ;

	OrderedDict.prototype.isequal = function ( other ) {

		if ( ! ( other instanceof OrderedDict ) ) return false ;

		if ( !Dict.prototype.isequal.call( this , other ) ) return false ;

		let keys = this.keys( ) ;

		for ( let key of other.keys( ) ) {

			if ( keys.next( ).value !== key ) return false ;

		}

		return true ;

	} ;

	OrderedDict.prototype.set = function ( key , value ) {

		if ( !this.has( key ) ) {

			this.map.set( key , this.list.push( key ) ) ;

		}

		this.container.set( key , value ) ;

		return this ;

	} ;

	OrderedDict.prototype.delete = function ( key ) {

		if ( !this.container.delete( key ) ) throw new KeyError( ) ;

		this.list.erase( this.map.get( key ) ) ;
		this.map.delete( key ) ;

		return this ;

	} ;

	OrderedDict.prototype.clear = function ( ) {

		this.container.clear( ) ;

		this.map.clear( ) ;

		this.list.clear( ) ;

		return this ;

	} ;

	OrderedDict.prototype.copy = function ( ) {

		return new OrderedDict( this.items( ) ) ;

	} ;

	OrderedDict.fromkeys = function ( seq , value = null ) {

		return new OrderedDict( Mapping.fromkeys( seq , value ) ) ;

	} ;

	OrderedDict.prototype.popitem = function ( last = true ) {

		if ( this.len( ) === 0 ) throw new KeyError( ) ;

		const key = last ?
		this.list.end( ).prev( ).value :
		this.list.begin( ).next( ).value ;

		return [ key , this.pop( key ) ] ;

	} ;

	OrderedDict.prototype.move_to_end = function ( key , last = true ) {

		if ( !this.container.has( key ) ) throw new KeyError( ) ;

		this.list.erase( this.map.get( key ) ) ;

		const iterator = last ? this.list.push( key ) : this.list.unshift( key ) ;

		this.map.set( key , iterator ) ;

		return this ;

	} ;

	OrderedDict.prototype.keys = function* ( ) {

		for ( let key of this.list ) yield key ;

	} ;

	OrderedDict.prototype.values = function* ( ) {

		for ( let key of this.keys( ) ) yield this.container.get( key ) ;

	} ;

	OrderedDict.prototype.items = function* ( ) {

		for ( let key of this.keys( ) ) yield [ key , this.container.get( key ) ] ;

	} ;

	OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items ;

	return OrderedDict ;

} ;

exports._OrderedDict = _OrderedDict ;
