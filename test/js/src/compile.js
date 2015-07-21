
var dll = require( "aureooms-js-dll" ) ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	BaseMap : Map

} ) ;

test( "compile" , function ( ) {

	ok( mycollections.KeyError ) ;
	ok( mycollections.Mapping ) ;
	ok( mycollections.Set ) ;
	ok( mycollections.set ) ;
	ok( mycollections.Dict ) ;
	ok( mycollections.dict ) ;
	ok( mycollections.DefaultDict ) ;
	ok( mycollections.defaultdict ) ;
	ok( mycollections.OrderedDict ) ;
	ok( mycollections.ordereddict ) ;
	ok( mycollections.Counter ) ;
	ok( mycollections.counter ) ;
	ok( mycollections.ChainMap ) ;
	ok( mycollections.chainmap ) ;
	ok( mycollections.NamedTuple ) ;
	ok( mycollections.namedtuple ) ;

} ) ;


