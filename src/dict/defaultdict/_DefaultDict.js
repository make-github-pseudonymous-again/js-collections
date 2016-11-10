import { KeyError } from '../../error' ;
import { Mapping } from '../../mapping' ;

export default function _DefaultDict ( Dict , Map ) {

	const DefaultDict = function ( default_factory  , mapping  ) {

		this.container = new Map( mapping ) ;

		this.default_factory = default_factory ;

	} ;

	DefaultDict.fromkeys = function ( seq , value = null , default_factory = null ) {

		return new DefaultDict( default_factory , Mapping.fromkeys( seq , value ) ) ;

	} ;

	DefaultDict.prototype = new Dict( ) ;

	DefaultDict.prototype.__missing__ = function ( key ) {

		if ( this.default_factory === null ) throw new KeyError( key ) ;

		return this.default_factory( ) ;

	} ;

	return DefaultDict ;

}
