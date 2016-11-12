import test from 'ava' ;

import collections from '../../src' ;

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

	t.truthy( collections.IndexError ) ;
	t.truthy( collections.KeyError ) ;
	t.truthy( collections.NotImplementedError ) ;
	t.truthy( collections.TypeError ) ;
	t.truthy( collections.ValueError ) ;

} ) ;


