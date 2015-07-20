
var dll = require( "aureooms-js-dll" ) ;
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var sorted = itertools.sorted ;

var increasing = compare.increasing ;

var lexico = compare.lexicographical( increasing ) ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	Map : Map

} ) ;

var Dict = mycollections.Dict ;

var KeyError = mycollections.KeyError ;

test( "Dict" , function ( ) {

	var d = new Dict( ) ;

	deepEqual( new Dict( ).len( ) , 0 , "empty len" ) ;

	deepEqual( new Dict( ).has( "x" ) , false , "empty has" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).len( ) , 1 , "mapping len" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).has( "x" ) , true , "mapping has" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).get( "x" ) , -1 , "mapping get" ) ;

	deepEqual( new Dict( new Map( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Map len" ) ;

	deepEqual( new Dict( new Map( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Map has" ) ;

	deepEqual( new Dict( new Map( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Map get" ) ;

	deepEqual( new Dict( new Dict( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Dict len" ) ;

	deepEqual( new Dict( new Dict( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Dict has" ) ;

	deepEqual( new Dict( new Dict( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Dict get" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).len( ) , 1 , "set len" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).has( "x" ) , true , "set has" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).get( "x" ) , -1 , "set get" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).delete( "x" ).len( ) , 0 , "delete len" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).delete( "x" ).has( "x" ) , false , "delete has" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).clear( ).len( ) , 0 , "clear len" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).clear( ).has( "x" ) , false , "clear has" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).copy( ).len( ) , 1 , "copy len" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).copy( ).has( "x" ) , true , "copy has" ) ;

	deepEqual( new Dict( ).set( "x" , -1 ).copy( ).get( "x" ) , -1 , "copy get" ) ;

	deepEqual( new Dict( ).getdefault( "x" ) , null , "empty getdefault null" ) ;

	deepEqual( new Dict( ).getdefault( "x" , -2 ) , -2 , "empty getdefault" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).getdefault( "x" , -2 ) , -1 , "mapping getdefault null" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).getdefault( "x" ) , -1 , "mapping getdefault" ) ;

	deepEqual( new Dict( ).setdefault( "x" ) , null , "empty setdefault null" ) ;

	deepEqual( new Dict( ).setdefault( "x" , -2 ) , -2 , "empty setdefault" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).setdefault( "x" , -2 ) , -1 , "mapping setdefault null" ) ;

	deepEqual( new Dict( [ [ "x" , -1 ] ] ).setdefault( "x" ) , -1 , "mapping setdefault" ) ;

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

	d.clear( ).update( new Dict( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update Dict" ) ;

	d.clear( ) ;

	raises( d.get.bind( d , "x" ) , KeyError , "get raises" ) ;

	raises( d.delete.bind( d , "x" ) , KeyError , "delete raises" ) ;

	raises( d.popitem.bind( d ) , KeyError , "popitem raises" ) ;

	raises( d.pop.bind( d , "x" ) , KeyError , "pop raises" ) ;

	deepEqual( Dict.fromkeys( "abc" , -1 ).get( "b" ) , -1 , "fromkeys default -1" ) ;

	deepEqual( Dict.fromkeys( "abc" ).get( "b" ) , null , "fromkeys default null" ) ;

} ) ;
