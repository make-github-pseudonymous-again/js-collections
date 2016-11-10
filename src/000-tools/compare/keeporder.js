import { increasing } from 'aureooms-js-compare' ;

export const keeporder = compare => ( a , b ) => compare( a[0] , b[0] ) || increasing( a[1] , b[1] ) ;
