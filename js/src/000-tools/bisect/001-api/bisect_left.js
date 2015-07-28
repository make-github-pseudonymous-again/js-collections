
const bisect_left = function ( a , x , lo = 0 , hi = a.length ) {

	if ( lo < 0 ) throw new ValueError( "lo must be non-negative" ) ;

    while ( lo < hi ) {

        mid = ( lo + hi ) / 2 | 0 ;

        if ( x > a[mid] ) lo = mid + 1 ;

        else hi = mid ;

	}

    return lo ;

} ;

bisect.bisect_left = bisect_left ;
