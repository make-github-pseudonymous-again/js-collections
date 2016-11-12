import test from 'ava' ;

import { sorted } from "aureooms-js-itertools" ;
import { increasing } from 'aureooms-js-compare' ;

import { counter , NotImplementedError } from '../../src' ;

test( "counter" , t => {

	let c = counter( ) ;
	t.deepEqual( c.len( ) , 0 , "can build an empty counter" ) ;

	c = counter( "gallahad" ) ;
	t.deepEqual( c.get( "a" ) , 3 , "can build a counter from a string" ) ;

//	c.add( { "l" : 2 , "x" : 1 } ) ;
//	t.deepEqual( c.get( "l" ) , 4 , "can add an object" ) ;

	c.add( new Map( [ [ "x" , 1 ] ] ) ) ;
	t.deepEqual( c.get( "x" ) , 1 , "can add a Map object" ) ;

	c.add( [ [ "x" , 1 ] ] ) ;
	t.deepEqual( c.get( "x" ) , 2 , "can add a mapping" ) ;

	c.subtract( new Map( [ [ "x" , 1 ] ] ) ) ;
	t.deepEqual( c.get( "x" ) , 1 , "can subtract a Map object" ) ;

	c.subtract( [ [ "x" , 1 ] ] ) ;
	t.deepEqual( c.get( "x" ) , 0 , "can subtract a mapping" ) ;

	c.decrement( "x" ) ;
	t.deepEqual( c.get( "x" ) , -1 , "decrement" ) ;

	c.increment( "x" ) ;
	t.deepEqual( c.get( "x" ) , 0 , "increment" ) ;

	c.set( "w" , -1 ) ;

	t.deepEqual(
		sorted( increasing , c.elements( ) ) ,
		[ "a" , "a" , "a" , "d" , "g" , "h" , "l" , "l" ] ,
		"elements"
	) ;

	c = counter( [ "eggs" , "ham" ] ) ;
	t.deepEqual( c.get( "bacon" ) , 0 , "count of a missing element is zero" ) ;

	t.throws( counter.fromkeys.bind( null , "abc" ) , NotImplementedError , "fromkeys default" ) ;
	t.throws( counter.fromkeys.bind( null , "abc" , 1 ) , NotImplementedError , "fromkeys" ) ;

	t.deepEqual( counter('aab').most_common(1) , [['a', 2]] , "most_common aab" ) ;
	t.deepEqual( counter('abracadabra').most_common(0) , [] , "most_common 0" ) ;
	t.deepEqual( counter('abracadabra').most_common(1) , [['a', 5]] , "most_common 1" ) ;
	t.deepEqual( counter('abbcccddddeeeee').most_common(3) , [['e', 5], ['d', 4], ['c', 3]] , "most_common all" ) ;
	t.deepEqual( counter('abbcccddddeeeee').most_common() , [['e', 5], ['d', 4], ['c', 3], ['b', 2], ['a', 1]] , "most_common all" ) ;

} ) ;
