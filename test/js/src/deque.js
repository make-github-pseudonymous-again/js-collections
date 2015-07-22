var dll = require( "aureooms-js-dll" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var list = itertools.list ;
var range = itertools.range ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	BaseMap : Map

} ) ;

var IndexError = mycollections.IndexError ;
var ValueError = mycollections.ValueError ;
var NotImplementedError = mycollections.NotImplementedError ;

var deque = mycollections.deque ;
var Deque = mycollections.Deque ;
var UnboundedDeque = mycollections.UnboundedDeque ;
var BoundedDeque = mycollections.BoundedDeque ;
var SingleElementDeque = mycollections.SingleElementDeque ;
var EmptyDeque = mycollections.EmptyDeque ;

test( deque.name , function ( ) {

	var d = new Deque( ) ;

	raises( d.values.bind( d ) , NotImplementedError , "Deque values" ) ;
	raises( list.bind( null , d ) , NotImplementedError , "list( Deque )" ) ;
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

	deepEqual( list( deque( "abc" ) ) , list( "abc" ) , "iterable constructor" ) ;
	deepEqual( list( deque( "abc" , 0 ) ) , list( "" ) , "iterable constructor 0" ) ;
	deepEqual( list( deque( "abc" , 1 ) ) , list( "c" ) , "iterable constructor 1" ) ;
	deepEqual( list( deque( "abc" , 2 ) ) , list( "bc" ) , "iterable constructor 2" ) ;

	deepEqual( list( deque( null ).extendleft( "abc" ) ) , list( "cba" ) , "extendleft" ) ;
	deepEqual( list( deque( null , 0 ).extendleft( "abc" ) ) , list( "" ) , "extendleft 0" ) ;
	deepEqual( list( deque( null , 1 ).extendleft( "abc" ) ) , list( "c" ) , "extendleft 1" ) ;
	deepEqual( list( deque( null , 2 ).extendleft( "abc" ) ) , list( "cb" ) , "extendleft 2" ) ;

	deepEqual( list( deque( range( 0 , 100 , 1 ) ) ) , list( range( 0 , 100 , 1 ) ) , "range unbounded" ) ;
	deepEqual( list( deque( range( 0 , 100 , 1 ) , 50 ) ) , list( range( 50 , 100 , 1 ) ) , "range bounded" ) ;
	deepEqual( list( deque( range( 0 , 100 , 1 ) , 1 ) ) , list( range( 99 , 100 , 1 ) ) , "range 1" ) ;
	deepEqual( list( deque( range( 0 , 100 , 1 ) , 0 ) ) , list( range( 100 , 100 , 1 ) ) , "range 0" ) ;

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

	deepEqual( list( d ) , list( "" ) , "single empty values" ) ;


	var i = 0 ;

	var j = 10000 ;

	d = deque( range( i , j , 1 ) ) ;

	deepEqual( list( d ) , list( range( i , j , 1 ) ) , "big unbounded 10000" ) ;

	for ( ; j > 7500 ; --j ) d.pop( ) ;
	for ( ; i < 2500 ; ++i ) d.popleft( ) ;

	deepEqual( list( d ) , list( range( 2500 , 7500 , 1 ) ) , "big unbounded 5000" ) ;

	for ( ; j > 5000 ; --j ) d.pop( ) ;
	for ( ; i < 4000 ; ++i ) d.popleft( ) ;

	deepEqual( list( d ) , list( range( 4000 , 5000 , 1 ) ) , "shrink unbounded 1000" ) ;

	deepEqual( d.clear( ) , d , "clear unbounded" ) ;

	deepEqual( d.len( ) , 0 , "unbounded is empty" ) ;

	d.extend( range( 5000 , 10000 , 1 ) ) ;

	d.extendleft( range( 4999 , -1 , -1 ) ) ;

	deepEqual( list( d ) , list( range( 0 , 10000 , 1 ) ) , "big unbounded extend" ) ;

	deepEqual( list( d.copy( ) ) , list( d ) , "big unbounded copy" ) ;



} ) ;
