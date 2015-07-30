
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var heapq = collections.heapq ;
var IndexError = collections.IndexError ;

test( "heapq" , function ( ) {

	deepEqual(
		itertools.list( heapq.merge( compare.increasing ) ) ,
		[ ] ,
		"merge 0"
	) ;

	deepEqual(
		itertools.list( heapq.merge( compare.increasing , [ ] , [ ] ) ) ,
		[ ] ,
		"merge 2 [ ]"
	) ;

	deepEqual(
		itertools.list( heapq.merge( compare.increasing , [ ] , [ 1 , 3 , 9 ] , [ 1 , 2 , 3 , 4 ] , [ 1 , 1 , 5 , 10 , 99 ] ) ) ,
		[ 1 , 1 , 1 , 1 , 2 , 3 , 3 , 4 , 5 , 9 , 10 , 99 ] ,
		"merge"
	) ;

	deepEqual(

		heapq.nlargest( compare.increasing , 1 , [ ] ) ,
		[ ] ,
		"nlargest empty 1"

	) ;

	deepEqual(

		heapq.nlargest( compare.increasing , 99 , [ ] ) ,
		[ ] ,
		"nlargest empty 99"

	) ;

	deepEqual(

		heapq.nsmallest( compare.increasing , 1 , [ ] ) ,
		[ ] ,
		"nsmallest empty 1"

	) ;

	deepEqual(

		heapq.nsmallest( compare.increasing , 99 , [ ] ) ,
		[ ] ,
		"nsmallest empty 99"

	) ;


	deepEqual(

		heapq.nlargest( compare.increasing , 3 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 , 8 , 7 ] ,
		"nlargest"

	) ;

	deepEqual(

		heapq.nsmallest( compare.increasing , 3 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 , 7 , 8 ] ,
		"nsmallest"

	) ;

	deepEqual(

		heapq.nlargest( compare.increasing , 4 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 , 8 , 7 , 6 ] ,
		"nlargest (sort)"

	) ;

	deepEqual(

		heapq.nsmallest( compare.increasing , 4 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 , 7 , 8 , 9 ] ,
		"nsmallest (sort)"

	) ;

	deepEqual(

		heapq.nlargest( compare.increasing , 1 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 ] ,
		"nlargest (min)"

	) ;

	deepEqual(

		heapq.nsmallest( compare.increasing , 1 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 ] ,
		"nsmallest (min)"

	) ;

	raises( heapq.heappop.bind( null , heapq.heapify( compare.increasing , [ ] ) ) , IndexError , "pop raises" ) ;
	raises( heapq.heapreplace.bind( null , heapq.heapify( compare.increasing , [ ] ) , 1 ) , IndexError , "replace raises" ) ;

	var h = heapq.heapify( compare.increasing , [ ] ) ;

	heapq.heappush( h , "b" ) ;
	heapq.heappush( h , "a" ) ;
	heapq.heappush( h , "d" ) ;
	heapq.heappush( h , "e" ) ;
	heapq.heappush( h , "c" ) ;

	deepEqual( heapq.heappop( h ) , "a" , "pop a" ) ;
	deepEqual( heapq.heappop( h ) , "b" , "pop b" ) ;
	deepEqual( heapq.heappop( h ) , "c" , "pop c" ) ;
	deepEqual( heapq.heappop( h ) , "d" , "pop d" ) ;
	deepEqual( heapq.heappop( h ) , "e" , "pop e" ) ;

	heapq.heappush( h , "b" ) ;
	heapq.heappush( h , "a" ) ;
	heapq.heappush( h , "d" ) ;
	heapq.heappush( h , "e" ) ;
	heapq.heappush( h , "c" ) ;

	deepEqual( heapq.heappushpop( h , "z" ) , "a" , "pushpop aa" ) ;
	deepEqual( heapq.heappushpop( h , "a" ) , "a" , "pushpop ba" ) ;
	deepEqual( heapq.heappushpop( h , "z" ) , "b" , "pushpop bb" ) ;
	deepEqual( heapq.heappushpop( h , "a" ) , "a" , "pushpop ca" ) ;
	deepEqual( heapq.heappushpop( h , "z" ) , "c" , "pushpop cc" ) ;

	deepEqual( heapq.heappop( h ) , "d" , "pop d" ) ;
	deepEqual( heapq.heappop( h ) , "e" , "pop e" ) ;
	deepEqual( heapq.heappop( h ) , "z" , "pop z 1" ) ;
	deepEqual( heapq.heappop( h ) , "z" , "pop z 2" ) ;
	deepEqual( heapq.heappop( h ) , "z" , "pop z 3" ) ;

	deepEqual( heapq.heappushpop( h , "z" ) , "z" , "pushpop zz" ) ;

} ) ;
