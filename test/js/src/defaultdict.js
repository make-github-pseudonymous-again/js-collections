
var number = require( "aureooms-js-number" ) ;
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;
var functools = require( "aureooms-js-functools" ) ;

var sorted = itertools.sorted ;

var increasing = compare.increasing ;

var lexico = compare.lexicographical( increasing ) ;

var KeyError = collections.KeyError ;

var defaultdict = collections.defaultdict ;

var default_factory = number.$0 ;

[ defaultdict ].forEach( function ( defaultdict ) {

test( defaultdict.name , function ( ) {

	var d = defaultdict( ) ;

	deepEqual( defaultdict( ).len( ) , 0 , "empty len" ) ;

	deepEqual( defaultdict( ).has( "x" ) , false , "empty has" ) ;

	deepEqual( defaultdict( default_factory ).get( "x" ) , 0 , "empty get with default" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).len( ) , 1 , "mapping len" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).has( "x" ) , true , "mapping has" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).get( "x" ) , -1 , "mapping get" ) ;

	deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Map len" ) ;

	deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Map has" ) ;

	deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Map get" ) ;

	deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).len( ) , 1 , "defaultdict len" ) ;

	deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "defaultdict has" ) ;

	deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "defaultdict get" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).len( ) , 1 , "set len" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).has( "x" ) , true , "set has" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).get( "x" ) , -1 , "set get" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).delete( "x" ).len( ) , 0 , "delete len" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).delete( "x" ).has( "x" ) , false , "delete has" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).clear( ).len( ) , 0 , "clear len" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).clear( ).has( "x" ) , false , "clear has" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).len( ) , 1 , "copy len" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).has( "x" ) , true , "copy has" ) ;

	deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).get( "x" ) , -1 , "copy get" ) ;

	deepEqual( defaultdict( default_factory ).getdefault( "x" ) , null , "empty getdefault null" ) ;

	deepEqual( defaultdict( default_factory ).getdefault( "x" , -2 ) , -2 , "empty getdefault" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).getdefault( "x" , -2 ) , -1 , "mapping getdefault null" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).getdefault( "x" ) , -1 , "mapping getdefault" ) ;

	deepEqual( defaultdict( default_factory ).setdefault( "x" ) , null , "empty setdefault null" ) ;

	deepEqual( defaultdict( default_factory ).setdefault( "x" , -2 ) , -2 , "empty setdefault" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).setdefault( "x" , -2 ) , -1 , "mapping setdefault null" ) ;

	deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).setdefault( "x" ) , -1 , "mapping setdefault" ) ;

	d.clear( ).setdefault( "x" ) ;

	deepEqual( d.get( "x" ) , null , "empty setdefault null get" ) ;

	d.clear( ).setdefault( "x" , -2 ) ;

	deepEqual( d.get( "x" ) , -2 , "empty setdefault -2 get" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.pop( "x" ) , -1 , "pop value" ) ;

	deepEqual( d.len( ) , 0 , "pop len" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.pop( "x" , -2 ) , -1 , "pop value -1 default -2" ) ;

	deepEqual( d.len( ) , 0 , "pop len default" ) ;

	deepEqual( d.pop( "x" , -2 ) , -2 , "pop value empty default -2" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.popitem( ) , [ "x" , -1 ] , "popitem" ) ;

	deepEqual( d.len( ) , 0 , "popitem len" ) ;

	d.clear( ).set( "x" , -1 ).set( "y" , -2 ) ;

	deepEqual( sorted( increasing , d.keys( ) ) , [ "x" , "y" ] , "keys" ) ;

	deepEqual( sorted( increasing , d.values( ) ) , [ -2 , -1 ] , "values" ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "items" ) ;

	d.clear( ).update( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update mapping" ) ;

	d.clear( ).update( new Map( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update Map" ) ;

	d.clear( ).update( defaultdict( default_factory , [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update defaultdict" ) ;

	d.clear( ) ;

	raises( d.get.bind( d , "x" ) , KeyError , "get raises" ) ;

	raises( d.delete.bind( d , "x" ) , KeyError , "delete raises" ) ;

	raises( d.popitem.bind( d ) , KeyError , "popitem raises" ) ;

	raises( d.pop.bind( d , "x" ) , KeyError , "pop raises" ) ;

	deepEqual( defaultdict.fromkeys( "abc" , -1 , default_factory ).get( "b" ) , -1 , "fromkeys default -1" ) ;

	deepEqual( defaultdict.fromkeys( "abc" , -1 , default_factory ).get( "x" ) , 0 , "fromkeys default_factory" ) ;

	deepEqual( defaultdict.fromkeys( "abc" ).get( "b" ) , null , "fromkeys default null" ) ;

} ) ;

} ) ;
