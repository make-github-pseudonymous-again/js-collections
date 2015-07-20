
const _Set = function ( BaseSet ) {

	const Set = function ( iterable = null ) {

		this.container = new BaseSet( iterable ) ;

	} ;

	Set._args = function ( first , second ) {

		if ( first.len( ) > second.len( ) ) return [ second , first ] ;

		return [ first , second ] ;

	} ;

	Set._chain = function* ( first , second ) {

		yield* first ;
		yield* second ;

	} ;

	Set.inclusion = function ( A , B ) {

		return A.ispropersubset( B ) ? -1 : B.ispropersubset( A ) ? 1 : 0 ;

	} ;

	Set.prototype[Symbol.iterator] =
	Set.prototype.keys = function* ( ) {

		yield* this.container ;

	} ;

	Set.prototype.len = function ( ) {

		return this.container.size ;

	} ;

	Set.prototype.has = function ( key ) {

		return this.container.has( key ) ;

	} ;

	Set.prototype.isdisjoint = function ( other ) {

		return this._intersection( other ).next( ).done ;

	} ;

	Set.prototype.isequal = function ( other ) {

		return this.issubset( other ) && other.issubset( this ) ;

	} ;

	Set.prototype.issubset = function ( other ) {

		if ( this.len( ) > other.len( ) ) return false ;

		for ( let key of this ) if ( !other.contains( key ) ) return false ;

		return true ;

	} ;

	Set.prototype.ispropersubset = function ( other ) {

		return this.issubset( other ) && !this.issuperset( other ) ;

	} ;

	Set.prototype.issuperset = function ( other ) {

		return other.issubset( this ) ;

	} ;

	Set.prototype.ispropersubset = function ( other ) {

		return this.issuperset( other ) && !this.issubset( other ) ;

	} ;

	Set.prototype._union = function* ( other ) {

		const [ smallest , largest ] = Set._args( this , other ) ;

		yield* largest ;

		for ( let key of smallest ) if ( !other.contains( key ) ) yield key ;

	} ;

	Set.prototype.union = function ( other ) {

		return new Set( Set._chain( this , other ) ) ;

	} ;

	Set.prototype._intersection = function* ( other ) {

		const [ smallest , largest ] = Set_.args( this , other ) ;

		for ( let key of smallest ) if ( largest.contains( key ) ) yield key ;

	} ;


	Set.prototype.intersection = function ( other ) {

		return new Set( this._intersection( other ) ) ;

	} ;

	Set.prototype.difference = function ( other ) {

		return this.copy( ).difference_update( other ) ;

	} ;

	Set.prototype.symmetric_difference = function ( other ) {

		const [ smallest , largest ] = Set._args( this , other ) ;

		return largest.copy( ).symmetric_difference_update( smallest ) ;

	} ;

	Set.prototype.copy = function ( ) {

		return new Set( this ) ;

	} ;

	Set.prototype.update = function ( other ) {

		for ( let key of other ) this.add( key ) ;

		return this ;

	} ;

	Set.prototype.intersection_update = function ( other ) {

		if ( !( other instanceof Set ) ) other = new Set( other ) ;

		for ( let key of this ) if ( !other.contains( key ) ) this.discard( key ) ;

		return this ;

	} ;

	Set.prototype.difference_update = function ( other ) {

		for ( let key of other ) this.discard( key ) ;

		return this ;

	} ;

	Set.prototype.symmetric_difference_update = function ( other ) {

		for ( let key of other ) {

			if ( this.has( key ) ) this.discard( key ) ;
			else this.add( key ) ;

		}

		return this ;

	} ;

	Set.prototype.add = function ( key ) {

		this.container.add( key ) ;

		return this ;

	} ;

	Set.prototype.remove = function ( key ) {

		if ( !this.container.delete( key ) ) throw new KeyError( ) ;

		return this ;

	} ;

	Set.prototype.discard = function ( key ) {

		this.container.delete( key ) ;

		return this ;

	} ;

	Set.prototype.pop = function ( ) {

		if ( this.len( ) === 0 ) throw new KeyError( ) ;

		const value = this.keys( ).next( ).value ;

		this.discard( value ) ;

		return value ;

	} ;

	Set.prototype.clear = function ( ) {

		this.container.clear( ) ;

		return this ;

	} ;

	return Set ;

} ;

exports._Set = _Set ;
