import {
	IndexError ,
	KeyError ,
	NotImplementedError ,
	TypeError ,
	ValueError ,
} from '@aureooms/js-error' ;

import chainmap from '@aureooms/js-collections-chainmap' ;
import dict from '@aureooms/js-collections-dict' ;
import ordereddict from '@aureooms/js-collections-ordereddict' ;
import defaultdict from '@aureooms/js-collections-defaultdict' ;

import {
	deque ,
	ArbitrarySizeDeque ,
	BoundedDeque ,
	Deque ,
	EmptyDeque ,
	SingleElementDeque ,
	UnboundedDeque ,
} from '@aureooms/js-collections-deque' ;

import namedtuple from '@aureooms/js-collections-namedtuple' ;
import counter from '@aureooms/js-collections-counter' ;
import set from '@aureooms/js-collections-set' ;

const collections = {

	chainmap ,
	counter ,
	deque ,
	dict ,
	ordereddict ,
	defaultdict ,
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

export default collections ;

export {

	chainmap ,
	counter ,
	deque ,
	dict ,
	ordereddict ,
	defaultdict ,
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
