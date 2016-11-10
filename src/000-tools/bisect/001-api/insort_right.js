

const insort_right = function ( a , x , lo = 0 , hi = a.length ) {

	const pos = bisect_right( a , x , lo , hi ) ;

	a.splice( pos , 0 , x ) ;

} ;

bisect.insort_right = insort_right ;
