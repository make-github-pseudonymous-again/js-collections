import test from 'ava' ;

import { list } from "@aureooms/js-itertools" ;

import { namedtuple , ordereddict } from '../../src' ;

test( "namedtuple" , t => {

	const Point = namedtuple( "Point" , [ "x" , "y" ] ) ;

	let p = new Point( 0 , 1 ) ;

	t.deepEqual( p._fields , [ "x" , "y" ] , "fields" ) ;

	t.deepEqual( p[0] , 0 , "p[0]" ) ;
	t.deepEqual( p[1] , 1 , "p[1]" ) ;
	t.deepEqual( p.x , 0 , "p.x" ) ;
	t.deepEqual( p.y , 1 , "p.y" ) ;

	t.deepEqual( p.length , 2 , "length" ) ;

	t.deepEqual( list( p ) , [ 0 , 1 ] , "list" ) ;

	t.true( p._asdict( ).isequal( ordereddict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "asdict" ) ;

	let q = p._replace( [ [ "x" , 33 ] ] ) ;

	t.deepEqual( q._fields , [ "x" , "y" ] , "replace fields" ) ;

	t.deepEqual( q[0] , 33 , "replace p[0]" ) ;
	t.deepEqual( q[1] , 1 , "replace p[1]" ) ;
	t.deepEqual( q.x , 33 , "replace p.x" ) ;
	t.deepEqual( q.y , 1 , "replace p.y" ) ;

	t.deepEqual( q.length , 2 , "replace length" ) ;

	t.deepEqual( list( q ) , [ 33 , 1 ] , "replace list" ) ;

	t.true( q._asdict( ).isequal( ordereddict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "replace asdict" ) ;


	p = Point._make( [ 0 , 1 ] ) ;

	t.deepEqual( p._fields , [ "x" , "y" ] , "make fields" ) ;

	t.deepEqual( p[0] , 0 , "make p[0]" ) ;
	t.deepEqual( p[1] , 1 , "make p[1]" ) ;
	t.deepEqual( p.x , 0 , "make p.x" ) ;
	t.deepEqual( p.y , 1 , "make p.y" ) ;

	t.deepEqual( p.length , 2 , "make length" ) ;

	t.deepEqual( list( p ) , [ 0 , 1 ] , "make list" ) ;

	t.true( p._asdict( ).isequal( ordereddict( [ [ "x" , 0 ] , [ "y" , 1 ] ] ) ) , "make asdict" ) ;

	q = p._replace( [ [ "x" , 33 ] ] ) ;

	t.deepEqual( q._fields , [ "x" , "y" ] , "replace make fields" ) ;

	t.deepEqual( q[0] , 33 , "replace make p[0]" ) ;
	t.deepEqual( q[1] , 1 , "replace make p[1]" ) ;
	t.deepEqual( q.x , 33 , "replace make p.x" ) ;
	t.deepEqual( q.y , 1 , "replace make p.y" ) ;

	t.deepEqual( q.length , 2 , "replace make length" ) ;

	t.deepEqual( list( q ) , [ 33 , 1 ] , "replace make list" ) ;

	t.true( q._asdict( ).isequal( ordereddict( [ [ "x" , 33 ] , [ "y" , 1 ] ] ) ) , "replace make asdict" ) ;

} ) ;
