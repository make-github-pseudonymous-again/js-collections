
var itertools = require( "aureooms-js-itertools" ) ;

var list = itertools.list ;

var KeyError = collections.KeyError ;
var dict = collections.dict ;

[ collections.ordereddict ].forEach( function ( ordereddict ) {

test( ordereddict.name , function ( ) {

	deepEqual( list( ordereddict.fromkeys( "cab" ).keys( ) ) , [ "c" , "a" , "b" ] , "fromkeys" ) ;

	deepEqual( list( ordereddict( [ "c" , "a" , "b" ] ).keys( ) ) , [ "c" , "a" , "b" ] , "mapping" ) ;

	var d = ordereddict( ) ;

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

	ok( d.clear( ).isequal( ordereddict( ) ) , "equal empty" ) ;

	ok( !d.clear( ).isequal( dict( ) ) , "not equal type" ) ;

	d.clear( ).set( "x" , 0 ).set( "y" , 1 ) ;

	ok( d.isequal( ordereddict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "equal" ) ;

	ok( !d.isequal( ordereddict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "not equal value" ) ;

	ok( !d.isequal( ordereddict( [ [ "z" , 0 ] , [ "y" , 1 ] ] ) ) , "not equal key" ) ;

	ok( !d.isequal( ordereddict( [ [ "y" , 1 ] ] ) ) , "not equal len" ) ;

	ok( !d.isequal( ordereddict( [ [ "y" , 1 ] , [ "x" , 0 ] ] ) ) , "not equal order" ) ;

} ) ;

} ) ;
