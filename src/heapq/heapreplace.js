
export function heapreplace ( heap , item ) {

	const x = heap.data ;
	const n = x.length ;

	if ( n === 0 ) throw new IndexError( "heapreplace" ) ;

	const oldroot = x[0] ;

	x[0] = item ;

	// sift down the new root

	siftdown( heap.compare , x , 0 , n , 0 ) ;

	return oldroot ;

}
