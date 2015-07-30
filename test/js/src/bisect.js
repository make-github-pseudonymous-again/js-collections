
var sort = require( "aureooms-js-sort" ) ;
var compare = require( "aureooms-js-compare" ) ;
var operator = require( "aureooms-js-operator" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var m = itertools.map ;
var l = itertools.list ;
var s = itertools.sorted ;

var bisect = collections.bisect ;
var ValueError = collections.ValueError ;

var grade = function ( score ) {
	var breakpoints = [ 60 , 70 , 80 , 90 ] ;
	var grades = 'FDCBA' ;
	var i = bisect.bisect_right( breakpoints , score ) ;
	return grades[i] ;
} ;


test( "bisect" , function ( ) {

	raises( bisect.bisect_left.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	raises( bisect.bisect_right.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	raises( bisect.insort_left.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	raises( bisect.insort_right.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;

	var grades = l( m( grade , [33, 99, 77, 70, 89, 90, 100] ) ) ;

	deepEqual( grades , ['F', 'A', 'C', 'C', 'B', 'A', 'A'] ) ;

	var data = [['red', 5], ['blue', 1], ['yellow', 8], ['black', 0]] ;

	data = s( compare.colexicographical( compare.increasing ) , data ) ;
	var keys = l(m( operator.attrgetter( "1" ) , data ) ) ;

	deepEqual( data[bisect.bisect_left(keys, 0)] , ['black', 0] ) ;
	deepEqual( data[bisect.bisect_left(keys, 1)] , ['blue', 1] ) ;
	deepEqual( data[bisect.bisect_left(keys, 5)] , ['red', 5] ) ;
	deepEqual( data[bisect.bisect_left(keys, 8)] , ['yellow', 8] ) ;

	var a = [ Math.random( ) , Math.random( ) , Math.random( ) ] ;

	bisect.insort_left( a , Math.random( ) ) ;
	bisect.insort_right( a , Math.random( ) ) ;

	ok( sort.issorted( compare.increasing , a , 0 , a.length ) ) ;

} ) ;

