See Python's docs:

  - [collections](https://docs.python.org/3.6/library/collections.html)
  - [set](https://docs.python.org/3.6/library/heapq.html)
  - [dict](https://docs.python.org/3.6/library/bisect.html)

## Some changes w.r.t. Python's API

### `set`

#### `set( iterable = null ) -> this`
#### `set.inclusion( A , B ) -> {-1,0,1}`
#### `set.prototype[Symbol.iterator]( ) -> iterable`
#### `set.prototype.keys( ) -> iterable`
#### `set.prototype.len( ) -> integer`
#### `set.prototype.has( key ) -> boolean`
#### `set.prototype.isdisjoint( other ) -> boolean`
#### `set.prototype.isequal( other ) -> boolean`
#### `set.prototype.issubset( other ) -> boolean`
#### `set.prototype.ispropersubset( other ) -> boolean`
#### `set.prototype.issuperset( other ) -> boolean`
#### `set.prototype.ispropersuperset( other ) -> boolean`
#### `set.prototype.union( ...others ) -> set`
#### `set.prototype.intersection( ...others ) -> set`
#### `set.prototype.difference( ...others ) -> set`
#### `set.prototype.symmetric_difference( other ) -> set`
#### `set.prototype.copy( ) -> set`
#### `set.prototype.update( ...others ) -> this`
#### `set.prototype.intersection_update( ...others ) -> this`
#### `set.prototype.difference_update( ...others ) -> this`
#### `set.prototype.symmetric_difference_update( other ) -> this`
#### `set.prototype.add( key ) -> this`
#### `set.prototype.remove( key ) -> this`
#### `set.prototype.discard( key ) -> this`
#### `set.prototype.pop( ) -> key`
#### `set.prototype.clear( ) -> this`
