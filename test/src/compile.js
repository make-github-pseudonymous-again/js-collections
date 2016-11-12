import test from 'ava' ;

import collections from '../../src' ;

import {
	heapq ,
	bisect ,
	deque ,
	set ,
	dict ,
	defaultdict ,
	ordereddict ,
	counter ,
	chainmap ,
	namedtuple ,

	ArbitrarySizeDeque ,
	BoundedDeque ,
	Deque ,
	EmptyDeque ,
	SingleElementDeque ,
	UnboundedDeque ,

	IndexError ,
	KeyError ,
	NotImplementedError ,
	TypeError ,
	ValueError ,
} from '../../src' ;

test( 'compile' , t => {

	t.truthy( collections.heapq ) ;
	t.truthy( collections.bisect ) ;
	t.truthy( collections.deque ) ;
	t.truthy( collections.set ) ;
	t.truthy( collections.dict ) ;
	t.truthy( collections.defaultdict ) ;
	t.truthy( collections.ordereddict ) ;
	t.truthy( collections.counter ) ;
	t.truthy( collections.chainmap ) ;
	t.truthy( collections.namedtuple ) ;

	t.truthy( collections.ArbitrarySizeDeque ) ;
	t.truthy( collections.BoundedDeque ) ;
	t.truthy( collections.Deque ) ;
	t.truthy( collections.EmptyDeque ) ;
	t.truthy( collections.SingleElementDeque ) ;
	t.truthy( collections.UnboundedDeque ) ;

	t.truthy( collections.IndexError ) ;
	t.truthy( collections.KeyError ) ;
	t.truthy( collections.NotImplementedError ) ;
	t.truthy( collections.TypeError ) ;
	t.truthy( collections.ValueError ) ;

	t.truthy( heapq ) ;
	t.truthy( bisect ) ;
	t.truthy( deque ) ;
	t.truthy( set ) ;
	t.truthy( dict ) ;
	t.truthy( defaultdict ) ;
	t.truthy( ordereddict ) ;
	t.truthy( counter ) ;
	t.truthy( chainmap ) ;
	t.truthy( namedtuple ) ;

	t.truthy( ArbitrarySizeDeque ) ;
	t.truthy( BoundedDeque ) ;
	t.truthy( Deque ) ;
	t.truthy( EmptyDeque ) ;
	t.truthy( SingleElementDeque ) ;
	t.truthy( UnboundedDeque ) ;

	t.truthy( IndexError ) ;
	t.truthy( KeyError ) ;
	t.truthy( NotImplementedError ) ;
	t.truthy( TypeError ) ;
	t.truthy( ValueError ) ;

} ) ;
