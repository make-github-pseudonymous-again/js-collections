
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

	var s = new Set( "abc" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.len( ) , 3 , "len iterable" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.has( "b" ) , true , "has true" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.has( "x" ) , false , "has false" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isdisjoint( "xyz" ) , true , "isdisjoint true" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isdisjoint( "xbz" ) , false , "isdisjoint false" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isequal( "abc" ) , true , "equal" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isequal( "abcd" ) , false , "not equal len" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isequal( "abd" ) , false , "not equal key" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.isequal( "abd" ) , false , "not equal key" ) ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issubset( "abcd" ) , true , "subset abcd") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issubset( "abc" ) , true , "subset abc") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issubset( "ab" ) , false , "subset ab") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersubset( "abcd" ) , true , "proper subset abcd") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersubset( "abc" ) , false , "proper subset abc") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersubset( "ab" ) , false , "proper subset ab") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issuperset( "abcd" ) , false , "superset abcd") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issuperset( "abc" ) , true , "superset abc") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.issuperset( "ab" ) , true , "superset ab") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersuperset( "abcd" ) , false , "proper superset abcd") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersuperset( "abc" ) , false , "proper superset abc") ;
	ok( s.isequal( "abc" ) ) ;

	deepEqual( s.ispropersuperset( "ab" ) , true , "proper superset ab") ;
	ok( s.isequal( "abc" ) ) ;

	ok( Set.inclusion( s , "abcd" ) < 0 , "Set.inclusion abcd" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( Set.inclusion( s , "abc" ) === 0 , "Set.inclusion abc" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( Set.inclusion( s , "ab" ) > 0 , "Set.inclusion ab" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.union( "de" ).isequal( "abcde" ) , "union" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.union( "d" , "e" ).isequal( "abcde" ) , "union ..." ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.intersection( "de" ).isequal( "" ) , "intersection empty" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.intersection( "abc" , "de" ).isequal( "" ) , "intersection ... empty" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.intersection( "bcd" ).isequal( "bc" ) , "intersection bc" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.intersection( "abcd" , "bcd" ).isequal( "bc" ) , "intersection ... bc" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.difference( "de" ).isequal( "abc" ) , "difference abc" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.difference( "d" , "e" ).isequal( "abc" ) , "difference ... abc" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.difference( "bcd" ).isequal( "a" ) , "difference a" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.difference( "bc" , "d" ).isequal( "a" ) , "difference ... a" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.symmetric_difference( "de" ).isequal( "abcde" ) , "symmetric_difference abcde" ) ;
	ok( s.isequal( "abc" ) ) ;

	ok( s.symmetric_difference( "bcd" ).isequal( "ad" ) , "symmetric_difference ad" ) ;
	ok( s.isequal( "abc" ) ) ;

	s = new Set( "abc" ) ; s.add( "x" ) ;
	deepEqual( s.has( "x" ) , true , "has set" ) ;
	ok( s.isequal( "abcx" ) ) ;

	deepEqual( s.clear( ).update( "abc" ).add( "x" ).has( "x" ) , true , "chain has set" ) ;
	ok( s.isequal( "abcx" ) ) ;

	s = new Set( "abc" ) ; s.remove( "b" ) ;
	deepEqual( s.has( "b" ) , false , "has remove" ) ;
	ok( s.isequal( "ac" ) ) ;

	deepEqual( s.clear( ).update( "abc" ).remove( "b" ).has( "b" ) , false , "chain has remove" ) ;
	ok( s.isequal( "ac" ) ) ;

	s = new Set( "abc" ) ; s.update( "de" ) ;
	ok( s.isequal( "abcde" ) , "update" ) ;
	ok( s.clear( ).update( "abc" ).update( "de" ).isequal( "abcde" ) , "chain update" ) ;

	s = new Set( "abc" ) ; s.update( "d" , "e" ) ;
	ok( s.isequal( "abcde" ) , "update ..." ) ;
	ok( s.clear( ).update( "abc" ).update( "d" , "e" ).isequal( "abcde" ) , "chain update ..." ) ;

	s = new Set( "abc" ) ; s.intersection_update( "de" ) ;
	ok( s.isequal( "" ) , "intersection update empty" ) ;
	ok( s.clear( ).update( "abc" ).intersection_update( "de" ).isequal( "" ) , "chain intersection update empty" ) ;

	s = new Set( "abc" ) ; s.intersection_update( "abc" , "de" ) ;
	ok( s.isequal( "" ) , "intersection update ... empty" ) ;
	ok( s.clear( ).intersection_update( "abc" , "de" ).isequal( "" ) , "chain intersection update ... empty" ) ;

	s = new Set( "abc" ) ; s.intersection_update( "bcd" ) ;
	ok( s.isequal( "bc" ) , "intersection update bc" ) ;
	ok( s.clear( ).update( "abc" ).intersection_update( "bcd" ).isequal( "bc" ) , "chain intersection update bc" ) ;

	s = new Set( "abc" ) ; s.intersection_update( "abcd" ,"bcd" ) ;
	ok( s.isequal( "bc" ) , "intersection update ... bc" ) ;
	ok( s.clear( ).update( "abc" ).intersection_update( "abcd" ,"bcd" ).isequal( "bc" ) , "chain intersection update ... bc" ) ;
	s = new Set( "abc" ) ; s.difference_update( "de" ) ;
	ok( s.isequal( "abc" ) , "difference_update abc" ) ;
	ok( s.clear( ).update( "abc" ).difference_update( "de" ).isequal( "abc" ) , "chain difference_update abc" ) ;

	s = new Set( "abc" ) ; s.difference_update( "d" , "e" ) ;
	ok( s.isequal( "abc" ) , "difference_update ... abc" ) ;
	ok( s.clear( ).update( "abc" ).difference_update( "d" , "e" ).isequal( "abc" ) , "chain difference_update ... abc" ) ;

	s = new Set( "abc" ) ; s.difference_update( "bcd" ) ;
	ok( s.isequal( "a" ) , "difference_update a" ) ;
	ok( s.clear( ).update( "abc" ).difference_update( "bcd" ).isequal( "a" ) , "chain difference_update a" ) ;

	s = new Set( "abc" ) ; s.difference_update( "bc" , "d" ) ;
	ok( s.isequal( "a" ) , "difference_update ... a" ) ;
	ok( s.clear( ).update( "abc" ).difference_update( "bc" , "d" ).isequal( "a" ) , "chain difference_update ... a" ) ;

	s = new Set( "abc" ) ; s.symmetric_difference_update( "de" ) ;
	ok( s.isequal( "abcde" ) , "symmetric_difference_update abcde" ) ;
	ok( s.clear( ).update( "abc" ).symmetric_difference_update( "de" ).isequal( "abcde" ) , "chain symmetric_difference_update abcde" ) ;

	s = new Set( "abc" ) ; s.symmetric_difference_update( "bcd" ) ;
	ok( s.isequal( "ad" ) , "symmetric_difference_update ad" ) ;
	ok( s.clear( ).update( "abc" ).symmetric_difference_update( "bcd" ).isequal( "ad" ) , "chain symmetric_difference_update ad" ) ;

	deepEqual( new Set( "a" ).pop( ) , "a" , "pop" ) ;
	deepEqual( new Set( "a" ).pop( ) , "a" , "pop" ) ;

	ok( new Set( "abc" ).remove( "b" ).isequal( "ac" ) , "remove b" ) ;
	ok( new Set( "abc" ).remove( "b" ).isequal( "ac" ) , "remove b" ) ;

	ok( new Set( "abc" ).discard( "b" ).isequal( "ac" ) , "discard b" ) ;
	ok( new Set( "abc" ).discard( "b" ).isequal( "ac" ) , "discard b" ) ;

	ok( new Set( "abc" ).discard( "d" ).isequal( "abc" ) , "discard d" ) ;
	ok( new Set( "abc" ).discard( "d" ).isequal( "abc" ) , "discard d" ) ;

	s = new Set( "abcd" ) ;

	s.clear( ) ;
	ok( s.isequal( "" ) , "clear" ) ;

	raises( s.clear( ).pop.bind( s ) , KeyError , "pop raises" ) ;
	raises( s.clear( ).pop.bind( s ) , KeyError , "pop raises" ) ;

	raises( s.clear( ).add( "x" ).remove.bind( s , "y" ) , KeyError , "remove raises" ) ;
	raises( s.clear( ).add( "x" ).remove.bind( s , "y" ) , KeyError , "remove raises" ) ;

	deepEqual( s.clear( ) , s , "ref clear" ) ;
	deepEqual( s.add( "x" ) , s , "ref add" ) ;
	deepEqual( s.remove( "x" ) , s , "ref remove" ) ;
	deepEqual( s.discard( "x" ) , s , "ref discard" ) ;
	deepEqual( s.update( ) , s , "ref update" ) ;
	deepEqual( s.intersection_update( ) , s , "ref intersection_update" ) ;
	deepEqual( s.difference_update( ) , s , "ref difference_update" ) ;
	deepEqual( s.symmetric_difference_update( "x" ) , s , "ref symmetric_difference_update" ) ;

} ) ;

} ) ;
