
var dll = require( "aureooms-js-dll" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var list = itertools.list ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	Map : Map

} ) ;

var namedtuple = mycollections.namedtuple ;
var OrderedDict = mycollections.OrderedDict ;

test( "namedtuple" , function ( ) {

	var Point = namedtuple( "Point" , [ "x" , "y" ] ) ;

	var p = new Point( 0 , 1 ) ;

	deepEqual( p._fields , [ "x" , "y" ] , "fields" ) ;

	deepEqual( p[0] , 0 , "p[0]" ) ;
	deepEqual( p[1] , 1 , "p[1]" ) ;
	deepEqual( p.x , 0 , "p.x" ) ;
	deepEqual( p.y , 1 , "p.y" ) ;

	deepEqual( p.length , 2 , "length" ) ;

	deepEqual( list( p ) , [ 0 , 1 ] , "list" ) ;

	ok( p._asdict( ).isequal( new OrderedDict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "asdict" ) ;

	var q = p._replace( [ [ "x" , 33 ] ] ) ;

	deepEqual( q._fields , [ "x" , "y" ] , "replace fields" ) ;

	deepEqual( q[0] , 33 , "replace p[0]" ) ;
	deepEqual( q[1] , 1 , "replace p[1]" ) ;
	deepEqual( q.x , 33 , "replace p.x" ) ;
	deepEqual( q.y , 1 , "replace p.y" ) ;

	deepEqual( q.length , 2 , "replace length" ) ;

	deepEqual( list( q ) , [ 33 , 1 ] , "replace list" ) ;

	ok( q._asdict( ).isequal( new OrderedDict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "replace asdict" ) ;


	p = Point._make( [ 0 , 1 ] ) ;

	deepEqual( p._fields , [ "x" , "y" ] , "make fields" ) ;

	deepEqual( p[0] , 0 , "make p[0]" ) ;
	deepEqual( p[1] , 1 , "make p[1]" ) ;
	deepEqual( p.x , 0 , "make p.x" ) ;
	deepEqual( p.y , 1 , "make p.y" ) ;

	deepEqual( p.length , 2 , "make length" ) ;

	deepEqual( list( p ) , [ 0 , 1 ] , "make list" ) ;

	ok( p._asdict( ).isequal( new OrderedDict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "make asdict" ) ;

	q = p._replace( [ [ "x" , 33 ] ] ) ;

	deepEqual( q._fields , [ "x" , "y" ] , "replace make fields" ) ;

	deepEqual( q[0] , 33 , "replace make p[0]" ) ;
	deepEqual( q[1] , 1 , "replace make p[1]" ) ;
	deepEqual( q.x , 33 , "replace make p.x" ) ;
	deepEqual( q.y , 1 , "replace make p.y" ) ;

	deepEqual( q.length , 2 , "replace make length" ) ;

	deepEqual( list( q ) , [ 33 , 1 ] , "replace make list" ) ;

	ok( q._asdict( ).isequal( new OrderedDict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "replace make asdict" ) ;

} ) ;
