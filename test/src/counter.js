
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var sorted = itertools.sorted ;

var counter = collections.counter ;
var NotImplementedError = collections.NotImplementedError ;

test( "counter" , function ( ) {

	var c ;

	c = counter( ) ;
	deepEqual( c.len( ) , 0 , "can build an empty counter" ) ;

	c = counter( "gallahad" ) ;
	deepEqual( c.get( "a" ) , 3 , "can build a counter from a string" ) ;

//	c.add( { "l" : 2 , "x" : 1 } ) ;
//	deepEqual( c.get( "l" ) , 4 , "can add an object" ) ;

	c.add( new Map( [ [ "x" , 1 ] ] ) ) ;
	deepEqual( c.get( "x" ) , 1 , "can add a Map object" ) ;

	c.add( [ [ "x" , 1 ] ] ) ;
	deepEqual( c.get( "x" ) , 2 , "can add a mapping" ) ;

	c.subtract( new Map( [ [ "x" , 1 ] ] ) ) ;
	deepEqual( c.get( "x" ) , 1 , "can subtract a Map object" ) ;

	c.subtract( [ [ "x" , 1 ] ] ) ;
	deepEqual( c.get( "x" ) , 0 , "can subtract a mapping" ) ;

	c.decrement( "x" ) ;
	deepEqual( c.get( "x" ) , -1 , "decrement" ) ;

	c.increment( "x" ) ;
	deepEqual( c.get( "x" ) , 0 , "increment" ) ;

	c.set( "w" , -1 ) ;

	deepEqual(
		sorted( compare.increasing , c.elements( ) ) ,
		[ "a" , "a" , "a" , "d" , "g" , "h" , "l" , "l" ] ,
		"elements"
	) ;

	c = counter( [ "eggs" , "ham" ] ) ;
	deepEqual( c.get( "bacon" ) , 0 , "count of a missing element is zero" ) ;

	raises( counter.fromkeys.bind( null , "abc" ) , NotImplementedError , "fromkeys default" ) ;
	raises( counter.fromkeys.bind( null , "abc" , 1 ) , NotImplementedError , "fromkeys" ) ;

	deepEqual( counter('aab').most_common(1) , [['a', 2]] , "most_common aab" ) ;
	deepEqual( counter('abracadabra').most_common(0) , [] , "most_common 0" ) ;
	deepEqual( counter('abracadabra').most_common(1) , [['a', 5]] , "most_common 1" ) ;
	deepEqual( counter('abbcccddddeeeee').most_common(3) , [['e', 5], ['d', 4], ['c', 3]] , "most_common all" ) ;
	deepEqual( counter('abbcccddddeeeee').most_common() , [['e', 5], ['d', 4], ['c', 3], ['b', 2], ['a', 1]] , "most_common all" ) ;
} ) ;
