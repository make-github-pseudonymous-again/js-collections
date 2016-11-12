import test from 'ava' ;

import {
	list : l ,
	range : r ,
	chain : c ,
	map : m ,
	filter : f ,
} from 'aureooms-js-itertools' ;

import {
	IndexError ,
	ValueError ,
	NotImplementedError ,
	deque ,
	Deque ,
	UnboundedDeque ,
	BoundedDeque ,
	SingleElementDeque ,
	EmptyDeque ,
} from '../../src' ;

test( deque.name , function ( ) {

	let d = new Deque( ) ;

	t.throws( d.values.bind( d ) , NotImplementedError , "Deque values" ) ;
	t.throws( l.bind( null , d ) , NotImplementedError , "list( Deque )" ) ;
	t.throws( d.len.bind( d ) , NotImplementedError , "Deque len" ) ;
	t.throws( d.capacity.bind( d ) , NotImplementedError , "Deque capacity" ) ;
	t.throws( d.empty.bind( d ) , NotImplementedError , "Deque empty" ) ;
	t.throws( d.append.bind( d , 0 ) , NotImplementedError , "Deque append" ) ;
	t.throws( d.appendleft.bind( d , 0 ) , NotImplementedError , "Deque appendleft" ) ;
	t.throws( d.clear.bind( d ) , NotImplementedError , "Deque clear" ) ;
	t.throws( d.copy.bind( d ) , NotImplementedError , "Deque copy" ) ;
	t.throws( d.count.bind( d , 0 ) , NotImplementedError , "Deque count" ) ;
	t.throws( d.extend.bind( d , "a" ) , NotImplementedError , "Deque extend" ) ;
	t.throws( d.extendleft.bind( d , "a" ) , NotImplementedError , "Deque extendleft" ) ;
	t.throws( d._where.bind( d , 0 ) , NotImplementedError , "Deque _where" ) ;
	t.throws( d.get.bind( d , 0 ) , NotImplementedError , "Deque get" ) ;
	t.throws( d.set.bind( d , 0 , 0 ) , NotImplementedError , "Deque set" ) ;
	t.throws( d.insert.bind( d , 0 , 0 ) , NotImplementedError , "Deque insert" ) ;
	t.throws( d.pop.bind( d ) , NotImplementedError , "Deque pop" ) ;
	t.throws( d.popleft.bind( d ) , NotImplementedError , "Deque popleft" ) ;

	t.throws( deque.bind( null , null , 1.2 ) , TypeError , "maxlen float" ) ;
	t.throws( deque.bind( null , null , -1 ) , ValueError , "maxlen negative" ) ;
	t.throws( deque.bind( null , null , { } ) , TypeError , "maxlen object" ) ;

	t.true( deque( ).empty( ) , "empty" ) ;
	t.true( !deque( "abc" ).empty( ) , "not empty" ) ;

	t.true( deque( ) instanceof Deque , "deque( ) is a Deque" ) ;
	t.true( deque( 'abc' ) instanceof Deque , "deque( 'abc' ) is a Deque" ) ;
	t.true( deque( null ) instanceof Deque , "deque( null ) is a Deque" ) ;
	t.true( deque( null , 0 ) instanceof Deque , "deque( null , 0 ) is a Deque" ) ;
	t.true( deque( null , 1 ) instanceof Deque , "deque( null , 1 ) is a Deque" ) ;
	t.true( deque( null , 2 ) instanceof Deque , "deque( null , 33 ) is a Deque" ) ;
	t.true( deque( 'abc' , 0 ) instanceof Deque , "deque( 'abc' , 0 ) is a Deque" ) ;
	t.true( deque( 'abc' , 1 ) instanceof Deque , "deque( 'abc' , 1 ) is a Deque" ) ;
	t.true( deque( 'abc' , 2 ) instanceof Deque , "deque( 'abc' , 33 ) is a Deque" ) ;

	t.deepEqual( l( deque( "abc" ) ) , l( "abc" ) , "iterable constructor" ) ;
	t.deepEqual( l( deque( "abc" , 0 ) ) , l( "" ) , "iterable constructor 0" ) ;
	t.deepEqual( l( deque( "abc" , 1 ) ) , l( "c" ) , "iterable constructor 1" ) ;
	t.deepEqual( l( deque( "abc" , 2 ) ) , l( "bc" ) , "iterable constructor 2" ) ;

	t.deepEqual( deque( "abc" , 0 ).capacity( ) , 0 , "capacity 0" ) ;
	t.deepEqual( deque( "abc" , 1 ).capacity( ) , 1 , "capacity 1" ) ;
	t.deepEqual( deque( "abc" , 2 ).capacity( ) , 2 , "capacity 2" ) ;

	t.deepEqual( l( deque( null ).extendleft( "abc" ) ) , l( "cba" ) , "extendleft" ) ;
	t.deepEqual( l( deque( null , 0 ).extendleft( "abc" ) ) , l( "" ) , "extendleft 0" ) ;
	t.deepEqual( l( deque( null , 1 ).extendleft( "abc" ) ) , l( "c" ) , "extendleft 1" ) ;
	t.deepEqual( l( deque( null , 2 ).extendleft( "abc" ) ) , l( "cb" ) , "extendleft 2" ) ;

	t.deepEqual( l( deque( r( 0 , 100 , 1 ) ) ) , l( r( 0 , 100 , 1 ) ) , "range unbounded" ) ;
	t.deepEqual( l( deque( r( 0 , 100 , 1 ) , 50 ) ) , l( r( 50 , 100 , 1 ) ) , "range bounded" ) ;
	t.deepEqual( l( deque( r( 0 , 100 , 1 ) , 1 ) ) , l( r( 99 , 100 , 1 ) ) , "range 1" ) ;
	t.deepEqual( l( deque( r( 0 , 100 , 1 ) , 0 ) ) , l( r( 100 , 100 , 1 ) ) , "range 0" ) ;

	d = deque( "abc" , 0 ) ;

	t.deepEqual( d.len( ) , 0 , "empty len" ) ;
	t.true( d.copy( ) instanceof EmptyDeque , "empty copy is EmptyDeque" ) ;
	t.true( d.copy( ) !== d , "empty copy is different" ) ;
	t.deepEqual( d.clear( ) , d , "empty clear" ) ;

	t.throws( d.append( "a" ).get.bind( d , 0 ) , IndexError , "empty get" ) ;
	t.throws( d.append( "a" ).set.bind( d , 0 , "b" ) , IndexError , "empty set" ) ;
	t.throws( d.append( "a" ).pop.bind( d ) , IndexError , "empty pop" ) ;

	d = deque( "abc" , 1 ) ;

	t.deepEqual( d.len( ) , 1 , "single len" ) ;
	t.true( d.copy( ) instanceof SingleElementDeque , "single copy is EmptyDeque" ) ;
	t.true( d.copy( ) !== d , "single copy is different" ) ;
	t.deepEqual( d.clear( ) , d , "single clear" ) ;
	t.deepEqual( d.clear( ).len( ) , 0 , "single clear len" ) ;

	t.throws( d.append( "a" ).get.bind( d , 1 ) , IndexError , "single get 1" ) ;
	t.throws( d.append( "a" ).set.bind( d , 1 , "b" ) , IndexError , "single set 1" ) ;
	t.throws( d.clear( ).pop.bind( d ) , IndexError , "single pop clear" ) ;

	t.throws( d.clear( ).get.bind( d , 0 ) , IndexError , "single empty get 0" ) ;
	t.throws( d.clear( ).set.bind( d , 0 , "b" ) , IndexError , "single empty set 0" ) ;

	d.extend( "abcdef" ) ;

	t.deepEqual( d.get( 0 ) , "f" , "extend single get 0" ) ;
	t.deepEqual( d.set( 0 , "g" ) , d , "extend single set 0" ) ;
	t.deepEqual( d.pop( ) , "g" , "extend single pop clear" ) ;

	d.extendleft( "abcdef" ) ;

	t.deepEqual( d.get( 0 ) , "f" , "extendleft single get 0" ) ;
	t.deepEqual( d.set( 0 , "g" ) , d , "extendleft single set 0" ) ;
	t.deepEqual( d.pop( ) , "g" , "extendleft single pop clear" ) ;

	t.deepEqual( l( d ) , l( "" ) , "single empty values" ) ;

	// UNBOUNDED

	let i = 0 ;

	let j = 10000 ;

	d = deque( r( i , j , 1 ) ) ;

	t.deepEqual( l( d ) , l( r( i , j , 1 ) ) , "big unbounded 10000" ) ;

	for ( ; j > 7500 ; --j ) d.pop( ) ;
	for ( ; i < 2500 ; ++i ) d.popleft( ) ;

	t.deepEqual( l( d ) , l( r( 2500 , 7500 , 1 ) ) , "big unbounded 5000" ) ;

	for ( ; j > 5000 ; --j ) d.pop( ) ;
	for ( ; i < 4000 ; ++i ) d.popleft( ) ;

	t.deepEqual( l( d ) , l( r( 4000 , 5000 , 1 ) ) , "shrink unbounded 1000" ) ;

	t.deepEqual( d.clear( ) , d , "clear unbounded" ) ;

	t.deepEqual( d.len( ) , 0 , "unbounded is empty" ) ;

	d.extend( r( 5000 , 10000 , 1 ) ) ;

	d.extendleft( r( 4999 , -1 , -1 ) ) ;

	t.deepEqual( l( d ) , l( r( 0 , 10000 , 1 ) ) , "big unbounded extend" ) ;

	t.deepEqual( l( d.copy( ) ) , l( d ) , "big unbounded copy" ) ;

	// BOUNDED WITHOUT OVERFLOW

	i = 0 ;

	j = 10000 ;

	d = deque( r( i , j , 1 ) , j - i ) ;

	t.deepEqual( l( d ) , l( r( i , j , 1 ) ) , "big bounded(10000) 10000" ) ;

	for ( ; j > 7500 ; --j ) d.pop( ) ;
	for ( ; i < 2500 ; ++i ) d.popleft( ) ;

	t.deepEqual( l( d ) , l( r( 2500 , 7500 , 1 ) ) , "big bounded(10000) 5000" ) ;

	for ( ; j > 5000 ; --j ) d.pop( ) ;
	for ( ; i < 4000 ; ++i ) d.popleft( ) ;

	t.deepEqual( l( d ) , l( r( 4000 , 5000 , 1 ) ) , "shrink bounded(10000) 1000" ) ;

	t.deepEqual( d.clear( ) , d , "clear bounded(10000)" ) ;

	t.deepEqual( d.len( ) , 0 , "bounded(10000) is empty" ) ;

	d.extend( r( 5000 , 10000 , 1 ) ) ;

	d.extendleft( r( 4999 , -1 , -1 ) ) ;

	t.deepEqual( l( d ) , l( r( 0 , 10000 , 1 ) ) , "big bounded(10000) extend" ) ;

	t.deepEqual( l( d.copy( ) ) , l( d ) , "big bounded(10000) copy" ) ;

	// BOUNDED WITH OVERFLOW

	d = deque( [ ] , 5000 ) ;

	d.extend( r( 0 , 10000 , 1 ) ) ;

	t.deepEqual( l( d ) , l( r( 5000 , 10000 , 1 ) ) , "bounded overflow extend" ) ;

	d.extendleft( r( 0 , 2500 , 1 ) ) ;

	t.deepEqual( l( d ) , l( c( [ r( 2499 , -1 , -1 ) , r( 5000 , 7500 , 1) ] ) ) , "bounded overflow extend left" ) ;

	// COUNT

	t.deepEqual( d.count( 0 ) , 1 , "count 0 bounded" ) ;

	t.deepEqual( d.count( null ) , 0 , "count null bounded" ) ;

	let p = function ( n ) { return n < 2500 ; } ;

	t.deepEqual( deque( m( p , d ) ).count( true ) , 2500 , "count true" ) ;

	t.deepEqual( deque( m( p , f( p , d ) ) , 10 ).count( true ) , 10 , "count true bounded filter" ) ;

	t.deepEqual( deque( m( p , d ) , 10 ).count( true ) , 0 , "count true bounded map" ) ;

	t.deepEqual( deque( "aaa" , 0 ).count( "a" ) , 0 , "count empty" ) ;
	t.deepEqual( deque( "aaa" , 1 ).count( "a" ) , 1 , "count single a" ) ;
	t.deepEqual( deque( "aaa" , 1 ).count( "b" ) , 0 , "count single b" ) ;

	// MISC

	t.deepEqual( l( deque( "abcde" ).set( 2 , "X" ) ) , l( "abXde" ) , "set" ) ;
	t.deepEqual( l( deque( "abcde" ).reverse() ) , l( "edcba" ) , "reverse" ) ;
	t.deepEqual( l( deque( ).extendleft( "abcde" ).reverse() ) , l( "abcde" ) , "reverse left" ) ;
	t.deepEqual( deque( "abc" ).index( "b" ) , 1 , "index abc" ) ;
	t.deepEqual( deque( "abcb" ).index( "b" ) , 1 , "index abcb" ) ;
	t.deepEqual( deque( "abcb" ).index( "b" , 2 ) , 3 , "index abcb 2" ) ;
	t.throws( d.clear( ).extend( "abc" ).index.bind( d , "d" ) , ValueError , "index raises" ) ;
	t.throws( d.clear( ).extend( "abc" ).index.bind( d , "b" , 2 , 3 ) , ValueError , "index raises range" ) ;

	t.throws( d.clear( ).extend( "abc" ).get.bind( d , -1 ) , IndexError , "get -1" ) ;
	t.throws( d.clear( ).extend( "abc" ).get.bind( d , 4 ) , IndexError , "get out of bounds" ) ;

	t.deepEqual( l( deque( "abcde" ).rotate( 2 ) ) , l( "deabc" ) , "rotate 2" ) ;
	t.deepEqual( l( deque( "abcde" ).rotate( 0 ) ) , l( "abcde" ) , "rotate 0" ) ;
	t.deepEqual( l( deque( "abcde" ).rotate( -2 ) ) , l( "cdeab" ) , "rotate -2" ) ;

	t.deepEqual( l( deque( "xabcde" , 5 ).rotate( 2 ) ) , l( "deabc" ) , "bounded rotate 2" ) ;
	t.deepEqual( l( deque( "xabcde" , 5 ).rotate( 0 ) ) , l( "abcde" ) , "bounded rotate 0" ) ;
	t.deepEqual( l( deque( "xabcde" , 5 ).rotate( -2 ) ) , l( "cdeab" ) , "bounded rotate -2" ) ;

	t.deepEqual( l( deque( "abde" ).insert( 2 , "X" ) ) , l( "abXde" ) , "unbounded insert"  ) ;
	t.deepEqual( l( deque( "abXde" ).delete( 2 ) ) , l( "abde" ) , "unbounded delete"  ) ;
	t.deepEqual( l( deque( "abXde" ).remove( "X" ) ) , l( "abde" ) , "unbounded remove"  ) ;

	t.deepEqual( l( deque( "abde" , 5 ).insert( 2 , "X" ) ) , l( "abXde" ) , "bounded insert"  ) ;
	t.deepEqual( l( deque( "abXde" , 5 ).delete( 2 ) ) , l( "abde" ) , "bounded delete"  ) ;
	t.deepEqual( l( deque( "abXde" , 5 ).remove( "X" ) ) , l( "abde" ) , "bounded remove"  ) ;

} ) ;
