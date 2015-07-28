"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _bind = Function.prototype.bind;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/000-tools */
		/* js/src/000-tools/Mapping.js */

		var Mapping = {};

		Mapping.fromkeys = regeneratorRuntime.mark(function callee$2$0(seq, value) {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 3;
						_iterator = seq[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 12;
							break;
						}

						key = _step.value;
						context$3$0.next = 9;
						return [key, value];

					case 9:
						_iteratorNormalCompletion = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError = true;
						_iteratorError = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		exports.Mapping = Mapping;

		/* js/src/000-tools/NamedTuple.js */

		var _NamedTuple = function _NamedTuple(Dict, OrderedDict) {

			var NamedTuple = function NamedTuple() {};

			NamedTuple.prototype = [];

			NamedTuple.make = function (Constructor, iterable) {

				return new (_bind.apply(Constructor, [null].concat(_toConsumableArray(iterable))))();
			};

			NamedTuple.replace = function (Constructor, tuple, dict) {

				var values = new Dict();

				var fields = tuple._fields;

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var key = _step2.value;
						values.set(key, tuple[key]);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = dict[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _step3$value = _slicedToArray(_step3.value, 2);

						var key = _step3$value[0];
						var value = _step3$value[1];
						values.set(key, value);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return new (_bind.apply(Constructor, [null].concat(_toConsumableArray((function () {
					var _ref = [];
					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var key = _step4.value;

							_ref.push(values.get(key));
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
								_iterator4["return"]();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}

					return _ref;
				})()))))();
			};

			NamedTuple.asdict = function (tuple) {

				var fields = tuple._fields;

				return new OrderedDict((function () {
					var _ref2 = [];
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = fields[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var key = _step5.value;

							_ref2.push([key, tuple[key]]);
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
								_iterator5["return"]();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}

					return _ref2;
				})());
			};

			return NamedTuple;
		};

		exports._NamedTuple = _NamedTuple;

		/* js/src/000-tools/bisect */
		/* js/src/000-tools/bisect/000-namespace.js */

		var bisect = {};

		exports.bisect = bisect;

		/* js/src/000-tools/bisect/001-api */
		/* js/src/000-tools/bisect/001-api/bisect_left.js */

		var bisect_left = function bisect_left(a, x) {
			var lo = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var hi = arguments.length <= 3 || arguments[3] === undefined ? a.length : arguments[3];
			return (function () {

				if (lo < 0) throw new ValueError("lo must be non-negative");

				while (lo < hi) {

					mid = (lo + hi) / 2 | 0;

					if (x > a[mid]) lo = mid + 1;else hi = mid;
				}

				return lo;
			})();
		};

		bisect.bisect_left = bisect_left;

		/* js/src/000-tools/bisect/001-api/bisect_right.js */

		var bisect_right = function bisect_right(a, x) {
			var lo = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var hi = arguments.length <= 3 || arguments[3] === undefined ? a.length : arguments[3];
			return (function () {

				if (lo < 0) throw new ValueError("lo must be non-negative");

				while (lo < hi) {

					mid = (lo + hi) / 2 | 0;

					if (x < a[mid]) hi = mid;else lo = mid + 1;
				}

				return lo;
			})();
		};

		bisect.bisect_right = bisect_right;

		/* js/src/000-tools/bisect/001-api/insort_left.js */

		var insort_left = function insort_left(a, x) {
			var lo = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var hi = arguments.length <= 3 || arguments[3] === undefined ? a.length : arguments[3];
			return (function () {

				var pos = bisect_left(a, x, lo, hi);

				a.splice(pos, 0, x);
			})();
		};

		bisect.insort_left = insort_left;

		/* js/src/000-tools/bisect/001-api/insort_right.js */

		var insort_right = function insort_right(a, x) {
			var lo = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var hi = arguments.length <= 3 || arguments[3] === undefined ? a.length : arguments[3];
			return (function () {

				var pos = bisect_right(a, x, lo, hi);

				a.splice(pos, 0, x);
			})();
		};

		bisect.insort_right = insort_right;

		/* js/src/000-tools/compare */
		/* js/src/000-tools/compare/increasing.js */

		var increasing = function increasing(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};

		/* js/src/000-tools/compare/keeporder.js */

		var keeporder = function keeporder(compare) {
			return function (a, b) {
				return compare(a[0], b[0]) || increasing(a[1], b[1]);
			};
		};

		/* js/src/000-tools/compare/reverse.js */

		var reverse = function reverse(compare) {
			return function (a, b) {
				return compare(b, a);
			};
		};

		/* js/src/000-tools/error */
		/* js/src/000-tools/error/IndexError.js */

		var IndexError = function IndexError(message) {

			this.message = message;
		};

		exports.IndexError = IndexError;

		/* js/src/000-tools/error/KeyError.js */

		var KeyError = function KeyError(message) {

			this.message = message;
		};

		exports.KeyError = KeyError;

		/* js/src/000-tools/error/NotImplementedError.js */

		var NotImplementedError = function NotImplementedError(message) {

			this.message = message;
		};

		exports.NotImplementedError = NotImplementedError;

		/* js/src/000-tools/error/TypeError.js */

		exports.TypeError = TypeError;

		/* js/src/000-tools/error/ValueError.js */

		var ValueError = function ValueError(message) {

			this.message = message;
		};

		exports.ValueError = ValueError;

		/* js/src/000-tools/heapq */
		/* js/src/000-tools/heapq/000-namespace.js */

		var heapq = {};

		exports.heapq = heapq;

		/* js/src/000-tools/heapq/001-core */
		/* js/src/000-tools/heapq/001-core/Heap.js */

		var Heap = function Heap(compare, data) {

			this.compare = compare;
			this.data = data;
		};

		/* js/src/000-tools/heapq/001-core/nextchild.js */

		/**
   * Computes which child is the smallest according
   * to a comparison function.
   *
   * Hypothesis : i < j i.e. there should be at least one child
   *
   * @param {function} compare the comparison function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the first child
   * @param {int} j - 1 is the last leaf
   */

		var nextchild = function nextchild(compare, a, i, j) {

			if (j - i < 2) return i;

			if (compare(a[i], a[i + 1]) <= 0) return i;

			return i + 1;
		};

		/* js/src/000-tools/heapq/001-core/siftdown.js */

		/**
   * Sifts down a node.
   *
   * @param {function} compare the comparison function
   * @param {array} a the array where the heap is stored
   * @param {int} i is the root element
   * @param {int} j - 1 is the last leaf
   * @param {int} k is the target node
   */

		var siftdown = function siftdown(compare, a, i, j, k) {

			var current = k - i;

			while (true) {

				// address of the first child in a zero-based
				// binary heap

				var firstchild = 2 * current + 1;

				// if current node has no children
				// then we are done

				if (firstchild >= j - i) break;

				// if current value is smaller than its smallest
				// child then we are done

				var candidate = nextchild(compare, a, i + firstchild, j);

				if (compare(a[i + current], a[candidate]) <= 0) break;

				// otherwise
				// swap with smallest child

				var tmp = a[i + current];
				a[i + current] = a[candidate];
				a[candidate] = tmp;

				current = candidate - i;
			}

			return i + current;
		};

		/* js/src/000-tools/heapq/002-api */
		/* js/src/000-tools/heapq/002-api/heapify.js */

		/**
   * Builds a heap in O(n) operations.
   *
   * @param {function} compare the comparison function
   * @param {array} x the array where the heap is stored
   *
   */

		var heapify = function heapify(compare, x) {

			var n = x.length;

			for (var k = n / 2 | 0; k;) {

				siftdown(compare, x, 0, n, --k);
			}

			return new Heap(compare, x);
		};

		heapq.heapify = heapify;

		/* js/src/000-tools/heapq/002-api/heappop.js */

		var heappop = function heappop(heap) {

			var x = heap.data;
			var n = x.length;

			if (n === 0) throw new IndexError("heappop");

			var last = n - 1;

			// swap last leaf and root

			var tmp = a[0];
			a[0] = a[last];
			a[last] = tmp;

			// sift down the new root

			siftdown(heap.compare, x, 0, last, 0);

			// return old root

			return x.pop();
		};

		heapq.heappop = heappop;

		/* js/src/000-tools/heapq/002-api/heappush.js */

		var heappush = function heappush(heap, item) {

			var x = heap.data;
			var n = x.length;

			x.push(item);

			// sift up the new leaf

			siftup(heap.compare, x, 0, n + 1, n);
		};

		heapq.heappush = heappush;

		/* js/src/000-tools/heapq/002-api/heappushpop.js */

		var heappushpop = function heappushpop(heap, item) {

			var x = heap.data;
			var n = x.length;

			if (n === 0) return item;

			var compare = heap.compare;

			if (compare(item, x[0]) <= 0) return item;

			var smallest = x[0];

			x[0] = item;

			// sift down the new root

			siftdown(compare, x, 0, n, 0);

			return smallest;
		};

		heapq.heappushpop = heappushpop;

		/* js/src/000-tools/heapq/002-api/heapreplace.js */

		var heapreplace = function heapreplace(heap, item) {

			var x = heap.data;
			var n = x.length;

			if (n === 0) throw new IndexError("heapreplace");

			var oldroot = x[0];

			x[0] = item;

			// sift down the new root

			siftdown(heap.compare, x, 0, n, 0);

			return oldroot;
		};

		heapq.heapreplace = heapreplace;

		/* js/src/000-tools/heapq/002-api/merge.js */

		var merge = regeneratorRuntime.mark(function merge(compare) {
			var x,
			    _iteratorNormalCompletion6,
			    _didIteratorError6,
			    _iteratorError6,
			    _len,
			    iterables,
			    _key,
			    _iterator6,
			    _step6,
			    _step6$value,
			    order,
			    it,
			    rv,
			    h,
			    s,
			    _s,
			    value,
			    _h$0,
			    args$3$0 = arguments;

			return regeneratorRuntime.wrap(function merge$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						x = [];
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 4;

						for (_len = args$3$0.length, iterables = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							iterables[_key - 1] = args$3$0[_key];
						}

						_iterator6 = enumerate(map(iter, iterables))[Symbol.iterator]();

					case 7:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							context$3$0.next = 18;
							break;
						}

						_step6$value = _slicedToArray(_step6.value, 2);
						order = _step6$value[0];
						it = _step6$value[1];
						rv = next(it);

						if (!rv.done) {
							context$3$0.next = 14;
							break;
						}

						return context$3$0.abrupt("continue", 15);

					case 14:

						x.push([rv.value, order, it]);

					case 15:
						_iteratorNormalCompletion6 = true;
						context$3$0.next = 7;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError6 = true;
						_iteratorError6 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError6) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError6;

					case 30:
						return context$3$0.finish(27);

					case 31:
						return context$3$0.finish(24);

					case 32:
						h = heapify(keeporder(compare), x);

					case 33:
						if (!(x.length > 1)) {
							context$3$0.next = 51;
							break;
						}

					case 34:
						if (!true) {
							context$3$0.next = 49;
							break;
						}

						s = h[0];
						_s = _slicedToArray(s, 3);
						value = _s[0];
						order = _s[1];
						it = _s[2];
						context$3$0.next = 42;
						return value;

					case 42:
						rv = next(it);

						if (!rv.done) {
							context$3$0.next = 45;
							break;
						}

						return context$3$0.abrupt("break", 49);

					case 45:

						s[0] = rv.value;

						heapreplace(h, s);

						context$3$0.next = 34;
						break;

					case 49:
						context$3$0.next = 33;
						break;

					case 51:
						if (!(x.length > 0)) {
							context$3$0.next = 59;
							break;
						}

						_h$0 = _slicedToArray(h[0], 3);
						value = _h$0[0];
						order = _h$0[1];
						it = _h$0[2];
						context$3$0.next = 58;
						return value;

					case 58:
						return context$3$0.delegateYield(it, "t1", 59);

					case 59:
					case "end":
						return context$3$0.stop();
				}
			}, merge, this, [[4, 20, 24, 32], [25,, 27, 31]]);
		});

		heapq.merge = merge;

		/* js/src/000-tools/heapq/002-api/nlargest.js */

		var nlargest = function nlargest(compare, n, iterable) {

			return nsmallest(reverse(compare), n, iterable);
		};

		heapq.nlargest = nlargest;

		/* js/src/000-tools/heapq/002-api/nsmallest.js */

		var nsmallest = function nsmallest(compare, n, iterable) {

			if (n === 1) {

				sentinel = {};

				result = min(compare, iterable, sentinel);

				return result === sentinel ? [] : [result];
			}

			if (iterable.length !== undefined) {

				if (n >= iterable.length) return sorted(compare, iterable);
			}

			var it = iter(iterable);

			var result = (function () {
				var _result = [];
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = zip([range(0, n, 1), it])[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var _step7$value = _slicedToArray(_step7.value, 2);

						var i = _step7$value[0];
						var elem = _step7$value[1];

						_result.push([elem, i]);
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				return _result;
			})();

			if (result.length === 0) return result;

			var h = heapify(keeporder(reverse(compare)), result);

			var top = result[0][0];

			var order = n;

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = it[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var elem = _step8.value;

					if (compare(elem, top) < 0) {

						heapreplace(h, [elem, order]);

						top = result[0][0];

						++order;
					}
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
						_iterator8["return"]();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}

			return sorted(compare, (function () {
				var _sorted = [];
				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = result[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var r = _step9.value;

						_sorted.push(r[0]);
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
							_iterator9["return"]();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				return _sorted;
			})());
		};

		heapq.nsmallest = nsmallest;

		/* js/src/000-tools/itertools */
		/* js/src/000-tools/itertools/count.js */

		var count = regeneratorRuntime.mark(function count(start, step) {
			return regeneratorRuntime.wrap(function count$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 6;
							break;
						}

						context$3$0.next = 3;
						return start;

					case 3:

						start += step;

						context$3$0.next = 0;
						break;

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, count, this);
		});

		/* js/src/000-tools/itertools/enumerate.js */

		var enumerate = function enumerate(iterable) {

			return zip([count(0, 1), iterable]);
		};

		/* js/src/000-tools/itertools/iter.js */

		var iter = function iter(iterable) {

			return iterable[Symbol.iterator]();
		};

		/* js/src/000-tools/itertools/map.js */

		var map = regeneratorRuntime.mark(function map(callable, iterable) {
			var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, item;

			return regeneratorRuntime.wrap(function map$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion10 = true;
						_didIteratorError10 = false;
						_iteratorError10 = undefined;
						context$3$0.prev = 3;
						_iterator10 = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
							context$3$0.next = 12;
							break;
						}

						item = _step10.value;
						context$3$0.next = 9;
						return callable(item);

					case 9:
						_iteratorNormalCompletion10 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError10 = true;
						_iteratorError10 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
							_iterator10["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError10) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError10;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, map, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		/* js/src/000-tools/itertools/min.js */

		/**
   * Returns the smallest element of an iterable according
   * to some comparison function.
   */

		var min = function min(compare, iterable) {
			var dflt = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

			var iterator = iter(iterable);

			var first = next(iterator);

			if (first.done) return dflt;

			var smallest = first.value;

			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = iterator[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var candidate = _step11.value;

					if (compare(candidate, smallest) < 0) {

						smallest = candidate;
					}
				}
			} catch (err) {
				_didIteratorError11 = true;
				_iteratorError11 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
						_iterator11["return"]();
					}
				} finally {
					if (_didIteratorError11) {
						throw _iteratorError11;
					}
				}
			}

			return smallest;
		};

		/* js/src/000-tools/itertools/next.js */

		var next = function next(iterator) {

			return iterator.next();
		};

		/* js/src/000-tools/itertools/range.js */

		var range = regeneratorRuntime.mark(function range(start, stop, step) {
			return regeneratorRuntime.wrap(function range$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(step < 0)) {
							context$3$0.next = 9;
							break;
						}

					case 1:
						if (!(start > stop)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return start;

					case 4:
						start += step;
						context$3$0.next = 1;
						break;

					case 7:
						context$3$0.next = 15;
						break;

					case 9:
						if (!(start < stop)) {
							context$3$0.next = 15;
							break;
						}

						context$3$0.next = 12;
						return start;

					case 12:
						start += step;
						context$3$0.next = 9;
						break;

					case 15:
					case "end":
						return context$3$0.stop();
				}
			}, range, this);
		});

		/* js/src/000-tools/itertools/sorted.js */

		var sorted = function sorted(compare, iterable) {

			return [].concat(_toConsumableArray(iterable)).sort(compare);
		};

		/* js/src/000-tools/itertools/zip.js */

		var zip = regeneratorRuntime.mark(function zip(iterables) {
			var iterators, buffer, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _result2;

			return regeneratorRuntime.wrap(function zip$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterators = [].concat(_toConsumableArray(map(iter, iterables)));

						if (!(iterators.length === 0)) {
							context$3$0.next = 3;
							break;
						}

						return context$3$0.abrupt("return");

					case 3:
						if (!true) {
							context$3$0.next = 36;
							break;
						}

						buffer = [];
						_iteratorNormalCompletion12 = true;
						_didIteratorError12 = false;
						_iteratorError12 = undefined;
						context$3$0.prev = 8;
						_iterator12 = map(next, iterators)[Symbol.iterator]();

					case 10:
						if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
							context$3$0.next = 18;
							break;
						}

						_result2 = _step12.value;

						if (!_result2.done) {
							context$3$0.next = 14;
							break;
						}

						return context$3$0.abrupt("return");

					case 14:

						buffer.push(_result2.value);

					case 15:
						_iteratorNormalCompletion12 = true;
						context$3$0.next = 10;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](8);
						_didIteratorError12 = true;
						_iteratorError12 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
							_iterator12["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError12) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError12;

					case 30:
						return context$3$0.finish(27);

					case 31:
						return context$3$0.finish(24);

					case 32:
						context$3$0.next = 34;
						return buffer;

					case 34:
						context$3$0.next = 3;
						break;

					case 36:
					case "end":
						return context$3$0.stop();
				}
			}, zip, this, [[8, 20, 24, 32], [25,, 27, 31]]);
		});

		/* js/src/000-tools/namedtuple.js */

		var _namedtuple = function _namedtuple(NamedTuple) {

			var namedtuple = function namedtuple(typename, field_names) {

				var fields = [].concat(_toConsumableArray(field_names));

				var definition = "( function ( ) {\n\nvar " + typename + " = function (";

				definition += " " + fields.join(" , ");

				definition += " )";
				definition += " {\n\n";

				var fieldlist = (function () {
					var _fieldlist = [];
					var _iteratorNormalCompletion13 = true;
					var _didIteratorError13 = false;
					var _iteratorError13 = undefined;

					try {
						for (var _iterator13 = fields[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
							var field = _step13.value;

							_fieldlist.push('"' + field + '" ');
						}
					} catch (err) {
						_didIteratorError13 = true;
						_iteratorError13 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
								_iterator13["return"]();
							}
						} finally {
							if (_didIteratorError13) {
								throw _iteratorError13;
							}
						}
					}

					return _fieldlist;
				})();

				definition += "\t" + "this._fields = [ " + fieldlist.join(", ") + "] ;\n";
				definition += "\t" + "this.length = " + fields.length + " ;\n";

				for (var i = 0; i < fields.length; ++i) {

					var field = fields[i];

					definition += "\n";
					definition += "\t" + "this[" + i + "] = this." + field + " = " + field + " ;";
				}

				definition += "\n} ;\n\n";

				definition += typename + ".prototype = new NamedTuple( ) ;\n\n";
				definition += typename + "._make = function ( iterable ) {\n";
				definition += "\t" + "return NamedTuple.make( " + typename + " , iterable ) ;\n";
				definition += "} ;\n\n";
				definition += typename + ".prototype._replace = function ( dict ) {\n";
				definition += "\t" + "return NamedTuple.replace( " + typename + " , this , dict ) ;\n";
				definition += "} ;\n\n";
				definition += typename + ".prototype._asdict = function ( ) {\n";
				definition += "\t" + "return NamedTuple.asdict( this ) ;\n";
				definition += "} ;\n\n";

				definition += "return " + typename + " ;\n\n} )( )";

				return eval(definition);
			};

			return namedtuple;
		};

		exports._namedtuple = _namedtuple;

		/* js/src/001-adt */
		/* js/src/001-adt/ChainMap.js */

		var _ChainMap = function _ChainMap(Dict, Set) {

			var ChainMap = function ChainMap() {
				for (var _len2 = arguments.length, maps = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					maps[_key2] = arguments[_key2];
				}

				this.maps = maps;

				if (this.maps.length === 0) this.maps.push(new Dict());
			};

			ChainMap.prototype.__missing__ = function (key) {

				throw new KeyError(key);
			};

			ChainMap.prototype.get = function (key) {
				var _iteratorNormalCompletion14 = true;
				var _didIteratorError14 = false;
				var _iteratorError14 = undefined;

				try {

					for (var _iterator14 = this.maps[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
						var _map = _step14.value;

						try {

							return _map.get(key);
						} catch (e) {

							if (!(e instanceof KeyError)) throw e;
						}
					}
				} catch (err) {
					_didIteratorError14 = true;
					_iteratorError14 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
							_iterator14["return"]();
						}
					} finally {
						if (_didIteratorError14) {
							throw _iteratorError14;
						}
					}
				}

				return this.__missing__(key);
			};

			ChainMap.prototype.getdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return this.has(key) ? this.get(key) : dflt;
			};

			ChainMap.prototype._keys = function () {

				var keys = new Set();

				var _iteratorNormalCompletion15 = true;
				var _didIteratorError15 = false;
				var _iteratorError15 = undefined;

				try {
					for (var _iterator15 = this.maps[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
						var _map2 = _step15.value;
						keys.update(_map2.keys());
					}
				} catch (err) {
					_didIteratorError15 = true;
					_iteratorError15 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
							_iterator15["return"]();
						}
					} finally {
						if (_didIteratorError15) {
							throw _iteratorError15;
						}
					}
				}

				return keys;
			};

			ChainMap.prototype.len = function () {

				return this._keys().len();
			};

			ChainMap.prototype[Symbol.iterator] = ChainMap.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion16 = true;
							_didIteratorError16 = false;
							_iteratorError16 = undefined;
							context$4$0.prev = 3;
							_iterator16 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step16.value;
							context$4$0.next = 9;
							return [key, this.get(key)];

						case 9:
							_iteratorNormalCompletion16 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError16 = true;
							_iteratorError16 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
								_iterator16["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError16) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError16;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			ChainMap.prototype.has = function (key) {
				var _iteratorNormalCompletion17 = true;
				var _didIteratorError17 = false;
				var _iteratorError17 = undefined;

				try {

					for (var _iterator17 = this.maps[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
						var _map3 = _step17.value;

						if (_map3.has(key)) return true;
					}
				} catch (err) {
					_didIteratorError17 = true;
					_iteratorError17 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
							_iterator17["return"]();
						}
					} finally {
						if (_didIteratorError17) {
							throw _iteratorError17;
						}
					}
				}

				return false;
			};

			ChainMap.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new ChainMap(Dict.fromkeys(seq, value));
			};

			ChainMap.prototype.copy = function () {
				var _maps = _toArray(this.maps);

				var child = _maps[0];

				var parents = _maps.slice(1);

				return new (_bind.apply(ChainMap, [null].concat([child.copy()], _toConsumableArray(parents))))();
			};

			ChainMap.prototype.new_child = function () {
				var map = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				if (map === null) map = new Dict();

				return new (_bind.apply(ChainMap, [null].concat([map], _toConsumableArray(this.maps))))();
			};

			ChainMap.prototype.parents = function () {
				var _maps2 = _toArray(this.maps);

				var child = _maps2[0];

				var parents = _maps2.slice(1);

				return new (_bind.apply(ChainMap, [null].concat(_toConsumableArray(parents))))();
			};

			ChainMap.prototype.set = function (key, value) {

				return this.maps[0].set(key, value);
			};

			ChainMap.prototype["delete"] = function (key) {

				try {

					this.maps[0]["delete"](key);
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("Key not found in the first mapping: " + key);
				}

				return this;
			};

			ChainMap.prototype.popitem = function () {

				try {

					return this.maps[0].popitem();
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("No keys found in the first mapping.");
				}
			};

			ChainMap.prototype.pop = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				try {

					if (arguments.length <= 1) return this.maps[0].pop(key);

					return this.maps[0].pop(key, dflt);
				} catch (e) {

					if (!(e instanceof KeyError)) throw e;

					throw new KeyError("Key not found in the first mapping: " + key);
				}
			};

			ChainMap.prototype.clear = function () {

				this.maps[0].clear();

				return this;
			};

			ChainMap.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this._keys(), "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			ChainMap.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion18 = true;
							_didIteratorError18 = false;
							_iteratorError18 = undefined;
							context$4$0.prev = 3;
							_iterator18 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step18.value;
							context$4$0.next = 9;
							return this.get(key);

						case 9:
							_iteratorNormalCompletion18 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError18 = true;
							_iteratorError18 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
								_iterator18["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError18) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError18;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			return ChainMap;
		};

		exports._ChainMap = _ChainMap;

		/* js/src/001-adt/Counter.js */

		var _Counter = function _Counter(Map, Dict) {

			var Counter = function Counter(iterable) {

				this.container = new Map();

				if (iterable !== null) this.update(iterable);
			};

			Counter.prototype = new Dict();

			Counter.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				throw new NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.");
			};

			Counter.prototype.get = function (key) {

				if (this.has(key)) return this.container.get(key);

				return 0;
			};

			Counter.prototype.elements = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _step19$value, key, _count;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion19 = true;
							_didIteratorError19 = false;
							_iteratorError19 = undefined;
							context$4$0.prev = 3;
							_iterator19 = this[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
								context$4$0.next = 17;
								break;
							}

							_step19$value = _slicedToArray(_step19.value, 2);
							key = _step19$value[0];
							_count = _step19$value[1];

						case 9:
							if (!(_count-- > 0)) {
								context$4$0.next = 14;
								break;
							}

							context$4$0.next = 12;
							return key;

						case 12:
							context$4$0.next = 9;
							break;

						case 14:
							_iteratorNormalCompletion19 = true;
							context$4$0.next = 5;
							break;

						case 17:
							context$4$0.next = 23;
							break;

						case 19:
							context$4$0.prev = 19;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError19 = true;
							_iteratorError19 = context$4$0.t0;

						case 23:
							context$4$0.prev = 23;
							context$4$0.prev = 24;

							if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
								_iterator19["return"]();
							}

						case 26:
							context$4$0.prev = 26;

							if (!_didIteratorError19) {
								context$4$0.next = 29;
								break;
							}

							throw _iteratorError19;

						case 29:
							return context$4$0.finish(26);

						case 30:
							return context$4$0.finish(23);

						case 31:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 19, 23, 31], [24,, 26, 30]]);
			});

			Counter.prototype.increment = function (key) {
				var amount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.set(key, this.get(key) + amount);
			};

			Counter.prototype.decrement = function (key) {
				var amount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.increment(key, -amount);
			};

			Counter.prototype.update = function (iterable) {
				var _iteratorNormalCompletion20 = true;
				var _didIteratorError20 = false;
				var _iteratorError20 = undefined;

				try {

					for (var _iterator20 = iterable[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
						var key = _step20.value;
						this.increment(key);
					}
				} catch (err) {
					_didIteratorError20 = true;
					_iteratorError20 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
							_iterator20["return"]();
						}
					} finally {
						if (_didIteratorError20) {
							throw _iteratorError20;
						}
					}
				}
			};

			Counter.prototype.add = function (other) {
				var _iteratorNormalCompletion21 = true;
				var _didIteratorError21 = false;
				var _iteratorError21 = undefined;

				try {

					for (var _iterator21 = other[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
						var _step21$value = _slicedToArray(_step21.value, 2);

						var key = _step21$value[0];
						var _count2 = _step21$value[1];
						this.increment(key, _count2);
					}
				} catch (err) {
					_didIteratorError21 = true;
					_iteratorError21 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
							_iterator21["return"]();
						}
					} finally {
						if (_didIteratorError21) {
							throw _iteratorError21;
						}
					}
				}
			};

			Counter.prototype.subtract = function (other) {
				var _iteratorNormalCompletion22 = true;
				var _didIteratorError22 = false;
				var _iteratorError22 = undefined;

				try {

					for (var _iterator22 = other[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
						var _step22$value = _slicedToArray(_step22.value, 2);

						var key = _step22$value[0];
						var _count3 = _step22$value[1];
						this.decrement(key, _count3);
					}
				} catch (err) {
					_didIteratorError22 = true;
					_iteratorError22 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
							_iterator22["return"]();
						}
					} finally {
						if (_didIteratorError22) {
							throw _iteratorError22;
						}
					}
				}
			};

			return Counter;
		};

		exports._Counter = _Counter;

		/* js/src/001-adt/Deque */
		/* js/src/001-adt/Deque/000-Deque.js */

		var Deque = function Deque() {};

		Deque.prototype.len = function () {

			throw new NotImplementedError("len");
		};

		Deque.prototype.empty = function () {

			return this.len() === 0;
		};

		Deque.prototype[Symbol.iterator] = function () {

			return this.values();
		};

		Deque.prototype.values = function () {

			throw new NotImplementedError("values");
		};

		Deque.prototype.append = function (x) {

			throw new NotImplementedError("append");
		};

		Deque.prototype.appendleft = function (x) {

			throw new NotImplementedError("appendleft");
		};

		Deque.prototype.clear = function () {

			throw new NotImplementedError("clear");
		};

		Deque.prototype.copy = function () {

			throw new NotImplementedError("copy");
		};

		Deque.prototype.count = function (x) {

			var c = 0;

			var _iteratorNormalCompletion23 = true;
			var _didIteratorError23 = false;
			var _iteratorError23 = undefined;

			try {
				for (var _iterator23 = this[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
					var element = _step23.value;
					if (element === x) ++c;
				}
			} catch (err) {
				_didIteratorError23 = true;
				_iteratorError23 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
						_iterator23["return"]();
					}
				} finally {
					if (_didIteratorError23) {
						throw _iteratorError23;
					}
				}
			}

			return c;
		};

		Deque.prototype.extend = function (iterable) {
			var _iteratorNormalCompletion24 = true;
			var _didIteratorError24 = false;
			var _iteratorError24 = undefined;

			try {

				for (var _iterator24 = iterable[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
					var x = _step24.value;
					this.append(x);
				}
			} catch (err) {
				_didIteratorError24 = true;
				_iteratorError24 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
						_iterator24["return"]();
					}
				} finally {
					if (_didIteratorError24) {
						throw _iteratorError24;
					}
				}
			}

			return this;
		};

		Deque.prototype.extendleft = function (iterable) {
			var _iteratorNormalCompletion25 = true;
			var _didIteratorError25 = false;
			var _iteratorError25 = undefined;

			try {

				for (var _iterator25 = iterable[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
					var x = _step25.value;
					this.appendleft(x);
				}
			} catch (err) {
				_didIteratorError25 = true;
				_iteratorError25 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
						_iterator25["return"]();
					}
				} finally {
					if (_didIteratorError25) {
						throw _iteratorError25;
					}
				}
			}

			return this;
		};

		Deque.prototype._checkbounds = function (i) {

			if (i < 0 || i >= this.len()) throw new IndexError(i);
		};

		Deque.prototype._where = function (i) {

			throw new NotImplementedError("_where");
		};

		Deque.prototype.get = function (i) {
			var _where = this._where(i);

			var _where2 = _slicedToArray(_where, 2);

			var container = _where2[0];
			var index = _where2[1];

			return container[index];
		};

		Deque.prototype.set = function (i, value) {
			var _where3 = this._where(i);

			var _where32 = _slicedToArray(_where3, 2);

			var container = _where32[0];
			var index = _where32[1];

			container[index] = value;

			return this;
		};

		Deque.prototype._range = regeneratorRuntime.mark(function callee$2$0(start, stop) {
			var i;
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = start;

					case 1:
						if (!(i < stop)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return [i, this.get(i)];

					case 4:
						++i;
						context$3$0.next = 1;
						break;

					case 7:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		Deque.prototype.index = function (x) {
			var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
			var stop = arguments.length <= 2 || arguments[2] === undefined ? this.len() : arguments[2];
			var _iteratorNormalCompletion26 = true;
			var _didIteratorError26 = false;
			var _iteratorError26 = undefined;

			try {

				for (var _iterator26 = this._range(start, stop)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
					var _step26$value = _slicedToArray(_step26.value, 2);

					var i = _step26$value[0];
					var element = _step26$value[1];

					if (element === x) return i;
				}
			} catch (err) {
				_didIteratorError26 = true;
				_iteratorError26 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion26 && _iterator26["return"]) {
						_iterator26["return"]();
					}
				} finally {
					if (_didIteratorError26) {
						throw _iteratorError26;
					}
				}
			}

			throw new ValueError("not found");
		};

		Deque.prototype.pop = function () {

			throw new NotImplementedError("pop");
		};

		Deque.prototype.popleft = function () {

			throw new NotImplementedError("popleft");
		};

		Deque.prototype.insert = function (i, x) {

			this._checkbounds(i);

			this.append(x);

			var j = this.len() - 1;

			for (; i < j; --j) {

				var _a = this.get(j);
				this.set(j, this.get(j - 1));
				this.set(j - 1, _a);
			}

			return this;
		};

		Deque.prototype["delete"] = function (i) {

			this._checkbounds(i);

			var len = this.len() - 1;

			for (; i < len; ++i) this.set(i, this.get(i + 1));

			this.pop();

			return this;
		};

		Deque.prototype.remove = function (value) {

			var i = this.index(value);

			this["delete"](i);

			return this;
		};

		Deque.prototype.reverse = function () {

			for (var i = 0, j = this.len(); i < --j; ++i) {

				var _a2 = this.get(i);
				var b = this.get(j);
				this.set(i, b);
				this.set(j, _a2);
			}

			return this;
		};

		Deque.prototype.rotate = function (n) {

			if (n > 0) {

				while (n-- > 0) this.appendleft(this.pop());
			} else if (n < 0) {

				while (n++ < 0) this.append(this.popleft());
			}

			return this;
		};

		/* js/src/001-adt/Deque/BoundedDeque.js */

		var BoundedDeque = function BoundedDeque(iterable, maxlen) {

			this.maxlen = maxlen;

			this.container = new Array(maxlen);

			this.center = 0;

			this.length = 0;

			if (iterable !== null) this.extend(iterable);
		};

		BoundedDeque.prototype = new Deque();

		BoundedDeque.prototype.len = function () {

			return this.length;
		};

		BoundedDeque.prototype.values = regeneratorRuntime.mark(function callee$2$0() {
			var i, _m, m, n;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = this.center;
						_m = i + this.length;
						m = Math.min(this.maxlen, _m);

					case 3:
						if (!(i < m)) {
							context$3$0.next = 9;
							break;
						}

						context$3$0.next = 6;
						return this.container[i];

					case 6:
						++i;
						context$3$0.next = 3;
						break;

					case 9:
						n = _m % this.maxlen;

						if (!(n < _m)) {
							context$3$0.next = 18;
							break;
						}

						i = 0;

					case 12:
						if (!(i < n)) {
							context$3$0.next = 18;
							break;
						}

						context$3$0.next = 15;
						return this.container[i];

					case 15:
						++i;
						context$3$0.next = 12;
						break;

					case 18:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		BoundedDeque.prototype.append = function (x) {

			if (this.length === this.maxlen) {

				this.container[this.center] = x;
				++this.center;
				this.center %= this.maxlen;
			} else {

				var i = (this.center + this.length) % this.maxlen;
				this.container[i] = x;
				++this.length;
			}

			return this;
		};

		BoundedDeque.prototype.appendleft = function (x) {

			--this.center;
			this.center += this.maxlen;
			this.center %= this.maxlen;
			this.container[this.center] = x;

			if (this.length < this.maxlen) ++this.length;

			return this;
		};

		BoundedDeque.prototype.clear = function () {

			this.center = 0;

			this.length = 0;

			this.container = new Array(this.maxlen);

			return this;
		};

		BoundedDeque.prototype.copy = function () {

			return new BoundedDeque(this, this.maxlen);
		};

		BoundedDeque.prototype._where = function (i) {

			this._checkbounds(i);

			return [this.container, (this.center + i) % this.maxlen];
		};

		BoundedDeque.prototype._popindex = function (container, index) {

			var value = container[index];

			// GC
			container[index] = 0;

			--this.length;

			return value;
		};

		BoundedDeque.prototype.pop = function () {
			var _where4 = this._where(this.length - 1);

			var _where42 = _slicedToArray(_where4, 2);

			var container = _where42[0];
			var index = _where42[1];

			return this._popindex(container, index);
		};

		BoundedDeque.prototype.popleft = function () {
			var _where5 = this._where(0);

			var _where52 = _slicedToArray(_where5, 2);

			var container = _where52[0];
			var index = _where52[1];

			++this.center;
			this.center %= this.maxlen;

			return this._popindex(container, index);
		};

		exports.BoundedDeque = BoundedDeque;

		/* js/src/001-adt/Deque/EmptyDeque.js */

		var EmptyDeque = function EmptyDeque(iterable) {

			if (iterable !== null) this.extend(iterable);
		};

		EmptyDeque.prototype = new Deque();

		EmptyDeque.prototype.len = function () {

			return 0;
		};

		EmptyDeque.prototype.values = function () {

			return { next: function next() {
					return { done: true };
				} };
		};

		EmptyDeque.prototype.append = function (x) {

			return this;
		};

		EmptyDeque.prototype.appendleft = function (x) {

			return this;
		};

		EmptyDeque.prototype.clear = function () {

			return this;
		};

		EmptyDeque.prototype.copy = function () {

			return new EmptyDeque(this);
		};

		EmptyDeque.prototype._where = function (i) {

			throw new IndexError(i);
		};

		EmptyDeque.prototype.pop = EmptyDeque.prototype.popleft = function () {

			throw new IndexError("pop / popleft");
		};

		exports.EmptyDeque = EmptyDeque;

		/* js/src/001-adt/Deque/SingleElementDeque.js */

		var SingleElementDeque = function SingleElementDeque(iterable) {

			this.empty = true;

			this.value = 0;

			if (iterable !== null) this.extend(iterable);
		};

		SingleElementDeque.prototype = new Deque();

		SingleElementDeque.prototype.len = function () {

			return this.empty ? 0 : 1;
		};

		SingleElementDeque.prototype.values = regeneratorRuntime.mark(function callee$2$0() {
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!this.empty) {
							context$3$0.next = 2;
							break;
						}

						return context$3$0.abrupt("return");

					case 2:
						context$3$0.next = 4;
						return this.value;

					case 4:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		SingleElementDeque.prototype.append = SingleElementDeque.prototype.appendleft = function (x) {

			this.empty = false;
			this.value = x;

			return this;
		};

		SingleElementDeque.prototype.clear = function () {

			this.empty = true;
			this.value = 0;

			return this;
		};

		SingleElementDeque.prototype.copy = function () {

			return new SingleElementDeque(this);
		};

		SingleElementDeque.prototype.pop = SingleElementDeque.prototype.popleft = function () {

			if (this.empty) throw new IndexError("pop / popleft");

			var value = this.value;

			this.empty = true;
			this.value = 0;

			return value;
		};

		SingleElementDeque.prototype.get = function (i) {

			if (this.empty || i !== 0) throw new IndexError(i);

			return this.value;
		};

		SingleElementDeque.prototype.set = function (i, value) {

			if (this.empty || i !== 0) throw new IndexError(i);

			this.value = value;

			return this;
		};

		exports.SingleElementDeque = SingleElementDeque;

		/* js/src/001-adt/Deque/UnboundedDeque.js */

		var UnboundedDeque = function UnboundedDeque(iterable) {

			this.growth = 2;

			this.minsize = 10;

			this.currentsize = this.minsize;

			this.container = new Array(this.currentsize);

			this.center = 0;

			this.length = 0;

			if (iterable !== null) this.extend(iterable);
		};

		UnboundedDeque.prototype = new Deque();

		UnboundedDeque.prototype._copy = function (container) {

			var len = this.length;

			for (var i = 0; i < len; ++i) {
				container[i] = this.get(i);
			}
		};

		UnboundedDeque.prototype._realloc = function (newsize) {

			var container = new Array(newsize);

			this._copy(container);

			this.container = container;

			this.center = 0;

			this.currentsize = newsize;
		};

		UnboundedDeque.prototype._shrink = function () {

			var newsize = Math.max(this.minsize, this.length * this.growth);

			if (newsize * this.growth >= this.currentsize) return;

			this._realloc(newsize);
		};

		UnboundedDeque.prototype._grow = function (newlen) {

			if (newlen <= this.currentsize) return;

			this._realloc(newlen * this.growth);
		};

		UnboundedDeque.prototype.len = function () {

			return this.length;
		};

		UnboundedDeque.prototype.values = regeneratorRuntime.mark(function callee$2$0() {
			var i, _m, m, n;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = this.center;
						_m = i + this.length;
						m = Math.min(this.currentsize, _m);

					case 3:
						if (!(i < m)) {
							context$3$0.next = 9;
							break;
						}

						context$3$0.next = 6;
						return this.container[i];

					case 6:
						++i;
						context$3$0.next = 3;
						break;

					case 9:
						n = _m % this.currentsize;

						if (!(n < _m)) {
							context$3$0.next = 18;
							break;
						}

						i = 0;

					case 12:
						if (!(i < n)) {
							context$3$0.next = 18;
							break;
						}

						context$3$0.next = 15;
						return this.container[i];

					case 15:
						++i;
						context$3$0.next = 12;
						break;

					case 18:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		UnboundedDeque.prototype.append = function (x) {

			this._grow(this.length + 1);

			var i = (this.center + this.length) % this.currentsize;
			this.container[i] = x;
			++this.length;

			return this;
		};

		UnboundedDeque.prototype.appendleft = function (x) {

			this._grow(this.length + 1);

			--this.center;
			this.center += this.currentsize;
			this.center %= this.currentsize;
			this.container[this.center] = x;

			++this.length;

			return this;
		};

		UnboundedDeque.prototype.clear = function () {

			this.currentsize = this.minsize;

			this.container = new Array(this.currentsize);

			this.center = 0;

			this.length = 0;

			return this;
		};

		UnboundedDeque.prototype.copy = function () {

			return new UnboundedDeque(this);
		};

		UnboundedDeque.prototype._where = function (i) {

			this._checkbounds(i);

			return [this.container, (this.center + i) % this.currentsize];
		};

		UnboundedDeque.prototype._popindex = function (container, index) {

			var value = container[index];

			// GC
			container[index] = 0;

			--this.length;

			this._shrink();

			return value;
		};

		UnboundedDeque.prototype.pop = function () {
			var _where6 = this._where(this.length - 1);

			var _where62 = _slicedToArray(_where6, 2);

			var container = _where62[0];
			var index = _where62[1];

			return this._popindex(container, index);
		};

		UnboundedDeque.prototype.popleft = function () {
			var _where7 = this._where(0);

			var _where72 = _slicedToArray(_where7, 2);

			var container = _where72[0];
			var index = _where72[1];

			++this.center;
			this.center %= this.currentsize;

			return this._popindex(container, index);
		};

		exports.UnboundedDeque = UnboundedDeque;

		/* js/src/001-adt/Dict */
		/* js/src/001-adt/Dict/DefaultDict.js */

		var _DefaultDict = function _DefaultDict(Dict, Map) {

			var DefaultDict = function DefaultDict(default_factory, mapping) {

				this.container = new Map(mapping);

				this.default_factory = default_factory;
			};

			DefaultDict.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
				var default_factory = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

				return new DefaultDict(default_factory, Mapping.fromkeys(seq, value));
			};

			DefaultDict.prototype = new Dict();

			DefaultDict.prototype.__missing__ = function (key) {

				if (this.default_factory === null) throw new KeyError(key);

				return this.default_factory();
			};

			return DefaultDict;
		};

		exports._DefaultDict = _DefaultDict;

		/* js/src/001-adt/Dict/Dict.js */

		var _Dict = function _Dict(Map) {

			var Dict = function Dict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new Map(mapping);
			};

			Dict.prototype.len = function () {

				return this.container.size;
			};

			Dict.prototype.isequal = function (other) {

				if (this.len() !== other.len()) return false;

				var _iteratorNormalCompletion27 = true;
				var _didIteratorError27 = false;
				var _iteratorError27 = undefined;

				try {
					for (var _iterator27 = other[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
						var _step27$value = _slicedToArray(_step27.value, 2);

						var key = _step27$value[0];
						var value = _step27$value[1];

						if (!this.has(key)) return false;

						if (this.get(key) !== value) return false;
					}
				} catch (err) {
					_didIteratorError27 = true;
					_iteratorError27 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion27 && _iterator27["return"]) {
							_iterator27["return"]();
						}
					} finally {
						if (_didIteratorError27) {
							throw _iteratorError27;
						}
					}
				}

				return true;
			};

			Dict.prototype.__missing__ = function (key) {

				throw new KeyError(key);
			};

			Dict.prototype.get = function (key) {

				if (!this.container.has(key)) return this.__missing__(key);

				return this.container.get(key);
			};

			Dict.prototype.set = function (key, value) {

				this.container.set(key, value);

				return this;
			};

			Dict.prototype["delete"] = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				return this;
			};

			Dict.prototype.has = function (key) {

				return this.container.has(key);
			};

			Dict.prototype.clear = function () {

				this.container.clear();

				return this;
			};

			Dict.prototype.copy = function () {

				return new Dict(this.items());
			};

			Dict.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new Dict(Mapping.fromkeys(seq, value));
			};

			Dict.prototype.getdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) return this.get(key);

				return dflt;
			};

			Dict.prototype.setdefault = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) return this.get(key);

				this.set(key, dflt);

				return dflt;
			};

			Dict.prototype.pop = function (key) {
				var dflt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (this.has(key)) {

					var value = this.get(key);

					this["delete"](key);

					return value;
				}

				if (arguments.length < 2) throw new KeyError();

				return dflt;
			};

			Dict.prototype.popitem = function () {

				if (this.len() === 0) throw new KeyError();

				var key = this.keys().next().value;

				return [key, this.pop(key)];
			};

			Dict.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion28, _didIteratorError28, _iteratorError28, _iterator28, _step28, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion28 = true;
							_didIteratorError28 = false;
							_iteratorError28 = undefined;
							context$4$0.prev = 3;
							_iterator28 = this.container.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step28.value;
							context$4$0.next = 9;
							return key;

						case 9:
							_iteratorNormalCompletion28 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError28 = true;
							_iteratorError28 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion28 && _iterator28["return"]) {
								_iterator28["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError28) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError28;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Dict.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion29, _didIteratorError29, _iteratorError29, _iterator29, _step29, _step29$value, key, value;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion29 = true;
							_didIteratorError29 = false;
							_iteratorError29 = undefined;
							context$4$0.prev = 3;
							_iterator29 = this.container[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done) {
								context$4$0.next = 14;
								break;
							}

							_step29$value = _slicedToArray(_step29.value, 2);
							key = _step29$value[0];
							value = _step29$value[1];
							context$4$0.next = 11;
							return value;

						case 11:
							_iteratorNormalCompletion29 = true;
							context$4$0.next = 5;
							break;

						case 14:
							context$4$0.next = 20;
							break;

						case 16:
							context$4$0.prev = 16;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError29 = true;
							_iteratorError29 = context$4$0.t0;

						case 20:
							context$4$0.prev = 20;
							context$4$0.prev = 21;

							if (!_iteratorNormalCompletion29 && _iterator29["return"]) {
								_iterator29["return"]();
							}

						case 23:
							context$4$0.prev = 23;

							if (!_didIteratorError29) {
								context$4$0.next = 26;
								break;
							}

							throw _iteratorError29;

						case 26:
							return context$4$0.finish(23);

						case 27:
							return context$4$0.finish(20);

						case 28:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
			});

			Dict.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.container, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Dict.prototype.update = function (mapping) {
				var _iteratorNormalCompletion30 = true;
				var _didIteratorError30 = false;
				var _iteratorError30 = undefined;

				try {

					for (var _iterator30 = mapping[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
						var _step30$value = _slicedToArray(_step30.value, 2);

						var key = _step30$value[0];
						var value = _step30$value[1];
						this.set(key, value);
					}
				} catch (err) {
					_didIteratorError30 = true;
					_iteratorError30 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion30 && _iterator30["return"]) {
							_iterator30["return"]();
						}
					} finally {
						if (_didIteratorError30) {
							throw _iteratorError30;
						}
					}
				}
			};

			Dict.prototype[Symbol.iterator] = Dict.prototype.items;

			return Dict;
		};

		exports._Dict = _Dict;

		/* js/src/001-adt/Dict/OrderedDict.js */

		var _OrderedDict = function _OrderedDict(Dict, Map, DLL) {

			var OrderedDict = function OrderedDict(mapping) {

				this.container = new Map();

				this.map = new Map();

				this.list = new DLL();

				if (mapping !== null) this.update(mapping);
			};

			OrderedDict.prototype = new Dict();

			OrderedDict.prototype.isequal = function (other) {

				if (!(other instanceof OrderedDict)) return false;

				if (!Dict.prototype.isequal.call(this, other)) return false;

				var keys = this.keys();

				var _iteratorNormalCompletion31 = true;
				var _didIteratorError31 = false;
				var _iteratorError31 = undefined;

				try {
					for (var _iterator31 = other.keys()[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
						var key = _step31.value;

						if (keys.next().value !== key) return false;
					}
				} catch (err) {
					_didIteratorError31 = true;
					_iteratorError31 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion31 && _iterator31["return"]) {
							_iterator31["return"]();
						}
					} finally {
						if (_didIteratorError31) {
							throw _iteratorError31;
						}
					}
				}

				return true;
			};

			OrderedDict.prototype.set = function (key, value) {

				if (!this.has(key)) {

					this.map.set(key, this.list.push(key));
				}

				this.container.set(key, value);

				return this;
			};

			OrderedDict.prototype["delete"] = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				this.list.erase(this.map.get(key));
				this.map["delete"](key);

				return this;
			};

			OrderedDict.prototype.clear = function () {

				this.container.clear();

				this.map.clear();

				this.list.clear();

				return this;
			};

			OrderedDict.prototype.copy = function () {

				return new OrderedDict(this.items());
			};

			OrderedDict.fromkeys = function (seq) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new OrderedDict(Mapping.fromkeys(seq, value));
			};

			OrderedDict.prototype.popitem = function () {
				var last = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				if (this.len() === 0) throw new KeyError();

				var key = last ? this.list.end().prev().value : this.list.begin().next().value;

				return [key, this.pop(key)];
			};

			OrderedDict.prototype.move_to_end = function (key) {
				var last = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

				if (!this.container.has(key)) throw new KeyError();

				this.list.erase(this.map.get(key));

				var iterator = last ? this.list.push(key) : this.list.unshift(key);

				this.map.set(key, iterator);

				return this;
			};

			OrderedDict.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion32, _didIteratorError32, _iteratorError32, _iterator32, _step32, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion32 = true;
							_didIteratorError32 = false;
							_iteratorError32 = undefined;
							context$4$0.prev = 3;
							_iterator32 = this.list[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step32.value;
							context$4$0.next = 9;
							return key;

						case 9:
							_iteratorNormalCompletion32 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError32 = true;
							_iteratorError32 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion32 && _iterator32["return"]) {
								_iterator32["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError32) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError32;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype.values = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion33, _didIteratorError33, _iteratorError33, _iterator33, _step33, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion33 = true;
							_didIteratorError33 = false;
							_iteratorError33 = undefined;
							context$4$0.prev = 3;
							_iterator33 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step33.value;
							context$4$0.next = 9;
							return this.container.get(key);

						case 9:
							_iteratorNormalCompletion33 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError33 = true;
							_iteratorError33 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion33 && _iterator33["return"]) {
								_iterator33["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError33) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError33;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype.items = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion34, _didIteratorError34, _iteratorError34, _iterator34, _step34, key;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion34 = true;
							_didIteratorError34 = false;
							_iteratorError34 = undefined;
							context$4$0.prev = 3;
							_iterator34 = this.keys()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done) {
								context$4$0.next = 12;
								break;
							}

							key = _step34.value;
							context$4$0.next = 9;
							return [key, this.container.get(key)];

						case 9:
							_iteratorNormalCompletion34 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError34 = true;
							_iteratorError34 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion34 && _iterator34["return"]) {
								_iterator34["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError34) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError34;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items;

			return OrderedDict;
		};

		exports._OrderedDict = _OrderedDict;

		/* js/src/001-adt/Set.js */

		var _Set = function _Set(BaseSet) {

			var Set = function Set() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				this.container = new BaseSet(iterable);
			};

			Set.wrap = function (A) {

				if (A instanceof Set) return A;

				return new Set(A);
			};

			Set._operator = function (method) {

				return function () {
					for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
						args[_key3] = arguments[_key3];
					}

					return method.apply(this, (function () {
						var _method$apply = [];
						var _iteratorNormalCompletion35 = true;
						var _didIteratorError35 = false;
						var _iteratorError35 = undefined;

						try {
							for (var _iterator35 = args[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
								var arg = _step35.value;

								_method$apply.push(Set.wrap(arg));
							}
						} catch (err) {
							_didIteratorError35 = true;
							_iteratorError35 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion35 && _iterator35["return"]) {
									_iterator35["return"]();
								}
							} finally {
								if (_didIteratorError35) {
									throw _iteratorError35;
								}
							}
						}

						return _method$apply;
					})());
				};
			};

			Set._inclusion = function (A, B) {

				return A._ispropersubset(B) ? -1 : B._ispropersubset(A) ? 1 : 0;
			};

			Set.inclusion = Set._operator(Set._inclusion);

			Set.prototype[Symbol.iterator] = Set.prototype.keys = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.container, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Set.prototype.len = function () {

				return this.container.size;
			};

			Set.prototype.has = function (key) {

				return this.container.has(key);
			};

			Set.prototype._isdisjoint = function (other) {

				return this._commonkeys(other).next().done;
			};

			Set.prototype.isdisjoint = Set._operator(Set.prototype._isdisjoint);

			Set.prototype._isequal = function (other) {

				return this._issubset(other) && other._issubset(this);
			};

			Set.prototype.isequal = Set._operator(Set.prototype._isequal);

			Set.prototype._issubset = function (other) {

				if (this.len() > other.len()) return false;

				var _iteratorNormalCompletion36 = true;
				var _didIteratorError36 = false;
				var _iteratorError36 = undefined;

				try {
					for (var _iterator36 = this[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
						var key = _step36.value;
						if (!other.has(key)) return false;
					}
				} catch (err) {
					_didIteratorError36 = true;
					_iteratorError36 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion36 && _iterator36["return"]) {
							_iterator36["return"]();
						}
					} finally {
						if (_didIteratorError36) {
							throw _iteratorError36;
						}
					}
				}

				return true;
			};

			Set.prototype.issubset = Set._operator(Set.prototype._issubset);

			Set.prototype._ispropersubset = function (other) {

				return this._issubset(other) && !this._issuperset(other);
			};

			Set.prototype.ispropersubset = Set._operator(Set.prototype._ispropersubset);

			Set.prototype._issuperset = function (other) {

				return other._issubset(this);
			};

			Set.prototype.issuperset = Set._operator(Set.prototype._issuperset);

			Set.prototype._ispropersuperset = function (other) {

				return this._issuperset(other) && !this._issubset(other);
			};

			Set.prototype.ispropersuperset = Set._operator(Set.prototype._ispropersuperset);

			Set.prototype.union = Set.prototype._union = function () {
				var _copy;

				return (_copy = this.copy())._update.apply(_copy, arguments);
			};

			Set.prototype._commonkeys = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion37,
				    _didIteratorError37,
				    _iteratorError37,
				    _len4,
				    others,
				    _key4,
				    _iterator37,
				    _step37,
				    key,
				    _iteratorNormalCompletion38,
				    _didIteratorError38,
				    _iteratorError38,
				    _iterator38,
				    _step38,
				    other,
				    args$4$0 = arguments;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion37 = true;
							_didIteratorError37 = false;
							_iteratorError37 = undefined;
							context$4$0.prev = 3;

							for (_len4 = args$4$0.length, others = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
								others[_key4] = args$4$0[_key4];
							}

							_iterator37 = this[Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done) {
								context$4$0.next = 39;
								break;
							}

							key = _step37.value;
							_iteratorNormalCompletion38 = true;
							_didIteratorError38 = false;
							_iteratorError38 = undefined;
							context$4$0.prev = 11;
							_iterator38 = others[Symbol.iterator]();

						case 13:
							if (_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done) {
								context$4$0.next = 20;
								break;
							}

							other = _step38.value;

							if (other.has(key)) {
								context$4$0.next = 17;
								break;
							}

							return context$4$0.abrupt("continue", 36);

						case 17:
							_iteratorNormalCompletion38 = true;
							context$4$0.next = 13;
							break;

						case 20:
							context$4$0.next = 26;
							break;

						case 22:
							context$4$0.prev = 22;
							context$4$0.t0 = context$4$0["catch"](11);
							_didIteratorError38 = true;
							_iteratorError38 = context$4$0.t0;

						case 26:
							context$4$0.prev = 26;
							context$4$0.prev = 27;

							if (!_iteratorNormalCompletion38 && _iterator38["return"]) {
								_iterator38["return"]();
							}

						case 29:
							context$4$0.prev = 29;

							if (!_didIteratorError38) {
								context$4$0.next = 32;
								break;
							}

							throw _iteratorError38;

						case 32:
							return context$4$0.finish(29);

						case 33:
							return context$4$0.finish(26);

						case 34:
							context$4$0.next = 36;
							return key;

						case 36:
							_iteratorNormalCompletion37 = true;
							context$4$0.next = 6;
							break;

						case 39:
							context$4$0.next = 45;
							break;

						case 41:
							context$4$0.prev = 41;
							context$4$0.t1 = context$4$0["catch"](3);
							_didIteratorError37 = true;
							_iteratorError37 = context$4$0.t1;

						case 45:
							context$4$0.prev = 45;
							context$4$0.prev = 46;

							if (!_iteratorNormalCompletion37 && _iterator37["return"]) {
								_iterator37["return"]();
							}

						case 48:
							context$4$0.prev = 48;

							if (!_didIteratorError37) {
								context$4$0.next = 51;
								break;
							}

							throw _iteratorError37;

						case 51:
							return context$4$0.finish(48);

						case 52:
							return context$4$0.finish(45);

						case 53:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 41, 45, 53], [11, 22, 26, 34], [27,, 29, 33], [46,, 48, 52]]);
			});

			Set.prototype._intersection = function () {

				return new Set(this._commonkeys.apply(this, arguments));
			};

			Set.prototype.intersection = Set._operator(Set.prototype._intersection);

			Set.prototype.difference = Set.prototype._difference = function () {
				var _copy2;

				return (_copy2 = this.copy())._difference_update.apply(_copy2, arguments);
			};

			Set.prototype.symmetric_difference = Set.prototype._symmetric_difference = function (other) {

				return this.copy()._symmetric_difference_update(other);
			};

			Set.prototype.copy = function () {

				return new Set(this);
			};

			Set.prototype.update = Set.prototype._update = function () {
				var _iteratorNormalCompletion39 = true;
				var _didIteratorError39 = false;
				var _iteratorError39 = undefined;

				try {
					for (var _len5 = arguments.length, others = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
						others[_key5] = arguments[_key5];
					}

					for (var _iterator39 = others[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
						var other = _step39.value;
						var _iteratorNormalCompletion40 = true;
						var _didIteratorError40 = false;
						var _iteratorError40 = undefined;

						try {

							for (var _iterator40 = other[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
								var key = _step40.value;
								this.add(key);
							}
						} catch (err) {
							_didIteratorError40 = true;
							_iteratorError40 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion40 && _iterator40["return"]) {
									_iterator40["return"]();
								}
							} finally {
								if (_didIteratorError40) {
									throw _iteratorError40;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError39 = true;
					_iteratorError39 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion39 && _iterator39["return"]) {
							_iterator39["return"]();
						}
					} finally {
						if (_didIteratorError39) {
							throw _iteratorError39;
						}
					}
				}

				return this;
			};

			Set.prototype._intersection_update = function () {

				var intersection = this._intersection.apply(this, arguments);

				this.clear().update(intersection);

				return this;
			};

			Set.prototype.intersection_update = Set._operator(Set.prototype._intersection_update);

			Set.prototype.difference_update = Set.prototype._difference_update = function () {
				var _iteratorNormalCompletion41 = true;
				var _didIteratorError41 = false;
				var _iteratorError41 = undefined;

				try {
					for (var _len6 = arguments.length, others = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
						others[_key6] = arguments[_key6];
					}

					for (var _iterator41 = others[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
						var other = _step41.value;
						var _iteratorNormalCompletion42 = true;
						var _didIteratorError42 = false;
						var _iteratorError42 = undefined;

						try {

							for (var _iterator42 = other[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
								var key = _step42.value;
								this.discard(key);
							}
						} catch (err) {
							_didIteratorError42 = true;
							_iteratorError42 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion42 && _iterator42["return"]) {
									_iterator42["return"]();
								}
							} finally {
								if (_didIteratorError42) {
									throw _iteratorError42;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError41 = true;
					_iteratorError41 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion41 && _iterator41["return"]) {
							_iterator41["return"]();
						}
					} finally {
						if (_didIteratorError41) {
							throw _iteratorError41;
						}
					}
				}

				return this;
			};

			Set.prototype.symmetric_difference_update = Set.prototype._symmetric_difference_update = function (other) {
				var _iteratorNormalCompletion43 = true;
				var _didIteratorError43 = false;
				var _iteratorError43 = undefined;

				try {

					for (var _iterator43 = other[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
						var key = _step43.value;

						if (this.has(key)) this.discard(key);else this.add(key);
					}
				} catch (err) {
					_didIteratorError43 = true;
					_iteratorError43 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion43 && _iterator43["return"]) {
							_iterator43["return"]();
						}
					} finally {
						if (_didIteratorError43) {
							throw _iteratorError43;
						}
					}
				}

				return this;
			};

			Set.prototype.add = function (key) {

				this.container.add(key);

				return this;
			};

			Set.prototype.remove = function (key) {

				if (!this.container["delete"](key)) throw new KeyError();

				return this;
			};

			Set.prototype.discard = function (key) {

				this.container["delete"](key);

				return this;
			};

			Set.prototype.pop = function () {

				if (this.len() === 0) throw new KeyError();

				var key = this.keys().next().value;

				this.discard(key);

				return key;
			};

			Set.prototype.clear = function () {

				this.container.clear();

				return this;
			};

			return Set;
		};

		exports._Set = _Set;

		/* js/src/002-sugar */
		/* js/src/002-sugar/chainmap.js */

		var _chainmap = function _chainmap(ChainMap) {

			var chainmap = function chainmap() {
				for (var _len7 = arguments.length, maps = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
					maps[_key7] = arguments[_key7];
				}

				return new (_bind.apply(ChainMap, [null].concat(maps)))();
			};

			chainmap.fromkeys = ChainMap.fromkeys;

			return chainmap;
		};

		exports._chainmap = _chainmap;

		/* js/src/002-sugar/counter.js */

		var _counter = function _counter(Counter) {

			var counter = function counter() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Counter(iterable);
			};

			counter.fromkeys = Counter.fromkeys;

			return counter;
		};

		exports._counter = _counter;

		/* js/src/002-sugar/defaultdict.js */

		var _defaultdict = function _defaultdict(DefaultDict) {

			var defaultdict = function defaultdict() {
				var default_factory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var mapping = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				return new DefaultDict(default_factory, mapping);
			};

			defaultdict.fromkeys = DefaultDict.fromkeys;

			return defaultdict;
		};

		exports._defaultdict = _defaultdict;

		/* js/src/002-sugar/deque.js */

		var _deque = function _deque(UnboundedDeque, BoundedDeque, SingleElementDeque, EmptyDeque) {

			var deque = function deque() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var maxlen = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (maxlen === null) return new UnboundedDeque(iterable);

				if (!Number.isInteger(maxlen)) throw new TypeError(maxlen);

				if (maxlen === 0) return new EmptyDeque(iterable);

				if (maxlen === 1) return new SingleElementDeque(iterable);

				if (maxlen > 0) return new BoundedDeque(iterable, maxlen);

				throw new ValueError(maxlen);
			};

			return deque;
		};

		exports._deque = _deque;

		/* js/src/002-sugar/dict.js */

		var _dict = function _dict(Dict) {

			var dict = function dict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Dict(mapping);
			};

			dict.fromkeys = Dict.fromkeys;

			return dict;
		};

		exports._dict = _dict;

		/* js/src/002-sugar/ordereddict.js */

		var _ordereddict = function _ordereddict(OrderedDict) {

			var ordereddict = function ordereddict() {
				var mapping = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new OrderedDict(mapping);
			};

			ordereddict.fromkeys = OrderedDict.fromkeys;

			return ordereddict;
		};

		exports._ordereddict = _ordereddict;

		/* js/src/002-sugar/set.js */

		var _set = function _set(Set) {

			var set = function set() {
				var iterable = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

				return new Set(iterable);
			};

			set.inclusion = Set.inclusion;

			return set;
		};

		exports._set = _set;

		/* js/src/003-compile.js */

		var compile = function compile(_ref3) {
			var BaseSet = _ref3.BaseSet;
			var DLL = _ref3.DLL;
			var BaseMap = _ref3.BaseMap;

			var Set = exports._Set(BaseSet);
			var Dict = exports._Dict(BaseMap);
			var OrderedDict = exports._OrderedDict(Dict, BaseMap, DLL);
			var NamedTuple = exports._NamedTuple(Dict, OrderedDict);
			var DefaultDict = exports._DefaultDict(Dict, BaseMap);
			var ChainMap = exports._ChainMap(Dict, Set);
			var Counter = exports._Counter(BaseMap, Dict);
			var namedtuple = exports._namedtuple(NamedTuple);

			return {
				bisect: bisect, heapq: heapq,

				Set: Set,
				set: exports._set(Set),

				Mapping: Mapping,

				Dict: Dict,
				dict: exports._dict(Dict),

				OrderedDict: OrderedDict,
				ordereddict: exports._ordereddict(OrderedDict),

				DefaultDict: DefaultDict,
				defaultdict: exports._defaultdict(DefaultDict),

				ChainMap: ChainMap,
				chainmap: exports._chainmap(ChainMap),

				Counter: Counter,
				counter: exports._counter(Counter),
				NamedTuple: NamedTuple,
				namedtuple: namedtuple,

				deque: exports._deque(UnboundedDeque, BoundedDeque, SingleElementDeque, EmptyDeque),
				Deque: Deque, UnboundedDeque: UnboundedDeque, BoundedDeque: BoundedDeque, SingleElementDeque: SingleElementDeque, EmptyDeque: EmptyDeque,

				IndexError: IndexError,
				KeyError: KeyError,
				NotImplementedError: NotImplementedError,
				TypeError: exports.TypeError,
				ValueError: ValueError
			};
		};

		exports.compile = compile;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-collections", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["collections"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-collections");
})();