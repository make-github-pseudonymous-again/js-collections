import nextchild from './nextchild' ;

/**
 * Sifts down a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the root element
 * @param {int} j - 1 is the last leaf
 * @param {int} k is the target node
 */

export default function siftdown ( compare, a, i, j, k ) {

	let current = k - i;

	while ( true ) {

		// address of the first child in a zero-based
		// binary heap

		const firstchild = 2 * current + 1;

		// if current node has no children
		// then we are done

		if ( firstchild >= j - i ) break ;

		// if current value is smaller than its smallest
		// child then we are done

		const candidate = nextchild( compare, a, i + firstchild, j );

		if ( compare( a[i + current], a[candidate] ) <= 0 ) break ;

		// otherwise
		// swap with smallest child

		const tmp = a[i+current] ;
		a[i+current] = a[candidate] ;
		a[candidate] = tmp ;

		current = candidate - i;

	}

	return i + current;

}
