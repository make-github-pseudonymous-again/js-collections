

/**
 * Computes which child is the smallest according
 * to a comparison function.
 *
 * Hypothesis : i < j i.e. there should be at least one child
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {int} i is the first child
 * @param {int} j - 1 is the last leaf
 */

const nextchild = function ( compare , a , i , j ) {

	if ( j - i < 2 ) return i ;

	if ( compare( a[i] , a[i+1] ) <= 0 ) return i ;

	return i + 1 ;

} ;
