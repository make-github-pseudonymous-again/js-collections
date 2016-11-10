
export function nlargest ( compare , n , iterable ) {

	return nsmallest( reverse( compare ) , n , iterable ) ;

}
