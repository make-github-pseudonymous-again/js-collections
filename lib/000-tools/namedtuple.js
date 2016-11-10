"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._namedtuple = _namedtuple;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _namedtuple(NamedTuple) {

	var namedtuple = function namedtuple(typename, field_names) {

		var fields = [].concat(_toConsumableArray(field_names));

		var definition = "( function ( ) {\n\nvar " + typename + " = function (";

		definition += " " + fields.join(" , ");

		definition += " )";
		definition += " {\n\n";

		var fieldlist = fields.map(function (field) {
			return '"' + field + '" ';
		});

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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wMDAtdG9vbHMvbmFtZWR0dXBsZS5qcyJdLCJuYW1lcyI6WyJfbmFtZWR0dXBsZSIsIk5hbWVkVHVwbGUiLCJuYW1lZHR1cGxlIiwidHlwZW5hbWUiLCJmaWVsZF9uYW1lcyIsImZpZWxkcyIsImRlZmluaXRpb24iLCJqb2luIiwiZmllbGRsaXN0IiwibWFwIiwiZmllbGQiLCJsZW5ndGgiLCJpIiwiZXZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLFcsR0FBQUEsVzs7OztBQUFULFNBQVNBLFdBQVQsQ0FBdUJDLFVBQXZCLEVBQW9DOztBQUUxQyxLQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBV0MsUUFBWCxFQUFzQkMsV0FBdEIsRUFBb0M7O0FBRXRELE1BQU1DLHNDQUFjRCxXQUFkLEVBQU47O0FBRUEsTUFBSUUsYUFBYSw2QkFBNkJILFFBQTdCLEdBQXdDLGVBQXpEOztBQUVBRyxnQkFBYyxNQUFNRCxPQUFPRSxJQUFQLENBQWEsS0FBYixDQUFwQjs7QUFFQUQsZ0JBQWMsSUFBZDtBQUNBQSxnQkFBYyxRQUFkOztBQUVBLE1BQUlFLFlBQVlILE9BQU9JLEdBQVAsQ0FBWTtBQUFBLFVBQVMsTUFBTUMsS0FBTixHQUFjLElBQXZCO0FBQUEsR0FBWixDQUFoQjs7QUFFQUosZ0JBQWMsT0FBTyxtQkFBUCxHQUE2QkUsVUFBVUQsSUFBVixDQUFnQixJQUFoQixDQUE3QixHQUFzRCxPQUFwRTtBQUNBRCxnQkFBYyxPQUFPLGdCQUFQLEdBQTBCRCxPQUFPTSxNQUFqQyxHQUEwQyxNQUF4RDs7QUFFQSxPQUFNLElBQUlDLElBQUksQ0FBZCxFQUFrQkEsSUFBSVAsT0FBT00sTUFBN0IsRUFBc0MsRUFBRUMsQ0FBeEMsRUFBNEM7O0FBRTNDLE9BQUlGLFFBQVFMLE9BQU9PLENBQVAsQ0FBWjs7QUFFQU4saUJBQWMsSUFBZDtBQUNBQSxpQkFBYyxPQUFPLE9BQVAsR0FBaUJNLENBQWpCLEdBQXFCLFdBQXJCLEdBQW1DRixLQUFuQyxHQUEyQyxLQUEzQyxHQUFtREEsS0FBbkQsR0FBMkQsSUFBekU7QUFFQTs7QUFFREosZ0JBQWMsV0FBZDs7QUFFQUEsZ0JBQWNILFdBQVcsc0NBQXpCO0FBQ0FHLGdCQUFjSCxXQUFXLG9DQUF6QjtBQUNBRyxnQkFBYyxPQUFPLDBCQUFQLEdBQW9DSCxRQUFwQyxHQUErQyxtQkFBN0Q7QUFDQUcsZ0JBQWMsU0FBZDtBQUNBQSxnQkFBY0gsV0FBVyw2Q0FBekI7QUFDQUcsZ0JBQWMsT0FBTyw2QkFBUCxHQUF1Q0gsUUFBdkMsR0FBa0Qsc0JBQWhFO0FBQ0FHLGdCQUFjLFNBQWQ7QUFDQUEsZ0JBQWNILFdBQVcsdUNBQXpCO0FBQ0FHLGdCQUFjLE9BQU8sc0NBQXJCO0FBQ0FBLGdCQUFjLFNBQWQ7O0FBRUFBLGdCQUFjLFlBQVlILFFBQVosR0FBdUIsY0FBckM7O0FBRUEsU0FBT1UsS0FBTVAsVUFBTixDQUFQO0FBRUEsRUExQ0Q7O0FBNENBLFFBQU9KLFVBQVA7QUFFQSIsImZpbGUiOiJuYW1lZHR1cGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX25hbWVkdHVwbGUgKCBOYW1lZFR1cGxlICkge1xuXG5cdGNvbnN0IG5hbWVkdHVwbGUgPSBmdW5jdGlvbiAoIHR5cGVuYW1lICwgZmllbGRfbmFtZXMgKSB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSBbIC4uLmZpZWxkX25hbWVzIF0gO1xuXG5cdFx0bGV0IGRlZmluaXRpb24gPSBcIiggZnVuY3Rpb24gKCApIHtcXG5cXG52YXIgXCIgKyB0eXBlbmFtZSArIFwiID0gZnVuY3Rpb24gKFwiIDtcblxuXHRcdGRlZmluaXRpb24gKz0gXCIgXCIgKyBmaWVsZHMuam9pbiggXCIgLCBcIiApIDtcblxuXHRcdGRlZmluaXRpb24gKz0gXCIgKVwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwiIHtcXG5cXG5cIiA7XG5cblx0XHRsZXQgZmllbGRsaXN0ID0gZmllbGRzLm1hcCggZmllbGQgPT4gJ1wiJyArIGZpZWxkICsgJ1wiICcgKSA7XG5cblx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInRoaXMuX2ZpZWxkcyA9IFsgXCIgKyBmaWVsZGxpc3Quam9pbiggXCIsIFwiICkgKyBcIl0gO1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInRoaXMubGVuZ3RoID0gXCIgKyBmaWVsZHMubGVuZ3RoICsgXCIgO1xcblwiIDtcblxuXHRcdGZvciAoIGxldCBpID0gMCA7IGkgPCBmaWVsZHMubGVuZ3RoIDsgKytpICkge1xuXG5cdFx0XHRsZXQgZmllbGQgPSBmaWVsZHNbaV0gO1xuXG5cdFx0XHRkZWZpbml0aW9uICs9IFwiXFxuXCIgO1xuXHRcdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJ0aGlzW1wiICsgaSArIFwiXSA9IHRoaXMuXCIgKyBmaWVsZCArIFwiID0gXCIgKyBmaWVsZCArIFwiIDtcIiA7XG5cblx0XHR9XG5cblx0XHRkZWZpbml0aW9uICs9IFwiXFxufSA7XFxuXFxuXCIgO1xuXG5cdFx0ZGVmaW5pdGlvbiArPSB0eXBlbmFtZSArIFwiLnByb3RvdHlwZSA9IG5ldyBOYW1lZFR1cGxlKCApIDtcXG5cXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSB0eXBlbmFtZSArIFwiLl9tYWtlID0gZnVuY3Rpb24gKCBpdGVyYWJsZSApIHtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJyZXR1cm4gTmFtZWRUdXBsZS5tYWtlKCBcIiArIHR5cGVuYW1lICsgXCIgLCBpdGVyYWJsZSApIDtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIn0gO1xcblxcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IHR5cGVuYW1lICsgXCIucHJvdG90eXBlLl9yZXBsYWNlID0gZnVuY3Rpb24gKCBkaWN0ICkge1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInJldHVybiBOYW1lZFR1cGxlLnJlcGxhY2UoIFwiICsgdHlwZW5hbWUgKyBcIiAsIHRoaXMgLCBkaWN0ICkgO1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwifSA7XFxuXFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gdHlwZW5hbWUgKyBcIi5wcm90b3R5cGUuX2FzZGljdCA9IGZ1bmN0aW9uICggKSB7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwicmV0dXJuIE5hbWVkVHVwbGUuYXNkaWN0KCB0aGlzICkgO1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwifSA7XFxuXFxuXCIgO1xuXG5cdFx0ZGVmaW5pdGlvbiArPSBcInJldHVybiBcIiArIHR5cGVuYW1lICsgXCIgO1xcblxcbn0gKSggKVwiIDtcblxuXHRcdHJldHVybiBldmFsKCBkZWZpbml0aW9uICkgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBuYW1lZHR1cGxlIDtcblxufVxuIl19