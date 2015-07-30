
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var heapq = collections.heapq ;

test( "heapq" , function ( ) {

	deepEqual(
		itertools.list( heapq.merge( compare.increasing , [ 1 , 3 , 9 ] , [ 1 , 2 , 3 , 4 ] , [ 1 , 1 , 5 , 10 , 99 ] ) ) ,
		[ 1 , 1 , 1 , 1 , 2 , 3 , 3 , 4 , 5 , 9 , 10 , 99 ] ,
		"merge"
	) ;

} ) ;
