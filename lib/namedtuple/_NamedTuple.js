"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _NamedTuple;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _NamedTuple(Dict, OrderedDict) {

	var NamedTuple = function NamedTuple() {};

	NamedTuple.prototype = [];

	NamedTuple.make = function (Constructor, iterable) {

		return new (Function.prototype.bind.apply(Constructor, [null].concat(_toConsumableArray(iterable))))();
	};

	NamedTuple.replace = function (Constructor, tuple, dict) {

		var values = new Dict();

		var fields = tuple._fields;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;
				values.set(key, tuple[key]);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = dict[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _step2$value = _slicedToArray(_step2.value, 2),
				    _key = _step2$value[0],
				    value = _step2$value[1];

				values.set(_key, value);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return new (Function.prototype.bind.apply(Constructor, [null].concat(_toConsumableArray(fields.map(function (key) {
			return values.get(key);
		})))))();
	};

	NamedTuple.asdict = function (tuple) {

		var fields = tuple._fields;

		return new OrderedDict(fields.map(function (key) {
			return [key, tuple[key]];
		}));
	};

	return NamedTuple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYW1lZHR1cGxlL19OYW1lZFR1cGxlLmpzIl0sIm5hbWVzIjpbIl9OYW1lZFR1cGxlIiwiRGljdCIsIk9yZGVyZWREaWN0IiwiTmFtZWRUdXBsZSIsInByb3RvdHlwZSIsIm1ha2UiLCJDb25zdHJ1Y3RvciIsIml0ZXJhYmxlIiwicmVwbGFjZSIsInR1cGxlIiwiZGljdCIsInZhbHVlcyIsImZpZWxkcyIsIl9maWVsZHMiLCJrZXkiLCJzZXQiLCJ2YWx1ZSIsIm1hcCIsImdldCIsImFzZGljdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBQ3dCQSxXOzs7O0FBQVQsU0FBU0EsV0FBVCxDQUF1QkMsSUFBdkIsRUFBOEJDLFdBQTlCLEVBQTRDOztBQUUxRCxLQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FBYSxDQUFHLENBQW5DOztBQUVBQSxZQUFXQyxTQUFYLEdBQXVCLEVBQXZCOztBQUVBRCxZQUFXRSxJQUFYLEdBQWtCLFVBQVdDLFdBQVgsRUFBeUJDLFFBQXpCLEVBQW9DOztBQUVyRCw0Q0FBV0QsV0FBWCxtQ0FBMkJDLFFBQTNCO0FBRUEsRUFKRDs7QUFNQUosWUFBV0ssT0FBWCxHQUFxQixVQUFXRixXQUFYLEVBQXlCRyxLQUF6QixFQUFpQ0MsSUFBakMsRUFBd0M7O0FBRTVELE1BQU1DLFNBQVMsSUFBSVYsSUFBSixFQUFmOztBQUVBLE1BQU1XLFNBQVNILE1BQU1JLE9BQXJCOztBQUo0RDtBQUFBO0FBQUE7O0FBQUE7QUFNNUQsd0JBQWlCRCxNQUFqQjtBQUFBLFFBQVVFLEdBQVY7QUFBMEJILFdBQU9JLEdBQVAsQ0FBWUQsR0FBWixFQUFrQkwsTUFBTUssR0FBTixDQUFsQjtBQUExQjtBQU40RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVE1RCx5QkFBNkJKLElBQTdCO0FBQUE7QUFBQSxRQUFZSSxJQUFaO0FBQUEsUUFBa0JFLEtBQWxCOztBQUFvQ0wsV0FBT0ksR0FBUCxDQUFZRCxJQUFaLEVBQWtCRSxLQUFsQjtBQUFwQztBQVI0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVU1RCw0Q0FBV1YsV0FBWCxtQ0FBMkJNLE9BQU9LLEdBQVAsQ0FBWTtBQUFBLFVBQU9OLE9BQU9PLEdBQVAsQ0FBWUosR0FBWixDQUFQO0FBQUEsR0FBWixDQUEzQjtBQUVBLEVBWkQ7O0FBY0FYLFlBQVdnQixNQUFYLEdBQW9CLFVBQVdWLEtBQVgsRUFBbUI7O0FBRXRDLE1BQU1HLFNBQVNILE1BQU1JLE9BQXJCOztBQUVBLFNBQU8sSUFBSVgsV0FBSixDQUFpQlUsT0FBT0ssR0FBUCxDQUFZO0FBQUEsVUFBTyxDQUFFSCxHQUFGLEVBQVFMLE1BQU1LLEdBQU4sQ0FBUixDQUFQO0FBQUEsR0FBWixDQUFqQixDQUFQO0FBRUEsRUFORDs7QUFRQSxRQUFPWCxVQUFQO0FBRUEiLCJmaWxlIjoiX05hbWVkVHVwbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9OYW1lZFR1cGxlICggRGljdCAsIE9yZGVyZWREaWN0ICkge1xuXG5cdGNvbnN0IE5hbWVkVHVwbGUgPSBmdW5jdGlvbiAoICkgeyB9IDtcblxuXHROYW1lZFR1cGxlLnByb3RvdHlwZSA9IFsgXSA7XG5cblx0TmFtZWRUdXBsZS5tYWtlID0gZnVuY3Rpb24gKCBDb25zdHJ1Y3RvciAsIGl0ZXJhYmxlICkge1xuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvciggLi4uaXRlcmFibGUgKSA7XG5cblx0fSA7XG5cblx0TmFtZWRUdXBsZS5yZXBsYWNlID0gZnVuY3Rpb24gKCBDb25zdHJ1Y3RvciAsIHR1cGxlICwgZGljdCApIHtcblxuXHRcdGNvbnN0IHZhbHVlcyA9IG5ldyBEaWN0KCApIDtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHR1cGxlLl9maWVsZHMgO1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBmaWVsZHMgKSB2YWx1ZXMuc2V0KCBrZXkgLCB0dXBsZVtrZXldICkgO1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgdmFsdWUgXSBvZiBkaWN0ICkgdmFsdWVzLnNldCgga2V5ICwgdmFsdWUgKSA7XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKCAuLi5maWVsZHMubWFwKCBrZXkgPT4gdmFsdWVzLmdldCgga2V5ICkgKSApIDtcblxuXHR9IDtcblxuXHROYW1lZFR1cGxlLmFzZGljdCA9IGZ1bmN0aW9uICggdHVwbGUgKSB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0dXBsZS5fZmllbGRzIDtcblxuXHRcdHJldHVybiBuZXcgT3JkZXJlZERpY3QoIGZpZWxkcy5tYXAoIGtleSA9PiBbIGtleSAsIHR1cGxlW2tleV0gXSApICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBOYW1lZFR1cGxlIDtcblxufVxuIl19