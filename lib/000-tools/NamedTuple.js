"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._NamedTuple = _NamedTuple;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDAtdG9vbHMvTmFtZWRUdXBsZS5qcyJdLCJuYW1lcyI6WyJfTmFtZWRUdXBsZSIsIkRpY3QiLCJPcmRlcmVkRGljdCIsIk5hbWVkVHVwbGUiLCJwcm90b3R5cGUiLCJtYWtlIiwiQ29uc3RydWN0b3IiLCJpdGVyYWJsZSIsInJlcGxhY2UiLCJ0dXBsZSIsImRpY3QiLCJ2YWx1ZXMiLCJmaWVsZHMiLCJfZmllbGRzIiwia2V5Iiwic2V0IiwidmFsdWUiLCJtYXAiLCJnZXQiLCJhc2RpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxXLEdBQUFBLFc7Ozs7QUFBVCxTQUFTQSxXQUFULENBQXVCQyxJQUF2QixFQUE4QkMsV0FBOUIsRUFBNEM7O0FBRWxELEtBQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFhLENBQUcsQ0FBbkM7O0FBRUFBLFlBQVdDLFNBQVgsR0FBdUIsRUFBdkI7O0FBRUFELFlBQVdFLElBQVgsR0FBa0IsVUFBV0MsV0FBWCxFQUF5QkMsUUFBekIsRUFBb0M7O0FBRXJELDRDQUFXRCxXQUFYLG1DQUEyQkMsUUFBM0I7QUFFQSxFQUpEOztBQU1BSixZQUFXSyxPQUFYLEdBQXFCLFVBQVdGLFdBQVgsRUFBeUJHLEtBQXpCLEVBQWlDQyxJQUFqQyxFQUF3Qzs7QUFFNUQsTUFBTUMsU0FBUyxJQUFJVixJQUFKLEVBQWY7O0FBRUEsTUFBTVcsU0FBU0gsTUFBTUksT0FBckI7O0FBSjREO0FBQUE7QUFBQTs7QUFBQTtBQU01RCx3QkFBaUJELE1BQWpCO0FBQUEsUUFBVUUsR0FBVjtBQUEwQkgsV0FBT0ksR0FBUCxDQUFZRCxHQUFaLEVBQWtCTCxNQUFNSyxHQUFOLENBQWxCO0FBQTFCO0FBTjREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBUTVELHlCQUE2QkosSUFBN0I7QUFBQTtBQUFBLFFBQVlJLElBQVo7QUFBQSxRQUFrQkUsS0FBbEI7O0FBQW9DTCxXQUFPSSxHQUFQLENBQVlELElBQVosRUFBa0JFLEtBQWxCO0FBQXBDO0FBUjREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVTVELDRDQUFXVixXQUFYLG1DQUEyQk0sT0FBT0ssR0FBUCxDQUFZO0FBQUEsVUFBT04sT0FBT08sR0FBUCxDQUFZSixHQUFaLENBQVA7QUFBQSxHQUFaLENBQTNCO0FBRUEsRUFaRDs7QUFjQVgsWUFBV2dCLE1BQVgsR0FBb0IsVUFBV1YsS0FBWCxFQUFtQjs7QUFFdEMsTUFBTUcsU0FBU0gsTUFBTUksT0FBckI7O0FBRUEsU0FBTyxJQUFJWCxXQUFKLENBQWlCVSxPQUFPSyxHQUFQLENBQVk7QUFBQSxVQUFPLENBQUVILEdBQUYsRUFBUUwsTUFBTUssR0FBTixDQUFSLENBQVA7QUFBQSxHQUFaLENBQWpCLENBQVA7QUFFQSxFQU5EOztBQVFBLFFBQU9YLFVBQVA7QUFFQSIsImZpbGUiOiJOYW1lZFR1cGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX05hbWVkVHVwbGUgKCBEaWN0ICwgT3JkZXJlZERpY3QgKSB7XG5cblx0Y29uc3QgTmFtZWRUdXBsZSA9IGZ1bmN0aW9uICggKSB7IH0gO1xuXG5cdE5hbWVkVHVwbGUucHJvdG90eXBlID0gWyBdIDtcblxuXHROYW1lZFR1cGxlLm1ha2UgPSBmdW5jdGlvbiAoIENvbnN0cnVjdG9yICwgaXRlcmFibGUgKSB7XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKCAuLi5pdGVyYWJsZSApIDtcblxuXHR9IDtcblxuXHROYW1lZFR1cGxlLnJlcGxhY2UgPSBmdW5jdGlvbiAoIENvbnN0cnVjdG9yICwgdHVwbGUgLCBkaWN0ICkge1xuXG5cdFx0Y29uc3QgdmFsdWVzID0gbmV3IERpY3QoICkgO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdHVwbGUuX2ZpZWxkcyA7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIGZpZWxkcyApIHZhbHVlcy5zZXQoIGtleSAsIHR1cGxlW2tleV0gKSA7XG5cblx0XHRmb3IgKCBsZXQgWyBrZXkgLCB2YWx1ZSBdIG9mIGRpY3QgKSB2YWx1ZXMuc2V0KCBrZXkgLCB2YWx1ZSApIDtcblxuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoIC4uLmZpZWxkcy5tYXAoIGtleSA9PiB2YWx1ZXMuZ2V0KCBrZXkgKSApICkgO1xuXG5cdH0gO1xuXG5cdE5hbWVkVHVwbGUuYXNkaWN0ID0gZnVuY3Rpb24gKCB0dXBsZSApIHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHR1cGxlLl9maWVsZHMgO1xuXG5cdFx0cmV0dXJuIG5ldyBPcmRlcmVkRGljdCggZmllbGRzLm1hcCgga2V5ID0+IFsga2V5ICwgdHVwbGVba2V5XSBdICkgKSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIE5hbWVkVHVwbGUgO1xuXG59XG4iXX0=