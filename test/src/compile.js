
test( "compile" , function ( ) {

	ok( collections.heapq ) ;
	ok( collections.bisect ) ;
	ok( collections.deque ) ;
	ok( collections.set ) ;
	ok( collections.dict ) ;
	ok( collections.defaultdict ) ;
	ok( collections.ordereddict ) ;
	ok( collections.counter ) ;
	ok( collections.chainmap ) ;
	ok( collections.namedtuple ) ;

	ok( collections.IndexError ) ;
	ok( collections.KeyError ) ;
	ok( collections.NotImplementedError ) ;
	ok( collections.TypeError ) ;
	ok( collections.ValueError ) ;

} ) ;


