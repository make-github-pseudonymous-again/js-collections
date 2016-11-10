
/**
 * Sifts up a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

export default function siftup ( compare , a , i , j , k ) {

	let current = k - i ;

	// while we are not the root

	while ( current !== 0 ) {

		// address of the parent in a zero-based
		// d-ary heap

		const parent = i + ( ( current - 1 ) >>> 1 ) ;

		// if current value is greater than its parent
		// then we are done

		if ( compare( a[i + current], a[parent] ) >= 0 ) return i + current ;

		// otherwise
		// swap with parent

		const tmp = a[i+current] ;
		a[i+current] = a[parent] ;
		a[parent] = tmp ;

		current = parent - i ;

	}

	return i + current ;

}
