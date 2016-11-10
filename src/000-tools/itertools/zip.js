
let zip = function* ( iterables ) {

	let iterators = [ ...map( iter , iterables ) ] ;

	if ( iterators.length === 0 ) return ;

	while ( true ) {

		let buffer = [ ] ;

		for ( let result of map( next , iterators ) ) {

			if ( result.done ) return ;

			buffer.push( result.value ) ;

		}

		yield buffer ;

	}

} ;
