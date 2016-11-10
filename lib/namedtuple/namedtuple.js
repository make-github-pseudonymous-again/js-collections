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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uYW1lZHR1cGxlL25hbWVkdHVwbGUuanMiXSwibmFtZXMiOlsiX25hbWVkdHVwbGUiLCJOYW1lZFR1cGxlIiwibmFtZWR0dXBsZSIsInR5cGVuYW1lIiwiZmllbGRfbmFtZXMiLCJmaWVsZHMiLCJkZWZpbml0aW9uIiwiam9pbiIsImZpZWxkbGlzdCIsIm1hcCIsImZpZWxkIiwibGVuZ3RoIiwiaSIsImV2YWwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxXLEdBQUFBLFc7Ozs7QUFBVCxTQUFTQSxXQUFULENBQXVCQyxVQUF2QixFQUFvQzs7QUFFMUMsS0FBTUMsYUFBYSxTQUFiQSxVQUFhLENBQVdDLFFBQVgsRUFBc0JDLFdBQXRCLEVBQW9DOztBQUV0RCxNQUFNQyxzQ0FBY0QsV0FBZCxFQUFOOztBQUVBLE1BQUlFLGFBQWEsNkJBQTZCSCxRQUE3QixHQUF3QyxlQUF6RDs7QUFFQUcsZ0JBQWMsTUFBTUQsT0FBT0UsSUFBUCxDQUFhLEtBQWIsQ0FBcEI7O0FBRUFELGdCQUFjLElBQWQ7QUFDQUEsZ0JBQWMsUUFBZDs7QUFFQSxNQUFJRSxZQUFZSCxPQUFPSSxHQUFQLENBQVk7QUFBQSxVQUFTLE1BQU1DLEtBQU4sR0FBYyxJQUF2QjtBQUFBLEdBQVosQ0FBaEI7O0FBRUFKLGdCQUFjLE9BQU8sbUJBQVAsR0FBNkJFLFVBQVVELElBQVYsQ0FBZ0IsSUFBaEIsQ0FBN0IsR0FBc0QsT0FBcEU7QUFDQUQsZ0JBQWMsT0FBTyxnQkFBUCxHQUEwQkQsT0FBT00sTUFBakMsR0FBMEMsTUFBeEQ7O0FBRUEsT0FBTSxJQUFJQyxJQUFJLENBQWQsRUFBa0JBLElBQUlQLE9BQU9NLE1BQTdCLEVBQXNDLEVBQUVDLENBQXhDLEVBQTRDOztBQUUzQyxPQUFJRixRQUFRTCxPQUFPTyxDQUFQLENBQVo7O0FBRUFOLGlCQUFjLElBQWQ7QUFDQUEsaUJBQWMsT0FBTyxPQUFQLEdBQWlCTSxDQUFqQixHQUFxQixXQUFyQixHQUFtQ0YsS0FBbkMsR0FBMkMsS0FBM0MsR0FBbURBLEtBQW5ELEdBQTJELElBQXpFO0FBRUE7O0FBRURKLGdCQUFjLFdBQWQ7O0FBRUFBLGdCQUFjSCxXQUFXLHNDQUF6QjtBQUNBRyxnQkFBY0gsV0FBVyxvQ0FBekI7QUFDQUcsZ0JBQWMsT0FBTywwQkFBUCxHQUFvQ0gsUUFBcEMsR0FBK0MsbUJBQTdEO0FBQ0FHLGdCQUFjLFNBQWQ7QUFDQUEsZ0JBQWNILFdBQVcsNkNBQXpCO0FBQ0FHLGdCQUFjLE9BQU8sNkJBQVAsR0FBdUNILFFBQXZDLEdBQWtELHNCQUFoRTtBQUNBRyxnQkFBYyxTQUFkO0FBQ0FBLGdCQUFjSCxXQUFXLHVDQUF6QjtBQUNBRyxnQkFBYyxPQUFPLHNDQUFyQjtBQUNBQSxnQkFBYyxTQUFkOztBQUVBQSxnQkFBYyxZQUFZSCxRQUFaLEdBQXVCLGNBQXJDOztBQUVBLFNBQU9VLEtBQU1QLFVBQU4sQ0FBUDtBQUVBLEVBMUNEOztBQTRDQSxRQUFPSixVQUFQO0FBRUEiLCJmaWxlIjoibmFtZWR0dXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9uYW1lZHR1cGxlICggTmFtZWRUdXBsZSApIHtcblxuXHRjb25zdCBuYW1lZHR1cGxlID0gZnVuY3Rpb24gKCB0eXBlbmFtZSAsIGZpZWxkX25hbWVzICkge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gWyAuLi5maWVsZF9uYW1lcyBdIDtcblxuXHRcdGxldCBkZWZpbml0aW9uID0gXCIoIGZ1bmN0aW9uICggKSB7XFxuXFxudmFyIFwiICsgdHlwZW5hbWUgKyBcIiA9IGZ1bmN0aW9uIChcIiA7XG5cblx0XHRkZWZpbml0aW9uICs9IFwiIFwiICsgZmllbGRzLmpvaW4oIFwiICwgXCIgKSA7XG5cblx0XHRkZWZpbml0aW9uICs9IFwiIClcIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIiB7XFxuXFxuXCIgO1xuXG5cdFx0bGV0IGZpZWxkbGlzdCA9IGZpZWxkcy5tYXAoIGZpZWxkID0+ICdcIicgKyBmaWVsZCArICdcIiAnICkgO1xuXG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJ0aGlzLl9maWVsZHMgPSBbIFwiICsgZmllbGRsaXN0LmpvaW4oIFwiLCBcIiApICsgXCJdIDtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJ0aGlzLmxlbmd0aCA9IFwiICsgZmllbGRzLmxlbmd0aCArIFwiIDtcXG5cIiA7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZmllbGRzLmxlbmd0aCA7ICsraSApIHtcblxuXHRcdFx0bGV0IGZpZWxkID0gZmllbGRzW2ldIDtcblxuXHRcdFx0ZGVmaW5pdGlvbiArPSBcIlxcblwiIDtcblx0XHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwidGhpc1tcIiArIGkgKyBcIl0gPSB0aGlzLlwiICsgZmllbGQgKyBcIiA9IFwiICsgZmllbGQgKyBcIiA7XCIgO1xuXG5cdFx0fVxuXG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcbn0gO1xcblxcblwiIDtcblxuXHRcdGRlZmluaXRpb24gKz0gdHlwZW5hbWUgKyBcIi5wcm90b3R5cGUgPSBuZXcgTmFtZWRUdXBsZSggKSA7XFxuXFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gdHlwZW5hbWUgKyBcIi5fbWFrZSA9IGZ1bmN0aW9uICggaXRlcmFibGUgKSB7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwicmV0dXJuIE5hbWVkVHVwbGUubWFrZSggXCIgKyB0eXBlbmFtZSArIFwiICwgaXRlcmFibGUgKSA7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJ9IDtcXG5cXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSB0eXBlbmFtZSArIFwiLnByb3RvdHlwZS5fcmVwbGFjZSA9IGZ1bmN0aW9uICggZGljdCApIHtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJyZXR1cm4gTmFtZWRUdXBsZS5yZXBsYWNlKCBcIiArIHR5cGVuYW1lICsgXCIgLCB0aGlzICwgZGljdCApIDtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIn0gO1xcblxcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IHR5cGVuYW1lICsgXCIucHJvdG90eXBlLl9hc2RpY3QgPSBmdW5jdGlvbiAoICkge1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInJldHVybiBOYW1lZFR1cGxlLmFzZGljdCggdGhpcyApIDtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIn0gO1xcblxcblwiIDtcblxuXHRcdGRlZmluaXRpb24gKz0gXCJyZXR1cm4gXCIgKyB0eXBlbmFtZSArIFwiIDtcXG5cXG59ICkoIClcIiA7XG5cblx0XHRyZXR1cm4gZXZhbCggZGVmaW5pdGlvbiApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gbmFtZWR0dXBsZSA7XG5cbn1cbiJdfQ==