
var dll = require( "aureooms-js-dll" ) ;
var compare = require( "aureooms-js-compare" ) ;
var itertools = require( "aureooms-js-itertools" ) ;

var sorted = itertools.sorted ;

var mycollections = collections.compile( {

	BaseSet : Set ,
	DLL : dll.DoublyLinkedList ,
	Map : Map

} ) ;

var Dict = mycollections.Dict ;
var ChainMap = mycollections.ChainMap ;

test( "ChainMap" , function ( ) {

	var A = new Dict( [ [ "x" , "A" ] ] ) ;
	var B = new Dict( [ [ "x" , "B" ] , [ "y" , "B" ] ] ) ;
	var C = new Dict( [ [ "x" , "C" ] , [ "y" , "C" ] , [ "z" , "C" ] ] ) ;

	var M = new ChainMap( A , B , C ) ;

	deepEqual( M.get( "x" ) , "A" , "ABC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "ABC depth 2" ) ;
	deepEqual( M.get( "z" ) , "C" , "ABC depth 3" ) ;

	deepEqual( sorted( compare.increasing , M.keys( ) ) , [ "x" , "y" , "z" ] , "keys" ) ;

	M = M.parents( ) ;

	deepEqual( M.get( "x" ) , "B" , "BC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "BC depth 1" ) ;
	deepEqual( M.get( "z" ) , "C" , "BC depth 2" ) ;

	M = M.parents( ) ;

	deepEqual( M.get( "x" ) , "C" , "C depth 1" ) ;
	deepEqual( M.get( "y" ) , "C" , "C depth 1" ) ;
	deepEqual( M.get( "z" ) , "C" , "C depth 1" ) ;

	M = M.new_child( A ) ;

	deepEqual( M.get( "x" ) , "A" , "AC depth 1" ) ;
	deepEqual( M.get( "y" ) , "C" , "AC depth 2" ) ;
	deepEqual( M.get( "z" ) , "C" , "AC depth 2" ) ;

	M = M.new_child( B ) ;

	deepEqual( M.get( "x" ) , "B" , "BAC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "BAC depth 1" ) ;
	deepEqual( M.get( "z" ) , "C" , "BAC depth 3" ) ;

	M = M.new_child( ) ;

	deepEqual( M.get( "x" ) , "B" , "DBAC depth 2" ) ;
	deepEqual( M.get( "y" ) , "B" , "DBAC depth 2" ) ;
	deepEqual( M.get( "z" ) , "C" , "DBAC depth 4" ) ;

	M.set( "x" , "D" ) ;

	deepEqual( M.get( "x" ) , "D" , "x DBAC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "x DBAC depth 2" ) ;
	deepEqual( M.get( "z" ) , "C" , "x DBAC depth 4" ) ;

	M.set( "w" , "D" ) ;

	deepEqual( M.get( "w" ) , "D" , "w DBAC depth 1" ) ;
	deepEqual( M.get( "x" ) , "D" , "w DBAC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "w DBAC depth 2" ) ;
	deepEqual( M.get( "z" ) , "C" , "w DBAC depth 4" ) ;

	M = M.parents( ) ;

	try {
		M.get( "w" ) ;
		ok( false , "w should throw" ) ;
	}
	catch ( e ) {
		ok( e instanceof mycollections.KeyError , "w throws" ) ;
	}

	deepEqual( M.get( "x" ) , "B" , "-w BAC depth 1" ) ;
	deepEqual( M.get( "y" ) , "B" , "-w BAC depth 1" ) ;
	deepEqual( M.get( "z" ) , "C" , "-w BAC depth 3" ) ;

	ok( M.has( "x" ) , "has x BAC depth 1" ) ;
	ok( M.has( "y" ) , "has y BAC depth 1" ) ;
	ok( M.has( "z" ) , "has z BAC depth 3" ) ;

	deepEqual( M.delete( "x" ).len( ) , 3 , "delete" ) ;
	deepEqual( M.get( "x" ) , "A" , "-wx AC depth 1" ) ;

	deepEqual( new ChainMap( C ).clear( ).len( ) , 0 , "clear" ) ;
	deepEqual( C.len( ) , 0 , "C is also cleared" ) ;
	deepEqual( new ChainMap( ).len( ) , 0 , "empty ChainMap" ) ;

	deepEqual( ChainMap.fromkeys( "xyz" , "A" ).get( "y" ) , "A" , "fromkeys" ) ;

	deepEqual( new ChainMap( ).getdefault( "y" , "A" ) , "A" , "getdefault A" ) ;
	deepEqual( new ChainMap( new Dict( [ [ "y" , "B" ] ] ) ).getdefault( "y" , "A" ) , "B" , "getdefault B" ) ;

} ) ;
