
var dll = require( "aureooms-js-dll" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var list = itertools.list ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	Map : Map

} ) ;

var KeyError = mycollections.KeyError ;

[ mycollections.OrderedDict ].forEach( function ( Dict ) {

test( Dict.name , function ( ) {

	deepEqual( list( Dict.fromkeys( "cab" ).keys( ) ) , [ "c" , "a" , "b" ] , "fromkeys" ) ;

	deepEqual( list( new Dict( [ "c" , "a" , "b" ] ).keys( ) ) , [ "c" , "a" , "b" ] , "mapping" ) ;

	var d = new Dict( ) ;

	d.clear( ).set( "x" , 25 ).set( "y" , -2 ).set( "z" , -3 ).set( "x" , -1 ) ;

	deepEqual( list( d.keys( ) ) , [ "x" , "y" , "z" ] , "keys" ) ;

	deepEqual( list( d.values( ) ) , [ -1 , -2 , -3 ] , "values" ) ;

	deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] , [ "z" , -3 ] ] , "items" ) ;

	d.move_to_end( "y" ) ;

	deepEqual( list( d.keys( ) ) , [ "x" , "z" , "y" ] , "move_to_end keys" ) ;

	deepEqual( list( d.values( ) ) , [ -1 , -3 , -2 ] , "move_to_end values" ) ;

	deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] , [ "z" , -3 ] , [ "y" , -2 ] ] , "move_to_end items" ) ;

	d.move_to_end( "z" , false ) ;

	deepEqual( list( d.keys( ) ) , [ "z" , "x" , "y" ] , "move_to_end false keys" ) ;

	deepEqual( list( d.values( ) ) , [ -3 , -1 , -2 ] , "move_to_end false values" ) ;

	deepEqual( list( d.items( ) ) , [ [ "z" , -3 ] , [ "x" , -1 ] , [ "y" , -2 ] ] , "move_to_end false items" ) ;

	deepEqual( d.popitem( ) , [ "y" , -2 ] , "popitem" ) ;

	deepEqual( d.popitem( false ) , [ "z" , -3 ] , "popitem false" ) ;

	deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] ] , "popitem items" ) ;

	raises( d.clear( ).move_to_end.bind( d , "x" ) , KeyError , "move_to_end raises" ) ;

	raises( d.clear( ).move_to_end.bind( d , "x" , false ) , KeyError , "move_to_end false raises" ) ;

	raises( d.clear( ).popitem.bind( d ) , KeyError , "popitem raises" ) ;

	raises( d.clear( ).popitem.bind( d , false ) , KeyError , "popitem false raises" ) ;

} ) ;

} ) ;
