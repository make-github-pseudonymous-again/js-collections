import test from 'ava' ;

import { issorted } from "aureooms-js-sort" ;
import { increasing , colexicographical } from "aureooms-js-compare" ;
import { attrgetter } from "aureooms-js-operator" ;
import { map as m , list as l , sorted as s } from "aureooms-js-itertools" ;

import { bisect } from '../../src' ;
const { bisect_left , bisect_right , insort_left , insort_right } = bisect ;
import { ValueError } from '../../src' ;

function grade ( score ) {
	const breakpoints = [ 60 , 70 , 80 , 90 ] ;
	const grades = 'FDCBA' ;
	const i = bisect_right( breakpoints , score ) ;
	return grades[i] ;
}

test( "bisect" , t => {

	t.throws( bisect_left.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	t.throws( bisect_right.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	t.throws( insort_left.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;
	t.throws( insort_right.bind( null , [ ] , 0 , -1 , -1 ) , ValueError ) ;

	let grades = l( m( grade , [33, 99, 77, 70, 89, 90, 100] ) ) ;

	t.deepEqual( grades , ['F', 'A', 'C', 'C', 'B', 'A', 'A'] ) ;

	let data = [['red', 5], ['blue', 1], ['yellow', 8], ['black', 0]] ;

	data = s( colexicographical( increasing ) , data ) ;
	let keys = l(m( attrgetter( "1" ) , data ) ) ;

	t.deepEqual( data[bisect_left(keys, 0)] , ['black', 0] ) ;
	t.deepEqual( data[bisect_left(keys, 1)] , ['blue', 1] ) ;
	t.deepEqual( data[bisect_left(keys, 5)] , ['red', 5] ) ;
	t.deepEqual( data[bisect_left(keys, 8)] , ['yellow', 8] ) ;

	let a = s( increasing , [ Math.random( ) , Math.random( ) , Math.random( ) ] ) ;

	insort_left( a , Math.random( ) ) ;
	insort_right( a , Math.random( ) ) ;

	t.is( issorted( increasing , a , 0 , a.length ) , a.length ) ;

} ) ;
