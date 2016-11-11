
export default function* fromkeys ( seq , value ) {

	for ( let key of seq ) yield [ key , value ] ;

}
