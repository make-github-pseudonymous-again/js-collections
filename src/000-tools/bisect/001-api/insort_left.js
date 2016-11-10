
const insort_left = function ( a , x , lo = 0 , hi = a.length ) {

	const pos = bisect_left( a , x , lo , hi ) ;

	a.splice( pos , 0 , x ) ;

} ;

bisect.insort_left = insort_left ;
