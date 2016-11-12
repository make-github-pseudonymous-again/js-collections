import test from 'ava' ;

import { set , KeyError } from '../../src' ;

test( set.name , t => {

	t.is( set( ).len( ) , 0 , "len empty" ) ;

	var s = set( "abc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.len( ) , 3 , "len iterable" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.has( "b" ) , "has true" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.false( s.has( "x" ) , "has false" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.isdisjoint( "xyz" ) , "isdisjoint true" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.isdisjoint( "xbz" ) , false , "isdisjoint false" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.isequal( "abc" ) , true , "equal" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.isequal( "abcd" ) , false , "not equal len" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.isequal( "abd" ) , false , "not equal key" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.isequal( "abd" ) , false , "not equal key" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issubset( "abcd" ) , true , "subset abcd") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issubset( "abc" ) , true , "subset abc") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issubset( "ab" ) , false , "subset ab") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersubset( "abcd" ) , true , "proper subset abcd") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersubset( "abc" ) , false , "proper subset abc") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersubset( "ab" ) , false , "proper subset ab") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issuperset( "abcd" ) , false , "superset abcd") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issuperset( "abc" ) , true , "superset abc") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.issuperset( "ab" ) , true , "superset ab") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersuperset( "abcd" ) , false , "proper superset abcd") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersuperset( "abc" ) , false , "proper superset abc") ;
	t.true( s.isequal( "abc" ) ) ;

	t.is( s.ispropersuperset( "ab" ) , true , "proper superset ab") ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( set.inclusion( s , "abcd" ) < 0 , "set.inclusion abcd" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( set.inclusion( s , "abc" ) === 0 , "set.inclusion abc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( set.inclusion( s , "ab" ) > 0 , "set.inclusion ab" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.union( "de" ).isequal( "abcde" ) , "union" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.union( "d" , "e" ).isequal( "abcde" ) , "union ..." ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.intersection( "de" ).isequal( "" ) , "intersection empty" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.intersection( "abc" , "de" ).isequal( "" ) , "intersection ... empty" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.intersection( "bcd" ).isequal( "bc" ) , "intersection bc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.intersection( "abcd" , "bcd" ).isequal( "bc" ) , "intersection ... bc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.difference( "de" ).isequal( "abc" ) , "difference abc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.difference( "d" , "e" ).isequal( "abc" ) , "difference ... abc" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.difference( "bcd" ).isequal( "a" ) , "difference a" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.difference( "bc" , "d" ).isequal( "a" ) , "difference ... a" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.symmetric_difference( "de" ).isequal( "abcde" ) , "symmetric_difference abcde" ) ;
	t.true( s.isequal( "abc" ) ) ;

	t.true( s.symmetric_difference( "bcd" ).isequal( "ad" ) , "symmetric_difference ad" ) ;
	t.true( s.isequal( "abc" ) ) ;

	s = set( "abc" ) ; s.add( "x" ) ;
	t.is( s.has( "x" ) , true , "has set" ) ;
	t.true( s.isequal( "abcx" ) ) ;

	t.is( s.clear( ).update( "abc" ).add( "x" ).has( "x" ) , true , "chain has set" ) ;
	t.true( s.isequal( "abcx" ) ) ;

	s = set( "abc" ) ; s.remove( "b" ) ;
	t.is( s.has( "b" ) , false , "has remove" ) ;
	t.true( s.isequal( "ac" ) ) ;

	t.is( s.clear( ).update( "abc" ).remove( "b" ).has( "b" ) , false , "chain has remove" ) ;
	t.true( s.isequal( "ac" ) ) ;

	s = set( "abc" ) ; s.update( "de" ) ;
	t.true( s.isequal( "abcde" ) , "update" ) ;
	t.true( s.clear( ).update( "abc" ).update( "de" ).isequal( "abcde" ) , "chain update" ) ;

	s = set( "abc" ) ; s.update( "d" , "e" ) ;
	t.true( s.isequal( "abcde" ) , "update ..." ) ;
	t.true( s.clear( ).update( "abc" ).update( "d" , "e" ).isequal( "abcde" ) , "chain update ..." ) ;

	s = set( "abc" ) ; s.intersection_update( "de" ) ;
	t.true( s.isequal( "" ) , "intersection update empty" ) ;
	t.true( s.clear( ).update( "abc" ).intersection_update( "de" ).isequal( "" ) , "chain intersection update empty" ) ;

	s = set( "abc" ) ; s.intersection_update( "abc" , "de" ) ;
	t.true( s.isequal( "" ) , "intersection update ... empty" ) ;
	t.true( s.clear( ).intersection_update( "abc" , "de" ).isequal( "" ) , "chain intersection update ... empty" ) ;

	s = set( "abc" ) ; s.intersection_update( "bcd" ) ;
	t.true( s.isequal( "bc" ) , "intersection update bc" ) ;
	t.true( s.clear( ).update( "abc" ).intersection_update( "bcd" ).isequal( "bc" ) , "chain intersection update bc" ) ;

	s = set( "abc" ) ; s.intersection_update( "abcd" ,"bcd" ) ;
	t.true( s.isequal( "bc" ) , "intersection update ... bc" ) ;
	t.true( s.clear( ).update( "abc" ).intersection_update( "abcd" ,"bcd" ).isequal( "bc" ) , "chain intersection update ... bc" ) ;
	s = set( "abc" ) ; s.difference_update( "de" ) ;
	t.true( s.isequal( "abc" ) , "difference_update abc" ) ;
	t.true( s.clear( ).update( "abc" ).difference_update( "de" ).isequal( "abc" ) , "chain difference_update abc" ) ;

	s = set( "abc" ) ; s.difference_update( "d" , "e" ) ;
	t.true( s.isequal( "abc" ) , "difference_update ... abc" ) ;
	t.true( s.clear( ).update( "abc" ).difference_update( "d" , "e" ).isequal( "abc" ) , "chain difference_update ... abc" ) ;

	s = set( "abc" ) ; s.difference_update( "bcd" ) ;
	t.true( s.isequal( "a" ) , "difference_update a" ) ;
	t.true( s.clear( ).update( "abc" ).difference_update( "bcd" ).isequal( "a" ) , "chain difference_update a" ) ;

	s = set( "abc" ) ; s.difference_update( "bc" , "d" ) ;
	t.true( s.isequal( "a" ) , "difference_update ... a" ) ;
	t.true( s.clear( ).update( "abc" ).difference_update( "bc" , "d" ).isequal( "a" ) , "chain difference_update ... a" ) ;

	s = set( "abc" ) ; s.symmetric_difference_update( "de" ) ;
	t.true( s.isequal( "abcde" ) , "symmetric_difference_update abcde" ) ;
	t.true( s.clear( ).update( "abc" ).symmetric_difference_update( "de" ).isequal( "abcde" ) , "chain symmetric_difference_update abcde" ) ;

	s = set( "abc" ) ; s.symmetric_difference_update( "bcd" ) ;
	t.true( s.isequal( "ad" ) , "symmetric_difference_update ad" ) ;
	t.true( s.clear( ).update( "abc" ).symmetric_difference_update( "bcd" ).isequal( "ad" ) , "chain symmetric_difference_update ad" ) ;

	t.is( set( "a" ).pop( ) , "a" , "pop" ) ;
	t.is( set( "a" ).pop( ) , "a" , "pop" ) ;

	t.true( set( "abc" ).remove( "b" ).isequal( "ac" ) , "remove b" ) ;
	t.true( set( "abc" ).remove( "b" ).isequal( "ac" ) , "remove b" ) ;

	t.true( set( "abc" ).discard( "b" ).isequal( "ac" ) , "discard b" ) ;
	t.true( set( "abc" ).discard( "b" ).isequal( "ac" ) , "discard b" ) ;

	t.true( set( "abc" ).discard( "d" ).isequal( "abc" ) , "discard d" ) ;
	t.true( set( "abc" ).discard( "d" ).isequal( "abc" ) , "discard d" ) ;

	s = set( "abcd" ) ;

	s.clear( ) ;
	t.true( s.isequal( "" ) , "clear" ) ;

	t.throws( s.clear( ).pop.bind( s ) , KeyError , "pop raises" ) ;
	t.throws( s.clear( ).pop.bind( s ) , KeyError , "pop raises" ) ;

	t.throws( s.clear( ).add( "x" ).remove.bind( s , "y" ) , KeyError , "remove raises" ) ;
	t.throws( s.clear( ).add( "x" ).remove.bind( s , "y" ) , KeyError , "remove raises" ) ;

	t.deepEqual( s.clear( ) , s , "ref clear" ) ;
	t.deepEqual( s.add( "x" ) , s , "ref add" ) ;
	t.deepEqual( s.remove( "x" ) , s , "ref remove" ) ;
	t.deepEqual( s.discard( "x" ) , s , "ref discard" ) ;
	t.deepEqual( s.update( ) , s , "ref update" ) ;
	t.deepEqual( s.intersection_update( ) , s , "ref intersection_update" ) ;
	t.deepEqual( s.difference_update( ) , s , "ref difference_update" ) ;
	t.deepEqual( s.symmetric_difference_update( "x" ) , s , "ref symmetric_difference_update" ) ;

} ) ;
