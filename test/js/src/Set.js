
var dll = require( "aureooms-js-dll" ) ;
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var sorted = itertools.sorted ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	Map : Map

} ) ;

var KeyError = mycollections.KeyError ;

[ mycollections.Set ].forEach( function ( Set ) {

test( Set.name , function ( ) {

	deepEqual( new Set( ).len( ) , 0 , "len empty" ) ;

	deepEqual( new Set( "abc" ).len( ) , 3 , "len iterable" ) ;

	deepEqual( new Set( "abc" ).has( "b" ) , true , "has true" ) ;

	deepEqual( new Set( "abc" ).has( "x" ) , false , "has false" ) ;

	deepEqual( new Set( "abc" ).add( "x" ).has( "x" ) , true , "has set" ) ;

	deepEqual( new Set( "abc" ).remove( "b" ).has( "b" ) , false , "has discard" ) ;

	deepEqual( new Set( "abc" ).isdisjoint( new Set( "xyz" ) ) , true , "isdisjoint true" ) ;

	deepEqual( new Set( "abc" ).isdisjoint( new Set( "xbz" ) ) , false , "isdisjoint false" ) ;

	deepEqual( new Set( "abc" ).isequal( new Set( "abc" ) ) , true , "equal" ) ;

	deepEqual( new Set( "abc" ).isequal( new Set( "abcd" ) ) , false , "not equal len" ) ;

	deepEqual( new Set( "abc" ).isequal( new Set( "abd" ) ) , false , "not equal key" ) ;

	deepEqual( new Set( "abc" ).isequal( new Set( "abd" ) ) , false , "not equal key" ) ;

	deepEqual( new Set( "abc" ).issubset( new Set( "abcd" ) ) , true , "subset abcd") ;

	deepEqual( new Set( "abc" ).issubset( new Set( "abc" ) ) , true , "subset abc") ;

	deepEqual( new Set( "abc" ).issubset( new Set( "ab" ) ) , false , "subset ab") ;

	deepEqual( new Set( "abc" ).ispropersubset( new Set( "abcd" ) ) , true , "proper subset abcd") ;

	deepEqual( new Set( "abc" ).ispropersubset( new Set( "abc" ) ) , false , "proper subset abc") ;

	deepEqual( new Set( "abc" ).ispropersubset( new Set( "ab" ) ) , false , "proper subset ab") ;

	deepEqual( new Set( "abc" ).issuperset( new Set( "abcd" ) ) , false , "superset abcd") ;

	deepEqual( new Set( "abc" ).issuperset( new Set( "abc" ) ) , true , "superset abc") ;

	deepEqual( new Set( "abc" ).issuperset( new Set( "ab" ) ) , true , "superset ab") ;

	deepEqual( new Set( "abc" ).ispropersuperset( new Set( "abcd" ) ) , false , "proper superset abcd") ;

	deepEqual( new Set( "abc" ).ispropersuperset( new Set( "abc" ) ) , false , "proper superset abc") ;

	deepEqual( new Set( "abc" ).ispropersuperset( new Set( "ab" ) ) , true , "proper superset ab") ;

	ok( Set.inclusion( new Set( "abc" ) , new Set( "abcd" ) ) < 0 , "Set.inclusion abcd" ) ;

	ok( Set.inclusion( new Set( "abc" ) , new Set( "abc" ) ) === 0 , "Set.inclusion abc" ) ;

	ok( Set.inclusion( new Set( "abc" ) , new Set( "ab" ) ) > 0 , "Set.inclusion ab" ) ;

	ok( new Set( "abc" ).union( new Set( "de" ) ).isequal( new Set( "abcde" ) ) , "union" ) ;

	ok( new Set( "abc" ).intersection( new Set( "de" ) ).isequal( new Set( ) ) , "intersection empty" ) ;

	ok( new Set( "abc" ).intersection( new Set( "bcd" ) ).isequal( new Set( "bc" ) ) , "intersection bc" ) ;

	ok( new Set( "abc" ).difference( new Set( "de" ) ).isequal( new Set( "abc" ) ) , "difference abc" ) ;

	ok( new Set( "abc" ).difference( new Set( "bcd" ) ).isequal( new Set( "a" ) ) , "difference a" ) ;

	ok( new Set( "abc" ).symmetric_difference( new Set( "de" ) ).isequal( new Set( "abcde" ) ) , "symmetric_difference abcde" ) ;

	ok( new Set( "abc" ).symmetric_difference( new Set( "bcd" ) ).isequal( new Set( "ad" ) ) , "symmetric_difference ad" ) ;

	ok( new Set( "abc" ).update( "de" ).isequal( new Set( "abcde" ) ) , "update" ) ;

	ok( new Set( "abc" ).intersection_update( "de" ).isequal( new Set( ) ) , "intersection update empty" ) ;

	ok( new Set( "abc" ).intersection_update( "bcd" ).isequal( new Set( "bc" ) ) , "intersection update bc" ) ;

	ok( new Set( "abc" ).intersection_update( new Set( "bcd" ) ).isequal( new Set( "bc" ) ) , "intersection update set bc" ) ;

	ok( new Set( "abc" ).difference_update( "de" ).isequal( new Set( "abc" ) ) , "difference_update abc" ) ;

	ok( new Set( "abc" ).difference_update( "bcd" ).isequal( new Set( "a" ) ) , "difference_update a" ) ;

	ok( new Set( "abc" ).symmetric_difference_update( "de" ).isequal( new Set( "abcde" ) ) , "symmetric_difference_update abcde" ) ;

	ok( new Set( "abc" ).symmetric_difference_update( "bcd" ).isequal( new Set( "ad" ) ) , "symmetric_difference_update ad" ) ;

	deepEqual( new Set( "a" ).pop( ) , "a" , "pop" ) ;

	ok( new Set( "abc" ).remove( "b" ).isequal( new Set( "ac" ) ) , "remove b" ) ;

	ok( new Set( "abc" ).discard( "b" ).isequal( new Set( "ac" ) ) , "discard b" ) ;

	ok( new Set( "abc" ).discard( "d" ).isequal( new Set( "abc" ) ) , "discard d" ) ;

	var s = new Set( "abcd" ) ;

	s.clear( ) ;

	ok( s.isequal( new Set( ) ) , "clear" ) ;

	raises( s.clear( ).pop.bind( s ) , KeyError , "pop raises" ) ;

	raises( s.clear( ).add( "x" ).remove.bind( s , "y" ) , KeyError , "remove raises" ) ;

} ) ;

} ) ;
