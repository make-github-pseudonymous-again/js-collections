import { DoublyLinkedList } from 'aureooms-js-dll' ;
import compile from './compile' ;
import core from './core' ;

const collections = compile( Set , Map , DoublyLinkedList , core ) ;

export default collections ;

const {

	bisect ,
	chainmap ,
	counter ,
	deque ,
	dict ,
	ordereddict ,
	defaultdict ,
	heapq ,
	Mapping ,
	namedtuple ,
	set ,

	ArbitrarySizeDeque ,
	BoundedDeque ,
	Deque ,
	EmptyDeque ,
	SingleElementDeque ,
	UnboundedDeque ,

	IndexError ,
	KeyError ,
	NotImplementedError ,
	TypeError ,
	ValueError ,

} = collections ;

export {

	bisect ,
	chainmap ,
	counter ,
	deque ,
	dict ,
	ordereddict ,
	defaultdict ,
	heapq ,
	Mapping ,
	namedtuple ,
	set ,

	ArbitrarySizeDeque ,
	BoundedDeque ,
	Deque ,
	EmptyDeque ,
	SingleElementDeque ,
	UnboundedDeque ,

	IndexError ,
	KeyError ,
	NotImplementedError ,
	TypeError ,
	ValueError ,

} ;
