
const heappush = function ( heap , item ) {

	const x = heap.data ;
	const n = x.length ;

	x.push( item ) ;

	// sift up the new leaf

	siftup( heap.compare , x , 0 , n + 1 , n ) ;

} ;

heapq.heappush = heappush ;
