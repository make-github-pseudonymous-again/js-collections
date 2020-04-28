import test from 'ava' ;

import { $0 as default_factory } from "@aureooms/js-number" ;
import { increasing , lexicographical } from "@aureooms/js-compare" ;
import { sorted } from "@aureooms/js-itertools" ;

const lex = lexicographical( increasing ) ;

import { KeyError , defaultdict } from '../../src' ;

test( defaultdict.name , t => {

	const d = defaultdict( ) ;

	t.deepEqual( defaultdict( ).len( ) , 0 , "empty len" ) ;

	t.deepEqual( defaultdict( ).has( "x" ) , false , "empty has" ) ;

	t.deepEqual( defaultdict( default_factory ).get( "x" ) , 0 , "empty get with default" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).len( ) , 1 , "mapping len" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).has( "x" ) , true , "mapping has" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).get( "x" ) , -1 , "mapping get" ) ;

	t.deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Map len" ) ;

	t.deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Map has" ) ;

	t.deepEqual( defaultdict( default_factory , new Map( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Map get" ) ;

	t.deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).len( ) , 1 , "defaultdict len" ) ;

	t.deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "defaultdict has" ) ;

	t.deepEqual( defaultdict( default_factory , defaultdict( default_factory , [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "defaultdict get" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).len( ) , 1 , "set len" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).has( "x" ) , true , "set has" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).get( "x" ) , -1 , "set get" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).delete( "x" ).len( ) , 0 , "delete len" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).delete( "x" ).has( "x" ) , false , "delete has" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).clear( ).len( ) , 0 , "clear len" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).clear( ).has( "x" ) , false , "clear has" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).len( ) , 1 , "copy len" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).has( "x" ) , true , "copy has" ) ;

	t.deepEqual( defaultdict( default_factory ).set( "x" , -1 ).copy( ).get( "x" ) , -1 , "copy get" ) ;

	t.deepEqual( defaultdict( default_factory ).getdefault( "x" ) , null , "empty getdefault null" ) ;

	t.deepEqual( defaultdict( default_factory ).getdefault( "x" , -2 ) , -2 , "empty getdefault" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).getdefault( "x" , -2 ) , -1 , "mapping getdefault null" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).getdefault( "x" ) , -1 , "mapping getdefault" ) ;

	t.deepEqual( defaultdict( default_factory ).setdefault( "x" ) , null , "empty setdefault null" ) ;

	t.deepEqual( defaultdict( default_factory ).setdefault( "x" , -2 ) , -2 , "empty setdefault" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).setdefault( "x" , -2 ) , -1 , "mapping setdefault null" ) ;

	t.deepEqual( defaultdict( default_factory , [ [ "x" , -1 ] ] ).setdefault( "x" ) , -1 , "mapping setdefault" ) ;

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

	d.clear( ).update( defaultdict( default_factory , [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	t.deepEqual( sorted( lex , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update defaultdict" ) ;

	d.clear( ) ;

	t.throws( d.get.bind( d , "x" ) , { instanceOf: KeyError } , "get raises" ) ;

	t.throws( d.delete.bind( d , "x" ) , { instanceOf: KeyError } , "delete raises" ) ;

	t.throws( d.popitem.bind( d ) , { instanceOf: KeyError } , "popitem raises" ) ;

	t.throws( d.pop.bind( d , "x" ) , { instanceOf: KeyError } , "pop raises" ) ;

	t.deepEqual( defaultdict.fromkeys( "abc" , -1 , default_factory ).get( "b" ) , -1 , "fromkeys default -1" ) ;

	t.deepEqual( defaultdict.fromkeys( "abc" , -1 , default_factory ).get( "x" ) , 0 , "fromkeys default_factory" ) ;

	t.deepEqual( defaultdict.fromkeys( "abc" ).get( "b" ) , null , "fromkeys default null" ) ;

} ) ;
