
const nlargest = function ( compare , n , iterable ) {

	return nsmallest( reverse( compare ) , n , iterable ) ;

} ;

heapq.nlargest = nlargest ;
