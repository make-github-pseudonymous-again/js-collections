
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;
var functools = require( "aureooms-js-functools" ) ;

var sorted = itertools.sorted ;

var increasing = compare.increasing ;

var lexico = compare.lexicographical( increasing ) ;

var KeyError = collections.KeyError ;

var dict = collections.dict ;
var defaultdict = functools.partial( collections.defaultdict , [ null ] ) ;
var ordereddict = collections.ordereddict ;

defaultdict.fromkeys = functools.rpartial( collections.defaultdict.fromkeys , [ null ] ) ;

[ dict , defaultdict , ordereddict ].forEach( function ( dict ) {

test( dict.name , function ( ) {

	var d = dict( ) ;

	deepEqual( dict( ).len( ) , 0 , "empty len" ) ;

	deepEqual( dict( ).has( "x" ) , false , "empty has" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).len( ) , 1 , "mapping len" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).has( "x" ) , true , "mapping has" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).get( "x" ) , -1 , "mapping get" ) ;

	deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "Map len" ) ;

	deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "Map has" ) ;

	deepEqual( dict( new Map( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "Map get" ) ;

	deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).len( ) , 1 , "dict len" ) ;

	deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).has( "x" ) , true , "dict has" ) ;

	deepEqual( dict( dict( [ [ "x" , -1 ] ] ) ).get( "x" ) , -1 , "dict get" ) ;

	deepEqual( dict( ).set( "x" , -1 ).len( ) , 1 , "set len" ) ;

	deepEqual( dict( ).set( "x" , -1 ).has( "x" ) , true , "set has" ) ;

	deepEqual( dict( ).set( "x" , -1 ).get( "x" ) , -1 , "set get" ) ;

	deepEqual( dict( ).set( "x" , -1 ).delete( "x" ).len( ) , 0 , "delete len" ) ;

	deepEqual( dict( ).set( "x" , -1 ).delete( "x" ).has( "x" ) , false , "delete has" ) ;

	deepEqual( dict( ).set( "x" , -1 ).clear( ).len( ) , 0 , "clear len" ) ;

	deepEqual( dict( ).set( "x" , -1 ).clear( ).has( "x" ) , false , "clear has" ) ;

	deepEqual( dict( ).set( "x" , -1 ).copy( ).len( ) , 1 , "copy len" ) ;

	deepEqual( dict( ).set( "x" , -1 ).copy( ).has( "x" ) , true , "copy has" ) ;

	deepEqual( dict( ).set( "x" , -1 ).copy( ).get( "x" ) , -1 , "copy get" ) ;

	deepEqual( dict( ).getdefault( "x" ) , null , "empty getdefault null" ) ;

	deepEqual( dict( ).getdefault( "x" , -2 ) , -2 , "empty getdefault" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).getdefault( "x" , -2 ) , -1 , "mapping getdefault null" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).getdefault( "x" ) , -1 , "mapping getdefault" ) ;

	deepEqual( dict( ).setdefault( "x" ) , null , "empty setdefault null" ) ;

	deepEqual( dict( ).setdefault( "x" , -2 ) , -2 , "empty setdefault" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).setdefault( "x" , -2 ) , -1 , "mapping setdefault null" ) ;

	deepEqual( dict( [ [ "x" , -1 ] ] ).setdefault( "x" ) , -1 , "mapping setdefault" ) ;

	d.clear( ).setdefault( "x" ) ;

	deepEqual( d.get( "x" ) , null , "empty setdefault null get" ) ;

	d.clear( ).setdefault( "x" , -2 ) ;

	deepEqual( d.get( "x" ) , -2 , "empty setdefault -2 get" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.pop( "x" ) , -1 , "pop value" ) ;

	deepEqual( d.len( ) , 0 , "pop len" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.pop( "x" , -2 ) , -1 , "pop value -1 default -2" ) ;

	deepEqual( d.len( ) , 0 , "pop len default" ) ;

	deepEqual( d.pop( "x" , -2 ) , -2 , "pop value empty default -2" ) ;

	d.clear( ).set( "x" , -1 ) ;

	deepEqual( d.popitem( ) , [ "x" , -1 ] , "popitem" ) ;

	deepEqual( d.len( ) , 0 , "popitem len" ) ;

	d.clear( ).set( "x" , -1 ).set( "y" , -2 ) ;

	deepEqual( sorted( increasing , d.keys( ) ) , [ "x" , "y" ] , "keys" ) ;

	deepEqual( sorted( increasing , d.values( ) ) , [ -2 , -1 ] , "values" ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "items" ) ;

	d.clear( ).update( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update mapping" ) ;

	d.clear( ).update( new Map( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update Map" ) ;

	d.clear( ).update( dict( [ [ "x" , -1 ] , [ "y" , -2 ] ] ) ) ;

	deepEqual( sorted( lexico , d.items( ) ) , [ [ "x" , -1 ] , [ "y" , -2 ] ] , "update dict" ) ;

	d.clear( ) ;

	raises( d.get.bind( d , "x" ) , KeyError , "get raises" ) ;

	raises( d.delete.bind( d , "x" ) , KeyError , "delete raises" ) ;

	raises( d.popitem.bind( d ) , KeyError , "popitem raises" ) ;

	raises( d.pop.bind( d , "x" ) , KeyError , "pop raises" ) ;

	deepEqual( dict.fromkeys( "abc" , -1 ).get( "b" ) , -1 , "fromkeys default -1" ) ;

	deepEqual( dict.fromkeys( "abc" ).get( "b" ) , null , "fromkeys default null" ) ;

} ) ;

} ) ;
