import { reverse } from 'aureooms-js-compare' ;

import nsmallest from './nsmallest' ;

export default function nlargest ( compare , n , iterable ) {

	return nsmallest( reverse( compare ) , n , iterable ) ;

}
