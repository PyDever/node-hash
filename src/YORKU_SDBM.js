
/*
SDBM Algorithm (Open-source SDBM Project)

(Implemented in C by York University's CS Department)
*/
var yorku_sdbm = function (str) {
	var h = 0;
	for (var i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = sptr + (h << 6) + (h << 16) - h;
	}
	return (h & 0xffffffffff).toString(16);
}

