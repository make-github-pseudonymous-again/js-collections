
var dll = require( "aureooms-js-dll" ) ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	BaseMap : Map

} ) ;

test( "compile" , function ( ) {

	ok( mycollections.heapq ) ;
	ok( mycollections.bisect ) ;
	ok( mycollections.deque ) ;
	ok( mycollections.set ) ;
	ok( mycollections.dict ) ;
	ok( mycollections.defaultdict ) ;
	ok( mycollections.ordereddict ) ;
	ok( mycollections.counter ) ;
	ok( mycollections.chainmap ) ;
	ok( mycollections.namedtuple ) ;

} ) ;


