
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
	ok( mycollections.Dict ) ;
	ok( mycollections.DefaultDict ) ;
	ok( mycollections.OrderedDict ) ;
	ok( mycollections.Counter ) ;
	ok( mycollections.ChainMap ) ;
	ok( mycollections.NamedTuple ) ;
	ok( mycollections.namedtuple ) ;

} ) ;


