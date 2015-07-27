
const heappop = function ( heap ) {

	const x = heap.data ;
	const n = x.length ;

	if ( n === 0 ) throw new IndexError( "heappop" ) ;

	const last = n - 1 ;

	// swap last leaf and root

	const tmp = a[0] ;
	a[0] = a[last] ;
	a[last] = tmp ;

	// sift down the new root

	siftdown( heap.compare , x , 0 , last , 0 ) ;

	// return old root

	return x.pop( ) ;

};

heapq.heappop = heappop ;
