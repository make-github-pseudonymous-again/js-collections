var itertools = require( "aureooms-js-itertools" ) ;

var l = itertools.list ;
var r = itertools.range ;
var c = itertools.chain ;
var m = itertools.map ;
var f = itertools.filter ;

var IndexError = collections.IndexError ;
var ValueError = collections.ValueError ;
var NotImplementedError = collections.NotImplementedError ;

var deque = collections.deque ;
var Deque = collections.Deque ;
var UnboundedDeque = collections.UnboundedDeque ;
var BoundedDeque = collections.BoundedDeque ;
var SingleElementDeque = collections.SingleElementDeque ;
var EmptyDeque = collections.EmptyDeque ;

test( deque.name , function ( ) {

	var d = new Deque( ) ;

	raises( d.values.bind( d ) , NotImplementedError , "Deque values" ) ;
	raises( l.bind( null , d ) , NotImplementedError , "list( Deque )" ) ;
	raises( d.len.bind( d ) , NotImplementedError , "Deque len" ) ;
	raises( d.empty.bind( d ) , NotImplementedError , "Deque empty" ) ;
	raises( d.append.bind( d , 0 ) , NotImplementedError , "Deque append" ) ;
	raises( d.appendleft.bind( d , 0 ) , NotImplementedError , "Deque appendleft" ) ;
	raises( d.clear.bind( d ) , NotImplementedError , "Deque clear" ) ;
	raises( d.copy.bind( d ) , NotImplementedError , "Deque copy" ) ;
	raises( d.count.bind( d , 0 ) , NotImplementedError , "Deque count" ) ;
	raises( d.extend.bind( d , "a" ) , NotImplementedError , "Deque extend" ) ;
	raises( d.extendleft.bind( d , "a" ) , NotImplementedError , "Deque extendleft" ) ;
	raises( d._where.bind( d , 0 ) , NotImplementedError , "Deque _where" ) ;
	raises( d.get.bind( d , 0 ) , NotImplementedError , "Deque get" ) ;
	raises( d.set.bind( d , 0 , 0 ) , NotImplementedError , "Deque set" ) ;
	raises( d.insert.bind( d , 0 , 0 ) , NotImplementedError , "Deque insert" ) ;
	raises( d.pop.bind( d ) , NotImplementedError , "Deque pop" ) ;
	raises( d.popleft.bind( d ) , NotImplementedError , "Deque popleft" ) ;

	raises( deque.bind( null , null , 1.2 ) , TypeError , "maxlen float" ) ;
	raises( deque.bind( null , null , -1 ) , ValueError , "maxlen negative" ) ;
	raises( deque.bind( null , null , { } ) , TypeError , "maxlen object" ) ;

	ok( deque( ).empty( ) , "empty" ) ;
	ok( !deque( "abc" ).empty( ) , "not empty" ) ;

	ok( deque( ) instanceof Deque , "deque( ) is a Deque" ) ;
	ok( deque( 'abc' ) instanceof Deque , "deque( 'abc' ) is a Deque" ) ;
	ok( deque( null ) instanceof Deque , "deque( null ) is a Deque" ) ;
	ok( deque( null , 0 ) instanceof Deque , "deque( null , 0 ) is a Deque" ) ;
	ok( deque( null , 1 ) instanceof Deque , "deque( null , 1 ) is a Deque" ) ;
	ok( deque( null , 2 ) instanceof Deque , "deque( null , 33 ) is a Deque" ) ;
	ok( deque( 'abc' , 0 ) instanceof Deque , "deque( 'abc' , 0 ) is a Deque" ) ;
	ok( deque( 'abc' , 1 ) instanceof Deque , "deque( 'abc' , 1 ) is a Deque" ) ;
	ok( deque( 'abc' , 2 ) instanceof Deque , "deque( 'abc' , 33 ) is a Deque" ) ;

	deepEqual( l( deque( "abc" ) ) , l( "abc" ) , "iterable constructor" ) ;
	deepEqual( l( deque( "abc" , 0 ) ) , l( "" ) , "iterable constructor 0" ) ;
	deepEqual( l( deque( "abc" , 1 ) ) , l( "c" ) , "iterable constructor 1" ) ;
	deepEqual( l( deque( "abc" , 2 ) ) , l( "bc" ) , "iterable constructor 2" ) ;

	deepEqual( l( deque( null ).extendleft( "abc" ) ) , l( "cba" ) , "extendleft" ) ;
	deepEqual( l( deque( null , 0 ).extendleft( "abc" ) ) , l( "" ) , "extendleft 0" ) ;
	deepEqual( l( deque( null , 1 ).extendleft( "abc" ) ) , l( "c" ) , "extendleft 1" ) ;
	deepEqual( l( deque( null , 2 ).extendleft( "abc" ) ) , l( "cb" ) , "extendleft 2" ) ;

	deepEqual( l( deque( r( 0 , 100 , 1 ) ) ) , l( r( 0 , 100 , 1 ) ) , "range unbounded" ) ;
	deepEqual( l( deque( r( 0 , 100 , 1 ) , 50 ) ) , l( r( 50 , 100 , 1 ) ) , "range bounded" ) ;
	deepEqual( l( deque( r( 0 , 100 , 1 ) , 1 ) ) , l( r( 99 , 100 , 1 ) ) , "range 1" ) ;
	deepEqual( l( deque( r( 0 , 100 , 1 ) , 0 ) ) , l( r( 100 , 100 , 1 ) ) , "range 0" ) ;

	d = deque( "abc" , 0 ) ;

	deepEqual( d.len( ) , 0 , "empty len" ) ;
	ok( d.copy( ) instanceof EmptyDeque , "empty copy is EmptyDeque" ) ;
	ok( d.copy( ) !== d , "empty copy is different" ) ;
	deepEqual( d.clear( ) , d , "empty clear" ) ;

	raises( d.append( "a" ).get.bind( d , 0 ) , IndexError , "empty get" ) ;
	raises( d.append( "a" ).set.bind( d , 0 , "b" ) , IndexError , "empty set" ) ;
	raises( d.append( "a" ).pop.bind( d ) , IndexError , "empty pop" ) ;

	d = deque( "abc" , 1 ) ;

	deepEqual( d.len( ) , 1 , "single len" ) ;
	ok( d.copy( ) instanceof SingleElementDeque , "single copy is EmptyDeque" ) ;
	ok( d.copy( ) !== d , "single copy is different" ) ;
	deepEqual( d.clear( ) , d , "single clear" ) ;
	deepEqual( d.clear( ).len( ) , 0 , "single clear len" ) ;

	raises( d.append( "a" ).get.bind( d , 1 ) , IndexError , "single get 1" ) ;
	raises( d.append( "a" ).set.bind( d , 1 , "b" ) , IndexError , "single set 1" ) ;
	raises( d.clear( ).pop.bind( d ) , IndexError , "single pop clear" ) ;

	raises( d.clear( ).get.bind( d , 0 ) , IndexError , "single empty get 0" ) ;
	raises( d.clear( ).set.bind( d , 0 , "b" ) , IndexError , "single empty set 0" ) ;

	d.extend( "abcdef" ) ;

	deepEqual( d.get( 0 ) , "f" , "extend single get 0" ) ;
	deepEqual( d.set( 0 , "g" ) , d , "extend single set 0" ) ;
	deepEqual( d.pop( ) , "g" , "extend single pop clear" ) ;

	d.extendleft( "abcdef" ) ;

	deepEqual( d.get( 0 ) , "f" , "extendleft single get 0" ) ;
	deepEqual( d.set( 0 , "g" ) , d , "extendleft single set 0" ) ;
	deepEqual( d.pop( ) , "g" , "extendleft single pop clear" ) ;

	deepEqual( l( d ) , l( "" ) , "single empty values" ) ;

	// UNBOUNDED

	var i = 0 ;

	var j = 10000 ;

	d = deque( r( i , j , 1 ) ) ;

	deepEqual( l( d ) , l( r( i , j , 1 ) ) , "big unbounded 10000" ) ;

	for ( ; j > 7500 ; --j ) d.pop( ) ;
	for ( ; i < 2500 ; ++i ) d.popleft( ) ;

	deepEqual( l( d ) , l( r( 2500 , 7500 , 1 ) ) , "big unbounded 5000" ) ;

	for ( ; j > 5000 ; --j ) d.pop( ) ;
	for ( ; i < 4000 ; ++i ) d.popleft( ) ;

	deepEqual( l( d ) , l( r( 4000 , 5000 , 1 ) ) , "shrink unbounded 1000" ) ;

	deepEqual( d.clear( ) , d , "clear unbounded" ) ;

	deepEqual( d.len( ) , 0 , "unbounded is empty" ) ;

	d.extend( r( 5000 , 10000 , 1 ) ) ;

	d.extendleft( r( 4999 , -1 , -1 ) ) ;

	deepEqual( l( d ) , l( r( 0 , 10000 , 1 ) ) , "big unbounded extend" ) ;

	deepEqual( l( d.copy( ) ) , l( d ) , "big unbounded copy" ) ;

	// BOUNDED WITHOUT OVERFLOW

	i = 0 ;

	j = 10000 ;

	d = deque( r( i , j , 1 ) , j - i ) ;

	deepEqual( l( d ) , l( r( i , j , 1 ) ) , "big bounded(10000) 10000" ) ;

	for ( ; j > 7500 ; --j ) d.pop( ) ;
	for ( ; i < 2500 ; ++i ) d.popleft( ) ;

	deepEqual( l( d ) , l( r( 2500 , 7500 , 1 ) ) , "big bounded(10000) 5000" ) ;

	for ( ; j > 5000 ; --j ) d.pop( ) ;
	for ( ; i < 4000 ; ++i ) d.popleft( ) ;

	deepEqual( l( d ) , l( r( 4000 , 5000 , 1 ) ) , "shrink bounded(10000) 1000" ) ;

	deepEqual( d.clear( ) , d , "clear bounded(10000)" ) ;

	deepEqual( d.len( ) , 0 , "bounded(10000) is empty" ) ;

	d.extend( r( 5000 , 10000 , 1 ) ) ;

	d.extendleft( r( 4999 , -1 , -1 ) ) ;

	deepEqual( l( d ) , l( r( 0 , 10000 , 1 ) ) , "big bounded(10000) extend" ) ;

	deepEqual( l( d.copy( ) ) , l( d ) , "big bounded(10000) copy" ) ;

	// BOUNDED WITH OVERFLOW

	d = deque( [ ] , 5000 ) ;

	d.extend( r( 0 , 10000 , 1 ) ) ;

	deepEqual( l( d ) , l( r( 5000 , 10000 , 1 ) ) , "bounded overflow extend" ) ;

	d.extendleft( r( 0 , 2500 , 1 ) ) ;

	deepEqual( l( d ) , l( c( [ r( 2499 , -1 , -1 ) , r( 5000 , 7500 , 1) ] ) ) , "bounded overflow extend left" ) ;

	// COUNT

	deepEqual( d.count( 0 ) , 1 , "count 0 bounded" ) ;

	deepEqual( d.count( null ) , 0 , "count null bounded" ) ;

	var p = function ( n ) { return n < 2500 ; } ;

	deepEqual( deque( m( p , d ) ).count( true ) , 2500 , "count true" ) ;

	deepEqual( deque( m( p , f( p , d ) ) , 10 ).count( true ) , 10 , "count true bounded filter" ) ;

	deepEqual( deque( m( p , d ) , 10 ).count( true ) , 0 , "count true bounded map" ) ;

	deepEqual( deque( "aaa" , 0 ).count( "a" ) , 0 , "count empty" ) ;
	deepEqual( deque( "aaa" , 1 ).count( "a" ) , 1 , "count single a" ) ;
	deepEqual( deque( "aaa" , 1 ).count( "b" ) , 0 , "count single b" ) ;

	// MISC

	deepEqual( l( deque( "abcde" ).set( 2 , "X" ) ) , l( "abXde" ) , "set" ) ;
	deepEqual( l( deque( "abcde" ).reverse() ) , l( "edcba" ) , "reverse" ) ;
	deepEqual( l( deque( ).extendleft( "abcde" ).reverse() ) , l( "abcde" ) , "reverse left" ) ;
	deepEqual( deque( "abc" ).index( "b" ) , 1 , "index abc" ) ;
	deepEqual( deque( "abcb" ).index( "b" ) , 1 , "index abcb" ) ;
	deepEqual( deque( "abcb" ).index( "b" , 2 ) , 3 , "index abcb 2" ) ;
	raises( d.clear( ).extend( "abc" ).index.bind( d , "d" ) , ValueError , "index raises" ) ;
	raises( d.clear( ).extend( "abc" ).index.bind( d , "b" , 2 , 3 ) , ValueError , "index raises range" ) ;

	raises( d.clear( ).extend( "abc" ).get.bind( d , -1 ) , IndexError , "get -1" ) ;
	raises( d.clear( ).extend( "abc" ).get.bind( d , 4 ) , IndexError , "get out of bounds" ) ;

	deepEqual( l( deque( "abcde" ).rotate( 2 ) ) , l( "deabc" ) , "rotate 2" ) ;
	deepEqual( l( deque( "abcde" ).rotate( 0 ) ) , l( "abcde" ) , "rotate 0" ) ;
	deepEqual( l( deque( "abcde" ).rotate( -2 ) ) , l( "cdeab" ) , "rotate -2" ) ;

	deepEqual( l( deque( "xabcde" , 5 ).rotate( 2 ) ) , l( "deabc" ) , "bounded rotate 2" ) ;
	deepEqual( l( deque( "xabcde" , 5 ).rotate( 0 ) ) , l( "abcde" ) , "bounded rotate 0" ) ;
	deepEqual( l( deque( "xabcde" , 5 ).rotate( -2 ) ) , l( "cdeab" ) , "bounded rotate -2" ) ;

	deepEqual( l( deque( "abde" ).insert( 2 , "X" ) ) , l( "abXde" ) , "unbounded insert"  ) ;
	deepEqual( l( deque( "abXde" ).delete( 2 ) ) , l( "abde" ) , "unbounded delete"  ) ;
	deepEqual( l( deque( "abXde" ).remove( "X" ) ) , l( "abde" ) , "unbounded remove"  ) ;

	deepEqual( l( deque( "abde" , 5 ).insert( 2 , "X" ) ) , l( "abXde" ) , "bounded insert"  ) ;
	deepEqual( l( deque( "abXde" , 5 ).delete( 2 ) ) , l( "abde" ) , "bounded delete"  ) ;
	deepEqual( l( deque( "abXde" , 5 ).remove( "X" ) ) , l( "abde" ) , "bounded remove"  ) ;

} ) ;
