import test from 'ava' ;

import { list } from '@aureooms/js-itertools' ;

import { dict , ordereddict , KeyError } from '../../src' ;

test( ordereddict.name , t => {

	t.deepEqual( list( ordereddict.fromkeys( "cab" ).keys( ) ) , [ "c" , "a" , "b" ] , "fromkeys" ) ;

	t.deepEqual( list( ordereddict( [ "c" , "a" , "b" ] ).keys( ) ) , [ "c" , "a" , "b" ] , "mapping" ) ;

	var d = ordereddict( ) ;

	d.clear( ).set( "x" , 25 ).set( "y" , -2 ).set( "z" , -3 ).set( "x" , -1 ) ;

	t.deepEqual( list( d.keys( ) ) , [ "x" , "y" , "z" ] , "keys" ) ;

	t.deepEqual( list( d.values( ) ) , [ -1 , -2 , -3 ] , "values" ) ;

	t.deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] , [ "z" , -3 ] ] , "items" ) ;

	d.move_to_end( "y" ) ;

	t.deepEqual( list( d.keys( ) ) , [ "x" , "z" , "y" ] , "move_to_end keys" ) ;

	t.deepEqual( list( d.values( ) ) , [ -1 , -3 , -2 ] , "move_to_end values" ) ;

	t.deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] , [ "z" , -3 ] , [ "y" , -2 ] ] , "move_to_end items" ) ;

	d.move_to_end( "z" , false ) ;

	t.deepEqual( list( d.keys( ) ) , [ "z" , "x" , "y" ] , "move_to_end false keys" ) ;

	t.deepEqual( list( d.values( ) ) , [ -3 , -1 , -2 ] , "move_to_end false values" ) ;

	t.deepEqual( list( d.items( ) ) , [ [ "z" , -3 ] , [ "x" , -1 ] , [ "y" , -2 ] ] , "move_to_end false items" ) ;

	t.deepEqual( d.popitem( ) , [ "y" , -2 ] , "popitem" ) ;

	t.deepEqual( d.popitem( false ) , [ "z" , -3 ] , "popitem false" ) ;

	t.deepEqual( list( d.items( ) ) , [ [ "x" , -1 ] ] , "popitem items" ) ;

	t.throws( d.clear( ).move_to_end.bind( d , "x" ) , KeyError , "move_to_end raises" ) ;

	t.throws( d.clear( ).move_to_end.bind( d , "x" , false ) , KeyError , "move_to_end false raises" ) ;

	t.throws( d.clear( ).popitem.bind( d ) , KeyError , "popitem raises" ) ;

	t.throws( d.clear( ).popitem.bind( d , false ) , KeyError , "popitem false raises" ) ;

	t.true( d.clear( ).isequal( d ) , "equal self" ) ;

	t.true( d.clear( ).isequal( ordereddict( ) ) , "equal empty" ) ;

	t.true( !d.clear( ).isequal( dict( ) ) , "not equal type" ) ;

	d.clear( ).set( "x" , 0 ).set( "y" , 1 ) ;

	t.true( d.isequal( ordereddict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "equal" ) ;

	t.true( !d.isequal( ordereddict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "not equal value" ) ;

	t.true( !d.isequal( ordereddict( [ [ "z" , 0 ] , [ "y" , 1 ] ] ) ) , "not equal key" ) ;

	t.true( !d.isequal( ordereddict( [ [ "y" , 1 ] ] ) ) , "not equal len" ) ;

	t.true( !d.isequal( ordereddict( [ [ "y" , 1 ] , [ "x" , 0 ] ] ) ) , "not equal order" ) ;

} ) ;
