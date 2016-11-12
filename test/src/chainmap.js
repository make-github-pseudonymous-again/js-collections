import test from 'ava' ;

import { increasing , lexicographical } from "aureooms-js-compare" ;
const lex = lexicographical( increasing ) ;

import { sorted } from "aureooms-js-itertools" ;

import { KeyError , dict , chainmap } from '../../src' ;

test( "chainmap" , t => {

	const A = dict( [ [ "x" , "A" ] ] ) ;
	const B = dict( [ [ "x" , "B" ] , [ "y" , "B" ] ] ) ;
	const C = dict( [ [ "x" , "C" ] , [ "y" , "C" ] , [ "z" , "C" ] ] ) ;

	let M = chainmap( A , B , C ) ;

	t.deepEqual( sorted( lex , M ) , [ [ "x" , "A" ] , [ "y" , "B" ] , [ "z" , "C" ] ] , "Symbol.iterator" ) ;
	t.deepEqual( sorted( lex , M.items( ) ) , [ [ "x" , "A" ] , [ "y" , "B" ] , [ "z" , "C" ] ] , "items" ) ;
	t.deepEqual( sorted( lex , M.keys( ) ) , [ "x" ,"y" , "z" ] , "keys" ) ;
	t.deepEqual( sorted( lex , M.values( ) ) , [ "A" , "B" , "C" ] , "values" ) ;

	const N = M.copy( ) ;

	t.true( N.maps[0] !== A , "A gets a copy" ) ;
	t.true( N.maps[0].isequal( A ) , "0 is A" ) ;
	t.true( N.maps[1] === B , "no copy for B" ) ;
	t.true( N.maps[1].isequal( B ) , "1 is B" ) ;
	t.true( N.maps[2] === C , "no copy for C" ) ;
	t.true( N.maps[2].isequal( C ) , "2 is C" ) ;

	t.deepEqual( M.len( ) , 3 , "ABC len" ) ;
	t.deepEqual( M.get( "x" ) , "A" , "ABC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "ABC depth 2" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "ABC depth 3" ) ;

	t.deepEqual( sorted( increasing , M.keys( ) ) , [ "x" , "y" , "z" ] , "keys" ) ;

	M = M.parents( ) ;

	t.deepEqual( M.len( ) , 3 , "BC len" ) ;
	t.deepEqual( M.get( "x" ) , "B" , "BC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "BC depth 1" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "BC depth 2" ) ;

	M = M.parents( ) ;

	t.deepEqual( M.len( ) , 3 , "C len" ) ;
	t.deepEqual( M.get( "x" ) , "C" , "C depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "C" , "C depth 1" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "C depth 1" ) ;

	M = M.new_child( A ) ;

	t.deepEqual( M.len( ) , 3 , "AC len" ) ;
	t.deepEqual( M.get( "x" ) , "A" , "AC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "C" , "AC depth 2" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "AC depth 2" ) ;

	M = M.new_child( B ) ;

	t.deepEqual( M.len( ) , 3 , "BAC len" ) ;
	t.deepEqual( M.get( "x" ) , "B" , "BAC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "BAC depth 1" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "BAC depth 3" ) ;

	M = M.new_child( ) ;

	t.deepEqual( M.len( ) , 3 , "DBAC len" ) ;
	t.deepEqual( M.get( "x" ) , "B" , "DBAC depth 2" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "DBAC depth 2" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "DBAC depth 4" ) ;

	M.set( "x" , "D" ) ;

	t.deepEqual( M.len( ) , 3 , "x DBAC len" ) ;
	t.deepEqual( M.get( "x" ) , "D" , "x DBAC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "x DBAC depth 2" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "x DBAC depth 4" ) ;

	M.set( "w" , "D" ) ;

	t.deepEqual( M.len( ) , 4 , "w DBAC len" ) ;
	t.deepEqual( M.get( "w" ) , "D" , "w DBAC depth 1" ) ;
	t.deepEqual( M.get( "x" ) , "D" , "w DBAC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "w DBAC depth 2" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "w DBAC depth 4" ) ;

	M = M.parents( ) ;

	t.throws( M.get.bind( M , "w" ) , KeyError , "w throws" ) ;

	t.deepEqual( M.len( ) , 3 , "-w DBAC len" ) ;
	t.deepEqual( M.get( "x" ) , "B" , "-w BAC depth 1" ) ;
	t.deepEqual( M.get( "y" ) , "B" , "-w BAC depth 1" ) ;
	t.deepEqual( M.get( "z" ) , "C" , "-w BAC depth 3" ) ;

	t.true( M.has( "x" ) , "has x BAC depth 1" ) ;
	t.true( M.has( "y" ) , "has y BAC depth 1" ) ;
	t.true( M.has( "z" ) , "has z BAC depth 3" ) ;

	t.deepEqual( M.delete( "x" ).len( ) , 3 , "delete" ) ;
	t.throws( M.delete.bind( M , "x" ) , KeyError , "delete raises" ) ;
	t.deepEqual( M.get( "x" ) , "A" , "-wx AC depth 1" ) ;

	t.deepEqual( chainmap( C ).clear( ).len( ) , 0 , "clear" ) ;
	t.deepEqual( C.len( ) , 0 , "C is also cleared" ) ;
	t.deepEqual( chainmap( ).len( ) , 0 , "empty chainmap" ) ;

	t.deepEqual( chainmap.fromkeys( "xyz" ).get( "y" ) , null , "fromkeys default" ) ;
	t.deepEqual( chainmap.fromkeys( "xyz" , "A" ).get( "y" ) , "A" , "fromkeys" ) ;
	t.deepEqual( chainmap.fromkeys( "x" ).popitem( ) , [ "x" , null ] , "popitem" ) ;
	t.deepEqual( chainmap.fromkeys( "x" ).pop( "x" ) , null , "pop" ) ;
	t.deepEqual( chainmap.fromkeys( "" ).pop( "x" , null ) , null , "pop" ) ;

	M = chainmap.fromkeys( "x" ).new_child( ) ;

	t.throws( M.popitem.bind( M ) , KeyError , "popitem empty map[0]" ) ;
	t.throws( M.pop.bind( M , "x" ) , KeyError , "pop empty map[0]" ) ;

	t.deepEqual( chainmap( ).getdefault( "y" ) , null , "getdefault null" ) ;
	t.deepEqual( chainmap( ).getdefault( "y" , "A" ) , "A" , "getdefault A" ) ;
	t.deepEqual( chainmap( dict( [ [ "y" , "B" ] ] ) ).getdefault( "y" , "A" ) , "B" , "getdefault B" ) ;

	M = chainmap( {
		get : function ( ) { throw new Error( ) ; } ,
		pop : function ( ) { throw new Error( ) ; } ,
		popitem : function ( ) { throw new Error( ) ; } ,
		"delete" : function ( ) { throw new Error( ) ; }
	} ) ;

	t.throws( M.get.bind( M , 0 ) , Error , "get forwards" ) ;
	t.throws( M.pop.bind( M ) , Error , "pop forwards" ) ;
	t.throws( M.popitem.bind( M ) , Error , "popitem forwards" ) ;
	t.throws( M.delete.bind( M , 0 ) , Error , "delete forwards" ) ;

} ) ;
