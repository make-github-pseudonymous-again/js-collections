
const ChainMap = function ( ...maps ) {

	this.maps = maps ;

	if ( this.maps.length === 0 ) this.maps.push( { } ) ;

} ;

ChainMap.prototype.new_child = function ( map = null ) {

	if ( map === null ) map = { } ;

	return new ChainMap( map , ...this.maps ) ;

} ;

ChainMap.prototype.parents = function ( ) {

	const [ child , ...parents ] = this.maps ;

	return new ChainMap( ...parents ) ;

} ;

exports.ChainMap = ChainMap ;
