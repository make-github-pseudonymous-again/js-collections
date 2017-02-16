import test from 'ava' ;

import { increasing , lexicographical } from "@aureooms/js-compare" ;
import { sorted } from "@aureooms/js-itertools" ;
import { partial , rpartial } from "@aureooms/js-functools" ;

import { KeyError , dict , defaultdict , ordereddict } from '../../src' ;

const lex = lexicographical( increasing ) ;

const nodefaultdict = partial( defaultdict , [ null ] ) ;

nodefaultdict.fromkeys = rpartial( defaultdict.fromkeys , [ null ] ) ;

[ dict , nodefaultdict , ordereddict ].forEach( function ( dict ) {

test( dict.name , t => {

	const d = dict( ) ;

	t.deepEqual( dict( ).len( ) , 0 , "empty len" ) ;

	t.deepEqual( dict( ).has( "x" ) , false , "empty has" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).len( ) , 1 , "mapping len" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).has( "x" ) , true , "mapping has" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).get( "x" ) , -1 , "mapping get" ) ;

	t.deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Map len" ) ;

	t.deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Map has" ) ;

	t.deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Map get" ) ;

	t.deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "dict len" ) ;

	t.deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "dict has" ) ;

	t.deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "dict get" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).len( ) , 1 , "set len" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).has( "x" ) , true , "set has" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).get( "x" ) , -1 , "set get" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).delete( "x" ).len( ) , 0 , "delete len" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).delete( "x" ).has( "x" ) , false , "delete has" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).clear( ).len( ) , 0 , "clear len" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).clear( ).has( "x" ) , false , "clear has" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).copy( ).len( ) , 1 , "copy len" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).copy( ).has( "x" ) , true , "copy has" ) ;

	t.deepEqual( dict( ).set( "x" , -1 ).copy( ).get( "x" ) , -1 , "copy get" ) ;

	t.deepEqual( dict( ).getdefault( "x" ) , null , "empty getdefault null" ) ;

	t.deepEqual( dict( ).getdefault( "x" , -2 ) , -2 , "empty getdefault" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).getdefault( "x" , -2 ) , -1 , "mapping getdefault null" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).getdefault( "x" ) , -1 , "mapping getdefault" ) ;

	t.deepEqual( dict( ).setdefault( "x" ) , null , "empty setdefault null" ) ;

	t.deepEqual( dict( ).setdefault( "x" , -2 ) , -2 , "empty setdefault" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).setdefault( "x" , -2 ) , -1 , "mapping setdefault null" ) ;

	t.deepEqual( dict( [ [ "x" , -1 ] ] ).setdefault( "x" ) , -1 , "mapping setdefault" ) ;

	d.clear( ).setdefault( "x" ) ;

	t.deepEqual( d.get( "x" ) , null , "empty setdefault null get" ) ;

	d.clear( ).setdefault( "x" , -2 ) ;

	t.deepEqual( d.get( "x" ) , -2 , "empty setdefault -2 get" ) ;

	d.clear( ).set( "x" , -1 ) ;

	t.deepEqual( d.pop( "x" ) , -1 , "pop value" ) ;

	t.deepEqual( d.len( ) , 0 , "pop len" ) ;

	d.clear( ).set( "x" , -1 ) ;

	t.deepEqual( d.pop( "x" , -2 ) , -1 , "pop value -1 default -2" ) ;

	t.deepEqual( d.len( ) , 0 , "pop len default" ) ;

	t.deepEqual( d.pop( "x" , -2 ) , -2 , "pop value empty default -2" ) ;

	d.clear( ).set( "x" , -1 ) ;

	t.deepEqual( d.popitem( ) , [ "x" , -1 ] , "popitem" ) ;

	t.deepEqual( d.len( ) , 0 , "popitem len" ) ;

	d.clear( ).set( "x" , -1 ).set( "y" , -2 ) ;

	t.deepEqual( sorted( increasing , d.keys( ) ) , [ "x" , "y" ] , "keys" ) ;

	t.deepEqual( sorted( increasing , d.values( ) ) , [ -2 , -1 ] , "values" ) ;

	t.deepEqual( sorted( lex , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "items" ) ;

	d.clear( ).update( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ;

	t.deepEqual( sorted( lex , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update mapping" ) ;

	d.clear( ).update( new Map( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	t.deepEqual( sorted( lex , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update Map" ) ;

	d.clear( ).update( dict( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	t.deepEqual( sorted( lex , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update dict" ) ;

	d.clear( ) ;

	t.throws( d.get.bind( d , "x" ) , KeyError , "get raises" ) ;

	t.throws( d.delete.bind( d , "x" ) , KeyError , "delete raises" ) ;

	t.throws( d.popitem.bind( d ) , KeyError , "popitem raises" ) ;

	t.throws( d.pop.bind( d , "x" ) , KeyError , "pop raises" ) ;

	t.deepEqual( dict.fromkeys( "abc" , -1 ).get( "b" ) , -1 , "fromkeys default -1" ) ;

	t.deepEqual( dict.fromkeys( "abc" ).get( "b" ) , null , "fromkeys default null" ) ;

} ) ;

} ) ;
