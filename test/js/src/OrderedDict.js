
var dll = require( "aureooms-js-dll" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var list = itertools.list ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	BaseMap : Map

} ) ;

var KeyError = mycollections.KeyError ;
var Dict = mycollections.Dict ;

[ mycollections.OrderedDict ].forEach( function ( OrderedDict ) {

test( OrderedDict.name , function ( ) {

	deepEqual( list( OrderedDict.fromkeys( "cab" ).keys( ) ) , [ "c" , "a" , "b" ] , "fromkeys" ) ;

	deepEqual( list( new OrderedDict( [ "c" , "a" , "b" ] ).keys( ) ) , [ "c" , "a" , "b" ] , "mapping" ) ;

	var d = new OrderedDict( ) ;

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

	ok( d.clear( ).isequal( d ) , "equal self" ) ;

	ok( d.clear( ).isequal( new OrderedDict( ) ) , "equal empty" ) ;

	ok( !d.clear( ).isequal( new Dict( ) ) , "not equal type" ) ;

	d.clear( ).set( "x" , 0 ).set( "y" , 1 ) ;

	ok( d.isequal( new OrderedDict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "equal" ) ;

	ok( !d.isequal( new OrderedDict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "not equal value" ) ;

	ok( !d.isequal( new OrderedDict( [ [ "z" , 0 ] , [ "y" , 1 ] ] ) ) , "not equal key" ) ;

	ok( !d.isequal( new OrderedDict( [ [ "y" , 1 ] ] ) ) , "not equal len" ) ;

	ok( !d.isequal( new OrderedDict( [ [ "y" , 1 ] , [ "x" , 0 ] ] ) ) , "not equal order" ) ;

} ) ;

} ) ;
