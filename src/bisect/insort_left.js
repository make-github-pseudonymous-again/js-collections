import bisect_left from './bisect_left' ;

export default function insort_left ( a , x , lo = 0 , hi = a.length ) {

	const pos = bisect_left( a , x , lo , hi ) ;

	a.splice( pos , 0 , x ) ;

}
